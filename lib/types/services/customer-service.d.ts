import { ICustomerCreate, ICustomerAddressUpdate, ICustomer } from "../interfaces/repositories/CustomerRepositoryInterfaces";
import { Service } from "./service";
export declare class CustomerService extends Service {
    constructor(serviceBaseUrl: string, serviceToken: string);
    findCustomers(mobileNumber: string): Promise<import("./service").ServiceApiResponse<{
        data: ICustomer[];
    }>>;
    getCustomerById(customerId: string): Promise<import("./service").ServiceApiResponse<{
        data: ICustomer;
    }>>;
    createCustomer(payload: ICustomerCreate): Promise<import("./service").ServiceApiResponse<{
        data: string;
    }>>;
    updateCustomerAddress(customerId: string, address: ICustomerAddressUpdate): Promise<import("./service").ServiceApiResponse<{
        data: {
            modifiedCount: number;
            matchedCount: number;
            upsertedCount: number;
        };
    }>>;
}
//# sourceMappingURL=customer-service.d.ts.map