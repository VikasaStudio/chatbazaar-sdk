import { PaymentLinks } from "razorpay/dist/types/paymentLink";
import { PaymentSchema, PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import { IPaginationMetadata, IPaginationQuery } from "../interfaces/services/ServiceInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class PaymentService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    createUpiPaymentUrl(payload: CreatePaymentUrlRequest, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: {
            paymentLog: string;
            paymentGateway: PaymentLinks.RazorpayPaymentLink;
        };
    }>>;
    patchPaymentState(paymentId: string, state: PaymentStates, orderId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<void>>;
    getPaymentForVendor(vendorId: string, queryParams?: IPaginationQuery, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: PaymentSchema[];
        pagination: IPaginationMetadata;
    }>>;
    getPaymentForVendorByPaymentId(vendorId: string, paymentId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: PaymentSchema;
    }>>;
}
//# sourceMappingURL=payment-service.d.ts.map