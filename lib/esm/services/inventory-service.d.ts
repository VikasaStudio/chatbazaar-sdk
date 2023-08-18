import { ProductVariantFindFilter, ProductVariantSchema } from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { IServiceOptions, IVariantsQuantityUpdateRequest, Service } from "./service";
export declare class InventoryService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    getVariantsByGroupId(vendorId: string, variantGroupId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
    }>>;
    findVariants(vendorId: string, searchQuery: ProductVariantFindFilter, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
    }>>;
    getVariantById(vendorId: string, variantId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema;
    }>>;
    createVariant(payload: ProductVariantSchema, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        variantId: {
            data: string;
            error: any;
            success: boolean;
        };
    }>>;
    createBulkVariants(payload: ProductVariantSchema[], options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: string[];
    }>>;
    patchBulkVariantyQuantity(payload: IVariantsQuantityUpdateRequest[], options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<ProductVariantSchema[]>>;
    patchVariantById(variantId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        update: {
            matchedCount: number;
            modifiedCount: number;
            upsertedCount: number;
        };
    }>>;
    deleteProduct(groupId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    deleteVariant(variantId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=inventory-service.d.ts.map