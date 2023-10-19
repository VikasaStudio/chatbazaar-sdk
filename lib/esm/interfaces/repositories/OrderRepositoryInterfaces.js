export var OrderStates;
(function (OrderStates) {
    OrderStates["Cart"] = "cart";
    OrderStates["CartLocked"] = "cart-checkedout";
    OrderStates["PaymentPending"] = "payment-pending";
    OrderStates["PaymentDone"] = "payment-completed";
    OrderStates["Delivered"] = "delivered";
    OrderStates["Confirmed"] = "confirmed";
    OrderStates["PaymentFailed"] = "payment-failed";
    OrderStates["CancelledByCustomer"] = "cancelled-by-customer";
    OrderStates["CancelledByVendor"] = "cancelled-by-vendor";
    OrderStates["FailureDeltaRollbacked"] = "failure-delta-rollbacked";
})(OrderStates || (OrderStates = {}));
const possibleOrderStateTransitions = {
    [OrderStates.Cart]: [OrderStates.CartLocked],
    [OrderStates.CartLocked]: [OrderStates.PaymentPending],
    [OrderStates.PaymentPending]: [
        OrderStates.PaymentDone,
        OrderStates.PaymentFailed,
        OrderStates.CancelledByCustomer,
        OrderStates.CancelledByVendor,
    ],
    [OrderStates.PaymentDone]: [
        OrderStates.Confirmed,
        OrderStates.CancelledByCustomer,
        OrderStates.CancelledByVendor,
    ],
    [OrderStates.Delivered]: [],
    [OrderStates.Confirmed]: [
        OrderStates.CancelledByVendor,
        OrderStates.CancelledByCustomer,
        OrderStates.Delivered,
    ],
    [OrderStates.PaymentFailed]: [
        OrderStates.CancelledByCustomer,
        OrderStates.CancelledByVendor,
        OrderStates.PaymentPending,
    ],
    [OrderStates.CancelledByCustomer]: [OrderStates.FailureDeltaRollbacked],
    [OrderStates.CancelledByVendor]: [OrderStates.FailureDeltaRollbacked],
    [OrderStates.FailureDeltaRollbacked]: [],
};
