import { Component } from '@angular/core';
import { CoreService } from '../../../core/services/core.service';
import { AlertType } from '../../../core/models/shared/alert-init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private _coreService: CoreService) {}

  alert() {
    this._coreService.alert({type: AlertType.Warn, title: 'hihi', message: 'hehe', action: () => {}});
  }
}