import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _authenticationService: AuthenticationService) { }

  login(): void {
    this._authenticationService.login();
  }
}
