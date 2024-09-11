import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map, Observable } from 'rxjs';
import { AuthenticationUser } from '../models/authentication/authentication-user';

export const authorizationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const authenticationService: AuthenticationService = inject(AuthenticationService);
  const router: Router = inject(Router);

  return authenticationService.user$
    .pipe(
      map((user: AuthenticationUser | null): boolean => {
        if (user) return true;
        else {
          router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
      })
    )
};
