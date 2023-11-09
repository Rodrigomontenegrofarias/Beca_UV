import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading = false;

  constructor(
    private router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  isLoading(){
    this.loading = true;
    setTimeout(() => {
      localStorage.removeItem('token_login');
      localStorage.removeItem('role');
      this.router.navigate(['/login']);
      this.loading = false;
  },2000);
  }

}
