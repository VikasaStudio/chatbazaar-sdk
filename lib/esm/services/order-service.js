"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const service_1 = require("./service");
class OrderService extends service_1.Service {
    constructor(serviceBaseUrl, serviceToken) {
        super(serviceBaseUrl, serviceToken);
    }
    getOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${orderId}`);
            return response;
        });
    }
    createOrUpdateCart(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/items`, payload, 'PUT');
            return response;
        });
    }
    checkoutCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${cartId}/checkout`, {}, 'POST');
            return response;
        });
    }
    updateState(orderId, orderState) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${orderId}/state`, { orderState }, 'PATCH');
            return response;
        });
    }
}
exports.OrderService = OrderService;
