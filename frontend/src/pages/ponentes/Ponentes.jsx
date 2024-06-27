import React from 'react';
import './ponentes.css';
import fernando from "../../assets/home/Fernando-Pareja.jpg";
import gonzalo from "../../assets/home/GONZALO_GARCIA_MARTINEZ.jpg";
import herwin from "../../assets/home/Herwin-Huillcen.jpg";
import jose from "../../assets/home/Jose-Valdivia.jpg";
import wilder from "../../assets/home/Wilder-Nina.jpg";
import jeje from "../../assets/home/jeje.jpg";


const Ponentes = () => {
  const ponentes = [
    { nombre: 'Fernando Pareja Angulo', bloque: 'bloque 1', horario: '7-9', foto: fernando },
    { nombre: 'Gonzalo García Martínez', bloque: 'bloque 2', horario: '9-11', foto: gonzalo },
    { nombre: 'Herwin Alayn Huillcen Baca', bloque: 'bloque 3', horario: '11-13',foto: herwin },
    { nombre: 'BLOQUE DE DESCANSO', bloque: 'bloque 4', horario: '13-14',foto: jeje },
    { nombre: 'José Valdivia', bloque: 'bloque 5', horario: '14-16', foto: jose },
    { nombre: 'Wilder Nina', bloque: 'bloque 6', horario: '16-18', foto: wilder }
  ];

  return (
    <div className="ponentes-container">
      <h2>Ponentes</h2>
      <div className="table-container">
        <table className="ponentes-table">
          <thead>
            <tr>
              <th>Ponente</th>
              <th>Bloque</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {ponentes.map((ponente, index) => (
              <tr key={index} className="ponente-item">
                <td className="ponente-info">
                  <img className="ponente-foto" src={ponente.foto} alt={`Foto de ${ponente.nombre}`} />
                  <div>
                    <span className="ponente-nombre">{ponente.nombre}</span>
                  </div>
                </td>
                <td>{ponente.bloque}</td>
                <td>{ponente.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ponentes;
