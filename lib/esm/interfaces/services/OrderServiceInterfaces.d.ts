import { OrderItems } from "../repositories/OrderRepositoryInterfaces";
export interface IGetOrdersParams {
    start?: number;
    limit?: number;
    sort?: {
        [key: string]: number;
    };
}
export interface UpsertCartItemsRequest {
    cartId?: string;
    vendorId: string;
    customerId: string;
    cartItems: OrderItems[];
}
//# sourceMappingURL=OrderServiceInterfaces.d.ts.map