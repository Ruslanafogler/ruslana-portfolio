import React from "react";

export default function PhotoBubble({ img, className }) {
  return (
    <div className="photoBubble">
      <img src={img} className={className} alt={className} />
    </div>
  );
}
