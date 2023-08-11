export declare const chatbazaar: {
    services: {
        CustomerService: typeof import("./services/customer-service").CustomerService;
        InventoryService: typeof import("./services/inventory-service").InventoryService;
        OrderService: typeof import("./services/order-service").OrderService;
        PaymentService: typeof import("./services/payment-service").PaymentService;
        StoreService: typeof import("./services/store-service").StoreService;
    };
    interfaces: {
        repository: {
            CustomerRepositoryInterfaces: typeof import("./interfaces/repositories/CustomerRepositoryInterfaces");
            OrderRepositoryInterfaces: typeof import("./interfaces/repositories/OrderRepositoryInterfaces");
            PaymentRepositoryInterfaces: typeof import("./interfaces/repositories/PaymentRepositoryInterfaces");
            ProductVariantRepositoryInterfaces: typeof import("./interfaces/repositories/ProductVariantRepositoryInterfaces");
            VendorRepositoryInterfaces: typeof import("./interfaces/repositories/VendorRepositoryInterfaces");
        };
        api: {
            InventoryServiceInterfaces: typeof import("./interfaces/services/InventoryServiceInterfaces");
            OrderServiceInterfaces: typeof import("./interfaces/services/OrderServiceInterfaces");
            PaymentServiceInterfaces: typeof import("./interfaces/services/PaymentServiceInterfaces");
            ServiceInterfaces: typeof import("./interfaces/services/ServiceInterfaces");
            StoreServiceInterfaces: typeof import("./interfaces/services/StoreServiceInterfaces");
        };
    };
};
//# sourceMappingURL=index.d.ts.map