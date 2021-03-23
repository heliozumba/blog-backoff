import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './views/login/login.component'
import { LoginFormComponent } from './views/login/login-form/login-form.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { SidebarComponent } from './views/dashboard/sidebar/sidebar.component'
import { HeaderComponent } from './views/dashboard/header/header.component'
import { ViewerComponent } from './views/dashboard/viewer/viewer.component'
import { PostListComponent } from './views/dashboard/viewer/post-list/post-list.component'
import { PostAddComponent } from './views/dashboard/viewer/post-add/post-add.component'
import { QuillModule } from 'ngx-quill'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoadingBarRouterModule } from '@ngx-loading-bar/router'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    NotFoundComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ViewerComponent,
    PostListComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Jucas' },
        children: [
          {
            path: 'post-list',
            component: PostListComponent,
            data: { title: 'Posts', animation: 'postList' }
          },
          {
            path: 'post-add',
            component: PostAddComponent,
            data: { title: 'Novo Post', animation: 'goRight' }
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
