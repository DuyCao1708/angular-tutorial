import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

  login(): void {
    this._authenticationService.login();
    if (this._returnUrl)
      this._router.navigateByUrl(this._returnUrl);
  }
}
