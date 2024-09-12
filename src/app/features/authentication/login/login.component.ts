import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { IAuthenticationUser } from '../../../core/models/authentication/authentication-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _returnUrl: string | null = null;

  constructor(private _authenticationService: AuthenticationService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.queryParamMap
      .subscribe((params: any) => {
        if (params) {
          this._returnUrl = params.get('returnUrl');
        }
      })

    this._authenticationService.user$
      .pipe(
        filter((user: IAuthenticationUser | null): boolean => !!user),
        tap(_ => {
          _router.navigate(['/dashboard'])
        })
      ).subscribe();
  }

  login(): void {
    this._authenticationService.login();
    if (this._returnUrl)
      this._router.navigateByUrl(this._returnUrl);
  }
}
