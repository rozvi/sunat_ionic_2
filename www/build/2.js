webpackJsonp([2],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituacionModule", function() { return SituacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__situacion__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SituacionModule = (function () {
    function SituacionModule() {
    }
    SituacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__situacion__["a" /* Situacion */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__situacion__["a" /* Situacion */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__situacion__["a" /* Situacion */]
            ]
        })
    ], SituacionModule);
    return SituacionModule;
}());

//# sourceMappingURL=situacion.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Situacion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Situacion = (function () {
    function Situacion(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.facturacion = 0;
        this.nombreComercial = "";
        this.resultadoFac = 0;
        this.resultadoPer = 0;
        this.preguntas = ["1", "2", "3"];
        this.data = this.navParams.get('data');
        //this.nombreComercial = this.data["data"]["nombreComercial"];
        this.metodo();
    }
    Situacion.prototype.gotobar = function () {
        this.navCtrl.setRoot('BarPage');
    };
    Situacion.prototype.metodo = function () {
        var _this = this;
        this.service.metodo().subscribe(function (data) {
            if (data["cfacturacion"] < 0) {
                document.getElementById("tf").setAttribute("class", "invert");
                document.getElementById("resultado").setAttribute("class", "nega");
            }
            document.getElementById("resultado").innerHTML = Math.floor(data["cfacturacion"]) + "%";
            _this.resultadoFac = data["tfacturacion"];
            _this.resultadoPer = data["tpersona"];
            console.log(data);
        }, function (ex) {
            console.log(ex);
        });
    };
    Situacion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-situacion',template:/*ion-inline-start:"C:\Users\Carlos\Desktop\sunat\sunat\src\pages\situacion\situacion.html"*/'<ion-header>\n\n    \n\n  <ion-navbar color="danger">\n\n    <button ion-button menuToggle>\n\n      <span class="button-inner">\n\n          <ion-icon name="menu" role="img" aria-label="menu"></ion-icon>\n\n      </span>\n\n    </button>\n\n    <div class="toolbar-content">\n\n      <ion-title class="title">\n\n        <div class="toolbar-title">\n\n          MENU\n\n        </div>\n\n      </ion-title>\n\n    </div>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToLoginPage()">\n\n          <div class="toolbar-content">\n\n              <ion-title class="title">\n\n                <div class="toolbar-title">\n\n                  SALIR\n\n                </div>\n\n              </ion-title>\n\n            </div>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n      <ion-menu [content]="mycontent">\n\n      <ion-content>\n\n        <ion-list>\n\n          <p>mi menu</p>\n\n        </ion-list>\n\n      </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="Situacion"></ion-nav>\n\n  \n\n    <ion-card class="card">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col style="color:blue;text-align:center;padding-top:50px;">\n\n{{nombreComercial}}\n\n                </ion-col>\n\n                                <ion-col>\n\n        <img src="./assets/line-chart.svg" height="70px" width="50px">\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-card-content class="card-content">\n\n            <ion-card-title style="color:blue;text-align:center;font-size:14px;">SITUACION ACTUAL</ion-card-title>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label style="color:blue;">\n\n                    <ion-icon name="paper"></ion-icon>&nbsp;&nbsp;&nbsp;Facturacion</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-md-2 col-lg-2 col-2>\n\n                            <div id="tf" class="triangulo"></div>\n\n                        </ion-col>\n\n                        <ion-col col-md-4 col-lg-4 col-sm-4>\n\n                            <p id="resultado" class="posi">10%\n\n                                <p>\n\n                        </ion-col>\n\n                        <ion-col col-md-6 col-lg-6 col-sm-6 (click)="gotobar()">\n\n                            <p>Mi ultimo mes</p>\n\n                            <p>{{resultadoFac}}</p>\n\n                            <p>Ver detalles</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-card>\n\n    <br>\n\n    <ion-card>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label style="color:blue;">\n\n                    <ion-icon name="logo-usd"></ion-icon>&nbsp;&nbsp;&nbsp;Ventas</ion-label>\n\n            </ion-item>\n\n                <ion-item>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-md-2 col-lg-2 col-2>\n\n                            <div class="triangulo"></div>\n\n                        </ion-col>\n\n                        <ion-col col-md-4 col-lg-4 col-sm-4>\n\n                            <p id="resultado" class="posi">8%\n\n                                <p>\n\n                        </ion-col>\n\n                        <ion-col col-md-6 col-lg-6 col-sm-6>\n\n                            <p>Mi ultimo mes</p>\n\n                            <p>2000 unidades</p>\n\n                            <p>Ver detalles</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-card>\n\n        <ion-card>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label style="color:blue;">\n\n                    <ion-icon name="people"></ion-icon>&nbsp;&nbsp;&nbsp;Clientes</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-md-2 col-lg-2 col-2>\n\n                            <div class="triangulo"></div>\n\n                        </ion-col>\n\n                        <ion-col col-md-4 col-lg-4 col-sm-4>\n\n                            <p id="resultado" class="posi">5%\n\n                                <p>\n\n                        </ion-col>\n\n                        <ion-col col-md-6 col-lg-6 col-sm-6>\n\n                            <p>Mi ultimo mes</p>\n\n                            <p>{{resultadoPer}} personas</p>\n\n                            <p>Ver detalles</p>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Carlos\Desktop\sunat\sunat\src\pages\situacion\situacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], Situacion);
    return Situacion;
}());

//# sourceMappingURL=situacion.js.map

/***/ })

});
//# sourceMappingURL=2.js.map