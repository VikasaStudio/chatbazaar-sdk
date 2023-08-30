import { VendorSchema } from "../interfaces/repositories/VendorRepositoryInterfaces";
import { CreateVendorRequest } from "../interfaces/services/StoreServiceInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class StoreService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    getStoreById(vendorId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: VendorSchema;
    }>>;
    getStoreByStoreCode(storeCode: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: VendorSchema;
    }>>;
    createStore(payload: CreateVendorRequest, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        refreshToken: string;
        accessToken: string;
        vendorId: string;
    }>>;
    loginVendor(payload: {
        identifierType: `EMAIL` | "STORECODE";
        identifierValue: string;
        password: string;
    }, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        refreshToken: string;
        accessToken: string;
        vendorId: string;
    }>>;
    getNewAccessToken(options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        accessToken: string;
        vendorId: string;
    }>>;
}
//# sourceMappingURL=store-service.d.ts.map