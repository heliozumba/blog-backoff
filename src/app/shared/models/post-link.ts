import { Link } from './link'
import { Post } from './post'

export interface PostLink {
  id: string
  link: Link
  post: Post
}
