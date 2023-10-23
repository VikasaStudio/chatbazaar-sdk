export declare enum PaymentStates {
    PaymentPending = "pending",
    PaymentSuccess = "success",
    PaymentCancelled = "payment-cancelled",
    PaymentLinkExpired = "payment-url-expired",
    PaymentFailed = "failed"
}
export interface PaymentSchema {
    _id: string;
    customerId: string;
    orderId: string;
    vendorId: string;
    paymentAmount: number;
    currency: "INR";
    paymentState: PaymentStates;
    paymentStateHistory: PaymentStates[];
    customInfo?: {
        name: string;
        value: any;
    }[];
    createdAt: Date;
    lastModifiedAt: Date;
}
export interface PaymentAddSchema {
    customerId: string;
    orderId: string;
    vendorId: string;
    paymentAmount: number;
    currency?: "INR";
}
export declare const possibleStateTransitions: {
    [key: string]: PaymentStates[];
};
//# sourceMappingURL=PaymentRepositoryInterfaces.d.ts.map