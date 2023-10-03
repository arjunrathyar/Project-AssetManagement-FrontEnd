import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDefinition } from '../models/asset-definition.model';

@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {

  private apiUrl = 'http://your-backend-url/api/asset-definitions'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  getAssetDefinitions(): Observable<AssetDefinition[]> {
    return this.http.get<AssetDefinition[]>(this.apiUrl);
  }

  createAssetDefinition(assetDefinition: AssetDefinition): Observable<AssetDefinition> {
    return this.http.post<AssetDefinition>(this.apiUrl, assetDefinition);
  }

  updateAssetDefinition(assetDefinition: AssetDefinition): Observable<AssetDefinition> {
    const url = `${this.apiUrl}/${assetDefinition.id}`;
    return this.http.put<AssetDefinition>(url, assetDefinition);
  }

  deleteAssetDefinition(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

