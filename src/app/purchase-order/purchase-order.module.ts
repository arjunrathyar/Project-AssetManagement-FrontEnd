import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './purchase-order.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrderComponent } from './list-purchase-order/list-purchase-order.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PurchaseOrderComponent, AddPurchaseOrderComponent, EditPurchaseOrderComponent, ListPurchaseOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    PurchaseOrderRoutingModule
  ]
})
export class PurchaseOrderModule { }
