import React, { useState } from 'react';

const people = [
  { id: '001', nombre: 'Adam Smith', fecha: '05/01/2024', email: 'adamsmith@email.com', telefono: "123456", porcentaje: "80%" },
  { id: '002', nombre: 'John Doe', fecha: '05/01/2024', email: 'johndoe@email.com', telefono: "123456", porcentaje: "80%" }, 
  { id: '003', nombre: 'Jane Doe', fecha: '05/01/2024', email: 'janedoe@email.com', telefono: "123456", porcentaje: "80%" },
  { id: '004', nombre: 'Jesep Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '005', nombre: 'Dane Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '006', nombre: 'Fabricio Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '007', nombre: 'Rodrigp Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '008', nombre: 'Regy Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '009', nombre: 'Auron Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '010', nombre: 'Ricardo Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '011', nombre: 'Alexis Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
  { id: '012', nombre: 'Adam Quispe', fecha: '05/01/2024', email: 'yesepquispe@email.com', telefono:"123456", porcentaje: "80%"},
];

export default function Tabla() {
  const [showModal, mostrar] = useState(false);
  const [newPerson, nuevo] = useState({
    id: '',
    nombre: '',
    fecha: '',
    email: '',
    telefono: '',
    porcentaje: ''
  });

  const input = (e) => {
    const { name, value } = e.target;
    nuevo({ ...newPerson, [name]: value });
  };

  const confirmar = () => {
    people.push(newPerson);
    mostrar(false);
    nuevo({
      id: '',
      nombre: '',
      fecha: '',
      email: '',
      telefono: '',
      porcentaje: ''
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="border text-2xl font-bold bg-gray-50">Panel Asistencia</tr>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Id
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Fecha Registro
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Telefono
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Porcentaje de asistencias
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.nombre}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.fecha}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.telefono}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{person.porcentaje}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => mostrar(true)}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Registrar Asistencia
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Registrar Asistencia</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Id</label>
              <input
                type="text"
                name="id"
                value={newPerson.id}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={newPerson.nombre}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Fecha Registro</label>
              <input
                type="text"
                name="fecha"
                value={newPerson.fecha}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={newPerson.email}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="telefono"
                value={newPerson.telefono}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Porcentaje de asistencias</label>
              <input
                type="text"
                name="porcentaje"
                value={newPerson.porcentaje}
                onChange={input}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => mostrar(false)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={confirmar}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
