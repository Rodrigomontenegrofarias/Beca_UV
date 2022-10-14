import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.loading = false
  },2000);
  }

}
