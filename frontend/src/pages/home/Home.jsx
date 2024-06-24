import React from 'react'

import ucsm from "../../assets/home/logo-UCSM-alta_Mesa-de-trabajo-1-copia.jpg"
import jinis from "../../assets/home/Logo-JINIS-02.jpg"
import epis from "../../assets/home/LOGO-EPIS-blanco.jpg"
import fernando from "../../assets/home/Fernando-Pareja.jpg"
import gonzalo from "../../assets/home/GONZALO_GARCIA_MARTINEZ.jpg"
import herwin from "../../assets/home/Herwin-Huillcen.jpg"
import jose from "../../assets/home/Jose-Valdivia.jpg"
import wilder from "../../assets/home/Wilder-Nina.jpg"

export const Home = () => {
  return (
    <div>

      <div className="top-icons flex justify-center items-center p-2 bg-gray-600 text-white">
        <img className='max-h-12 w-auto max-w-[33%]' src={ucsm} />
        <img className='max-h-12 w-auto max-w-[33%]' src={jinis} />
        <img className='max-h-12 w-auto max-w-[33%]' src={epis} />
      </div>

      <div className="main-top flex flex-col items-center justify-center text-center h-[100vh] text-white p-5 bg-custom-image bg-no-repeat bg-center bg-cover  w-full">
        <h1 className=''>XXX Jornada Internacional de Ingeniería de Sistemas</h1>
        <p>Del 03 al 05 de octubre del 2023 - Arequipa, Perú</p>
        <i className="fas fa-user-cog"></i>
      </div>

      <div className="main-skills">
        <div className="card">
          <i className="fas fa-laptop-code"></i>
          <h3>Jornada Internacional de Ingeniería de Sistemas</h3>
          <p>La Jornada Internacional de Ingeniería de Sistemas (JINIS) se ha venido desarrollando durante 29 años en la Universidad Católica de Santa María, su primera versión se llevó a cabo el año 1992, y se ha continuado año a año. El JINIS ha logrado congregar científicos, investigadores y empresarios del área en cada una de sus ediciones.</p>
          <button>Unete</button>
        </div>
      </div>

      <div className="speakers">
        <div className="speaker">
          <img src={fernando} alt="Speaker 1" />
          <h4>Fernando Pareja Angulo</h4>
          <p>Perú</p>
        </div>
        <div className="speaker">
          <img src={gonzalo} alt="Speaker 2" />
          <h4>Gonzalo García Martínez</h4>
          <p>Perú</p>
        </div>
        <div className="speaker">
          <img src={herwin} alt="Speaker 3" />
          <h4>Herwin Alayn Huillcen Baca</h4>
          <p>Perú</p>
        </div>
        <div className="speaker">
          <img src={jose} alt="Speaker 4" />
          <h4>José Valdivia</h4>
          <p>Perú</p>
        </div>
        <div className="speaker">
          <img src={wilder} alt="Speaker 5" />
          <h4>Wilder Nina</h4>
          <p>Perú</p>
        </div>
      </div>


    </div>
  )
}
// .main-top h1 {
//   font-size: 3em;
//   margin: 0;
//   padding: 10px;
//   background: rgba(0, 0, 0, 0.5);
//   border-radius: 10px;
// }

// .main-top p {
//   font-size: 1.2em;
//   margin-top: 10px;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 10px;
//   border-radius: 10px;
// }

// .main-top i {
//   font-size: 2em;
//   margin-top: 10px;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 10px;
//   border-radius: 50%;
// }

// .main-skills {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 20px;
//   box-sizing: border-box;
//   background: #e0e0e0;
// }

// .main-skills .card {
//   background: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
// }

// .main-skills .card i {
//   font-size: 3em;
//   margin-bottom: 15px;
// }

// .main-skills .card h3 {
//   margin: 0 0 15px 0;
// }

// .main-skills .card p {
//   margin: 0 0 15px 0;
// }

// .main-skills .card button {
//   padding: 10px 20px;
//   border: none;
//   background: #007BFF;
//   color: #fff;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .main-skills .card button:hover {
//   background: #0056b3;
// }

// .speakers {
//   display: flex;
//   justify-content: center;
//   padding: 20px;
//   background: #f9f9f9;
// }

// .speaker {
//   text-align: center;
//   margin: 0 10px;
// }

// .speaker img {
//   border-radius: 10px;
//   width: 150px;
//   height: auto;
// }

// .speaker h4, .speaker p {
//   margin: 10px 0 0 0;
// }

