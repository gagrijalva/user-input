"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var click_me_component_1 = require('./click-me.component');
var keyup_component_v1_1 = require('./keyup.component_v1');
var loop_back_component_1 = require('./loop-back.component');
var keyup_component_v2_1 = require('./keyup.component_v2');
var keyup_component_v3_1 = require('./keyup.component_v3');
var keyup_component_v4_1 = require('./keyup.component_v4');
var little_tour_component_1 = require('./little-tour.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Basic Samples App</h1>\n            <click-me></click-me><br><br>\n            <h3>Keyup Version 1</h3>\n            <keyup></keyup>\n            <h3>Template reference variable</h3>\n            <loop-back></loop-back>\n            <h3>Keyup Version 2</h3>\n            <key-up2></key-up2>\n            <h3>Keyup Version 3</h3>\n            <key-up3></key-up3>\n            <h3>Keyup Version 4</h3>\n            <key-up4></key-up4>\n            <h3>Little Tour Heroes</h3>\n            <little-tour></little-tour>\n  ",
            directives: [click_me_component_1.ClickMeComponent,
                keyup_component_v1_1.KeyUpComponent_v1,
                loop_back_component_1.LoopbackComponent,
                keyup_component_v2_1.KeyUpComponent_v2,
                keyup_component_v3_1.KeyUpComponent_v3,
                keyup_component_v4_1.KeyUpComponent_v4,
                little_tour_component_1.LittleTourComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map