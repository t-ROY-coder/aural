import React, { useState } from "react";
import { Link } from "react-router-dom";

function InputGraph() {
  const [coeff, setCoeff] = useState({
    x0: 0,
    x1: 0,
    x2: 0,
    xParam: "X",
    yParam: "Y",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article>
        <h3>Parameters & Coefficients</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Y-Axis : </label>
            <input
              type="text"
              id="yParam"
              name="yParam"
              placeholder="Y"
              onChange={(e) => {
                if (e.target.value) {
                  setCoeff({
                    x0: coeff.x0,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: e.target.value,
                  });
                } else {
                  setCoeff({
                    x0: coeff.x0,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: "Y",
                  });
                }
              }}
            />
          </div>
          <div className="form-control">
            <label>X-Axis : </label>
            <input
              type="text"
              id="xParam"
              name="xParam"
              placeholder="X"
              onChange={(e) => {
                if (e.target.value) {
                  setCoeff({
                    x0: coeff.x0,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: e.target.value,
                    yParam: coeff.yParam,
                  });
                } else {
                  setCoeff({
                    x0: coeff.x0,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: "X",
                    yParam: coeff.yParam,
                  });
                }
              }}
            />
          </div>
          <div className="form-control">
            <label>
              x<sup>0</sup> :{" "}
            </label>
            <input
              type="number"
              id="x0"
              name="x0"
              placeholder="0"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({
                    x0: e.target.value,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
                else
                  setCoeff({
                    x0: 0,
                    x1: coeff.x1,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
              }}
            />
          </div>
          <div className="form-control">
            <label>
              x<sup>1</sup> :{" "}
            </label>
            <input
              type="number"
              id="x1"
              name="x1"
              placeholder="0"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({
                    x1: e.target.value,
                    x0: coeff.x0,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
                else
                  setCoeff({
                    x0: coeff.x1,
                    x1: 0,
                    x2: coeff.x2,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
              }}
            />
          </div>
          <div className="form-control">
            <label>
              x<sup>2</sup> :{" "}
            </label>
            <input
              type="number"
              id="x2"
              name="x2"
              placeholder="0"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({
                    x2: e.target.value,
                    x1: coeff.x1,
                    x0: coeff.x0,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
                else
                  setCoeff({
                    x0: coeff.x0,
                    x1: coeff.x1,
                    x2: 0,
                    xParam: coeff.xParam,
                    yParam: coeff.yParam,
                  });
              }}
            />
          </div>
          <Link
            to={{
              pathname: "/AnalyzeGraph",
              state: coeff,
            }}
            className="btn"
          >
            Analyze Graph
          </Link>
        </form>
        <h4>
          Graph of {coeff.yParam} vs {coeff.xParam}
        </h4>
        <p>
          Equation: {coeff.x2} x<sup>2</sup> + {coeff.x1} x + {coeff.x0}
        </p>
      </article>
    </>
  );
}

export default InputGraph;
