import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AssetMasterService } from 'src/app/shared/services/asset-master.service'

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {

  constructor(public assetMasterService: AssetMasterService,
    private router:Router) { }

  ngOnInit(): void {
  }

}
