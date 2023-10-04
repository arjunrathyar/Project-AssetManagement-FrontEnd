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
  }

  addPurchaseOrder(form: NgForm){
    console.log("Inserting...");
    this.purchaseOrderService.insertPurchaseOrders(form.value).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    })
  }

  //submit form

  onSubmit(form:NgForm){
    console.log(form.value);
    //insert
    this.addPurchaseOrder(form);
    form.reset();
    this.router.navigate(['/purchase-order/list'])
  }

}
