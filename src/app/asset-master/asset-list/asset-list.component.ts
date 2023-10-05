import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetMaster } from 'src/app/shared/models/asset-master';
import {AssetMasterService } from 'src/app/shared/services/asset-master.service'

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

   //declare variable here
   searchTerm='';
   page: number=1;
   pageSize=5

  constructor(public assetMasterService: AssetMasterService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetMasterService.getAllAssets()
  }

  populateAssetMasterData(assetMaster: AssetMaster) {
    // sessionStorage.setItem('assetTypeId', assetMaster.assetTypeId.toString());
    sessionStorage.setItem('assetVendorID', assetMaster.vendorId.toString());
    sessionStorage.setItem('assetDefId', assetMaster.assetDefId.toString());
  }
 
   //Update an asset
    updateAsset(assetMaster:AssetMaster){
    console.log(assetMaster.vendorId);
    this.populateAssetMasterData(assetMaster);
    this.assetMasterService.formAssetMasterData = Object.assign({}, assetMaster);
    this.router.navigate(['asset-master/edit',assetMaster.id])
    //localhost:4200/employees/edit/id
  }


  //Delete an employee
  disableAsset(_id:number)  {
    if(confirm('Are you sure to Disable this record?')){
      this.assetMasterService.disableAsset(_id)
      .subscribe(
        (response)=>{
          this.assetMasterService.getAllAssetList()
          
          console.log(response);
          
        },
        (error)=>{
          console.log(error);
          
        }
      );
    }
  }

  //Getting employee data
  populateEmployeeData(assetMaster:AssetMaster)
  {
    this.assetMasterService.formAssetMasterData=Object.assign({},assetMaster)
  }

}
