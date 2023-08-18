import * as queryString from "querystring";
export interface ServiceApiResponse<T> {
  error: string | null;
  code: number;
  data: T | null;
}
export interface IServiceOptions {
  Authorization?: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export interface IVariantsQuantityUpdateRequest {
  variantId: string,
  quantityToConsume: number
};

export class Service {
  url: string;
  apiKey: string;
  loggerEnabled: boolean;
  constructor(
    serviceBaseUrl: string,
    apiKey: string,
    loggerEnabled: boolean = false
  ) {
    this.url = serviceBaseUrl;
    this.apiKey = apiKey;
    this.loggerEnabled = loggerEnabled;
  }

  async fetchApi<T>(
    requestUrl: string,
    payload: object | null = null,
    options: IServiceOptions
  ): Promise<ServiceApiResponse<T>> {
    try {
      options.method = options.method || "GET";
      let fetchOptions: any = {
        method: options.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ["x-api-key"]: this.apiKey,
          Authorization: options?.Authorization,
        },
      };

      let url = `${this.url}${requestUrl}`;

      const isPayloadProvided = payload && Object.keys(payload).length > 0;
      if (isPayloadProvided) {
        if (options.method !== "GET")
          fetchOptions = {
            ...fetchOptions,
            body: JSON.stringify(payload),
          };
        else {
          let qs = queryString.stringify((payload as any) || {});
          url = `${url}?${qs}`;
        }
      }

      let response = await fetch(url, fetchOptions);

      if (!response.ok) {
        return {
          error: response.statusText,
          code: response.status,
          data: null,
        } as ServiceApiResponse<T>;
      }

      let result = await response.json();
      return {
        error: null,
        code: response.status,
        data: result,
      } as ServiceApiResponse<T>;
    } catch (err: any) {
      return {
        error: err?.message || "Internal Server Error",
        code: 500,
        data: err,
      } as ServiceApiResponse<T>;
    }
  }
}
