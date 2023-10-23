import { PaymentLinks } from "razorpay/dist/types/paymentLink";
export enum PaymentStates {
  PaymentPending = "pending",
  PaymentSuccess = "success",
  PaymentCancelled = "payment-cancelled",
  PaymentLinkExpired = "payment-url-expired",
  PaymentFailed = "failed",
}

export interface PaymentSchema {
  _id: string; //txn id

  customerId: string;
  orderId: string;
  vendorId: string;

  paymentAmount: number;
  currency: "INR";

  paymentState: PaymentStates;
  paymentStateHistory: PaymentStates[];

  customInfo?: { name: string; value: any }[];

  createdAt: Date;
  lastModifiedAt: Date;
}

export interface PaymentAddSchema {
  customerId: string; //customer identifier by mobile
  orderId: string; //the order to which payment belongs
  vendorId: string;
  paymentAmount: number;
  currency?: "INR";
}

export const possibleStateTransitions: { [key: string]: PaymentStates[] } = {
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
