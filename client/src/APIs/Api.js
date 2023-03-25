import AxiosInstnace from "../Axios/AxiosInstnace"

export const login=(values)=>AxiosInstnace.post(`/login`,values)
// export const getPokemon=(values)=>AxiosInstnace.get(`/pokemon`,values)



