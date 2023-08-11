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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const querystring_1 = __importDefault(require("querystring"));
class Service {
    constructor(serviceBaseUrl, serviceToken, loggerEnabled = false) {
        this.url = serviceBaseUrl;
        this.serviceToken = serviceToken;
        this.loggerEnabled = loggerEnabled;
    }
    fetchApi(requestUrl, payload = null, method = "GET") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let fetchOptions = {
                    method,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Basic ${this.serviceToken}`,
                    },
                };
                let url = `${this.url}${requestUrl}`;
                if (payload && Object.keys(payload).length > 0) {
                    if (method !== "GET")
                        fetchOptions = Object.assign(Object.assign({}, fetchOptions), { body: JSON.stringify(payload) });
                    else {
                        let qs = querystring_1.default.stringify(payload || {});
                        url = `${url}?${qs}`;
                    }
                }
                let response = yield fetch(url, fetchOptions);
                if (!response.ok) {
                    return {
                        error: response.statusText,
                        code: response.status,
                        data: null,
                    };
                }
                let result = yield response.json();
                return {
                    error: null,
                    code: response.status,
                    data: result,
                };
            }
            catch (err) {
                return {
                    error: (err === null || err === void 0 ? void 0 : err.message) || "Internal Server Error",
                    code: 500,
                    data: err,
                };
            }
        });
    }
}
exports.Service = Service;
