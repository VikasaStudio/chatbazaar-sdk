import { VariantState, ProductVariantFindFilter, ProductVariantSchema } from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { Service } from "./service";

export interface ProductVariantUpdateRequest {
    title?: string,
    description?: string,
    productCode?: string,
    condition?: VariantState,
    price?: number,
    sale_price?: number,
    sale_price_effective_date?: string,
    link?:string,
    image_link?:string,
    brand?:string,
    item_group_id?:string,
    item_category?:string
    // quantity?:number
}

export class InventoryService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string) {
        super(serviceBaseUrl, serviceToken);
    }
    async getVariantsByGroupId(variantGroupId: string) {
        let response = await this.fetchApi(`/product/${variantGroupId}`);
        return response;
    }
    async findVariants(searchQuery: ProductVariantFindFilter) {
        let response = await this.fetchApi(`/variant`, searchQuery);
        return response;
    }
    async createVariant(payload:ProductVariantSchema) {
        let response = await this.fetchApi('/variant', payload, 'POST');
        return response;
    }
    async createBulkVariants(payload:ProductVariantSchema[]) {
        let response = await this.fetchApi('/bulk-variants', payload, 'POST');
        return response;
    }
    async patchVariantById(variantId: string) {
        let response = await this.fetchApi(`/variant/${variantId}`, {}, 'PATCH');
        return response;
    }
    async deleteProduct(groupId: string) {
        let response = await this.fetchApi(`/product/${groupId}`, {}, 'DELETE');
        return response;
    }
    async deleteVariant(variantId: string) {
        let response = await this.fetchApi(`/variant/${variantId}`, {}, 'DELETE');
        return response;
    }
}