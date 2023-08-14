import { PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class PaymentService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    createUpiPaymentUrl(payload: CreatePaymentUrlRequest, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
    patchPaymentState(paymentId: string, state: PaymentStates, orderId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<any>>;
}
//# sourceMappingURL=payment-service.d.ts.map