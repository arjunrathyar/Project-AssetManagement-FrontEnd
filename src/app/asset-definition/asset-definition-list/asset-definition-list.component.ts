import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';
import { AssetDefinition } from 'src/app/shared/models/asset-definition.model'; // Assuming this is the correct path


@Component({
  selector: 'app-asset-definition-list',
  templateUrl: './asset-definition-list.component.html',
  styleUrls: ['./asset-definition-list.component.scss']
})
export class AssetDefinitionListComponent implements OnInit {

  assetDefinitions: AssetDefinition[];
  selectedAssetDefinition: AssetDefinition;

  constructor(private assetService: AssetDefinitionService) { }

  ngOnInit(): void {
    this.loadAssetDefinitions();
  }

  loadAssetDefinitions() {
    this.assetService.getAllAssetDefinitions().subscribe(definitions => {
      this.assetDefinitions = definitions;
    });
  }

  editAssetDefinition(assetDefinition) {
    this.selectedAssetDefinition = { ...assetDefinition }; // Copy the selected asset for editing
  }

  updateAssetDefinition() {
    // Use this.selectedAssetDefinition to send an update request to your API
    this.assetService.updateAssetDefinition(this.selectedAssetDefinition.id, this.selectedAssetDefinition)
      .subscribe(response => {
        // Handle response if needed
        this.selectedAssetDefinition = null; // Clear selected asset after update
        this.loadAssetDefinitions(); // Reload the list
      });
  }

  deleteAssetDefinition(assetDefinition) {
    // Send a request to delete the assetDefinition from your API
    this.assetService.deleteAssetDefinition(assetDefinition.id)
      .subscribe(response => {
        // Handle response if needed
        const index = this.assetDefinitions.indexOf(assetDefinition);
        if (index !== -1) {
          this.assetDefinitions.splice(index, 1);
        }
      });
  }
}
