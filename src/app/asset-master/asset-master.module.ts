import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetMasterRoutingModule } from './asset-master-routing.module';
import { AssetMasterComponent } from './asset-master.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssetMasterComponent, AssetAddComponent, AssetListComponent],
  imports: [
    CommonModule,
    AssetMasterRoutingModule,
    FormsModule
  ]
})
export class AssetMasterModule { }
