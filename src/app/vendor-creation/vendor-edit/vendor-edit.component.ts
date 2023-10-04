import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorCreationService } from 'src/app/shared/services/vendor-creation.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  constructor(public vendorCreationService: VendorCreationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  //Update
  editVendor(form?: NgForm) {
    console.log("editing..");
    this.vendorCreationService.updateVendor(form.value).subscribe(
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
    //update
    this.editVendor(form);
    form.resetForm();
    this.router.navigate(["vendor-creation/list"]);
  }

}
