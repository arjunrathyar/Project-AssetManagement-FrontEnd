import { Injectable } from '@angular/core';
import { Vendor } from '../models/vendor';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
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
