import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let isLoggedIn = localStorage.getItem('Current_User');
  if(isLoggedIn != ''  && isLoggedIn != undefined){
    return true;
  }
  router.navigate(['Login']);
  return false;
};
