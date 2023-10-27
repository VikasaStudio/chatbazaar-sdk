import { PaymentLinks } from "razorpay/dist/types/paymentLink";
import {
  PaymentSchema,
  PaymentStates,
} from "../interfaces/repositories/PaymentRepositoryInterfaces";
import { CreatePaymentUrlRequest } from "../interfaces/services/PaymentServiceInterfaces";
import {
  IPaginationMetadata,
  IPaginationQuery,
} from "../interfaces/services/ServiceInterfaces";
import { IServiceOptions, Service } from "./service";

export class PaymentService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }
  async createUpiPaymentUrl(
    payload: CreatePaymentUrlRequest,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: {
        paymentLog: string;
        paymentGateway: PaymentLinks.RazorpayPaymentLink;
      };
    }>(`/payment-link`, payload, {
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
    let response = await this.fetchApi<void>(
      `/${paymentId}/state`,
      { state, orderId },
      { ...options, method: "PATCH" }
    );
    return response;
  }
  async getPaymentForVendor(
    vendorId: string,
    queryParams?: IPaginationQuery,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: PaymentSchema[];
      pagination: IPaginationMetadata;
    }>(`/${vendorId}`, queryParams, { ...options, method: "GET" });
    return response;
  }
  async getPaymentForVendorByPaymentId(
    vendorId: string,
    paymentId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: PaymentSchema;
    }>(`/${vendorId}/payment/${paymentId}`, null, {
      ...options,
      method: "GET",
    });
    return response;
  }
}
