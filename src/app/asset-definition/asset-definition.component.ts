import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-definition',
  templateUrl: './asset-definition.component.html',
  styleUrls: ['./asset-definition.component.scss']
})
export class AssetDefinitionComponent implements OnInit {

  assetName: string;
  assetType: string;
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
