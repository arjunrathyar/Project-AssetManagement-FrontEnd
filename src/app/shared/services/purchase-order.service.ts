import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../models/purchase-order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {


  //declare variables -- global variables
  formPurchaseOrderData: PurchaseOrder = new PurchaseOrder();

  // List of PurchaseOrders
  purchaseOrders: PurchaseOrder[];

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
