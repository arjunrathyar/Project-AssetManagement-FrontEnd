import { Component, OnInit } from '@angular/core';
import { AssetType, AssetClass, AssetDefinition } from '../shared/models/asset-definition.model';
import { AssetDefinitionService } from '../shared/services/asset-definition.service';
import { AssetService } from '../shared/services/asset.service';

@Component({
  selector: 'app-asset-definition',
  templateUrl: './asset-definition.component.html',
  styleUrls: ['./asset-definition.component.scss']
})

export class AssetDefinitionComponent implements OnInit {
  assetDefinitions: AssetDefinition[] = [];
  selectedAssetDefinition: AssetDefinition | null = null;
  isAddingNewAsset: boolean = false;
  newAssetName: string = '';

  constructor(private assetService: AssetDefinitionService,
    private assetTypeService: AssetService) {}

  ngOnInit(): void {
    this.assetTypeService.getAllAssetType();
    console.log(this.assetTypeService.asset);
    // Initialize your data or make API calls here
    this.assetService.getAllAssetDefinitions().subscribe(definitions => {
      this.assetDefinitions = definitions;
      console.log(this.assetDefinitions + "hiiii")
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
      this.assetDefinitions.push(response); // Add the new asset to the list
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
        .subscribe(() => {
          console.log('Asset deleted successfully');
          this.selectedAssetDefinition = null;
          this.assetDefinitions = this.assetDefinitions.filter(def => def.id !== this.selectedAssetDefinition?.id);
        });
    }
  }
}  
