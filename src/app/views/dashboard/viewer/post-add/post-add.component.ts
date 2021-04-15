import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { PostService } from 'src/app/services/post.service'
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
  edit: any
  title: any
  post: Post = {
    id: 32,
    title: '',
    description: '',
    image: '',
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
    private postService: PostService
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
    this.post.date = new Date().toISOString()
    this.post.username = this.user.username
    console.table(this.post)
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
