import React from "react";
import PhotoBubble from "./PhotoBubble";
export default function About() {
  return (
    <div className="aboutContainer" id="about">
      <PhotoBubble
        img={require("../assets/images/me_sunset.jpeg")}
        className="ruslanaPic"
      />
      <div className="textBlurb">
        <div className="subHeaderAbout">
          my name is <div className="specialHeader">ruslana fogler</div>
        </div>
        <div className="subHeaderPara">
          I'm a senior in high school who's very passionate about innovation and
          robotics. I'm always searching for new projects and ways to become
          even more proficient in technology. When I'm not coding, I'm probably
          on the piano, playing tennis, browsing K-pop videos, or chatting with
          my friends. If you're curious about my work or want to contact me for
          an internship, I'm all ears!
        </div>
      </div>
    </div>
  );
}
