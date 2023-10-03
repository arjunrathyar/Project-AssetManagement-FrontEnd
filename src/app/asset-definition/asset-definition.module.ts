import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetDefinitionListComponent } from 'src/app/asset-definition/asset-definition-list/asset-definition-list.component';
import { AssetDefinitionRoutingModule } from './asset-definition-routing.module';

@NgModule({
  declarations: [AssetDefinitionListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AssetDefinitionRoutingModule
  ]
})
export class AssetDefinitionModule { }
