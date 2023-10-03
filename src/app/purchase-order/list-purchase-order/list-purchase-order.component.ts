import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from "../../shared/services/purchase-order.service";

@Component({
  selector: 'app-list-purchase-order',
  templateUrl: './list-purchase-order.component.html',
  styleUrls: ['./list-purchase-order.component.scss']
})
export class ListPurchaseOrderComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaseOrderService, private router: Router) { }

  ngOnInit(): void {
    console.log("In PurchaseOrders-List component")
    this.purchaseOrderService.getAllPurchaseOrdersList();
  }

}
