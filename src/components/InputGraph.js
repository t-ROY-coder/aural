import React, { useState } from "react";
import { Link } from "react-router-dom";

function InputGraph() {
  const [coeff, setCoeff] = useState({ x0: 0, x1: 0, x2: 0 });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article>
        <h3>Input Coefficients</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>x^0 : </label>
            <input
              type="number"
              id="x0"
              name="x0"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({ x0: e.target.value, x1: coeff.x1, x2: coeff.x2 });
                else setCoeff({ x0: 0, x1: coeff.x1, x2: coeff.x2 });
              }}
            />
          </div>
          <div className="form-control">
            <label>x^1 : </label>
            <input
              type="number"
              id="x1"
              name="x1"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({ x1: e.target.value, x0: coeff.x0, x2: coeff.x2 });
                else setCoeff({ x0: coeff.x1, x1: 0, x2: coeff.x2 });
              }}
            />
          </div>
          <div className="form-control">
            <label>x^2 : </label>
            <input
              type="number"
              id="x2"
              name="x2"
              onChange={(e) => {
                if (e.target.value)
                  setCoeff({ x2: e.target.value, x1: coeff.x1, x0: coeff.x0 });
                else setCoeff({ x0: coeff.x0, x1: coeff.x1, x2: 0 });
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
        <p>
          Final Equation: {coeff.x2} x^2 + {coeff.x1} x + {coeff.x0}
        </p>
      </article>
    </>
  );
}

export default InputGraph;
