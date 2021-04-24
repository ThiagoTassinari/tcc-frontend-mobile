"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    function AppComponent() {
        this.appPages = [
            { title: 'Alimentos', url: '/alimentos', icon: 'fast-food' },
            { title: 'Cadastrar', url: '/cadastro', icon: 'pencil' },
            { title: 'Receitas', url: '/receitas', icon: 'book' },
            { title: 'Estoque', url: '/estoque', icon: 'file-tray-stacked' },
            { title: 'Pedidos', url: '/pedidos', icon: 'receipt' },
            { title: 'Perdas e Desperdícios', url: '/perdas', icon: 'trash' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
