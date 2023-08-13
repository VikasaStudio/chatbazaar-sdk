import { CreateVendorRequest } from "../interfaces/services/StoreServiceInterfaces";
import { Service } from "./service";
export declare class StoreService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    getStoreById(vendorId: string): Promise<import("./service").ServiceApiResponse<any>>;
    getStoreByStoreCode(storeCode: string): Promise<import("./service").ServiceApiResponse<any>>;
    createStore(payload: CreateVendorRequest): Promise<import("./service").ServiceApiResponse<any>>;
    loginVendor(payload: {
        identifierType: `EMAIL` | "STORECODE";
        identifierValue: string;
        password: string;
    }): Promise<import("./service").ServiceApiResponse<{
        refreshToken: string;
        accessToken: string;
        vendorId: string;
    }>>;
    getNewAccessToken(): Promise<import("./service").ServiceApiResponse<{
        accessToken: string;
        vendorId: string;
    }>>;
}
//# sourceMappingURL=store-service.d.ts.map