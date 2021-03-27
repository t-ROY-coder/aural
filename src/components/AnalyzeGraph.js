import React from "react";
import Sketch from "react-p5";
import * as Tone from "tone";
import { useLocation, useParams } from "react-router-dom";

function AnalyzeGraph() {
  let x;
  let y;
  let w;
  let h;
  let numPts = 100;
  let Xcoord = [];
  let Ycoord = [];

  let coeff = [1, 1];
  let resolution = 5;

  const setup = (p5, canvasParentRef) => {
    x = p5.mouseX;
    y = p5.mouseY;
    w = 0.9 * window.innerWidth;
    h = window.innerHeight;

    for (let i = 0; i < resolution * 10; i++) {
      let step = w / (resolution * 10);
      let pt = i * step;
      Xcoord.push(pt);

      let Ypt = 0;
      for (let j = 0; j < coeff.length; j++) {
        Ypt += Math.pow(i, coeff.length - 1 - j) * coeff[j] * step;
      }
      Ycoord.push(h - Ypt);
    }

    p5.createCanvas(w, h).parent(canvasParentRef);
  };

  const mouseClicked = (p5) => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "16n", now);
    synth.triggerAttackRelease("G4", "8n", now + 0.25);

    console.log(p5.mouseX, p5.mouseY);
    console.log(p5);
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
    }
  };
  return (
    <>
      <div className="container-fluid">
        <h2>Graph Analysis</h2>
        <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />
      </div>
    </>
  );
}

export default AnalyzeGraph;
