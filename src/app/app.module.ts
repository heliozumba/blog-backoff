import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './views/login/login.component'
import { LoginFormComponent } from './views/login/login-form/login-form.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Jucas' }
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
