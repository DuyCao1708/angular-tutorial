import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  constructor(private _authenticationSerivce: AuthenticationService) { }

  ngOnInit(): void {
    const authUser = this._authenticationSerivce.getAuthUser();
    this._authenticationSerivce.refreshUser(authUser);
  }
}
