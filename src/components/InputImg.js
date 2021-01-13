import React, { useState } from "react";

function InputImg() {
  const [imgURL, setImgURL] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setImg(imgURL);
    console.log(imgURL);
  };

  if (img) {
    return (
      <>
        <article>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="imgURL">Image URL : </label>
              <input
                type="text"
                id="imgURL"
                name="imgURL"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              View Image
            </button>
          </form>
        </article>
        <img src={img} alt="target img" />
      </>
    );
  } else {
    return (
      <>
        <article>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="imgURL">Image URL : </label>
              <input
                type="text"
                id="imgURL"
                name="imgURL"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
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
