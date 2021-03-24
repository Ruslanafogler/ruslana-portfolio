import React from "react";

export default function TitleCard({ img, title, tags, name }) {
  return (
    <div className="titleCardWrapper">
      <div className="crop">
        <img className={`${name}Img`} src={img} id={img} alt={name} />
      </div>
      <div className="titleCardText">
        <h1 className="titleCardTitle">{title}</h1>
        <p className="titleCardTags">{tags}</p>
      </div>
    </div>
  );
}
