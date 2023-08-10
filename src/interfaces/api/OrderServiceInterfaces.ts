import { OrderItems } from "interfaces/repositories/OrderRepositoryInterfaces";
export interface UpsertCartItemsRequest {
    cartId?: string;
    vendorId: string;
    customerId: string;
    cartItems: OrderItems[];
}
