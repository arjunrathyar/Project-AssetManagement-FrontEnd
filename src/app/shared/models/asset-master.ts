import { AssetDefinition, AssetType } from "./asset-definition.model";

export class AssetMaster {

    id:number=0;
    model:string="";
    serialNo:string="";
    yearOfManufacture:string="";
    purchaseDate:Date = new Date;
    warranty:string = "";
    warrantyFrom:string="";
    warrantyTo:string="";
    isActive:boolean=true;
    vendorId:number=0;
    assetTypeId:number=0;
    assetDefId:number=0;


    //object oriented model
    assetType:AssetType=new AssetType();
    assetDefinition:AssetDefinition=new AssetDefinition();



}

