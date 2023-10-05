import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminDashboardComponent,canActivate:[AuthGuard],data:{role: '1'}},   
  {path:"user", component:UserDashboardComponent,canActivate:[AuthGuard],data:{role: '2'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
