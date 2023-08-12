var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as queryString from "querystring";
export class Service {
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
                        let qs = queryString.stringify(payload || {});
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
