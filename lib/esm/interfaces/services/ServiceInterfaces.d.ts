export interface ServiceApiResponse {
    error: string | null;
    code: number;
    data: any;
}
export interface IPaginationQuery {
    start?: number;
    limit?: number;
    sort?: {
        [key: string]: number;
    };
}
export interface IPaginationMetadata {
    _curr: {
        start: number;
        limit: number;
    };
    _next?: {
        start: number;
        limit: number;
    };
    _prev?: {
        start: number;
        limit: number;
    };
    _total: number;
}
//# sourceMappingURL=ServiceInterfaces.d.ts.map