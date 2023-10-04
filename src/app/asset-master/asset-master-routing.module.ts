import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';

const routes: Routes = [
  // asset-add
  {path: 'add', component:AssetAddComponent},
  //employee-list
  {path: 'list', component:AssetListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetMasterRoutingModule { }
