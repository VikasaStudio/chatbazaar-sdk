import { PaymentStates } from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import { IServiceOptions, Service } from "./service";

export class PaymentService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }
  async createUpiPaymentUrl(
    payload: CreatePaymentUrlRequest,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(`/payment-link`, payload, {
      ...options,
      method: "POST",
    });
    return response;
  }
  async patchPaymentState(
    paymentId: string,
    state: PaymentStates,
    orderId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(
      `/${paymentId}/state`,
      { state, orderId },
      { ...options, method: "PATCH" }
    );
    return response;
  }
}
