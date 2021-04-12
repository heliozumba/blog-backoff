import { Perfil } from './perfil'
import { User } from './user'
export interface Post {
  id_post: number
  title: string
  description: string
  image: string
  date: Date
  views: number
  perfil: Perfil
  username: User
}
