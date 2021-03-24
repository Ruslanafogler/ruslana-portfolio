import React from "react";

export default function Button({ text, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}
