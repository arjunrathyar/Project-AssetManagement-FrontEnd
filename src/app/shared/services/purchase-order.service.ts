import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../models/purchase-order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../models/vendor';
import { AssetDefinition, AssetType } from '../models/asset-definition.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {


  //declare variables -- global variables
  formPurchaseOrderData: PurchaseOrder = new PurchaseOrder();

  // List of PurchaseOrders
  purchaseOrders: PurchaseOrder[];

  //List of Vendors
  vendors: Vendor[];

  //List of Asset Types
  //types:AssetType[];

  //List of Asset Defenition
  definitions: AssetDefinition[];

  constructor(private httpClient: HttpClient) { }

  //Create
  insertPurchaseOrders(purchaseOrders: PurchaseOrder): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/purchaseorders", purchaseOrders);
  }

  //Read
  getAllPurchaseOrdersList(): void {
    this.httpClient.get(environment.apiUrl + "/api/purchaseorders")
      .toPromise()
      .then(response => {
        console.log(response);
        this.purchaseOrders = response as PurchaseOrder[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }

  //Update
  updatePurchaseOrders(purchaseOrders: PurchaseOrder): Observable<any> {
    console.log("Update");
    
    return this.httpClient.put(environment.apiUrl + "/api/purchaseorders", purchaseOrders);
  }

  //Delete
  deletePurchaseOrders(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/purchaseorders/" + id);
  }


  
  //get vendors
  getAllVendors(): void {
    this.httpClient.get(environment.apiUrl + "/api/vendors")
      .toPromise()
      .then(response => {
        //console.log(response);
        this.vendors = response as Vendor[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }


  //get assetdefinitions
  getAllAssetDefinitions(): void {
    this.httpClient.get(environment.apiUrl + "/api/assetdefinitions")
      .toPromise()
      .then(response => {
        //console.log(response);
        this.definitions = response as AssetDefinition[];   //storing in array
      },
        error => {
          console.log('Error');
        }
       );
   }


  // //get assettypes
  // getAllAssetTypes(): void {
  //   this.httpClient.get(environment.apiUrl + "/api/assettype")
  //     .toPromise()
  //     .then(response => {
  //       //console.log(response);
  //       this.types = response as AssetType[];   //storing in array
  //     },
  //       error => {
  //         console.log('Error');
  //       }
  //     );
  // }




  //get some orders whose status is 4
  getSomeOrders(): void {
    this.httpClient.get(environment.apiUrl + '/api/pendingpurchaseorders')
      .toPromise()
      .then(response => {
        console.log(response)
        this.purchaseOrders = response as PurchaseOrder[]
      },
        error => {
          console.log(error)
        });

  }
}
