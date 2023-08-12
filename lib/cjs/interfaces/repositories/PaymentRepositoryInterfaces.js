"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.possibleStateTransitions = exports.PaymentStates = void 0;
var PaymentStates;
(function (PaymentStates) {
    PaymentStates["PaymentPending"] = "pending";
    PaymentStates["PaymentSuccess"] = "success";
    PaymentStates["PaymentCancelled"] = "payment-cancelled";
    PaymentStates["PaymentLinkExpired"] = "payment-url-expired";
    PaymentStates["PaymentFailed"] = "failed";
})(PaymentStates || (exports.PaymentStates = PaymentStates = {}));
exports.possibleStateTransitions = (_a = {},
    _a[PaymentStates.PaymentPending] = [
        PaymentStates.PaymentLinkExpired,
        PaymentStates.PaymentSuccess,
        PaymentStates.PaymentFailed,
        PaymentStates.PaymentCancelled,
    ],
    _a[PaymentStates.PaymentSuccess] = [],
    _a[PaymentStates.PaymentFailed] = [],
    _a[PaymentStates.PaymentLinkExpired] = [],
    _a[PaymentStates.PaymentCancelled] = [],
    _a);
