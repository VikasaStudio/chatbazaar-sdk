import { PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { Service } from "./service";
export interface CreatePaymentUrlRequest {
    customerId: string;
    vendorId: string;
    orderId: string;
}
export declare class PaymentService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    createUpiPaymentUrl(payload: CreatePaymentUrlRequest): Promise<import("./service").ServiceApiResponse<any>>;
    patchPaymentState(paymentId: string, state: PaymentStates, orderId: string): Promise<import("./service").ServiceApiResponse<any>>;
}
