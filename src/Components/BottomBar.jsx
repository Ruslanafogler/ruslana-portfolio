import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function BottomBar() {
  const iconColor = "#707070";
  const iconSize = "2x";

  return (
    <footer id="contact">
      <ul className="bottomList">
        <li className="bottomText">All custom coded by Ruslana Fogler</li>
        <li className="bottomLogo">
          <FontAwesomeIcon icon={faGithub} size={iconSize} color={iconColor} />
        </li>
        <li className="bottomLogo">
          <FontAwesomeIcon
            icon={faInstagram}
            size={iconSize}
            color={iconColor}
          />
        </li>
        <li className="bottomLogo">
          <FontAwesomeIcon
            icon={faEnvelope}
            size={iconSize}
            color={iconColor}
          />
        </li>
      </ul>
    </footer>
  );
}
