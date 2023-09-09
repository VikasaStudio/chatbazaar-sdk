import { OrderSchema, OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { IGetOrdersParams, UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class OrderService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    getOrderById(orderId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: OrderSchema;
    }>>;
    createOrUpdateCart(payload: UpsertCartItemsRequest, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: {
            matchedCount: number;
            modifiedCount: number;
            upsertedCount: number;
        };
    }>>;
    checkoutCart(cartId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    updateState(orderId: string, orderState: OrderStates, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    getActiveOrders(vendorId: string, params?: IGetOrdersParams, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: OrderSchema[];
    }>>;
}
//# sourceMappingURL=order-service.d.ts.map