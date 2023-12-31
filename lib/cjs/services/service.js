"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var queryString = require("querystring");
;
var Service = (function () {
    function Service(serviceBaseUrl, apiKey, loggerEnabled) {
        if (loggerEnabled === void 0) { loggerEnabled = false; }
        this.url = serviceBaseUrl;
        this.apiKey = apiKey;
        this.loggerEnabled = loggerEnabled;
    }
    Service.prototype.fetchApi = function (requestUrl, payload, options) {
        if (payload === void 0) { payload = null; }
        return __awaiter(this, void 0, void 0, function () {
            var fetchOptions, url, isPayloadProvided, qs, response, result, err_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        options.method = options.method || "GET";
                        fetchOptions = {
                            method: options.method,
                            headers: (_a = {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                _a["x-api-key"] = this.apiKey,
                                _a.Authorization = options === null || options === void 0 ? void 0 : options.Authorization,
                                _a),
                        };
                        url = "".concat(this.url).concat(requestUrl);
                        isPayloadProvided = payload && Object.keys(payload).length > 0;
                        if (isPayloadProvided) {
                            if (options.method !== "GET")
                                fetchOptions = __assign(__assign({}, fetchOptions), { body: JSON.stringify(payload) });
                            else {
                                qs = queryString.stringify(payload || {});
                                url = "".concat(url, "?").concat(qs);
                            }
                        }
                        return [4, fetch(url, fetchOptions)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            return [2, {
                                    error: response.statusText,
                                    code: response.status,
                                    data: null,
                                }];
                        }
                        return [4, response.json()];
                    case 2:
                        result = _b.sent();
                        return [2, {
                                error: null,
                                code: response.status,
                                data: result,
                            }];
                    case 3:
                        err_1 = _b.sent();
                        return [2, {
                                error: (err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || "Internal Server Error",
                                code: 500,
                                data: err_1,
                            }];
                    case 4: return [2];
                }
            });
        });
    };
    return Service;
}());
exports.Service = Service;
