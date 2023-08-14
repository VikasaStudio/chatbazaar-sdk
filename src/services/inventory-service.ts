import {
  ProductVariantFindFilter,
  ProductVariantSchema,
} from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { IServiceOptions, Service } from "./service";

export class InventoryService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }

  async getVariantsByGroupId(
    variantGroupId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: ProductVariantSchema[] }>(
      `/product/${variantGroupId}`,
      null,
      { ...options, method: "GET" }
    );
    return response;
  }
  async findVariants(
    searchQuery: ProductVariantFindFilter,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: ProductVariantSchema[] }>(
      `/variant`,
      searchQuery,
      {
        ...options,
        method: "GET",
      }
    );
    return response;
  }
  async createVariant(
    payload: ProductVariantSchema,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      variantId: {
        data: string;
        error: any;
        success: boolean;
      };
    }>("/variant", payload, { ...options, method: "POST" });
    return response;
  }
  async createBulkVariants(
    payload: ProductVariantSchema[],
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: string[] }>(
      "/bulk-variants",
      payload,
      { ...options, method: "POST" }
    );
    return response;
  }
  async patchVariantById(
    variantId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      update: {
        matchedCount: number;
        modifiedCount: number;
        upsertedCount: number;
      };
    }>(`/variant/${variantId}`, null, { ...options, method: "PATCH" });
    return response;
  }
  async deleteProduct(groupId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<any>(`/product/${groupId}`, null, {
      ...options,
      method: "DELETE",
    });
    return response;
  }
  async deleteVariant(variantId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<any>(`/variant/${variantId}`, null, {
      ...options,
      method: "DELETE",
    });
    return response;
  }
}
