System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var InputboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputboxComponent = (function () {
                function InputboxComponent() {
                    this.output = "In aliquet luctus lorem. Mauris id eros pellentesque, scelerisque sem id, mollis risus. Suspendisse eget neque vel metus tristique venenatis suscipit vitae dui. In pretium eleifend metus non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum malesuada aliquet pharetra. Nunc non dui eu orci commodo lobortis. Mauris tempus elit erat, sit amet convallis lorem bibendum et. Cras venenatis metus ac lectus sollicitudin commodo. Aliquam sit amet euismod lorem, eget viverra metus. Nullam pharetra fermentum dui, in vestibulum nisl accumsan blandit. Praesent efficitur nunc vel quam ultrices, ut ornare massa cursus. Cras consectetur elementum risus et molestie. In ac tortor a justo eleifend tempor et at nunc. Cras volutpat arcu in nulla commodo mollis.";
                }
                InputboxComponent.prototype.check = function () {
                    if (this.politician === "Hillary Clinton") {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                InputboxComponent.prototype.ngOnInit = function () {
                };
                InputboxComponent = __decorate([
                    core_1.Component({
                        selector: 'app-inputbox',
                        templateUrl: 'app/inputbox/inputbox.component.html',
                        styleUrls: ['app/inputbox/inputbox.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputboxComponent);
                return InputboxComponent;
            }());
            exports_1("InputboxComponent", InputboxComponent);
        }
    }
});
//# sourceMappingURL=inputbox.component.js.map