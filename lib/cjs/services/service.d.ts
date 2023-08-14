export interface ServiceApiResponse<T> {
    error: string | null;
    code: number;
    data: T | null;
}
export interface IServiceOptions {
    Authorization?: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
export declare class Service {
    url: string;
    apiKey: string;
    loggerEnabled: boolean;
    constructor(serviceBaseUrl: string, apiKey: string, loggerEnabled?: boolean);
    fetchApi<T>(requestUrl: string, payload: object | null | undefined, options: IServiceOptions): Promise<ServiceApiResponse<T>>;
}
//# sourceMappingURL=service.d.ts.map