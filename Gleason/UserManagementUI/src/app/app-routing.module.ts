import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/Login/Component/login/login.component';
import { DashboardComponent } from './features/Dashboard/dashboard/dashboard.component';
import { UsermanagementComponent } from './features/UserManagement/usermanagement/usermanagement.component';
import { AdduserComponent } from './features/UserManagement/add-user/adduser/adduser.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent
  },
  {
    path: 'add-user',
    component: AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
