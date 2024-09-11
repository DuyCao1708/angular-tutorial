import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  url: string = '';
  constructor(private _router: Router) { }

  navigate(): void {
    this._router.navigateByUrl(this.url);
  }
}
