import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map, Observable } from 'rxjs';
import { IAuthenticationUser } from '../models/authentication/authentication-user';
import { CoreService } from '../services/core.service';
import { AlertType } from '../models/shared/alert-init';

export const authorizationGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> => {
  const authenticationService: AuthenticationService = inject(AuthenticationService);
  const coreService: CoreService = inject(CoreService); //new
  const router: Router = inject(Router);

  return authenticationService.user$
    .pipe(
      map((user: IAuthenticationUser | null): boolean | UrlTree => {
        if (!!user) return true;
        else {
          coreService.alert({ type: AlertType.Error, title: 'Error', message: 'Your account is not allowed to access this page!' });
          return router.createUrlTree(['/authentication/login'], { queryParams: { returnUrl: state.url } });
        }
      })
    )
};
