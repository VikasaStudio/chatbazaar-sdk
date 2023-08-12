"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_service_1 = require("./customer-service");
var inventory_service_1 = require("./inventory-service");
var order_service_1 = require("./order-service");
var payment_service_1 = require("./payment-service");
var store_service_1 = require("./store-service");
exports.default = {
    CustomerService: customer_service_1.CustomerService,
    InventoryService: inventory_service_1.InventoryService,
    OrderService: order_service_1.OrderService,
    PaymentService: payment_service_1.PaymentService,
    StoreService: store_service_1.StoreService
};
