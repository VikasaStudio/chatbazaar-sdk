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
export interface OrderCustomInfo<T = any> {
    name: string;
    value: T;
}
export interface OrderSchema<CustomInfoValue = any> {
    _id?: string;
    vendorId: string;
    customerId: string;
    items: OrderItems[];
    orderState: OrderStates;
    orderStateHistory: OrderStates[];
    customInfo?: OrderCustomInfo<CustomInfoValue>[];
    createdAt: Date;
    lastModifiedAt: Date;
}
export interface OrderUpdateSchema {
    items: OrderItems[];
}
//# sourceMappingURL=OrderRepositoryInterfaces.d.ts.map