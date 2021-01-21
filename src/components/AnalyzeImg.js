import React from "react";
import Sketch from "react-p5";
import { useLocation, useParams } from "react-router-dom";

function AnalyzeImg() {
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
