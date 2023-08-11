import { VariantState, ProductVariantFindFilter, ProductVariantSchema } from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { Service } from "./service";
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
export declare class InventoryService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    getVariantsByGroupId(variantGroupId: string): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
    }>>;
    findVariants(searchQuery: ProductVariantFindFilter): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
    }>>;
    createVariant(payload: ProductVariantSchema): Promise<import("./service").ServiceApiResponse<{
        variantId: {
            data: string;
            error: any;
            success: boolean;
        };
    }>>;
    createBulkVariants(payload: ProductVariantSchema[]): Promise<import("./service").ServiceApiResponse<{
        data: string[];
    }>>;
    patchVariantById(variantId: string): Promise<import("./service").ServiceApiResponse<{
        update: {
            matchedCount: number;
            modifiedCount: number;
            upsertedCount: number;
        };
    }>>;
    deleteProduct(groupId: string): Promise<import("./service").ServiceApiResponse<any>>;
    deleteVariant(variantId: string): Promise<import("./service").ServiceApiResponse<any>>;
}
