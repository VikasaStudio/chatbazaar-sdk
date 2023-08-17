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
export class InventoryService extends Service {
    constructor(serviceBaseUrl, apiKey) {
        super(serviceBaseUrl, apiKey);
    }
    getVariantsByGroupId(storeCode, variantGroupId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`${storeCode}/product/${variantGroupId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    findVariants(storeCode, searchQuery, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${storeCode}/variant`, searchQuery, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    getVariantById(storeCode, variantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${storeCode}/variant/${variantId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    createVariant(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/variant", payload, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    createBulkVariants(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/bulk-variants", payload, Object.assign(Object.assign({}, options), { method: "POST" }));
            return response;
        });
    }
    patchVariantById(variantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant/${variantId}`, null, Object.assign(Object.assign({}, options), { method: "PATCH" }));
            return response;
        });
    }
    deleteProduct(groupId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/product/${groupId}`, null, Object.assign(Object.assign({}, options), { method: "DELETE" }));
            return response;
        });
    }
    deleteVariant(variantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant/${variantId}`, null, Object.assign(Object.assign({}, options), { method: "DELETE" }));
            return response;
        });
    }
}
