import {
  ProductVariantFindFilter,
  ProductVariantSchema,
} from "../interfaces/repositories/ProductVariantRepositoryInterfaces";
import { IPaginationMetadata, IPaginationQuery } from "../interfaces/services/ServiceInterfaces";
import { IServiceOptions, IVariantsQuantityUpdateRequest, Service } from "./service";

export class InventoryService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }

  async getVariantsByGroupId(
    vendorId: string,
    variantGroupId: string,
    queryParams?: IPaginationQuery,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: ProductVariantSchema[];
      pagination: IPaginationMetadata;
    }>(`${vendorId}/product/${variantGroupId}`, queryParams, {
      ...options,
      method: "GET",
    });
    return response;
  }

  async findVariants(
    vendorId: string,
    searchQuery: ProductVariantFindFilter & IPaginationQuery,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: ProductVariantSchema[];
      pagination: IPaginationMetadata;
    }>(`/${vendorId}/variant`, searchQuery, {
      ...options,
      method: "GET",
    });
    return response;
  }

  async getVariantById(
    vendorId: string,
    variantId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: ProductVariantSchema }>(
      `/${vendorId}/variant/${variantId}`,
      null,
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

  async patchBulkVariantyQuantity(
    payload: IVariantsQuantityUpdateRequest[],
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: number }>(
      "/bulk-variants/quantity",
      payload,
      { ...options, method: "PATCH" }
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
    let response = await this.fetchApi<{
      data: number
    }>(`/product/${groupId}`, null, {
      ...options,
      method: "DELETE",
    });
    return response;
  }
  async deleteVariant(variantId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<{
      data: boolean
    }>(`/variant/${variantId}`, null, {
      ...options,
      method: "DELETE",
    });
    return response;
  }
}
