import { OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class OrderService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    getOrderById(orderId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    createOrUpdateCart(payload: UpsertCartItemsRequest, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    checkoutCart(cartId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    updateState(orderId: string, orderState: OrderStates, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=order-service.d.ts.map