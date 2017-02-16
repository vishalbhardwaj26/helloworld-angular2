"use strict";
var router_1 = require("@angular/router");
var addproducts_component_1 = require("./products/addproducts.component");
var products_component_1 = require("./products/products.component");
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: products_component_1.ProductsComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'addproducts', component: addproducts_component_1.AddProductsComponent }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routings.js.map