import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'src/app/shared/models/purchase-order';
import { PurchaseOrderService } from 'src/app/shared/services/purchase-order.service';
import { AssetMasterService } from 'src/app/shared/services/asset-master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.scss']
})
export class PendingRequestsComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaseOrderService, 
    public assetMasterService: AssetMasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.purchaseOrderService.getSomeOrders();
  }
  populateAssetMasterData(purchaseOrder: PurchaseOrder) {
   
    // sessionStorage.setItem('assetTypeId', purchaseOrder.assetDefinition.assetTypeId.toString());
    sessionStorage.setItem('assetVendorID', purchaseOrder.assetVendorID.toString());
    sessionStorage.setItem('assetDefId', purchaseOrder.assetDefId.toString());
  }

  addAssetMaster(purchaseOrder: PurchaseOrder) {
    console.log(purchaseOrder);
    purchaseOrder.status.id=5;
    this.purchaseOrderService.insertPurchaseOrders(purchaseOrder).subscribe(
      (response) => {
        console.log(response);
        
        
      },
      (error) => {
        console.log(error)
        
        
      }
    )
    this.populateAssetMasterData(purchaseOrder);
    this.router.navigate(['/asset-master/add'])
  }


}
