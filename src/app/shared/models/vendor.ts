import { AssetType } from 'src/app/shared/models/asset-type.model'
export class Vendor {
    id: number=0;
    vendorName: string='';
    vendorType: string='';
    validFrom: Date = new Date;
    validTo: Date = new Date;
    address:string='';
    active: boolean=false;
    assetTypeId: number=0;

    //Object Oriented Model
    assetType: AssetType = new AssetType();
}
