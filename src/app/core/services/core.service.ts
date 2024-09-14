import { Injectable } from '@angular/core';
import { IAlertInit } from '../models/shared/alert-init';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _modalService: BsModalService) { 
  }

  alert(init: IAlertInit) {
    return this._modalService.show(AlertComponent, {
      initialState: {
        init: init
      },
      class: 'alert'
    })
  }
}
