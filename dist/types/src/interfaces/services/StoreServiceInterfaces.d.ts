export interface CreateVendorRequest {
    storeCode: string;
    vendorName: string;
    vendorEmail: string;
    vendorMobile: string;
    password: string;
    storeImageUrl?: string;
    country: string;
}
