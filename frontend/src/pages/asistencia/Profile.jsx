import React, { useEffect, useState } from 'react';
import { imagenUser } from '../../api/useAxios';
import { total_asistencias } from '../../api/users';

export const Profile = () => {
  const [foto, setFoto] = useState('');
  const [asistencia, setAsistencia] = useState('');

  // ID y nombre pueden ser constantes ya que se obtienen directamente del localStorage y no se espera que cambien.
  const id = localStorage.getItem('id');
  const nombre = localStorage.getItem('nombre');

  useEffect(() => {
    // Asumiendo que imagenUser y total_asistencias son asíncronas y retornan una promesa.
    const cargarDatos = async () => {
      const fotoUrl = await imagenUser(localStorage.getItem('foto'));
      setFoto(fotoUrl);

      const totalAsistencias = await total_asistencias(id); // Asumiendo que necesita el ID del usuario.
      setAsistencia(totalAsistencias);
    };

    cargarDatos();
  }, []); // El arreglo vacío asegura que este efecto se ejecute solo una vez al montar el componente.

  return (
    <div>
      <img
        className="inline-block h-14 w-14 rounded-full"
        src={foto}
        alt=""
      />
      <h1 className="text-white text-2xl font-semibold">{nombre}</h1>
      <p className="text-white text-sm font-medium">{id}</p>
      <p className="text-white text-sm font-medium">{asistencia}</p>
    </div>
  );
};
