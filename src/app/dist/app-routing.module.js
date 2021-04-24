"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'alimentos',
        pathMatch: 'full'
    },
    {
        path: 'cadastro',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/cadastro/cadastro.module'); }).then(function (m) { return m.CadastroPageModule; }); }
    },
    {
        path: 'alimentos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/alimentos/alimentos.module'); }).then(function (m) { return m.AlimentosPageModule; }); }
    },
    {
        path: 'receitas',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/receitas/receitas.module'); }).then(function (m) { return m.ReceitasPageModule; }); }
    },
    {
        path: 'estoque',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/estoque/estoque.module'); }).then(function (m) { return m.EstoquePageModule; }); }
    },
    {
        path: 'pedidos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/pedidos/pedidos.module'); }).then(function (m) { return m.PedidosPageModule; }); }
    },
    {
        path: 'perdas',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/perdas/perdas.module'); }).then(function (m) { return m.PerdasPageModule; }); }
    },
    {
        path: 'cadastro',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/cadastro/cadastro.module'); }).then(function (m) { return m.CadastroPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
