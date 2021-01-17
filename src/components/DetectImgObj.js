// import React, { Component } from "react";
// import street from "../assets/street.jpg";
// // Importing ml5.js as ml5
// import * as ml5 from "ml5";

// class AnalyzeImg extends Component {
//   state = {
//     predictions: [], // Set the empty array predictions state
//   };

//   setPredictions = (pred) => {
//     // Set the prediction state with the model predictions
//     this.setState({
//       predictions: pred,
//     });
//   };

//   classifyImg = () => {
//     const classifier = ml5.objectDetector("cocossd", modelLoaded);

//     function modelLoaded() {
//       console.log("Model Loaded!");
//     }

//     const image = document.getElementById("image");

//     classifier
//       .detect(image, function (err, results) {
//         console.log(results);
//         return results;
//       })
//       .then((results) => {
//         // Set the predictions in the state
//         this.setPredictions(results);
//       });
//   };

//   componentDidMount() {
//     // once the component has mount, start the classification
//     this.classifyImg();
//   }

//   render() {
//     // First set the predictions to a default value while loading
//     let predictions = <div className="loader"></div>;
//     // Map over the predictions and return each prediction with probability
//     if (this.state.predictions.length > 0) {
//       predictions = this.state.predictions.map((pred, i) => {
//         let { label, confidence } = pred;
//         // round the probability with 2 decimal
//         confidence = Math.floor(confidence * 10000) / 100 + "%";
//         return (
//           <div key={i + ""}>
//             {i + 1}. Prediction: {label} at {confidence}{" "}
//           </div>
//         );
//       });
//     }

//     return (
//       <>
//         <div className="container">
//           <h2>Object Detection</h2>
//           <img src={street} id="image" width="100%" alt="" />
//         </div>
//         {predictions}
//       </>
//     );
//   }
// }

// export default AnalyzeImg;

import React, { useEffect, useState } from "react";
import street from "../assets/street.jpg";
import * as ml5 from "ml5";

function DetectImgObj() {
  const [pred, setPred] = useState([]);

  useEffect(() => {
    const classifier = ml5.objectDetector("cocossd", modelLoaded);

    function modelLoaded() {
      console.log("Model Loaded!");
    }

    const image = document.getElementById("image");

    classifier
      .detect(image, function (err, results) {
        console.log(results);
        return results;
      })
      .then((results) => {
        setPred(results);
      });
  }, []);

  if (pred.length > 0) {
    return (
      <>
        <div className="container">
          <h2>Object Detection</h2>
          <img src={street} id="image" width="100%" alt="" />
        </div>
        <div className="container">
          <h3>Objects Detected: </h3>
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
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <h2>Object Detection</h2>
          <img src={street} id="image" width="100%" alt="" />
        </div>
        <div className="loader"></div>
      </>
    );
  }
}

export default DetectImgObj;
