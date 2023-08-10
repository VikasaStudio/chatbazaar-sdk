import queryString from "querystring";
export interface ServiceApiResponse {
  error: string | null;
  code: number;
  data: any;
}
export class Service {
  url: string;
  serviceToken: string;
  loggerEnabled: boolean;
  constructor(
    serviceBaseUrl: string,
    serviceToken: string,
    loggerEnabled: boolean = false
  ) {
    this.url = serviceBaseUrl;
    this.serviceToken = serviceToken;
    this.loggerEnabled = loggerEnabled;
  }

  async fetchApi(
    requestUrl: string,
    payload: object | null = null,
    method: "GET" | "PATCH" | "POST" | "DELETE" | "PUT" = "GET"
  ): Promise<ServiceApiResponse> {
    try {
      let fetchOptions: any = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${this.serviceToken}`,
        },
      };
      let url = `${this.url}${requestUrl}`;
      if (payload && Object.keys(payload).length > 0) {
        if (method !== "GET")
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
        } as ServiceApiResponse;
      }

      let result = await response.json();
      return {
        error: null,
        code: response.status,
        data: result,
      } as ServiceApiResponse;
    } catch (err: any) {
      return {
        error: err?.message || "Internal Server Error",
        code: 500,
        data: err,
      } as ServiceApiResponse;
    }
  }
}
