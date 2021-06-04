import React from "react";
import Sketch from "react-p5";
import namer from "color-namer-sdk";
import rgbHex from "rgb-hex";
import getPixels from "get-pixels";
import { useLocation, useParams } from "react-router-dom";

function AnalyzeImg() {
  let x;
  let y;
  let img;
  let imgURL = decodeURIComponent(useParams().imgURL);
  let imgPixels;
  let imgW;
  let imgH;
  let PixD;
  let posX;
  let posY;

  let results = useLocation().state.results;

  getPixels(imgURL, function (err, pixels) {
    if (err) {
      console.log("Bad image path");
      return;
    }
    imgPixels = pixels;
    imgW = pixels.shape[0];
    imgH = pixels.shape[1];
    PixD = pixels.shape[2];
    console.log("got pixels", pixels);
  });

  const preload = (p5) => {
    p5.loadImage(imgURL, (image) => {
      img = image;
    });
  };

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    // console.log(img);
    // console.log(canvasParentRef);
    x = p5.mouseX;
    y = p5.mouseY;

    p5.createCanvas(0.9 * window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5) => {
    p5.background("rgba(0,0,0,1)");
    p5.image(img, 0, 0);
    img.resize(0.9 * window.innerWidth, window.innerHeight);

    for (let i = 0; i < results.length; i++) {
      let object = results[i];
      p5.stroke(0, 255, 0);
      p5.strokeWeight(4);
      p5.noFill();
      p5.rect(
        img.width * object.normalized.x,
        img.height * object.normalized.y,
        img.width * object.normalized.width,
        img.height * object.normalized.height
      );
      p5.noStroke();
      p5.fill(255);
      p5.textSize(24);
      p5.text(
        object.label,
        img.width * object.normalized.x + 10,
        img.height * object.normalized.y + 24
      );
    }

    if (y !== p5.mouseY || x !== p5.mouseX) {
      x = p5.mouseX;
      y = p5.mouseY;
      let flag = false;
      for (let i = 0; i < results.length; i++) {
        if (
          x > img.width * results[i].normalized.x &&
          x <
            img.width *
              (results[i].normalized.x + results[i].normalized.width) &&
          y > img.height * results[i].normalized.y &&
          y <
            img.height *
              (results[i].normalized.y + results[i].normalized.height)
        ) {
          if (flag) {
            let areaFlag = flag.normalized.width * flag.normalized.height;
            let areaRes =
              results[i].normalized.width * results[i].normalized.height;
            flag = areaFlag > areaRes ? results[i] : flag;
          } else {
            flag = results[i];
          }
        }
      }

      if (flag) {
        let utterance = new SpeechSynthesisUtterance(flag.label);
        speechSynthesis.speak(utterance);
      } else {
        speechSynthesis.cancel();
      }
    }
    p5.ellipse(x, y, 30, 30);
  };

  const mouseClicked = (p5) => {
    if (!imgPixels) {
      return;
    }
    posX = Math.round((p5.mouseX * imgW) / img.width);
    posY = Math.round((p5.mouseY * imgH) / img.height);
    console.log("Pixel Info", posX, posY);

    let i = PixD * (posY * imgW + posX);
    console.log("RGB Colour", [
      imgPixels.data[i],
      imgPixels.data[i + 1],
      imgPixels.data[i + 2],
    ]);

    let hexColor = rgbHex(
      imgPixels.data[i],
      imgPixels.data[i + 1],
      imgPixels.data[i + 2]
    );

    let colorName = namer(hexColor);

    console.log("Colour names", colorName);
    let utterance = new SpeechSynthesisUtterance(
      "color " + colorName.html[0].name
    );
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="container-fluid">
        <h2>Image Analysis</h2>
        <Sketch
          preload={preload}
          setup={setup}
          draw={draw}
          mouseClicked={mouseClicked}
        />
      </div>
    </>
  );
}

export default AnalyzeImg;
