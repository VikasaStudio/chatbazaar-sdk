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
    constructor(serviceBaseUrl, apiKey) {
        super(serviceBaseUrl, apiKey);
    }
    getStoreById(vendorId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${vendorId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    getStoreByStoreCode(storeCode, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/code/${storeCode}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    createStore(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/register`, payload, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    loginVendor(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/login`, payload, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    getNewAccessToken(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/refresh-token", {}, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
}
