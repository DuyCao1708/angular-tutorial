import { Component } from '@angular/core';
import { IAlertInit } from '../../../core/models/shared/alert-init';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  init: IAlertInit;

  constructor(public bsModalRef: BsModalRef) {}
}
