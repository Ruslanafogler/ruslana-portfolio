import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navContainer">
      <ul className="nav">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mainName"
          >
            Ruslana Fogler
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
