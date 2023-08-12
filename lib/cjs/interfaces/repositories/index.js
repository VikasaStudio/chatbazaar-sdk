"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
var CustomerRepositoryInterfaces = require("./CustomerRepositoryInterfaces");
var OrderRepositoryInterfaces = require("./OrderRepositoryInterfaces");
var PaymentRepositoryInterfaces = require("./PaymentRepositoryInterfaces");
var ProductVariantRepositoryInterfaces = require("./ProductVariantRepositoryInterfaces");
var VendorRepositoryInterfaces = require("./VendorRepositoryInterfaces");
exports.repository = {
    CustomerRepositoryInterfaces: CustomerRepositoryInterfaces,
    OrderRepositoryInterfaces: OrderRepositoryInterfaces,
    PaymentRepositoryInterfaces: PaymentRepositoryInterfaces,
    ProductVariantRepositoryInterfaces: ProductVariantRepositoryInterfaces,
    VendorRepositoryInterfaces: VendorRepositoryInterfaces
};
