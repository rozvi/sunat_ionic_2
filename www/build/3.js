webpackJsonp([3],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.registerCredentials = { ruc: '', username: '', password: '' };
    }
    LoginPage.prototype.login = function () {
        //si quieres ver el homePage descomentame pero comenta toda la funcion this.service.login
        //this.navCtrl.setRoot('Situacion');
        var _this = this;
        this.service.login(this.registerCredentials).subscribe(function (res) {
            console.log(res);
            if (res.IsLogin == "True") {
                _this.navCtrl.setRoot('Situacion', { data: res });
            }
            else {
                _this.showError("Access Denied");
            }
        });
    };
    LoginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Carlos\Desktop\sunat\sunat\src\pages\login\login.html"*/'<ion-content class="backgroundImgA">\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-lg-4 col-md-2 col-1>\n\n          </ion-col>\n\n            <ion-col col-lg-4 col-md-8 col-10>\n\n                <br>\n\n                <br>\n\n                <br>\n\n                <br>\n\n                <br>\n\n                <br>\n\n                <ion-card>\n\n                    <br>\n\n                    <ion-card-header>\n\n                      <img src="./assets/logotipo.svg" width="100" height="100"/>\n\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        <form #FormLogin="ngForm" (ngSubmit)="login()">\n\n                        <ion-item>\n\n                          <ion-label floating>RUC</ion-label>\n\n                          <ion-input [(ngModel)]="registerCredentials.ruc" name="ruc" type="text" required></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                          <ion-label floating>Usuario</ion-label>\n\n                          <ion-input [(ngModel)]="registerCredentials.username" name="username" type="text" required></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                          <ion-label floating>Clave</ion-label>\n\n                          <ion-input [(ngModel)]="registerCredentials.password" name="password" type="password" required></ion-input>\n\n                        </ion-item>\n\n      \n\n                          <button class="button button-block button-calm" [disabled]="!FormLogin.form.valid" type="submit" color="danger" full ion-button>ENTRAR\n\n                          </button>\n\n      \n\n                        </form>\n\n                      <br>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-lg-4 col-md-2 col-1>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Carlos\Desktop\sunat\sunat\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map