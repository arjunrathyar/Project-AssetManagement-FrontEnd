import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service'
import { AssetDefinition } from 'src/app/shared/models/asset-definition.model';

@Component({
  selector: 'app-asset-definition-list',
  templateUrl: './asset-definition-list.component.html',
  styleUrls: ['./asset-definition-list.component.css']
})
export class AssetDefinitionListComponent implements OnInit {

  assetDefinitions: AssetDefinition[];

  constructor(private assetService: AssetDefinitionService) { }

  ngOnInit(): void {
    this.assetService.getAssetDefinitions().subscribe(data => {
      this.assetDefinitions = data;
    });
  }
}
