import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AssetMasterService } from 'src/app/shared/services/asset-master.service'

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  constructor(public assetMasterService: AssetMasterService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetMasterService.getAllAssets()
  }

  //Delete an employee
  disableEmployee(_id:number)  {
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

}
