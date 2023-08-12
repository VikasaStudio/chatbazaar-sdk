"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStates = void 0;
var OrderStates;
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
})(OrderStates || (exports.OrderStates = OrderStates = {}));
;
var possibleOrderStateTransitions = (_a = {},
    _a[OrderStates.Cart] = [OrderStates.CartLocked],
    _a[OrderStates.CartLocked] = [OrderStates.PaymentPending],
    _a[OrderStates.PaymentPending] = [OrderStates.PaymentDone, OrderStates.PaymentFailed, OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor],
    _a[OrderStates.PaymentDone] = [OrderStates.Confirmed, OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor],
    _a[OrderStates.Delivered] = [],
    _a[OrderStates.Confirmed] = [OrderStates.CancelledByVendor, OrderStates.CancelledByCustomer, OrderStates.Delivered],
    _a[OrderStates.PaymentFailed] = [OrderStates.CancelledByCustomer, OrderStates.CancelledByVendor, OrderStates.PaymentPending],
    _a[OrderStates.CancelledByCustomer] = [OrderStates.FailureDeltaRollbacked],
    _a[OrderStates.CancelledByVendor] = [OrderStates.FailureDeltaRollbacked],
    _a[OrderStates.FailureDeltaRollbacked] = [],
    _a);
