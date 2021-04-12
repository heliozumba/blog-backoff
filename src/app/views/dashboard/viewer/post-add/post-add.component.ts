import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Link } from 'src/app/shared/models/link'
import { Post } from 'src/app/shared/models/post'
import { PostCategory } from 'src/app/shared/models/post-category'
import { PostLink } from 'src/app/shared/models/post-link'

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  edit: any
  title: any
  post: Post = {
    id_post: null,
    title: '',
    description: '',
    image: '',
    date: null,
    views: 0,
    perfil: null,
    username: null
  }
  link: Link
  post_link: PostLink
  post_category: PostCategory
  links: Link[] = [
    {
      via: 'soundcloud',
      url: ''
    },
    {
      via: 'mp3',
      url: ''
    },
    {
      via: 'youtube',
      url: ''
    }
  ]
  notSent: any

  constructor (
    private activactedRoute: ActivatedRoute,
    private router: Router
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
    this.notSent = false
    console.table(this.post)
    console.table(this.links)
    var route = this.router
    setTimeout(function () {
      route.navigate(['/dashboard/post-list'])
    }, 3000)
  }
}
