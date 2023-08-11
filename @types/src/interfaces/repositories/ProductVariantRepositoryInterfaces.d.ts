export declare enum VariantState {
    New = "new",
    Refurbished = "refurbished",
    Used = "used"
}
export interface ProductVariantSchema {
    _id?: string;
    vendorId: string;
    productCode?: string;
    title: string;
    description: string;
    condition: VariantState;
    price: number;
    sale_price: number;
    sale_price_effective_date: string;
    link: string;
    image_link: string;
    brand: string;
    item_group_id: string;
    item_category: string;
    quantity: number;
    syncedToGoogleSheet?: boolean;
    addedToGoogleSheet?: boolean;
    lastModifiedAt?: Date;
    createdAt?: Date;
    isActive?: boolean;
}
export interface ProductVariantFindFilter {
    vendorId?: string;
    title?: string;
    condition?: "new" | "refurbished" | "used";
    price?: number;
    sale_price?: number;
    sale_price_effective_date?: string;
    brand?: string;
    item_group_id?: string;
    item_category?: string;
    quantity?: number;
    lastModifiedAt?: Date;
    createdAt?: Date;
    isActive?: boolean;
}
//# sourceMappingURL=ProductVariantRepositoryInterfaces.d.ts.map