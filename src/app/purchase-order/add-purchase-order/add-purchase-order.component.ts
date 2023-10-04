import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/shared/services/purchase-order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.scss']
})
export class AddPurchaseOrderComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaseOrderService,private router: Router) { }

  ngOnInit(): void {
    this.purchaseOrderService.getAllVendors();
    this.purchaseOrderService.getAllAssetDefinitions();
    //this.purchaseOrderService.getAllAssetTypes();
  }

  addPurchaseOrder(form: NgForm){
    console.log("Inserting...");
    this.purchaseOrderService.insertPurchaseOrders(form.value).subscribe((response)=>{
      //console.log(response);
    },
    (error)=>{
      console.log(error);
    })
  }

  //submit form

  onSubmit(form:NgForm){
    let someDate = new Date();
    //form.value.assetTypeId=1;
    //form.value.assetQuantity=1;

    form.value.assetPurchaseOrderNumber=Math.floor(Math.random()*90000) + 10000;
    form.value.assetOrderDate=new Date().toJSON().slice(0,10).split('-').join('-');
    someDate.setDate(new Date().getDate() + 5);
    form.value.assetDeliveryDate=someDate.toJSON().slice(0,10).split('-').join('-');
    form.value.assetStatusID=1;
    form.value.active=true;
    console.log(form.value);
    //insert
    this.addPurchaseOrder(form);
    form.reset();
    //this.router.navigate(['/purchase-order/list'])
  }

}
