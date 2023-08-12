var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Service } from "./service";
export class CustomerService extends Service {
    constructor(serviceBaseUrl, serviceToken) {
        super(serviceBaseUrl, serviceToken);
    }
    findCustomers(mobileNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/find?mobileNumber=${mobileNumber}`);
            return response;
        });
    }
    getCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${customerId}`);
            return response;
        });
    }
    createCustomer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(``, payload, "POST");
            return response;
        });
    }
    updateCustomerAddress(customerId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${customerId}/address`, address, "PATCH");
            return response;
        });
    }
}
