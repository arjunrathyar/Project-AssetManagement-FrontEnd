import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorCreationRoutingModule } from './vendor-creation-routing.module';
import { VendorCreationComponent } from './vendor-creation.component';


@NgModule({
  declarations: [VendorCreationComponent],
  imports: [
    CommonModule,
    VendorCreationRoutingModule
  ]
})
export class VendorCreationModule { }
