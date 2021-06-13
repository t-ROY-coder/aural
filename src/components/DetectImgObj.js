import React, { useEffect, useState } from "react";
import * as ml5 from "ml5";
import { Link } from "react-router-dom";

// import street from "../assets/cdc.jpg";
// let street = "https://ourauckland.aucklandcouncil.govt.nz/media/34802/high-st-image.jpg";

function DetectImgObj(props) {
  const [pred, setPred] = useState(null);

  useEffect(() => {
    const image = document.getElementById("image");
    const classifier = ml5.objectDetector("cocossd", modelLoaded);

    function modelLoaded() {
      console.log("Model Loaded!");
    }

    classifier
      .detect(image, function (err, results) {
        if (err) {
          console.error(err);
        }
        console.log(results);
        return results;
      })
      .then((results) => {
        setPred(results);
      });
  }, []);

  if (pred) {
    if (pred.length === 0) {
      return (
        <>
          <div className="container">
            <h3>Detecting Objects</h3>
            <img
              src={props.image.file}
              id="image"
              width="100%"
              alt=""
              crossOrigin="anonymous"
            />
          </div>
          <div className="container">
            <h4>No Objects Detected! Please try a different Image.</h4>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="container">
          <h3>Detecting Objects</h3>
          <img
            src={props.image.file}
            id="image"
            width="100%"
            alt=""
            crossOrigin="anonymous"
          />
        </div>
        <div className="container">
          <h4>Objects Detected: </h4>
          {pred.map((prediction, i) => {
            let confidence =
              Math.floor(prediction.confidence * 10000) / 100 + "%";
            return (
              <div className="item" key={i}>
                <p>
                  {i + 1}. {prediction.label}: {confidence}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          to={{
            pathname: "/analyzeImg/" + encodeURIComponent(props.image.file),
            state: { results: pred },
          }}
          className="btn"
        >
          Analyze
        </Link>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <h3>Detecting Objects</h3>
          <img src={props.image.file} id="image" width="100%" alt="" />
        </div>
        <div className="loader"></div>
      </>
    );
  }
}

export default DetectImgObj;
