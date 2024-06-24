import { axi, authAxios } from "./useAxios";
// import jwt_decode from "jwt-decode"

// export const follow = async (username) => {
//   await authAxios.post(`/users/follow/${username}/`)
// }

export const consolidadoApi = async () => {
  const res = await axi.get('/consolidado/')
  return res.data
}
export const consolidadoId = async () => {
  const res = await axi.get(`/consolidado/details/1`)
  return res.data
}