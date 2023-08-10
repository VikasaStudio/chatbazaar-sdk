import {
  ICustomerCreate,
  ICustomerAddressUpdate,
  ICustomer,
} from "../interfaces/repositories/CustomerRepositoryInterfaces";
import { Service } from "./service";
export class CustomerService extends Service {
  constructor(serviceBaseUrl: string, serviceToken: string) {
    super(serviceBaseUrl, serviceToken);
  }
  async findCustomers(mobileNumber: string) {
    let response = await this.fetchApi<{ data: ICustomer[] }>(
      `/find?mobileNumber=${mobileNumber}`
    );
    return response;
  }
  async getCustomerById(customerId: string) {
    let response = await this.fetchApi<{ data: ICustomer }>(`/${customerId}`);
    return response;
  }
  async createCustomer(payload: ICustomerCreate) {
    let response = await this.fetchApi<{ data: string }>(``, payload, "POST");
    return response;
  }
  async updateCustomerAddress(
    customerId: string,
    address: ICustomerAddressUpdate
  ) {
    let response = await this.fetchApi<{
      data: {
        modifiedCount: number;
        matchedCount: number;
        upsertedCount: number;
      };
    }>(`/${customerId}/address`, address, "PATCH");
    return response;
  }
}
