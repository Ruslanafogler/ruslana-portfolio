import React from "react";
import { Link } from "react-router-dom";
export default function Card({ name, des, title, img, addLink }) {
  return (
    <Link
      to={{
        pathname: `/projects/${name}`,
        projectProps: {
          name: name,
        },
      }}
      className="card"
    >
      <div className="cardContent">
        {img ? (
          <div className="cardImgContainer">
            <img className="cardImg" src={img} id={name} alt={name} />
          </div>
        ) : null}
        <div className="cardText">
          <h2 className="cardTitle">{title}</h2>
          <hr className="titleLine" />
          <p className="cardDescription">{des}</p>
        </div>
      </div>
    </Link>
  );
}
