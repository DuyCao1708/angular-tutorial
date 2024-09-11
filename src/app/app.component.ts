import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  constructor(private _http: HttpClient) {}

  callApi(): void {
    this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=81127fb247ea643ad1b1da1d0cc1ea1d')
    .subscribe((response: any) => alert(JSON.stringify(response)));
  }
}
