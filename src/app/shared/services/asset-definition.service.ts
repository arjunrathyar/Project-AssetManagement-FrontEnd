import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDefinition } from '../models/asset-definition.model';
import { AssetClass } from '../models/asset-definition.model';
import { AssetType } from '../models/asset-definition.model';


@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {
  private apiUrl = 'http://localhost:9091/api/assetdefinitions';
  private apiUrlForTypes = 'http://localhost:9091/api/assettypes';
  private apiUrlForClasses = 'http://localhost:9091/api/assetclasses';

  constructor(private http: HttpClient) {}

  getAllAssetDefinitions(): Observable<AssetDefinition[]> {
    return this.http.get<AssetDefinition[]>(this.apiUrl);
  }

  getAssetDefinitionById(id: number): Observable<AssetDefinition> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AssetDefinition>(url);
  }
  

  addAssetDefinition(assetDefinition: AssetDefinition): Observable<AssetDefinition> {
    return this.http.post<AssetDefinition>(this.apiUrl, assetDefinition);
  }

  updateAssetDefinition(id: number, updatedAssetDefinition: AssetDefinition): Observable<AssetDefinition> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<AssetDefinition>(url, updatedAssetDefinition);
  }

  deleteAssetDefinition(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  createAssetDefinition(newAsset: AssetDefinition): Observable<AssetDefinition> {
    return this.http.post<AssetDefinition>(this.apiUrl, newAsset);
  }

  getAssetTypes(): Observable<AssetType[]> {
    return this.http.get<AssetType[]>(this.apiUrlForTypes);
  }
  
  getAssetClasses(): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(this.apiUrlForClasses);
  }
}

