"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatbazaar = void 0;
var services_1 = __importDefault(require("./services"));
var interfaces_1 = __importDefault(require("./interfaces"));
exports.chatbazaar = {
    services: services_1.default,
    interfaces: interfaces_1.default
};
