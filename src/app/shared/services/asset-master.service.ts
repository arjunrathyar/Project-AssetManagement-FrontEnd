import { Injectable } from '@angular/core';
import { AssetMaster } from '../models/asset-master';

@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {

  //declare variables--- global variable
  formAssetMasterData: AssetMaster = new AssetMaster();


  //list of Employees
  assets: AssetMaster[];



  constructor() { }
}
