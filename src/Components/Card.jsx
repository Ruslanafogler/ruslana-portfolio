import React from "react";

export default function Card({ name, des, title, img, link, internalLink }) {
  return (
    <a
      href={internalLink ? internalLink : link}
      target={internalLink ? "" : "_blank"}
      className="card"
    >
      <div className="cardContent">
        {img ? (
          <div className="cardImgContainer">
            <img className="cardImg" src={img} id={name} />
          </div>
        ) : null}

        <div className="cardText">
          <h2 className="cardTitle">{title}</h2>
          <hr className="titleLine" />
          <p className="cardDescription">{des}</p>
        </div>
      </div>
    </a>
  );
}
