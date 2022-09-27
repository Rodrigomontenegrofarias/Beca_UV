import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-casinos-screen',
  templateUrl: './ver-casinos-screen.component.html',
  styleUrls: ['./ver-casinos-screen.component.scss']
})
export class VerCasinosScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentUrl(): number {
    if (this.router.url === '/casinos') return 1;
    if (this.router.url === '/agregar-casino') return 2;
    return 0;
  };
}
