import { CreateVendorRequest } from "../interfaces/services/StoreServiceInterfaces";
import { IServiceOptions, Service } from "./service";

export class StoreService extends Service {
  constructor(serviceBaseUrl: string, apiKey: string) {
    super(serviceBaseUrl, apiKey);
  }

  async getStoreById(vendorId: string, options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<any>(`/${vendorId}`, null, {
      ...options,
      method: "GET",
    });
    return response;
  }

  async getStoreByStoreCode(
    storeCode: string,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(`/code/${storeCode}`, null, {
      ...options,
      method: "GET",
    });
    return response;
  }

  async createStore(
    payload: CreateVendorRequest,
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<any>(`/register`, payload, {
      ...options,
      method: "POST",
    });
    return response;
  }

  async loginVendor(
    payload: {
      identifierType: `EMAIL` | "STORECODE";
      identifierValue: string;
      password: string;
    },
    options: IServiceOptions | {} = {}
  ) {
    let response = await this.fetchApi<{
      refreshToken: string;
      accessToken: string;
      vendorId: string;
    }>(`/login`, payload, { ...options, method: "POST" });
    return response;
  }

  async getNewAccessToken(options: IServiceOptions | {} = {}) {
    let response = await this.fetchApi<{
      accessToken: string;
      vendorId: string;
    }>("/refresh-token", {}, { ...options, method: "POST" });
    return response;
  }
}
