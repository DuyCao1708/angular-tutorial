import { Component, ViewChild } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild(MatSidenav) private _sidenav: MatSidenav;

  constructor(protected mediaService: MediaService) {}

  toggle() {
    this._sidenav.toggle();
  }
}
