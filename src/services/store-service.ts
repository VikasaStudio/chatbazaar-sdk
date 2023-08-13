import { CreateVendorRequest } from "../interfaces/services/StoreServiceInterfaces";
import { Service } from "./service";

export class StoreService extends Service {
  constructor(serviceBaseUrl: string, serviceToken: string) {
    super(serviceBaseUrl, serviceToken);
  }

  async getStoreById(
    vendorId: string
  ) {
    let response = await this.fetchApi<any>(
      `/${vendorId}`,
      {},
      "GET"
    );
    return response;
  }

  async getStoreByStoreCode(
    storeCode: string
  ) {
    let response = await this.fetchApi<any>(
      `/code/${storeCode}`,
      {},
      "GET"
    );
    return response;
  }

  async createStore(
    payload: CreateVendorRequest
  ) {
    let response = await this.fetchApi<any>(
      `/register`,
      payload,
      "POST"
    );
    return response;
  }

  async loginVendor(
    payload: {
      identifierType: `EMAIL` | "STORECODE";
      identifierValue: string;
      password: string;
    }
  ) {
    let response = await this.fetchApi<{
      refreshToken: string;
      accessToken: string;
      vendorId: string;
    }>(`/login`, payload, "POST");
    return response;
  }

  async getNewAccessToken() {
    let response = await this.fetchApi<{
      accessToken: string;
      vendorId: string;
    }>("/refresh-token", {}, "POST");
    return response;
  }
}
