import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorCreationService } from 'src/app/shared/services/vendor-creation.service';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {

  constructor(public vendorCreationService: VendorCreationService,
    private router: Router) { }

  ngOnInit(): void {
    //get all departments
    this.vendorCreationService.getAllAssets();
  }
  //Insert
  addVendor(form: NgForm) {
    console.log("Inserting..");
    this.vendorCreationService.insertVendor(form.value).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);

      }
    )

  }
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    //Insert
    this.addVendor(form);
    form.resetForm();
    this.router.navigateByUrl("/vendors/list");
  }

}
