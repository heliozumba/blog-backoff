import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ImageService } from 'src/app/services/image.service'
import { PostService } from 'src/app/services/post.service'
import { ImageSnippetComponent } from 'src/app/shared/image-snippet/image-snippet.component'
import { Category } from 'src/app/shared/models/category'
import { Link } from 'src/app/shared/models/link'
import { Post } from 'src/app/shared/models/post'
import { PostCategory } from 'src/app/shared/models/post-category'
import { PostLink } from 'src/app/shared/models/post-link'
import { User } from 'src/app/shared/models/user'

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  uploader: ImageSnippetComponent
  edit: any
  title: any
  post: Post = {
    id: null,
    title: '',
    description: '',
    image: null,
    date: null,
    views: 0,
    username: null
  }
  link: Link = {
    id: null,
    via: null
  }
  post_link: PostLink = {
    id: null,
    link: null,
    post: null,
    url: ''
  }
  post_category: PostCategory = {
    id: '',
    category: null,
    post: null
  }

  user: User = {
    username: 'ky',
    password: '',
    email: '',
    nome: '',
    telefone: '',
    perfil: { id_perfil: 1, nome: 'Editor' }
  }

  links: ['', '', '']

  category: Category = {
    id: 0,
    name: 'Musica'
  }
  notSent: any

  constructor (
    private activactedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private image: ImageService
  ) {}

  ngOnInit (): void {
    this.edit = this.activactedRoute.snapshot.data['edit']
    this.title = this.activactedRoute.snapshot.data['title']
    /* this.activactedRoute.queryParams.subscribe(params => {
      console.log(params['id'])
    }) */
    this.edit
      ? console.log(this.activactedRoute.snapshot.paramMap.get('id'))
      : ''
    this.notSent = true
  }

  showData () {
    console.table(this.post)
    console.table(this.links)
  }

  addPost () {
    var router = this.router
    this.notSent = false
    this.post.id = Math.floor(1000000000 * Math.random())
    this.post.date = new Date().toISOString()
    this.post.username = this.user.username
    this.post.image = this.image.getImage().lastModified
    console.log(this.post)
    this.postService.createPost(this.post).subscribe(
      data => {
        console.log('Post Created')
        console.table(data)
        setTimeout(function () {
          router.navigate(['/dashboard/post-list'])
        }, 3000)
      },
      error => {
        console.log(error)
        console.log('Falha no registo')
      }
    )
  }
}
