import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Arrow({ location }) {
  return (
    <div className="arrowContainer">
      <Link to={location} spy={true} smooth={true} offset={-70} duration={500}>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          color="#9b31ff"
          className="arrow"
        />
      </Link>
    </div>
  );
}
