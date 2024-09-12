import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { IAuthenticationUser } from '../../models/authentication/authentication-user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() onToggle: EventEmitter<any> = new EventEmitter<any>();

  user$: Observable<IAuthenticationUser | null>;
  
  constructor(private _authenticationService: AuthenticationService) {
    this.user$ = this._authenticationService.user$;
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
