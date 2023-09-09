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
export class OrderService extends Service {
    constructor(serviceBaseUrl, apiKey) {
        super(serviceBaseUrl, apiKey);
    }
    getOrderById(orderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${orderId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    createOrUpdateCart(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/items`, payload, Object.assign(Object.assign({}, options), { method: "PUT" }));
            return response;
        });
    }
    checkoutCart(cartId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${cartId}/checkout`, {}, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    updateState(orderId, orderState, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${orderId}/state`, { orderState }, Object.assign(Object.assign({}, options), { method: "PATCH" }));
            return response;
        });
    }
    getActiveOrders(vendorId, params, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetchApi(`/${vendorId}/orders`, params, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
}
