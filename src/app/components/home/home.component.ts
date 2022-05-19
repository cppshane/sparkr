import { Component, OnInit } from '@angular/core';

declare const VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.initVantaEffect();
  }

  initVantaEffect() {
    VANTA.WAVES({
      el: "#vanta-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x556772,
      waveSpeed: 0.30,
      zoom: 0.65
    })
  }
}
