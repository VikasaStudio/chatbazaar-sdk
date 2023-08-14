import {
  ICustomerCreate,
  ICustomerAddressUpdate,
  ICustomer,
} from "../interfaces/repositories/CustomerRepositoryInterfaces";
import { IServiceOptions, Service } from "./service";
export class CustomerService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }
  async findCustomers(
    mobileNumber: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: ICustomer[] }>(
      `/find?mobileNumber=${mobileNumber}`,
      null,
      {
        ...options,
        method: "GET",
      }
    );
    return response;
  }
  async getCustomerById(
    customerId: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: ICustomer }>(
      `/${customerId}`,
      null,
      { ...options, method: "GET" }
    );
    return response;
  }
  async createCustomer(
    payload: ICustomerCreate,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{ data: string }>(``, payload, {
      ...options,
      method: "POST",
    });
    return response;
  }
  async updateCustomerAddress(
    customerId: string,
    address: ICustomerAddressUpdate,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      data: {
        modifiedCount: number;
        matchedCount: number;
        upsertedCount: number;
      };
    }>(`/${customerId}/address`, address, { ...options, method: "PATCH" });
    return response;
  }
}
