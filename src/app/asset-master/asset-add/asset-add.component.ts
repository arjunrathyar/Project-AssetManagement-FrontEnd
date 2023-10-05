import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AssetMasterService } from 'src/app/shared/services/asset-master.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {

  constructor(public assetMasterService: AssetMasterService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetMasterService.getAllAssetDef()
    this.assetMasterService.getAllAssetType()
    this.assetMasterService.getAllVendors()
  }
 //insert
 addAsset(form?: NgForm) {
  console.log('Inserting...');
  console.log(form.value);
  
  // form.value.assetTypeId=sessionStorage.getItem('assetTypeId');
  form.value.vendorId=sessionStorage.getItem('assetVendorID');
  console.log(form.value.vendorId);
  
  form.value.assetDefId=sessionStorage.getItem('assetDefId');
  // sessionStorage.removeItem('assetTypeId');
  sessionStorage.removeItem('assetVendorID');
  sessionStorage.removeItem('assetDefId');
  this.assetMasterService.insertAsset(form.value).subscribe(
    
    
    (response) => {
      
      console.log(response);

    },
    (error) => {
      console.log(error);
      console.log("h");
      

    }
  )

}

//submit form
onSubmit(form:NgForm) {

  
  console.log(form.value);
  //Insert
  this.addAsset(form);
  form.resetForm();
  this.router.navigate(["/asset-master/list"])
  
}

}
