import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/shared/services/asset.service';
import { AssetClass } from 'src/app/shared/models/asset-class.model';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  assetClasses: AssetClass[] = [];

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assetService.getAssetClasses().subscribe(classes => {
      this.assetClasses = classes;
    });
  }

  addNewAssetClass(newAssetClass: AssetClass) {
    this.assetService.addAssetClass(newAssetClass).subscribe(response => {
      // Handle success, e.g., show a success message
      console.log('Asset class added successfully!', response);
    }, error => {
      // Handle error, e.g., show an error message
      console.error('Error adding asset class:', error);
    });
  }

  updateExistingAssetClass(updatedAssetClass: AssetClass) {
    this.assetService.updateAssetClass(updatedAssetClass).subscribe(response => {
      // Handle success, e.g., show a success message
      console.log('Asset class updated successfully!', response);
    }, error => {
      // Handle error, e.g., show an error message
      console.error('Error updating asset class:', error);
    });
  }

  deleteAssetClass(id: number) {
    this.assetService.deleteAssetClass(id).subscribe(response => {
      // Handle success, e.g., show a success message
      console.log('Asset class deleted successfully!', response);

      // Update the list of asset classes after deletion
      this.assetService.getAssetClasses().subscribe(classes => {
        this.assetClasses = classes;
      });
    }, error => {
      // Handle error, e.g., show an error message
      console.error('Error deleting asset class:', error);
    });
  }
}
