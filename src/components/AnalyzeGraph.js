import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone";
import { useLocation, useParams } from "react-router-dom";

function AnalyzeGraph() {
  let x;
  let y;
  let w;
  let step;
  let h;
  let numPts = 100;
  let Xcoord = [];
  let Ycoord = [];

  let input = useLocation().state;
  let coeff = [input.x2, input.x1, input.x0];
  let xParam = input.xParam;
  let yParam = input.yParam;

  let gType = "Quadratic";
  if (input.x2 == 0 && input.x1 != 0) {
    gType = "Linear";
  } else if (input.x2 == 0 && input.x1 == 0) {
    gType = "Constant";
  }

  let resolution = 5;

  // const vol = new Tone.Volume(-20).toDestination();
  const source = new Tone.Oscillator().toDestination();

  const setup = (p5, canvasParentRef) => {
    x = p5.mouseX;
    y = p5.mouseY;
    w = 0.9 * window.innerWidth;
    h = window.innerHeight;
    console.log(p5);

    // claculating data points
    for (let i = 0; i < resolution * 10; i++) {
      step = w / (resolution * 10);
      let pt = i * step;
      Xcoord.push(pt);

      let Ypt = 0;
      for (let j = 0; j < coeff.length; j++) {
        Ypt += Math.pow(i, coeff.length - 1 - j) * coeff[j] * step;
      }
      Ycoord.push(h - Ypt);
    }

    p5.createCanvas(w, h).parent(canvasParentRef);

    let utterance = new SpeechSynthesisUtterance(
      "Graph of " + yParam + " vs " + xParam
    );
    speechSynthesis.speak(utterance);

    utterance = new SpeechSynthesisUtterance("The Graph is " + gType);
    speechSynthesis.speak(utterance);
  };

  const keyTyped = (p5) => {
    if (p5.key === "i" && resolution > 1) {
      resolution--;
    }
    if (p5.key === "o" && resolution < 10) {
      resolution++;
    }
    // p5.redraw();
  };

  const draw = (p5) => {
    p5.background(220);
    // grid
    for (var y = 0; y < h; y += w / (resolution * 10)) {
      p5.stroke(0);
      p5.strokeWeight(0.5);
      p5.line(0, y, w, y);
    }
    for (var x = 0; x < w; x += w / (resolution * 10)) {
      p5.stroke(0);
      p5.strokeWeight(0.5);
      p5.line(x, 0, x, h);
    }

    p5.strokeWeight(2);
    // draw lines
    for (let i = 0; i < numPts - 1; i++) {
      p5.line(Xcoord[i], Ycoord[i], Xcoord[i + 1], Ycoord[i + 1]);
    }

    p5.noStroke();
    // draw ellipses
    for (let i = 0; i < numPts; i++) {
      p5.ellipse(Xcoord[i], Ycoord[i], 10);
      // ellipse.mouseOver(prompt);
    }

    p5.ellipse(p5.mouseX, p5.mouseY, 30, 30);
  };

  const prompt = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
  };

  const mouseMoved = (p5) => {
    let posX = p5.mouseX / step;
    let posY = (h - p5.mouseY) / step;
    let val = posX * posX * input.x2 + posX * input.x1 + input.x0;
    if (Math.abs(val - posY) < 1) {
      console.log("tracing");
      if (source.state === "stopped") source.start();
    } else {
      console.log("stopped tracing");
      if (source.state === "started") source.stop();
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h2>Graph Analysis</h2>
        <Sketch
          setup={setup}
          draw={draw}
          keyTyped={keyTyped}
          mouseMoved={mouseMoved}
        />
      </div>
    </>
  );
}

export default AnalyzeGraph;
