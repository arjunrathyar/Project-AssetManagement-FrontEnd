import { Component, OnInit } from '@angular/core';
import { AssetType, AssetClass, AssetDefinition } from '../shared/models/asset-definition.model';
import { AssetDefinitionService } from '../shared/services/asset-definition.service';

@Component({
  selector: 'app-asset-definition',
  templateUrl: './asset-definition.component.html',
  styleUrls: ['./asset-definition.component.scss']
})

export class AssetDefinitionComponent implements OnInit {
  assetDefinitions: AssetDefinition[] = [];
  selectedAssetDefinition: AssetDefinition | null = null;
  assetName: string = '';
  assetTypeId: number = 0; // Assuming the default value is 0
  assetClassId: number = 0; // Assuming the default value is 0

  constructor(private assetService: AssetDefinitionService) { }

  ngOnInit(): void {
    // Initialize your data or make API calls here
    this.assetService.getAllAssetDefinitions().subscribe(assetDefs => {
      this.assetDefinitions = assetDefs;
    });
  }

  addNewAsset(): void {
    this.isAddingNewAsset = true;
  }

  submitNewAsset(): void {
    const newAsset: AssetDefinition = {
      id: null,
      assetName: this.newAssetName,
      assetTypeId: 1,
      assetType: { id: 1, name: 'Type Name' },
      assetClassId: 1,
      assetClass: { id: 1, name: 'Class Name' }
    };

    this.assetService.addAssetDefinition(newAsset).subscribe(response => {
      console.log('Asset added successfully:', response);
      this.isAddingNewAsset = false;
      this.newAssetName = '';
    });
  }

  editAssetDefinition(assetDefinition: AssetDefinition): void {
    this.selectedAssetDefinition = assetDefinition;
  }

  updateAssetDefinition(): void {
    if (this.selectedAssetDefinition) {
      this.assetService.updateAssetDefinition(this.selectedAssetDefinition.id, this.selectedAssetDefinition)
        .subscribe(response => {
          console.log('Asset updated successfully:', response);
          this.selectedAssetDefinition = null;
        });
    }
  }

  deleteAssetDefinition(): void {
    if (this.selectedAssetDefinition) {
      this.assetService.deleteAssetDefinition(this.selectedAssetDefinition.id)
        .subscribe(response => {
          console.log('Asset deleted successfully:', response);
          this.selectedAssetDefinition = null;
        });
    }
  }
}
