import React from "react";
import NoteCard from "../molecules/NoteCard";
import '../../../src/index.css'
function Notesection() {
    return (
      <section className="Notesection">
      <NoteCard  name="Prime Video pone en marcha una serie de la exitosa saga iniciada por Rooney Mara y Daniel Craig: 'Millennium'" 
      subtitle="La querida saga de 'Millennium' resucita en la casa streaming de Amazon a través de una serie de televisión: ¿Volverán sus actores originales?"/>
      
      <NoteCard  name="El creador de Chucky adelanta un crossover con la maníaca 'M3GAN' de Blumhouse y pronto habrá sorpresas" 
      subtitle="Chucky, uno de los asesinos en series más populares del slasher en el ámbito de la ficción, se podría enfrentar a M3GAN muy pronto en el audiviosual."/>

      <NoteCard  name="'Élite' fracasa en Netflix y su temporada 7 sufre un batacazo en audiencias preocupante" 
      subtitle="Los nuevos fichajes, las nuevas tramas y la fuerte promoción no han logrado que las audiencias remonten y la serie española más exitosa y longeva de Netflix España se la pega y nadie lo entiende."/>

      <NoteCard  name="Warner busca revitalizar sus sagas y reestructura su división de licencias en plena crisis interna" 
      subtitle="Warner Bros. Discovery trabaja para revitalizar y enderezar sus grandwa sagas, como 'Harry Potter', 'El Señor de los Anillos', el 'MonsterVerse' de Godzilla y las películas de DC. Anuncia cambios."/>

      </section>
      
    );
  }
  
  export default Notesection;
