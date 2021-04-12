import { Perfil } from './perfil'

export interface User {
  username: string
  password: string
  nome: string
  email: string
  telefone: string
  perfil: Perfil
}
