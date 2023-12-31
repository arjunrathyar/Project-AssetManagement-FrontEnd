import { AssetDefinition } from "./asset-definition.model";
//import { AssetType } from "./asset-type.model";
import { PurchaseStatus } from "./purchase-status";
import { Vendor } from "./vendor";

export class PurchaseOrder {
 
    id : number = 0;
    assetPurchaseOrderNumber : number = 0;
    assetDefId: number = 0;
    assetDefinition: AssetDefinition;
    //assetTypeId: number = 0;
    //assetType: AssetType;
    assetQuantity: number = 0;
    assetVendorID: number = 0;
    vendor: Vendor;
    assetOrderDate: Date;
    assetDeliveryDate: Date;
    assetStatusID: number;
    status: PurchaseStatus;
    active: boolean = false;

}
