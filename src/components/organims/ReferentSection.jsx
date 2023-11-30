import React from "react";
import ReferentCard from "../molecules/ReferentCard";

import arrow22 from '../../assets/imagenes/arrow22.jpg';
import vampiros22 from '../../assets/imagenes/vampiros22.jpg';
import the100 from '../../assets/imagenes/the100.jpg';
import trono2 from '../../assets/imagenes/trono2.jpg';


function ReferentSection() {
  return (
    <section className="referentes">
      <ReferentCard src={arrow22} name="ARROW" subtitle="Autor: Greg Berlanti" />
      <ReferentCard src={vampiros22} name="THE VAMPIRES DIARIES" subtitle="Autor: Lisa Jane Smith" />
      <ReferentCard src={the100} name="THE 100" subtitle="Autor: Jason Rothenberg" />
      <ReferentCard src={trono2} name="GAME OF THRONES" subtitle="Autor: George R. R. Martin" />
    </section>
  );
}

export default ReferentSection;
