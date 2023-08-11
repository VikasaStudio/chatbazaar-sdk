import { VariantState } from "../repositories/ProductVariantRepositoryInterfaces";
export interface ProductVariantUpdateRequest {
    title?: string;
    description?: string;
    productCode?: string;
    condition?: VariantState;
    price?: number;
    sale_price?: number;
    sale_price_effective_date?: string;
    link?: string;
    image_link?: string;
    brand?: string;
    item_group_id?: string;
    item_category?: string;
}
//# sourceMappingURL=InventoryServiceInterfaces.d.ts.map