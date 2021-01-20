import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AnalyzeImg from "./components/AnalyzeImg";
// import DetectImgObj from "./components/DetectImgObj";
import Footer from "./components/Footer";
import InputImg from "./components/InputImg";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/inputImg">
            <div className="container" style={{ minHeight: "100vh" }}>
              <InputImg />
            </div>
          </Route>
          {/* <DetectImgObj /> */}
          <Route path="/analyzeImg/:imgURL" children={<AnalyzeImg />}></Route>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="*">
            <div className="container">
              <h1>404: Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
