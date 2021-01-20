import React, { useState } from "react";
import { Link } from "react-router-dom";
import DetectImgObj from "./DetectImgObj";

function InputImg() {
  const [imgURL, setImgURL] = useState(null);
  const [img, setImg] = useState({ file: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setImg({ file: URL.createObjectURL(imgURL) });
  };

  if (img.file) {
    return (
      <>
        <article>
          <h3>Image Upload : </h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => {
                  setImgURL(e.target.files[0]);
                  setImg({ file: null });
                }}
              />
            </div>
            <button className="btn" type="submit">
              Detect Objects
            </button>
          </form>
        </article>
        {/* <img src={img.file} alt="Not Found" style={{ width: "100%" }} /> */}
        <DetectImgObj image={img} />
        <Link
          to={"/analyzeImg/" + encodeURIComponent(img.file)}
          className="btn"
        >
          Analyze
        </Link>
      </>
    );
  } else {
    return (
      <>
        <article>
          <h3>Image Upload : </h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => {
                  setImgURL(e.target.files[0]);
                }}
              />
            </div>
            <button className="btn" type="submit">
              Detect Objects
            </button>
          </form>
        </article>
      </>
    );
  }
}

export default InputImg;
