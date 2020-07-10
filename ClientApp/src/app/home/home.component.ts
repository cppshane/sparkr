import { Component, OnInit } from '@angular/core';

declare const VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  vantaEffect;

  ngOnInit() {
    this.initVantaEffect();
  }

  initVantaEffect() {
    VANTA.CLOUDS2({
      el: "#vanta-background",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      texturePath: "assets/img/noise.png"
    })
  }
}
