import { OrderItems } from "../repositories/OrderRepositoryInterfaces";
export interface UpsertCartItemsRequest {
    cartId?: string;
    vendorId: string;
    customerId: string;
    cartItems: OrderItems[];
}
//# sourceMappingURL=OrderServiceInterfaces.d.ts.map