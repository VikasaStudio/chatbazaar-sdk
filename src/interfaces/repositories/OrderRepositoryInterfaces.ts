
export enum OrderStates {
    Cart = 'cart',
    CartLocked = 'cart-checkedout',
    PaymentPending = 'payment-pending',
    PaymentDone = 'payment-completed',
    Delivered = 'delivered',
    Confirmed = 'confirmed',
    PaymentFailed = 'payment-failed',
    CancelledByCustomer = 'cancelled-by-customer',
    CancelledByVendor = 'cancelled-by-vendor',
    FailureDeltaRollbacked = 'failure-delta-rollbacked'
};

// all order start as a cart, hence it is the initial starting state.
const possibleOrderStateTransitions: { [key: string]: OrderStates[] } = {
    [OrderStates.Cart]: [OrderStates.CartLocked],
    [OrderStates.CartLocked]: [OrderStates.PaymentPending],
    [OrderStates.PaymentPending]: [OrderStates.PaymentDone, OrderStates.PaymentFailed, OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor],
    [OrderStates.PaymentDone]: [OrderStates.Confirmed, OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor],
    [OrderStates.Delivered]: [], //final state

    //confirmed orders can be cancelled, though once delivered, cancellation is not yet supported.
    [OrderStates.Confirmed]: [OrderStates.CancelledByVendor, OrderStates.CancelledByCustomer, OrderStates.Delivered],

    //any order in this state for more than 10 minutes, will be auto updated to cancelled-by-customer.
    [OrderStates.PaymentFailed]: [OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor, OrderStates.PaymentPending], // auto updates to cancelled-by-customer if payment not retried.

    //any order in cancelled-state will be rollbacked by cron job (i.e consumed qty will be released from cart and given back to inventory.)
    [OrderStates.CancelledByCustomer]: [OrderStates.FailureDeltaRollbacked],
    [OrderStates.CancelledByVendor]: [OrderStates.FailureDeltaRollbacked],

    [OrderStates.FailureDeltaRollbacked]: [] //final state
};

export interface OrderItems {
    variantId: string,
    quantity: number,
    price: number
}
export interface OrderSchema {
    _id?: string, //order id
    vendorId: string, // vendor whose item are being stored in this cart
    customerId: string, // customer who owns this cart
    items: OrderItems[],
    orderState: OrderStates,
    orderStateHistory: OrderStates[],
    createdAt: Date,
    lastModifiedAt: Date
}
export interface OrderUpdateSchema {
    // _id?: string, //order id
    // vendorId?: string, // vendor whose item are being stored in this cart
    // customerId?: string, // customer who owns this cart
    items: OrderItems[],
    // createdAt?: Date,
    // lastModifiedAt?: Date
}