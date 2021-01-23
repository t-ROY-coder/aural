import React from "react";
import Sketch from "react-p5";
import { useLocation, useParams } from "react-router-dom";

function AnalyzeImg() {
  let x;
  let y;
  let img;
  let imgURL = decodeURIComponent(useParams().imgURL);

  let results = useLocation().state.results;

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
      // console.log(p5.mouseX);
      // console.log(p5.mouseY);
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
          // break;
        }
      }

      if (flag) {
        let utterance = new SpeechSynthesisUtterance(flag.label);
        // console.log(flag.label);
        speechSynthesis.speak(utterance);
      } else {
        speechSynthesis.cancel();
      }
    }
    p5.ellipse(x, y, 30, 30);

    // let foo = new p5.Speech(); // speech synthesis object
    // if (p5.mouseX === 0) foo.speak("hi there");

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };

  return (
    <>
      <div className="container-fluid">
        <h2>Object Analysis</h2>
        <Sketch preload={preload} setup={setup} draw={draw} />
      </div>
    </>
  );
}

export default AnalyzeImg;
