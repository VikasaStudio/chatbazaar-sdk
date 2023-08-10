import { Service } from "./service";

export interface CreateVendorRequest {
    storeCode: string,
    vendorName: string,
    vendorEmail: string,
    vendorMobile: string,
    password: string,
    storeImageUrl ?: string,
    country:string
}

export class StoreService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string) {
        super(serviceBaseUrl, serviceToken);
    }
    async getStoreById(vendorId: string) {
        let response = await this.fetchApi(`/${vendorId}`);
        return response;
    }
    async getStoreByStoreCode(storeCode: string) {
        let response = await this.fetchApi(`/code/${storeCode}`);
        return response;
    }
    async createStore(payload:CreateVendorRequest) {
        let response = await this.fetchApi(`/register`, payload, 'POST');
        return response;
    }
}