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
    constructor(serviceBaseUrl, apiKey) {
        super(serviceBaseUrl, apiKey);
    }
    findCustomers(mobileNumber, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/find?mobileNumber=${mobileNumber}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    getCustomerById(customerId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${customerId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    createCustomer(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(``, payload, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    updateCustomerAddress(customerId, address, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${customerId}/address`, address, Object.assign(Object.assign({}, options), { method: "PATCH" }));
            return response;
        });
    }
}
