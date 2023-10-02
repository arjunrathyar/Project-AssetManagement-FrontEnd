import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetMasterRoutingModule } from './asset-master-routing.module';
import { AssetMasterComponent } from './asset-master.component';


@NgModule({
  declarations: [AssetMasterComponent],
  imports: [
    CommonModule,
    AssetMasterRoutingModule
  ]
})
export class AssetMasterModule { }
