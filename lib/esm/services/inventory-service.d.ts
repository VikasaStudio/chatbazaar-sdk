import { ProductVariantFindFilter, ProductVariantSchema } from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { Service } from "./service";
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
//# sourceMappingURL=inventory-service.d.ts.map