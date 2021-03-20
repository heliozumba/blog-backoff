import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor (private route: Router) {}

  ngOnInit (): void {
    console.log(this.active)
  }

  @Input() active: Boolean

  @Output() logged = new EventEmitter<boolean>()

  callApp () {
    alert('here')
    this.logged.emit(true)
    this.route.navigate(['/dashboard'])
  }
}
