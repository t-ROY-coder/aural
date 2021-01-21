import React from "react";
import { Link } from "react-router-dom";
import IntroSection from "./IntroSection";

function Intro() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Link to="/inputImg">
              <IntroSection
                title="Image Analysis"
                url="https://cdn2.iconfinder.com/data/icons/photo-and-video/500/Landscape_moon_mountains_multiple_photo_photograph_pictury_sun_gallery_image_palm_tree-512.png"
              />
            </Link>
          </div>
          <div className="col">
            <IntroSection
              title="Graph Analysis"
              url="https://www.creativefabrica.com/wp-content/uploads/2019/12/16/business-profit-graph-line-art-vector-Graphics-1-1-580x386.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
