var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Service, } from "./service";
export class InventoryService extends Service {
    constructor(serviceBaseUrl, apiKey) {
        super(serviceBaseUrl, apiKey);
    }
    getVariantsByGroupId(vendorId, variantGroupId, queryParams, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`${vendorId}/product/${variantGroupId}`, queryParams, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    findVariants(vendorId, searchQuery, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${vendorId}/variant`, searchQuery, Object.assign(Object.assign({}, options), { method: "GET" }));
            return response;
        });
    }
    getVariantById(vendorId, variantId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/${vendorId}/variant/${variantId}`, null, Object.assign(Object.assign({}, options), { method: "GET" }));
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
    patchBulkVariantyQuantity(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi("/bulk-variants/quantity", payload, Object.assign(Object.assign({}, options), { method: "PATCH" }));
            return response;
        });
    }
    patchVariantById(variantId, body, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.fetchApi(`/variant/${variantId}`, body, Object.assign(Object.assign({}, options), { method: "PATCH" }));
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
