import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/shared/models/vendor';
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
  // 1 Get all vendors - Promises
  // http://localhost:9091/api/vendors
  getAllVendors(): void{

    //getting the data
    this.httpClient.get(environment.apiUrl + '/api/vendors')
    .toPromise()
    .then(response =>{
      console.log(response);
      this.vendors = response as Vendor[];
    },
    error =>{
      console.log(error);
      
    });
    

  }

  // Get all vendors - Observable Types
  getAllVendorslist(): Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/vendors')

  }
  // Insert
  insertVendor(vendors: Vendor): Observable<any>{

    return this.httpClient.post(environment.apiUrl + '/api/vendors',vendors);

  }
  // Update
  updateVendor(vendors: Vendor): Observable<any>{

    return this.httpClient.put(environment.apiUrl + '/api/vendors',vendors);

  }
  //Disable
  disableVendor(id: number){

    return this.httpClient.delete(environment.apiUrl + '/api/vendors/'+id);

 }
 // Get all assets
 getAllAssets(): void{

  //getting the data
  this.httpClient.get(environment.apiUrl + '/api/assettype')
  .toPromise()
  .then(response =>{
    console.log(response);
    this.assets = response as AssetType[];
    console.log(this.assets + "assets");
    
  },
  error =>{
    console.log(error);
    
  });
  

}
  

}
