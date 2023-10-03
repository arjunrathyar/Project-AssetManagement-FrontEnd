import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  // employee-add
  {path: 'add', component:VendorAddComponent},
  //employee-list
  {path: 'list', component:VendorListComponent},
  //employee-edit
  //{path: 'edit/:id', component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorCreationRoutingModule { }
