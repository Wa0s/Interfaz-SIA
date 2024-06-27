import { useQuery } from "@tanstack/react-query";
import { jinisApi } from "../../api/jinis";
import { registroAsistencia } from "../../api/users";
import { useEffect, useState } from "react";


function BotonRegistro({ fechaInicio }) {
  const [botonHabilitado, setBotonHabilitado] = useState(true);
  const [clickeado, setClickeado] = useState(false);

  useEffect(() => {
    // Verificar si la asistencia ya fue registrada
    const asistenciaRegistrada = localStorage.getItem('asistenciaRegistrada');
    if (asistenciaRegistrada) {
      setBotonHabilitado(false);
      setClickeado(true);
    }
  }, []);

  const inicio = new Date(fechaInicio);
  const ahora = new Date();
  const diferenciaMinutos = (ahora - inicio) / (1000 * 60);
  const dentroDeTiempo = diferenciaMinutos >= 0 && diferenciaMinutos <= 10;

  const handleClick = async () => {
    if (!clickeado && dentroDeTiempo) {
      setClickeado(true); // Marcar el botón como clickeado
      setBotonHabilitado(false); // Opcional: Deshabilitar el botón inmediatamente para prevenir doble clic
      // Llamar a la API registroAsistencia aquí
      try {
        const response = await registroAsistencia(/* parámetros necesarios */);
        console.log(response); // Manejar la respuesta
        // Guardar en localStorage que la asistencia fue registrada
        localStorage.setItem('asistenciaRegistrada', 'true');
      } catch (error) {
        console.error(error); // Manejar el error
        // Opcional: Restablecer el estado si la llamada a la API falla
        setClickeado(false);
        setBotonHabilitado(true);
        localStorage.removeItem('asistenciaRegistrada');
      }
    }
  };

  return (
    <button
      type="button"
      disabled={!botonHabilitado || !dentroDeTiempo}
      onClick={handleClick}
      className={`rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm ${
        botonHabilitado && dentroDeTiempo ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-gray-400 text-gray-200'
      }`}
    >
      Registrar Asistencia
    </button>
  );
}

export default function Bloques() {
  const { data: jinis, isLoading, error } = useQuery({
    queryKey: ['jinis'],
    queryFn: jinisApi
  });  
  if (isLoading) {
    return <div>Loading...</div>;
  }  
  if (error) return 'An error has occurred: ' + error.message;

  // const serverUrl = axi ; 

  // console.log(jinis.map(curso => curso.docente.nombre));
  console.log(jinis);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tus jinis
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Cursos disponibles
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {jinis.map((curso) => (
            <article key={curso.id} className="flex flex-col items-start justify-between">
              <p key={curso.id}>
              </p>
              <div className="relative w-full">
                {/* <img
                  src={`${curso.miniatura}`}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                /> */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={curso.fechaInicio} className="text-gray-500">
                    {new Date(curso.fechaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </time>
                  <time dateTime={curso.fechaFin} className="text-gray-500">
                    {new Date(curso.fechaFin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </time>
                  <a
                    // href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {curso.titulo}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {/* <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.titulo}
                    </a> */}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{curso.titulo}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={curso.ponente.foto} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <BotonRegistro fechaInicio={curso.fechaInicio} />

                    <p className="text-gray-600">{curso.ponente.nombre}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}