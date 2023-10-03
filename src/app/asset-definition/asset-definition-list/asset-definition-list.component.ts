import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from 'src/app/shared/services/asset-definition.service';
import { AssetDefinition } from 'src/app/shared/models/asset-definition.model'; // Assuming this is the correct path


@Component({
  selector: 'app-asset-definition-list',
  templateUrl: './asset-definition-list.component.html'
})

export class AssetDefinitionListComponent implements OnInit {
  assetDefinitions: AssetDefinition[] = [];
  selectedAssetDefinition: AssetDefinition | null = null;

  constructor(private assetDefinitionService: AssetDefinitionService) {}

  ngOnInit() {
    this.loadAssetDefinitions();
  }

  loadAssetDefinitions() {
    this.assetDefinitionService.getAllAssetDefinitions()
      .subscribe(
        assetDefs => {
          this.assetDefinitions = assetDefs;
        },
        error => {
          console.error('Error fetching asset definitions:', error);
        }
      );
  }

  editAssetDefinition(assetDefinition: AssetDefinition) {
    this.selectedAssetDefinition = { ...assetDefinition }; // Create a copy to avoid changing the original object directly
  }

  updateAssetDefinition() {
    if (this.selectedAssetDefinition) {
      this.assetDefinitionService.updateAssetDefinition(this.selectedAssetDefinition.id, this.selectedAssetDefinition)
        .subscribe(
          () => {
            this.loadAssetDefinitions();
            this.selectedAssetDefinition = null; // Reset selectedAssetDefinition after successful update
          },
          error => {
            console.error('Error updating asset definition:', error);
          }
        );
    }
  }

  deleteAssetDefinition(id: number) {
    this.assetDefinitionService.deleteAssetDefinition(id)
      .subscribe(
        () => {
          this.loadAssetDefinitions();
        },
        error => {
          console.error('Error deleting asset definition:', error);
        }
      );
  }
}

