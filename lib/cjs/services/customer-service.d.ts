import { ICustomerCreate, ICustomerAddressUpdate, ICustomer } from "../interfaces/repositories/CustomerRepositoryInterfaces";
import { IServiceOptions, Service } from "./service";
export declare class CustomerService extends Service {
    constructor(serviceBaseUrl: string, apiKey: string);
    findCustomers(mobileNumber: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ICustomer[];
    }>>;
    getCustomerById(customerId: string, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: ICustomer;
    }>>;
    createCustomer(payload: ICustomerCreate, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: string;
    }>>;
    updateCustomerAddress(customerId: string, address: ICustomerAddressUpdate, options?: IServiceOptions | {}): Promise<import("./service").ServiceApiResponse<{
        data: {
            modifiedCount: number;
            matchedCount: number;
            upsertedCount: number;
        };
    }>>;
}
//# sourceMappingURL=customer-service.d.ts.map