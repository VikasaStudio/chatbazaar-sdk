import {
  OrderItems,
  OrderStates,
} from "../interfaces/repositories/OrderRepositoryInterfaces";
import { UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import { IServiceOptions, Service } from "./service";

export class OrderService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }
  async getOrderById(orderId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<any>(`/${orderId}`, null, {
      ...options,
      method: "GET",
    });
    return response;
  }
  async createOrUpdateCart(
    payload: UpsertCartItemsRequest,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(`/items`, payload, {
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
}
