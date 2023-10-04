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

  //declare variable
  searchTerm ='';
  page: number=1;
  pageSize=5;

  constructor(public vendorCreationService: VendorCreationService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendorCreationService.getAllVendors();
  }
  //Update
  updateVendor(vendor: Vendor) {
    console.log(vendor);
    this.populateVendorData(vendor);
    this.router.navigate(['vendor-creation/edit', vendor.id])
    //Localhost:4200/vendors/edit/id   
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

  populateVendorData(vendor: Vendor) {
    this.vendorCreationService.formVendorData = Object.assign({}, vendor)

  }


}
