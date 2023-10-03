import { Component, OnInit } from '@angular/core';
import { AssetType } from 'src/app/shared/models/asset-type.model';
import { AssetClass } from 'src/app/shared/models/asset-class.model';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';

@Component({
  selector: 'app-asset-definition',
  templateUrl: './asset-definition.component.html',
  styleUrls: ['./asset-definition.component.scss']
})
export class AssetDefinitionComponent implements OnInit {

  assetName: string;
  assetTypeId: number;
  assetClassId: number;
  assetTypes: AssetType[];
  assetClasses: AssetClass[];

  constructor(private assetService: AssetDefinitionService) { }

  ngOnInit(): void {
    this.assetService.getAssetTypes().subscribe(types => {
      this.assetTypes = types;
    });

    this.assetService.getAssetClasses().subscribe(classes => {
      this.assetClasses = classes;
    });
  }

  onSubmit() {
    const newAsset = {
      assetName: this.assetName,
      assetTypeId: this.assetTypeId,
      assetClassId: this.assetClassId
    };

    this.assetService.createAssetDefinition(newAsset).subscribe(response => {
      console.log('Asset created successfully:', response);
    });
  }
}
