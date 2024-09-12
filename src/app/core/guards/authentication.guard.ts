import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';
import { IAuthenticationUser } from '../models/authentication/authentication-user';
import { CoreService } from '../services/core.service';
import { AlertType } from '../models/shared/alert-init';

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const authenticationService: AuthenticationService = inject(AuthenticationService);
  const coreService: CoreService = inject(CoreService);
  const router: Router = inject(Router);

  return authenticationService.user$
    .pipe(
      map((user: IAuthenticationUser | null): boolean => {
        const url = state.url.split('?')[0];
        let valid: boolean = false;
        switch(url) {
          case '/employees/list': valid = routeValidator(user?.roles, ['GetEmployees']); break;
          default: break;
        }

        return valid;
      }),
      tap((valid: boolean) => {
        if (!valid) {
          router.navigate(['/authentication/login']);
          coreService.alert({type: AlertType.Error, title: 'Error', message: 'Your account is not allowed to access this page!'});
        }
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
