import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ home }) {
  const onClick = () => {
    console.log("clicked");
    let path = `/home`;
    window.location.href = path;
  };

  return (
    <div className="navContainer">
      <ul className="nav">
        <li>
          <Link
            onClick={home === false ? onClick : null}
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
            onClick={home === false ? onClick : null}
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
            onClick={home === false ? onClick : null}
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
            onClick={home === false ? onClick : null}
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
