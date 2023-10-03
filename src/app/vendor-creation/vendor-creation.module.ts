import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorCreationRoutingModule } from './vendor-creation-routing.module';
import { VendorCreationComponent } from './vendor-creation.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VendorCreationComponent, VendorAddComponent, VendorListComponent],
  imports: [
    CommonModule,
    VendorCreationRoutingModule,
    FormsModule
  ]
})
export class VendorCreationModule { }
