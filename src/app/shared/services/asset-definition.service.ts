import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {
  private apiUrl = 'http://localhost:9091/api/assetdefinitions';
  private apiUrlForTypes = 'http://localhost:9091/api/assettypes'; // Assuming this is the correct URL
  private apiUrlForClasses = 'http://localhost:9091/api/assetclasses'; // Assuming this is the correct URL

  constructor(private http: HttpClient) {}

  getAllAssetDefinitions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addAssetDefinition(assetDefinition: any): Observable<any> {
    return this.http.post(this.apiUrl, assetDefinition);
  }

  getAssetDefinitionById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateAssetDefinition(id: number, updatedAssetDefinition: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updatedAssetDefinition);
  }

  deleteAssetDefinition(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  createAssetDefinition(newAsset: any): Observable<any> {
    return this.http.post(this.apiUrl, newAsset);
  }

  getAssetTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlForTypes);
  }
  
  getAssetClasses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlForClasses);
  }
}

