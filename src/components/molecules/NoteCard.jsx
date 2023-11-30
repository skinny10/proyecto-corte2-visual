import React from "react";

function NoteCard({  name, subtitle }) {
  return (
    <div className="Notecard">
      <h3>{name}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default NoteCard;