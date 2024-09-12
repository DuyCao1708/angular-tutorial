import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAlertInit } from '../../../core/models/shared/alert-init';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  init: IAlertInit = inject(MAT_DIALOG_DATA) as IAlertInit;
}
