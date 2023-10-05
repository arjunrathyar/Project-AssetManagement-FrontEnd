import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './purchase-order.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrderComponent } from './list-purchase-order/list-purchase-order.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [PurchaseOrderComponent, AddPurchaseOrderComponent, EditPurchaseOrderComponent, ListPurchaseOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    PurchaseOrderRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PurchaseOrderModule { }
