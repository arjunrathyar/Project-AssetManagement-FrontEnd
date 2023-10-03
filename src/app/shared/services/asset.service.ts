import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetClass } from 'src/app/shared/models/asset-class.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl = 'http://localhost:9091/api/assetclasses'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Fetch a list of asset classes from the API
  getAssetClasses(): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(this.apiUrl);
  }

  // Add a new asset class
  addAssetClass(newAssetClass: AssetClass): Observable<any> {
    return this.http.post(this.apiUrl, newAssetClass);
  }

  // Update an existing asset class
  updateAssetClass(updatedAssetClass: AssetClass): Observable<any> {
    const url = `${this.apiUrl}/${updatedAssetClass.id}`;
    return this.http.put(url, updatedAssetClass);
  }

  // Delete an asset class by ID
  deleteAssetClass(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
