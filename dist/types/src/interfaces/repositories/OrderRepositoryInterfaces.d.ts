export declare enum OrderStates {
    Cart = "cart",
    CartLocked = "cart-checkedout",
    PaymentPending = "payment-pending",
    PaymentDone = "payment-completed",
    Delivered = "delivered",
    Confirmed = "confirmed",
    PaymentFailed = "payment-failed",
    CancelledByCustomer = "cancelled-by-customer",
    CancelledByVendor = "cancelled-by-vendor",
    FailureDeltaRollbacked = "failure-delta-rollbacked"
}
export interface OrderItems {
    variantId: string;
    quantity: number;
    price: number;
}
export interface OrderSchema {
    _id?: string;
    vendorId: string;
    customerId: string;
    items: OrderItems[];
    orderState: OrderStates;
    orderStateHistory: OrderStates[];
    createdAt: Date;
    lastModifiedAt: Date;
}
export interface OrderUpdateSchema {
    items: OrderItems[];
}
