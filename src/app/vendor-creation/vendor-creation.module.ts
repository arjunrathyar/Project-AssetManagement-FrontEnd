import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorCreationRoutingModule } from './vendor-creation-routing.module';
import { VendorCreationComponent } from './vendor-creation.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { FormsModule } from '@angular/forms';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [VendorCreationComponent, VendorAddComponent, VendorListComponent, VendorEditComponent],
  imports: [
    CommonModule,
    VendorCreationRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class VendorCreationModule { }
