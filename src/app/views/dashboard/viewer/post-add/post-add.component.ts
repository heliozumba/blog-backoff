import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  edit: any
  title: any
  post: Post

  constructor (private activactedRoute: ActivatedRoute) {}

  ngOnInit (): void {
    this.edit = this.activactedRoute.snapshot.data['edit']
    this.title = this.activactedRoute.snapshot.data['title']
    /* this.activactedRoute.queryParams.subscribe(params => {
      console.log(params['id'])
    }) */
    this.edit
      ? console.log(this.activactedRoute.snapshot.paramMap.get('id'))
      : ''
  }
}
