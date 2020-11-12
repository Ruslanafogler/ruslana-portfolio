import React from "react";
import projects from "../assets/data/projects";
import Card from "./Card";
export default function Grid() {
  return (
    <div className="grid">
      {projects.map((proj) => (
        <Card
          name={proj.name}
          img={proj.img}
          des={proj.description}
          title={proj.title}
        />
      ))}
    </div>
  );
}
