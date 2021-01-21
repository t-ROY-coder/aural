import React from "react";
import Sketch from "react-p5";
import { useParams } from "react-router-dom";

function AnalyzeImg() {
  let x = 50;
  let y = 50;
  let img;
  let imgURL = decodeURIComponent(useParams().imgURL);

  // console.log(imgURL);
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
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
    y++;
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
