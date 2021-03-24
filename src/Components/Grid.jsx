import React from "react";
import projects from "../assets/data/projects";
import Card from "./Card";

export default function Grid() {
  // const checkProject = (proj) => {
  //   if (proj.link) {
  //     return null;
  //   }

  //   if (proj.linkwebsimple) {
  //     console.log("simple");
  //     return "/projectsimple";
  //   } else {
  //     console.log("expand");
  //     return "./projectexpand";
  //   }
  // };

  return (
    <div className="grid">
      {projects.map((proj) => (
        <Card
          key={proj.name}
          name={proj.name}
          img={proj.img}
          des={proj.description}
          title={proj.title}
          addLink={proj.link}
        />
      ))}
    </div>
  );
}
