export interface ServiceApiResponse<T> {
    error: string | null;
    code: number;
    data: T | null;
}
export declare class Service {
    url: string;
    serviceToken: string;
    loggerEnabled: boolean;
    constructor(serviceBaseUrl: string, serviceToken: string, loggerEnabled?: boolean);
    fetchApi<T>(requestUrl: string, payload?: object | null, method?: "GET" | "PATCH" | "POST" | "DELETE" | "PUT"): Promise<ServiceApiResponse<T>>;
}
