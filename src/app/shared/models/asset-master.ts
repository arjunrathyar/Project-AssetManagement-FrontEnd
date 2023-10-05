import { AssetDefinition, AssetType } from "./asset-definition.model";
import { Vendor } from "./vendor";

export class AssetMaster {

    id:number=0;
    modelName:string="";
    serialNo:string="";
    yearOfManufacture:string="";
    purchaseDate:Date = new Date;
    warranty:string = "";
    warrantyFrom:Date=new Date;
    warrantyTo:Date=new Date;
    isActive:boolean=true;
    vendorId:number=0;
    // assetTypeId:number=0;
    assetDefId:number=0;


    //object oriented model
    assetDefinition:AssetDefinition=new AssetDefinition();
    vendor:Vendor=new Vendor();



}


