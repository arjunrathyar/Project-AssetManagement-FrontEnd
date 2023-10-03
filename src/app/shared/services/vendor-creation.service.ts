import { Injectable } from '@angular/core';
import { Vendor } from '../models/vendor';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetType } from '../models/asset-definition.model';
@Injectable({
  providedIn: 'root'
})
export class VendorCreationService {

  //declare variables--global variables
  formVendorData:Vendor = new Vendor();

  //list of vendor 
  vendors: Vendor[];

  //list of assets
  assets: AssetType[];


  constructor(private httpClient: HttpClient) { }
  // Insert
  insertVendor(vendors: Vendor): Observable<any>{

    return this.httpClient.post(environment.apiUrl + '/api/vendors',vendors);

  }
  // Update
  updateVendor(vendors: Vendor): Observable<any>{

    return this.httpClient.put(environment.apiUrl + '/api/vendors',vendors);

  }
}
