import { Injectable } from '@angular/core';
import { AssetMaster } from '../models/asset-master';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {

  //declare variables--- global variable
  formAssetMasterData: AssetMaster = new AssetMaster();


  //list of Employees
  assets: AssetMaster[];



  constructor(private httpClient: HttpClient) { }
  //1. Get all employees - promises

  getAllAssets(): void {
    this.httpClient.get(environment.apiUrl + '/api/asset')
      .toPromise()
      .then(response => {
        console.log(response);
        this.assets = response as AssetMaster[]

      },
        error => {
          console.log(error);

        });
  }

  //2.get all employees - observable types
  getAllAssetList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/assets')
  }

  //3.Insert
  insertAsset(assetMaster:AssetMaster): Observable<any>{
      return this.httpClient.post(environment.apiUrl + '/api/asset',assetMaster);
  }

   
}
