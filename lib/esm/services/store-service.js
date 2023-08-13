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
export class StoreService extends Service {
    constructor(serviceBaseUrl, serviceToken) {
        super(serviceBaseUrl, serviceToken);
    }
    getStoreById(vendorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${vendorId}`, {}, "GET");
            return response;
        });
    }
    getStoreByStoreCode(storeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/code/${storeCode}`, {}, "GET");
            return response;
        });
    }
    createStore(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/register`, payload, "POST");
            return response;
        });
    }
    loginVendor(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/login`, payload, "POST");
            return response;
        });
    }
    getNewAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/refresh-token", {}, "POST");
            return response;
        });
    }
}
