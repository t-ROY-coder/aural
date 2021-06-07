import React from "react";
import { Link } from "react-router-dom";
import IntroSection from "./IntroSection";
import imgAnalysis from "../assets/imgAnalysis.png";
import grphAnalysis from "../assets/grphAnalysis.png";

function Intro() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Link to="/inputImg">
              <IntroSection title="Image Analysis" url={imgAnalysis} />
            </Link>
          </div>
          <div className="col">
            <Link to="/InputGraph">
              <IntroSection title="Graph Analysis" url={grphAnalysis} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
