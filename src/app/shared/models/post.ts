import { Perfil } from './perfil'
import { User } from './user'
export interface Post {
  id_post: bigint
  title: string
  description: string
  image: string
  date: Date
  views: BigInt
  perfil: Perfil
  username: User
}
