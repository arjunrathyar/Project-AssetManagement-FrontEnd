import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrderComponent } from './list-purchase-order/list-purchase-order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  
  {path:"add",component:AddPurchaseOrderComponent},
  {path:"edit/:id",component: EditPurchaseOrderComponent},
  {path:"list",component: ListPurchaseOrderComponent},
  {path:"home",component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
