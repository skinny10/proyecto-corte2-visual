import React from "react";

function ImagesCard({ src }) {
  return (
    <div>
      <img src={src} height="400" width="600" alt="Imagen" />
    </div>
  );
}

export default ImagesCard;
