import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssetDefinitionListComponent } from './asset-definition-list/asset-definition-list.component';
import { AssetDefinitionComponent } from 'src/app/asset-definition/asset-definition.component';
import { AssetService } from 'src/app/shared/services/asset.service';

@NgModule({
  declarations: [
    AssetDefinitionListComponent,
    AssetDefinitionComponent,
    // Other components if any
  ],
  imports: [
    CommonModule,
    FormsModule,
    // Other modules if any
  ],
  providers: [AssetService], // Add your services here
  exports: [
    AssetDefinitionListComponent,
    AssetDefinitionComponent,
    // Other components if any
  ],
})
export class AssetDefinitionModule { }
