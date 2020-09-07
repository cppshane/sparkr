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
    VANTA.WAVES({
      el: "#vanta-background",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      color: 0xbebecf,
      shininess: 14.00,
      waveHeight: 30.00,
      waveSpeed: 0.20,
      zoom: 1.75
    })
  }
}
