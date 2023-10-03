import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDefinitionListComponent } from './asset-definition-list/asset-definition-list.component';

const routes: Routes = [
  //{ path: 'asset-definition', component: AssetDefinitionComponent }
  { path: 'list', component: AssetDefinitionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetDefinitionRoutingModule { }
