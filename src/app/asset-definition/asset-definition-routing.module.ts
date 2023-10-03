import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDefinitionComponent } from './asset-definition.component';

const routes: Routes = [
  { path: 'asset-definition', component: AssetDefinitionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetDefinitionRoutingModule { }
