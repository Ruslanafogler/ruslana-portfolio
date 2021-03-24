import React from "react";
import Arrow from "./Arrow";
export default function HeadingBanner() {
  return (
    <div className="headingContainer">
      <div className="headingImageContainer">
        <img
          className="headingImage"
          alt="Vector Art From Undraw"
          src={require("../assets/images/working.svg")}
        />
      </div>
      <div className="header">Hi! I'm Ruslana</div>
      <div className="subHeader">student | developer | robotics fanatic</div>
      <Arrow location="projects" />
    </div>
  );
}
