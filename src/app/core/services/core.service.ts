import { inject, Injectable } from '@angular/core';
import { IAlertInit } from '../models/shared/alert-init';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _dialog: MatDialog) { }

  alert(init: IAlertInit): MatDialogRef<AlertComponent> {
    return this._dialog.open(AlertComponent, {
      data: init,
      closeOnNavigation: true
    })
  }
}
