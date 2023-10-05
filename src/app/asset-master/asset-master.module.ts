import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetMasterRoutingModule } from './asset-master-routing.module';
import { AssetMasterComponent } from './asset-master.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { FormsModule } from '@angular/forms';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [AssetMasterComponent, AssetAddComponent, AssetListComponent, AssetEditComponent, PendingRequestsComponent],
  imports: [
    CommonModule,
    AssetMasterRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AssetMasterModule { }
