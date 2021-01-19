import React from "react";
import AnalyzeImg from "./components/AnalyzeImg";
import DetectImgObj from "./components/DetectImgObj";
import Footer from "./components/Footer";
import InputImg from "./components/InputImg";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      {/* <Intro /> */}
      <div className="container" style={{ minHeight: "100vh" }}>
        <InputImg />
      </div>
      {/* <DetectImgObj /> */}
      {/* <AnalyzeImg /> */}
      <Footer />
    </>
  );
}

export default App;
