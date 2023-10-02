import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDefinitionRoutingModule } from './asset-definition-routing.module';
import { AssetDefinitionComponent } from './asset-definition.component';


@NgModule({
  declarations: [AssetDefinitionComponent],
  imports: [
    CommonModule,
    AssetDefinitionRoutingModule
  ]
})
export class AssetDefinitionModule { }
