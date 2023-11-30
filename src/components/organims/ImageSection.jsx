
import React from "react";
import ImagesCard from "../molecules/ImagesCard";

import arrow1 from '../../assets/imagenes/arrow1.jpg';
import trono1 from '../../assets/imagenes/trono1.jpg';
import vampiros1 from '../../assets/imagenes/vampiros1.jpg';

function ImageSection() {
  return (
    <section className="imagenes-linea">
      <ImagesCard src={arrow1} />
      <ImagesCard src={trono1} />
      <ImagesCard src={vampiros1} />
    </section>
  );
}

export default ImageSection;






