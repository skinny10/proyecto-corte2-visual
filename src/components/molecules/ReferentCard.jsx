import React from "react";

function ReferentCard({ src, name, subtitle }) {
  return (
    <div className="card">
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default ReferentCard;
