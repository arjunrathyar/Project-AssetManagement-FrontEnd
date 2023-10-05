import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetMasterService } from 'src/app/shared/services/asset-master.service';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  constructor(public assetMasterService: AssetMasterService,
    private router:Router) { }

  ngOnInit(): void {
    this.assetMasterService.getAllAssetDef()
    this.assetMasterService.getAllAssetType()
    this.assetMasterService.getAllVendors()
  }
  //update
  editAsset(form?: NgForm) {
    console.log('editing...');
    // form.value.assetTypeId=sessionStorage.getItem('assetTypeId');/
    form.value.vendorId=sessionStorage.getItem('assetVendorID');
  console.log(form.value.vendorId);
  
  form.value.assetDefId=sessionStorage.getItem('assetDefId');
  // sessionStorage.removeItem('assetTypeId');
  sessionStorage.removeItem('vendorId');
  sessionStorage.removeItem('assetDefId');
    this.assetMasterService.updateAsset(form.value).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);

      }
    )

  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //Update
    this.editAsset(form);
    //form.resetForm();
    this.router.navigate(["/asset-master/list"])

  }

}
