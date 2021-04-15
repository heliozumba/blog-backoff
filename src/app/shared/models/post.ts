import { Perfil } from './perfil'
import { User } from './user'
export interface Post {
  id: number
  title: string
  description: string
  image: string
  date: string
  views: number
  username: string
}
