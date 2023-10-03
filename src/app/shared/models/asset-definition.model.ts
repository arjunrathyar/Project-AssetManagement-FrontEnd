export interface AssetDefinition {
    id: number;
    assetName: string;
    assetTypeId: number;
    assetType: AssetType;
    assetClassId: number;
    assetClass: AssetClass;
  }
  
  export interface AssetType {
    id: number;
    name: string;
  }
  
  export interface AssetClass {
    id: number;
    name: string;
  }
  
