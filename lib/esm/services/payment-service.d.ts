import { PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import { Service } from "./service";
export declare class PaymentService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    createUpiPaymentUrl(payload: CreatePaymentUrlRequest): Promise<import("./service").ServiceApiResponse<any>>;
    patchPaymentState(paymentId: string, state: PaymentStates, orderId: string): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=payment-service.d.ts.map