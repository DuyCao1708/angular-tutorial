import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    FormsModule
  ]
})
export class HomeModule { }
