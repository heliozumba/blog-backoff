import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  active: Boolean

  constructor () {}

  ngOnInit (): void {
    this.active = true
  }

  loggedIn (logged: boolean) {
    alert(logged)
    logged ? (this.active = false) : (this.active = true)
  }
}
