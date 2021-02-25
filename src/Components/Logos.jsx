import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Logos() {
  const iconColor = "#707070";
  const iconSize = "2x";

  return (
    <ul>
      <li className="bottomLogo">
        <FontAwesomeIcon icon={faGithub} size={iconSize} color={iconColor} />
      </li>
      <li className="bottomLogo">
        <FontAwesomeIcon icon={faInstagram} size={iconSize} color={iconColor} />
      </li>
      <li className="bottomLogo">
        <FontAwesomeIcon icon={faEnvelope} size={iconSize} color={iconColor} />
      </li>
    </ul>
  );
}
