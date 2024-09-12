import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { filter, first, map, Observable, tap } from 'rxjs';
import { IAuthenticationUser } from '../models/authentication/authentication-user';
import { CoreService } from '../services/core.service';
import { AlertType } from '../models/shared/alert-init';

export const authorizationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const authenticationService: AuthenticationService = inject(AuthenticationService);
  const coreService: CoreService = inject(CoreService); //new
  const router: Router = inject(Router);

  return authenticationService.user$
    .pipe(
      map((user: IAuthenticationUser | null): boolean => !!user),
      tap((valid: boolean) => {
        if (!valid) {
          router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
          coreService.alert({type: AlertType.Error, title: 'Error', message: 'Your account is not allowed to access this page!'});
        }
      })
    )
};
