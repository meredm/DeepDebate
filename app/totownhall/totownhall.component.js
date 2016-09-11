System.register(['angular2/core', '../inputbox/inputbox.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, inputbox_component_1;
    var TotownhallComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inputbox_component_1_1) {
                inputbox_component_1 = inputbox_component_1_1;
            }],
        execute: function() {
            TotownhallComponent = (function () {
                function TotownhallComponent() {
                }
                TotownhallComponent.prototype.ngOnInit = function () {
                };
                TotownhallComponent = __decorate([
                    core_1.Component({
                        selector: 'app-totownhall',
                        templateUrl: 'app/totownhall/totownhall.component.html',
                        styleUrls: ['app/totownhall/totownhall.component.css'],
                        directives: [inputbox_component_1.InputboxComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TotownhallComponent);
                return TotownhallComponent;
            }());
            exports_1("TotownhallComponent", TotownhallComponent);
        }
    }
});
//# sourceMappingURL=totownhall.component.js.map