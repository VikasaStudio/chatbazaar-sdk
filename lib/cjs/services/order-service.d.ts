import { OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import { Service } from "./service";
export declare class OrderService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    getOrderById(orderId: string): Promise<import("./service").ServiceApiResponse<any>>;
    createOrUpdateCart(payload: UpsertCartItemsRequest): Promise<import("./service").ServiceApiResponse<any>>;
    checkoutCart(cartId: string): Promise<import("./service").ServiceApiResponse<any>>;
    updateState(orderId: string, orderState: OrderStates): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=order-service.d.ts.map