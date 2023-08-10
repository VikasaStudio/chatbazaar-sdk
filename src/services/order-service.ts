import { OrderItems, OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { Service } from "./service";

export interface UpsertCartItemsRequest {
    cartId?: string;
    vendorId: string;
    customerId: string;
    cartItems: OrderItems[];
}

export class OrderService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string) {
        super(serviceBaseUrl, serviceToken);
    }
    async getOrderById(orderId: string) {
        let response = await this.fetchApi(`/${orderId}`);
        return response;
    }
    async createOrUpdateCart(payload: UpsertCartItemsRequest) {
        let response = await this.fetchApi(`/items`, payload, 'PUT');
        return response;
    }
    async checkoutCart(cartId:string) {
        let response = await this.fetchApi(`/${cartId}/checkout`, {}, 'POST');
        return response;
    }
    async updateState(orderId: string, orderState:OrderStates) {
        let response = await this.fetchApi(`/${orderId}/state`, {orderState}, 'PATCH');
        return response;
    }
}