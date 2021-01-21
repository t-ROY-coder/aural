import React from "react";

function IntroSection(props) {
  return (
    <div
      className="product"
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={props.url} alt="target" />
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default IntroSection;
