import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
