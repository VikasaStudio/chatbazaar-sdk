export var PaymentStates;
(function (PaymentStates) {
    PaymentStates["PaymentPending"] = "pending";
    PaymentStates["PaymentSuccess"] = "success";
    PaymentStates["PaymentCancelled"] = "payment-cancelled";
    PaymentStates["PaymentLinkExpired"] = "payment-url-expired";
    PaymentStates["PaymentFailed"] = "failed";
})(PaymentStates || (PaymentStates = {}));
export const possibleStateTransitions = {
    [PaymentStates.PaymentPending]: [
        PaymentStates.PaymentLinkExpired,
        PaymentStates.PaymentSuccess,
        PaymentStates.PaymentFailed,
        PaymentStates.PaymentCancelled,
    ],
    [PaymentStates.PaymentSuccess]: [],
    [PaymentStates.PaymentFailed]: [],
    [PaymentStates.PaymentLinkExpired]: [],
    [PaymentStates.PaymentCancelled]: [],
};
