import { ChangeDetectorRef, Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private _mobileQuery: MediaQueryList;

  constructor(
    private _mediaMatcher: MediaMatcher
  ) { 
    this._mobileQuery = _mediaMatcher.matchMedia('(max-width: 600px)');
  }

  get isMobile(): boolean {
    return this._mobileQuery.matches;
  }
}
