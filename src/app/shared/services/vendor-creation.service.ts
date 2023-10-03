import { Injectable } from '@angular/core';

import { AssetType } from '../models/asset-definition.model';
@Injectable({
  providedIn: 'root'
})
export class VendorCreationService {

  //declare variables--global variables
  formVendorData:Vendor = new Vendor();

  //list of vendor 
  vendor: Vendor[];


  constructor(private httpClient: HttpClient) { }
  //3 Insert
  insertVendor(vendor: Vendor): Observable<any>{

    return this.httpClient.post(environment.apiUrl + '/api/vendors',vendor);

  }
}
