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
  }
 //insert
 addAsset(form: NgForm) {
  console.log('Inserting...');
  this.assetMasterService.insertAsset(form.value).subscribe(
    (response) => {
      console.log(response);

    },
    (error) => {
      console.log(error);

    }
  )

}

//submit form
onSubmit(form:NgForm) {
  console.log(form.value);
  //Insert
  this.addAsset(form);
  form.resetForm();
  this.router.navigate(["/assets/list"])
  
}

}
