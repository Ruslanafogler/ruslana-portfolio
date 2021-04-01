import React from "react";

export default function Button({ text, onClick, className = "button" }) {
  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
}
