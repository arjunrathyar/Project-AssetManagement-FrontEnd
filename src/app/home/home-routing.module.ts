import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from "./admin-home/admin-home.component"
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path : 'admin' , component : AdminHomeComponent
  },
  {
    path : 'user' , component : UserHomeComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
