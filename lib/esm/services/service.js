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
;
export class Service {
    constructor(serviceBaseUrl, apiKey, loggerEnabled = false) {
        this.url = serviceBaseUrl;
        this.apiKey = apiKey;
        this.loggerEnabled = loggerEnabled;
    }
    fetchApi(requestUrl, payload = null, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                options.method = options.method || "GET";
                let fetchOptions = {
                    method: options.method,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        ["x-api-key"]: this.apiKey,
                        Authorization: options === null || options === void 0 ? void 0 : options.Authorization,
                    },
                };
                let url = `${this.url}${requestUrl}`;
                const isPayloadProvided = payload && Object.keys(payload).length > 0;
                if (isPayloadProvided) {
                    if (options.method !== "GET")
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
