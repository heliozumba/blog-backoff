import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { fader, slider } from '../../../animations'

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  animations: [slider]
})
export class ViewerComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  prepareRoute (outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
}
