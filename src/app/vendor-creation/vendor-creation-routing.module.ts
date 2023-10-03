import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

const routes: Routes = [
  // employee-add
  {path: 'add', component:VendorAddComponent},
  //employee-list
  {path: 'list', component:VendorListComponent},
  //employee-edit
  {path: 'edit', component:VendorEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorCreationRoutingModule { }
