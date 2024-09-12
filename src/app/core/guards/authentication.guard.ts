import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';
import { AuthenticationUser } from '../models/authentication/authentication-user';

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const authenticationService: AuthenticationService = inject(AuthenticationService);
  const router: Router = inject(Router);

  return authenticationService.user$
    .pipe(
      map((user: AuthenticationUser | null): boolean => {
        const url = state.url.split('?')[0];
        let valid: boolean = false;
        switch(url) {
          case '/employees/list': valid = routeValidator(user?.roles, ['GetEmployees']); break;
          default: break;
        }

        if (!valid) router.navigate(['/']);
        return valid;
      })
    )
};

const routeValidator = (roles: string[] | undefined, requiredRoles: string[]): boolean => {
  let valid: boolean = false;
  for (const role of requiredRoles) {
    valid = roles?.includes(role) ?? false;
    if (!valid) return false;
  }
  return valid;
}
