import { Service } from "./service";
export interface CreateVendorRequest {
    storeCode: string;
    vendorName: string;
    vendorEmail: string;
    vendorMobile: string;
    password: string;
    storeImageUrl?: string;
    country: string;
}
export declare class StoreService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    getStoreById(vendorId: string): Promise<import("./service").ServiceApiResponse<any>>;
    getStoreByStoreCode(storeCode: string): Promise<import("./service").ServiceApiResponse<any>>;
    createStore(payload: CreateVendorRequest): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=store-service.d.ts.map