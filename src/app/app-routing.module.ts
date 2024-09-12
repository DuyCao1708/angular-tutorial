import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/home/not-found/not-found.component';
import { LoginComponent } from './features/authentication/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./features/home/home.module').then(module => module.HomeModule) },
  { path: 'authentication', loadChildren: () => import('./features/authentication/authentication.module').then(module => module.AuthenticationModule) },
  { path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(module => module.EmployeesModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
