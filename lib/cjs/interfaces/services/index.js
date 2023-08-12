"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var InventoryServiceInterfaces = require("./InventoryServiceInterfaces");
var OrderServiceInterfaces = require("./OrderServiceInterfaces");
var PaymentServiceInterfaces = require("./PaymentServiceInterfaces");
var ServiceInterfaces = require("./ServiceInterfaces");
var StoreServiceInterfaces = require("./StoreServiceInterfaces");
exports.api = {
    InventoryServiceInterfaces: InventoryServiceInterfaces,
    OrderServiceInterfaces: OrderServiceInterfaces,
    PaymentServiceInterfaces: PaymentServiceInterfaces,
    ServiceInterfaces: ServiceInterfaces,
    StoreServiceInterfaces: StoreServiceInterfaces,
};
