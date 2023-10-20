import { OrderSchema, OrderStates } from "../interfaces/repositories/OrderRepositoryInterfaces";
import { UpsertCartItemsRequest } from "../interfaces/services/OrderServiceInterfaces";
import { IPaginationMetadata, IPaginationQuery } from "../interfaces/services/ServiceInterfaces";
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
    getActiveOrders(vendorId: string, queryParams?: {
        state?: "active" | "confirmed";
    } & IPaginationQuery, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: OrderSchema[];
        pagination: IPaginationMetadata;
    }>>;
}
//# sourceMappingURL=order-service.d.ts.map