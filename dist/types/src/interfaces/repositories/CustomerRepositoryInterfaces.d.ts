export interface ICustomerAddress {
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    state: string;
    country: string;
}
export interface ICustomerCreate {
    customerMobile: string;
    customerName: string;
    addresses: ICustomerAddress[];
    createdAt?: Date;
    lastModifiedAt?: Date;
}
export interface ICustomer {
    _id?: string;
    customerMobile: string;
    customerName: string;
    addresses: ICustomerAddress[];
    createdAt?: Date;
    lastModifiedAt?: Date;
}
export interface ICustomerAddressUpdate {
    addresses: ICustomerAddress[];
}
