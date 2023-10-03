import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }

}
