import { Injectable } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _spinnerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  spinner$: Observable<number> = this._spinnerSubject.asObservable();
  
  constructor(private readonly _router: Router) { 
    _router.events
    .subscribe((event: Event) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.show()
    }

    if (event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError
    ) {
      this.hide();
    }
  }

  show() {
    this._spinnerSubject.next(this._spinnerSubject.value + 1);
  }

  hide() {
    this._spinnerSubject.next(this._spinnerSubject.value - 1);
  }
}
