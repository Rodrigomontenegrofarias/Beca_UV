import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const permisosGuard = () => {

    const router = inject(Router);

  if (localStorage.getItem('token_login')) {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};