import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, ReplaySubject, shareReplay } from 'rxjs';
import { IAuthenticationUser } from '../models/authentication/authentication-user';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userSubject: ReplaySubject<IAuthenticationUser | null> = new ReplaySubject<IAuthenticationUser | null>(1);
  user$: Observable<IAuthenticationUser | null> = this._userSubject.asObservable().pipe(shareReplay(1));

  localStorage: any;

  constructor(private _router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.localStorage = _document.defaultView?.localStorage;
   }

  login(): void {
    const user: IAuthenticationUser = {
      name: 'Duy Cao',
      roles: ['GetEmployees']
    }

    this.setUser(user);
  }

  logout(): void {
    localStorage.removeItem(environment.userKey);
    this._userSubject.next(null);
    this._router.navigateByUrl('/');
  }

  getAuthUser(): IAuthenticationUser | null {
    if (this.localStorage) {
      const user = this.localStorage.getItem(environment.userKey);
      if (user) return JSON.parse(user) as IAuthenticationUser;
      else return null;
    } else return null;
  }
  
  refreshUser(user: IAuthenticationUser | null): void {
    if (!user) {
      this._userSubject.next(null);
    } else {
      this.setUser(user);
    }
  }

  //#region Private Methods
  private setUser(user: IAuthenticationUser): void {
    this.localStorage.setItem(environment.userKey, JSON.stringify(user));
    this._userSubject.next(user);
  }
  //#endregion
}
