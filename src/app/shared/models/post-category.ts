import { Category } from './category'
import { Post } from './post'

export interface PostCategory {
  id: string
  category: Category
  post: Post
}
