import React from 'react';
import './estilos.css';

import ucsm from "../../assets/home/logo-UCSM-alta_Mesa-de-trabajo-1-copia.jpg";
import jinis from "../../assets/home/Logo-JINIS-02.jpg";
import epis from "../../assets/home/LOGO-EPIS-blanco.jpg";
import fernando from "../../assets/home/Fernando-Pareja.jpg";
import gonzalo from "../../assets/home/GONZALO_GARCIA_MARTINEZ.jpg";
import herwin from "../../assets/home/Herwin-Huillcen.jpg";
import jose from "../../assets/home/Jose-Valdivia.jpg";
import wilder from "../../assets/home/Wilder-Nina.jpg";


export const Home = () => {
  return (
    <div>
      <header className="top-icons flex justify-center items-center p-2 bg-gray-600 text-white">
        <img className='max-h-12 w-auto max-w-[33%]' src={ucsm} alt="Logo UCSM" />
        <img className='max-h-12 w-auto max-w-[33%]' src={jinis} alt="Logo JINIS" />
        <img className='max-h-12 w-auto max-w-[33%]' src={epis} alt="Logo EPIS" />
      </header>

      <section className="main-top flex flex-col items-center justify-center text-center h-[100vh] text-white p-5 bg-custom-image bg-no-repeat bg-center bg-cover w-full">
        <h1>XXX Jornada Internacional de Ingeniería de Sistemas</h1>
        <p>Del 03 al 05 de octubre del 2023 - Arequipa, Perú</p>
        <i className="fas fa-user-cog"></i>
      </section>

      <section className="main-skills">
        <div className="card">
          <i className="fas fa-laptop-code"></i>
          <h3>Jornada Internacional de Ingeniería de Sistemas</h3>
          <p>La Jornada Internacional de Ingeniería de Sistemas (JINIS) se ha venido desarrollando durante 29 años en la Universidad Católica de Santa María. Su primera versión se llevó a cabo en el año 1992, y se ha continuado año a año. El JINIS ha logrado congregar científicos, investigadores y empresarios del área en cada una de sus ediciones.</p>
          <button>Únete</button>
        </div>
      </section>

      <section className="speakers">
        <h2 className="speakers-title">Ponentes</h2>
        <div className="speakers-grid">
          {[{name: "Fernando Pareja Angulo", image: fernando},
            {name: "Gonzalo García Martínez", image: gonzalo},
            {name: "Herwin Alayn Huillcen Baca", image: herwin},
            {name: "José Valdivia", image: jose},
            {name: "Wilder Nina", image: wilder}].map((speaker, index) => (
            <div className="speaker" key={index}>
              <img src={speaker.image} alt={`Speaker ${index + 1}`} />
              <h4>{speaker.name}</h4>
              <p>Perú</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
