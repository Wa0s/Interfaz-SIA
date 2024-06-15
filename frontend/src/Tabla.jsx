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
]

export default function Tabla() {
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
                      Phone
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
          </div>
        </div>
      </div>
    </div>
  )
}
