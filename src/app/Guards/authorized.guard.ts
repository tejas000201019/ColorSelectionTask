import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';

export const authorizedGuard: CanActivateFn = (route, state) => {
  // let activeRouter = inject(ActivatedRoute);
  // let router = inject(Router);
  // let extractedRole:any;
  // let roleData:Observable<Data> = router.events.pipe(
  //   filter(routeEvent => routeEvent instanceof NavigationEnd),
  //   map(() => activeRouter),
  //   map(activeRouter => activeRouter.firstChild),
  //   switchMap(firstChild => firstChild.data),
  //   map((data) => data)
  //   );
  //   roleData.subscribe((d)=>{ extractedRole = d });
  let isAdmin = localStorage.getItem('User_Role').toLowerCase();
  if (isAdmin != 'admin') {
    window.alert('Access Unauthorized!');
    return false;
  }
  return true;
};
