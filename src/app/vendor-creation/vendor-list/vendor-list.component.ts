import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/shared/models/vendor';
import { VendorCreationService } from 'src/app/shared/services/vendor-creation.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  constructor(public vendorCreationService: VendorCreationService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendorCreationService.getAllVendors();
  }
  //Update
  updateVendor(vendor: Vendor) {
    console.log(vendor);
    //this.populateEmployeeData(employee);
    this.router.navigate(['vendors/edit', vendor.id])
    //Localhost:4200/employees/edit/id   
  }
  //Disable
  disableVendor(_id: number){

    if(confirm('Are you sure to disable this record?')){

      this.vendorCreationService.disableVendor(_id)
      .subscribe(
        (response)=>{
          console.log(response);
          this.vendorCreationService.getAllVendors();

        },
        (error)=>{
          console.log(error);
          
        }
      )
    }

  }
  //Getting a vendor data

  populateEmployeeData(vendor: Vendor) {
    this.vendorCreationService.formVendorData = Object.assign({}, vendor)

  }


}
