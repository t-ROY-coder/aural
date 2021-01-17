import React from "react";
import Sketch from "react-p5";

function AnalyzeImg() {
  let x = 50;
  let y = 50;
  let img;

  const preload = (p5) => {
    p5.loadImage(
      "https://ourauckland.aucklandcouncil.govt.nz/media/34802/high-st-image.jpg",
      (image) => {
        img = image;
      }
    );
  };

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    console.log(img);
    p5.createCanvas(img.width, img.height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.image(img, 0, 0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
    y++;
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
}

export default AnalyzeImg;
