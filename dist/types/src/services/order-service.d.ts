import { OrderItems, OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { Service } from "./service";
export interface UpsertCartItemsRequest {
    cartId?: string;
    vendorId: string;
    customerId: string;
    cartItems: OrderItems[];
}
export declare class OrderService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    getOrderById(orderId: string): Promise<import("./service").ServiceApiResponse<any>>;
    createOrUpdateCart(payload: UpsertCartItemsRequest): Promise<import("./service").ServiceApiResponse<any>>;
    checkoutCart(cartId: string): Promise<import("./service").ServiceApiResponse<any>>;
    updateState(orderId: string, orderState: OrderStates): Promise<import("./service").ServiceApiResponse<any>>;
}
