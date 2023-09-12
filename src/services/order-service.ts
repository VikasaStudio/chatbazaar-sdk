import {
  OrderItems,
  OrderSchema,
  OrderStates,
} from "../interfaces/repositories/OrderRepositoryInterfaces";
import { UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import {
  IPaginationMetadata,
  IPaginationQuery,
} from "../interfaces/services/ServiceInterfaces";
import { IServiceOptions, Service } from "./service";

export class OrderService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }
  async getOrderById(orderId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<{
      data: OrderSchema;
    }>(`/${orderId}`, null, {
      ...options,
      method: "GET",
    });
    return response;
  }
  async createOrUpdateCart(
    payload: UpsertCartItemsRequest,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: {
        matchedCount: number;
        modifiedCount: number;
        upsertedCount: number;
      };
    }>(`/items`, payload, {
      ...options,
      method: "PUT",
    });
    return response;
  }
  async checkoutCart(cartId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<any>(
      `/${cartId}/checkout`,
      {},
      { ...options, method: "POST" }
    );
    return response;
  }
  async updateState(
    orderId: string,
    orderState: OrderStates,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(
      `/${orderId}/state`,
      { orderState },
      { ...options, method: "PATCH" }
    );
    return response;
  }
  async getActiveOrders(
    vendorId: string,
    queryParams?: IPaginationQuery,
    options: IServiceOptions | {} = {}
  ) {
    const response = await this.fetchApi<{
      data: OrderSchema[];
      pagination: IPaginationMetadata;
    }>(`/${vendorId}/orders`, queryParams, {
      ...options,
      method: "GET",
    });
    return response;
  }
}
