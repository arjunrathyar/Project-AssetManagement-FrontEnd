import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AssetDefinitionComponent } from './asset-definition.component';
import { AssetDefinitionRoutingModule } from './asset-definition-routing.module';

@NgModule({
  declarations: [AssetDefinitionComponent],
  imports: [
    CommonModule,
    FormsModule,
    AssetDefinitionRoutingModule
  ]
})
export class AssetDefinitionModule { }
