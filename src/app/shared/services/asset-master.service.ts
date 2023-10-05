import { Injectable } from '@angular/core';
import { AssetMaster } from '../models/asset-master';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AssetDefinition, AssetType } from '../models/asset-definition.model';
import { Vendor } from '../models/vendor';


@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {

  //declare variables--- global variable
  formAssetMasterData: AssetMaster = new AssetMaster();


  //list of assets
  assets: AssetMaster[];

  //asset type
  assetTypes: AssetType[];

  //asset definition
  assetDef: AssetDefinition[];

  //list of vendors
  vendors: Vendor[];

  constructor(private httpClient: HttpClient) { }
  //1. Get all assets - promises

  getAllAssets(): void {
    this.httpClient.get(environment.apiUrl + '/api/assets')
      .toPromise()
      .then(response => {
        console.log(response);
        this.assets = response as AssetMaster[]

      },
        error => {
          console.log(error);

        });
  }

  //2.get all assets - observable types
  getAllAssetList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/assets')
  }

  //3.Insert
  insertAsset(assetMaster:AssetMaster): Observable<any>{
    console.log("In insert asset");
    console.log(assetMaster);
    
      return this.httpClient.post(environment.apiUrl + '/api/asset',assetMaster);
      
      
  }
//3.Update
updateAsset(assetMaster:AssetMaster): Observable<any>{
      
    
  return this.httpClient.put(environment.apiUrl + '/api/asset',assetMaster);
}

  //disable
  disableAsset(id:number){
    return this.httpClient.delete(environment.apiUrl + '/api/asset/disable/'+id);
  }

  //get all asset definitions
  getAllAssetDef(): void {
    this.httpClient.get(environment.apiUrl + '/api/assetdefinitions')
      .toPromise()
      .then(response => {
        console.log(response);
        this.assetDef = response as AssetDefinition[];

      },
        error => {
          console.log(error);

        });
  }

    //get all asset types
    getAllAssetType(): void {
      this.httpClient.get(environment.apiUrl + '/api/assettype')
        .toPromise()
        .then(response => {
          console.log(response);
          this.assetTypes = response as AssetType[];
  
        },
          error => {
            console.log(error);
  
          });
    }

  //get all vendors
  getAllVendors(): void {
    this.httpClient.get(environment.apiUrl + '/api/vendors')
      .toPromise()
      .then(response => {
        console.log(response);
        this.vendors = response as Vendor[];

      },
        error => {
          console.log(error);

        });
  }



   
}
