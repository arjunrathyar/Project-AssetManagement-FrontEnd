import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';

const routes: Routes = [
  // asset-add
  {path: 'add', component:AssetAddComponent},
  //asset-list
  {path: 'list', component:AssetListComponent},
   //asset-edit
   {path: 'edit/:id', component:AssetEditComponent},
   //pending requests
   { path: 'pending', component: PendingRequestsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetMasterRoutingModule { }
