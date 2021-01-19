import React, { useState } from "react";

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
          <p>Image Upload : </p>
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
              View Image
            </button>
          </form>
        </article>
        <img src={img.file} alt="Not Found" style={{ width: "100%" }} />
        <button className="btn">Analyze</button>
      </>
    );
  } else {
    return (
      <>
        <article>
          <p>Image Upload : </p>
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
              View Image
            </button>
          </form>
        </article>
      </>
    );
  }
}

export default InputImg;
