import { PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import { Service } from "./service";


export class PaymentService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string) {
        super(serviceBaseUrl, serviceToken);
    }
    async createUpiPaymentUrl(payload: CreatePaymentUrlRequest) {
        let response = await this.fetchApi<any>(`/payment-link`, payload, 'POST');
        return response;
    }
    async patchPaymentState(paymentId: string, state: PaymentStates, orderId: string) {
        let response = await this.fetchApi<any>(`/${paymentId}/state`, {state, orderId}, 'PATCH');
        return response;
    }
}