export class AssetDefinition {
    id: number;
    assetName: string;
    assetTypeId: number;
    assetType: AssetType;
    assetClassId: number;
    assetClass: AssetClass;
  }
  
  export class AssetType {
    id: number;
    name: string;
  }
  
  export class AssetClass {
    id: number;
    name: string;
  }
  
