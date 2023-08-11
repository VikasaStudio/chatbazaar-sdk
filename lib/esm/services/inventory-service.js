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
exports.InventoryService = void 0;
const service_1 = require("./service");
class InventoryService extends service_1.Service {
    constructor(serviceBaseUrl, serviceToken) {
        super(serviceBaseUrl, serviceToken);
    }
    getVariantsByGroupId(variantGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/product/${variantGroupId}`);
            return response;
        });
    }
    findVariants(searchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant`, searchQuery);
            return response;
        });
    }
    createVariant(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/variant", payload, "POST");
            return response;
        });
    }
    createBulkVariants(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/bulk-variants", payload, "POST");
            return response;
        });
    }
    patchVariantById(variantId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant/${variantId}`, {}, "PATCH");
            return response;
        });
    }
    deleteProduct(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/product/${groupId}`, {}, "DELETE");
            return response;
        });
    }
    deleteVariant(variantId) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant/${variantId}`, {}, "DELETE");
            return response;
        });
    }
}
exports.InventoryService = InventoryService;
