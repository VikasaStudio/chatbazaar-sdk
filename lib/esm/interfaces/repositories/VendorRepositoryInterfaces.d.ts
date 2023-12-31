export interface VendorSchema {
    _id?: string;
    storeCode: string;
    vendorName: string;
    vendorEmail: string;
    vendorMobile: string;
    country: "IN";
    password: string;
    storeImageUrl: string;
    isActive?: boolean;
    createdAt?: Date;
    lastModifiedAt?: Date;
}
export interface VendorUpdateSchema {
    storeCode?: string;
    vendorName?: string;
    vendorMobile?: string;
    password?: string;
    storeImageUrl?: string;
    isActive?: string;
}
//# sourceMappingURL=VendorRepositoryInterfaces.d.ts.map