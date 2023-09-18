import { ProductVariantFindFilter, ProductVariantSchema } from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { IPaginationMetadata, IPaginationQuery } from "../interfaces/services/ServiceInterfaces";
import { IServiceOptions, IVariantsQuantityUpdateRequest, Service } from "./service";
export declare class InventoryService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    getVariantsByGroupId(vendorId: string, variantGroupId: string, queryParams?: IPaginationQuery, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
        pagination: IPaginationMetadata;
    }>>;
    findVariants(vendorId: string, searchQuery: ProductVariantFindFilter & IPaginationQuery, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ProductVariantSchema[];
        pagination: IPaginationMetadata;
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
    patchBulkVariantyQuantity(payload: IVariantsQuantityUpdateRequest[], options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: number;
    }>>;
    patchVariantById(variantId: string, body?: Partial<Exclude<ProductVariantSchema, {
        _id: string;
        vendorId: string;
    }>> | null, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        update: {
            matchedCount: number;
            modifiedCount: number;
            upsertedCount: number;
        };
    }>>;
    deleteProduct(groupId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: number;
    }>>;
    deleteVariant(variantId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: boolean;
    }>>;
}
//# sourceMappingURL=inventory-service.d.ts.map