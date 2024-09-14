import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MatButtonModule } from '@angular/material/button';
import { AnchorComponent } from './components/anchor/anchor.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AlertComponent,
    AnchorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ModalModule.forRoot(),
  ],
  exports: [
    AnchorComponent
  ]
})
export class SharedModule { }
