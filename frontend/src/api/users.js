import { axi, authAxios } from "./useAxios";
import { jwtDecode } from "jwt-decode";


export const userProfile = async (nombre) => {
  const res = await authAxios.get(`/users/${nombre}/`)
  return res.data
}


export const logout = () => {
  localStorage.clear()
  nav('/login')
}

export const registerReq = async (data) => {
  await axi.post('/users/registerA/', data)
}
export const ponenteregisterReq = async (data) => {
  await axi.post('/users/registerD/', data)
}
export const registroAsistencia = async (data) => {
  const id = localStorage.getItem('id')
  await axi.post(`/users/asistencia/${id}/`, data)
}

export const participantes = async () => {
  
}
export const total_asistencias = async () => {
  const res = await axi.get('/users/total_asistencias')
  return res.data
}



export const loginReq = async (data) => {
  const res = await axi.post('/users/login/', data)
  const { access, refresh } = res.data

  localStorage.setItem('access', access)
  localStorage.setItem('refresh', refresh)

  const user = jwtDecode(localStorage.getItem('access'))

  localStorage.setItem('nombre', user.nombre)
  localStorage.setItem('id', user.id)
  localStorage.setItem('foto', user.foto)
}