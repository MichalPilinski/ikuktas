(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git Repos\iKuktas\iKuktasClient\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function AppComponent__svg_image_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 60);
} }
function AppComponent__svg_image_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 61);
} }
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'iKuktasClient';
        this.stillError = false;
        this.graphDataMonth = null;
        this.graphDataDay = null;
    }
    ngOnInit() {
        this.loadSettings().then(() => {
            this.initHttpRequests();
            this.initAudio();
        });
    }
    loadSettings() {
        const jsonFile = `assets/config.json`;
        return new Promise((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response) => {
                this.settings = response;
                resolve();
            }).catch((response) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
    initHttpRequests() {
        if (!this.settings)
            return;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(9000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0)).subscribe(x => {
            this.http.get(this.settings.baseUrl + '/Temperature/extended').subscribe(data => {
                this.data = data;
            });
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(90000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0)).subscribe(x => {
            this.http.get(this.settings.baseUrl + '/Temperature/graphMonth').subscribe(data => {
                this.graphDataMonth = data;
                let labels = [];
                this.graphDataMonth.timeStamps.forEach(x => {
                    labels.push(x.toString().split('T')[0]);
                });
                this.chartMonthData = {
                    labels: labels,
                    datasets: [{
                            label: 'Zewn-1',
                            data: this.graphDataMonth.leftTopTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-1',
                            data: this.graphDataMonth.leftMiddleTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-2',
                            data: this.graphDataMonth.rightTopTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-3',
                            data: this.graphDataMonth.rightMiddleTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-4',
                            data: this.graphDataMonth.rightBottomTemps,
                            fill: false,
                            tension: 0.1
                        }]
                };
            });
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(90000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0)).subscribe(x => {
            this.http.get(this.settings.baseUrl + '/Temperature/graphDay').subscribe(data => {
                this.graphDataDay = data;
                let labels = [];
                this.graphDataDay.timeStamps.forEach(x => {
                    labels.push(x.toString().split('T')[1].split("+")[0]);
                });
                this.chartDayData = {
                    labels: labels,
                    datasets: [{
                            label: 'Zewn-1',
                            data: this.graphDataDay.leftTopTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-1',
                            data: this.graphDataDay.leftMiddleTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-2',
                            data: this.graphDataDay.rightTopTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-3',
                            data: this.graphDataDay.rightMiddleTemps,
                            fill: false,
                            tension: 0.1
                        }, {
                            label: 'Wew-4',
                            data: this.graphDataDay.rightBottomTemps,
                            fill: false,
                            tension: 0.1
                        }]
                };
            });
        });
    }
    initAudio() {
        let audio = new Audio();
        audio.src = "assets/alarm.wav";
        audio.load();
        this.playingSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(f => this.stillError)).subscribe(x => {
            audio.play();
        });
    }
    isError() {
        var _a, _b, _c, _d;
        this.stillError = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.rightTopTemp.temperature) < 5 ||
            ((_b = this.data) === null || _b === void 0 ? void 0 : _b.rightMiddleTemp.temperature) < 5 ||
            ((_c = this.data) === null || _c === void 0 ? void 0 : _c.rightBottomTemp.temperature) < 5 ||
            ((_d = this.data) === null || _d === void 0 ? void 0 : _d.leftMiddleTemp.temperature) < 5;
        return this.stillError;
    }
    isWarning() {
        var _a, _b, _c, _d;
        if (this.isError())
            return false;
        return ((_a = this.data) === null || _a === void 0 ? void 0 : _a.rightTopTemp.hourPrediction) < 5 ||
            ((_b = this.data) === null || _b === void 0 ? void 0 : _b.rightMiddleTemp.hourPrediction) < 5 ||
            ((_c = this.data) === null || _c === void 0 ? void 0 : _c.rightBottomTemp.hourPrediction) < 5 ||
            ((_d = this.data) === null || _d === void 0 ? void 0 : _d.leftMiddleTemp.hourPrediction) < 5;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 109, vars: 98, consts: [[1, "master-container"], [1, "topbar"], ["src", "assets/cactus.svg", 1, "cactus-svg"], ["src", "assets/thermometer.svg", 1, "thermometer-svg"], [1, "title"], [1, "content"], [1, "column"], [1, "schematic-column"], ["width", "100%", "height", "100%", "viewBox", "0 0 960 780"], ["x1", "100", "y1", "400", "x2", "200", "y2", "550", 1, "doors"], ["x", "200", "y", "300", "rx", "5", "ry", "5", "width", "600", "height", "350", 1, "rectangle"], ["x", "233", "y", "83", "rx", "2", "ry", "2", "width", "33", "height", "33", 1, "sensor-outline"], ["x", "237", "y", "87", "width", "80", "height", "80", "href", "assets/thermometer.svg", 1, "sensor"], ["x", "205", "y", "20", 1, "text-temp2"], ["x", "206", "y", "40", 1, "text-temp"], ["x", "208", "y", "55", 1, "small"], ["x", "208", "y", "70", 1, "small"], ["x", "210", "y", "310", "rx", "5", "ry", "5", "width", "580", "height", "100", 1, "table"], ["x", "243", "y", "338", "rx", "2", "ry", "2", "width", "33", "height", "33", 1, "sensor-outline"], ["x", "247", "y", "342", "width", "80", "height", "80", "href", "assets/thermometer.svg", 1, "sensor"], ["x", "210", "y", "240", 1, "text-temp2"], ["x", "211", "y", "260", 1, "text-temp"], ["x", "213", "y", "275", 1, "small"], ["x", "213", "y", "290", 1, "small"], ["x", "728", "y", "338", "rx", "2", "ry", "2", "width", "33", "height", "33", 1, "sensor-outline"], ["x", "732", "y", "342", "width", "80", "height", "80", "href", "assets/thermometer.svg", 1, "sensor"], ["x", "640", "y", "240", 1, "text-temp2"], ["x", "641", "y", "260", 1, "text-temp"], ["x", "643", "y", "275", 1, "small"], ["x", "643", "y", "290", 1, "small"], ["x", "210", "y", "540", "rx", "5", "ry", "5", "width", "580", "height", "100", 1, "table"], ["x", "243", "y", "583", "rx", "2", "ry", "2", "width", "33", "height", "33", 1, "sensor-outline"], ["x", "247", "y", "587", "width", "80", "height", "80", "href", "assets/thermometer.svg", 1, "sensor"], ["x", "210", "y", "675", 1, "text-temp2"], ["x", "211", "y", "695", 1, "text-temp"], ["x", "213", "y", "713", 1, "small"], ["x", "213", "y", "728", 1, "small"], ["x", "728", "y", "583", "rx", "2", "ry", "2", "width", "33", "height", "33", 1, "sensor-outline"], ["x", "732", "y", "587", "width", "80", "height", "80", "href", "assets/thermometer.svg", 1, "sensor"], ["x", "640", "y", "675", 1, "text-temp2"], ["x", "641", "y", "695", 1, "text-temp"], ["x", "643", "y", "713", 1, "small"], ["x", "643", "y", "728", 1, "small"], ["x", "470", "y", "330", "rx", "2", "ry", "2", "width", "60", "height", "60", 1, "kuktasbox"], ["x", "472", "y", "340", "href", "assets/cactus.svg", 1, "kuktas-logo1"], ["x", "502", "y", "335", "href", "assets/thermometer.svg", 1, "kuktas-logo2"], ["x1", "280", "y1", "355", "x2", "470", "y2", "355", 1, "kuktas-line"], ["x1", "530", "y1", "355", "x2", "727", "y2", "355", 1, "kuktas-line"], ["x1", "485", "y1", "393", "x2", "485", "y2", "608", 1, "kuktas-line"], ["x1", "515", "y1", "393", "x2", "515", "y2", "608", 1, "kuktas-line"], ["x1", "485", "y1", "608", "x2", "280", "y2", "608", 1, "kuktas-line"], ["x1", "515", "y1", "608", "x2", "726", "y2", "608", 1, "kuktas-line"], ["x1", "500", "y1", "325", "x2", "500", "y2", "102", 1, "kuktas-line"], ["x1", "500", "y1", "102", "x2", "270", "y2", "102", 1, "kuktas-line"], ["x", "775", "y", "0", "href", "assets/exclamation.svg", "class", "exclamation-error", 4, "ngIf"], ["x", "775", "y", "0", "href", "assets/exclamation.svg", "class", "exclamation-warning", 4, "ngIf"], [1, "column", 2, "width", "50%"], [1, "graph-column"], [1, "top-spacer"], ["baseChart", "", "height", "120px", 3, "data", "type"], ["x", "775", "y", "0", "href", "assets/exclamation.svg", 1, "exclamation-error"], ["x", "775", "y", "0", "href", "assets/exclamation.svg", 1, "exclamation-warning"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "iKuktas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "image", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Termometr: Zewn-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "image", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "text", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Termometr: Wew-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "text", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "text", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "text", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "image", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "text", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Termometr: Wew-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "text", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "text", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "text", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "image", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "text", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Termometr: Wew-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "text", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "image", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "text", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Termometr: Wew-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "text", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "text", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "text", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "image", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "image", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "line", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "line", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "line", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "line", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "line", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "line", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AppComponent__svg_image_90_Template, 1, 0, "image", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AppComponent__svg_image_91_Template, 1, 0, "image", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Dane dzienne:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "canvas", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dane miesi\u0119czne:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "canvas", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " iKuktas v0.1 03.01.2021 - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Micha\u0142 Pili\u0144ski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temperatura: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 53, ctx.data == null ? null : ctx.data.leftTopTemp == null ? null : ctx.data.leftTopTemp.temperature, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u015Arednia godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 56, ctx.data == null ? null : ctx.data.leftTopTemp == null ? null : ctx.data.leftTopTemp.hourAverage, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Predykcja godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 59, ctx.data == null ? null : ctx.data.leftTopTemp == null ? null : ctx.data.leftTopTemp.hourPrediction, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.temperature) <= 5)("warning", (ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.temperature) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temperatura: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 62, ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.temperature, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u015Arednia godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 65, ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.hourAverage, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", (ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Predykcja godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 68, ctx.data == null ? null : ctx.data.leftMiddleTemp == null ? null : ctx.data.leftMiddleTemp.hourPrediction, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.temperature) <= 5)("warning", (ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.temperature) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temperatura: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 71, ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.temperature, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u015Arednia godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 74, ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.hourAverage, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", (ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Predykcja godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 77, ctx.data == null ? null : ctx.data.rightTopTemp == null ? null : ctx.data.rightTopTemp.hourPrediction, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.temperature) <= 5)("warning", (ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.temperature) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temperatura: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 80, ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.temperature, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u015Arednia godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](62, 83, ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.hourAverage, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", (ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Predykcja godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 86, ctx.data == null ? null : ctx.data.rightMiddleTemp == null ? null : ctx.data.rightMiddleTemp.hourPrediction, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.temperature) <= 5)("warning", (ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", (ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.temperature) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Temperatura: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](72, 89, ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.temperature, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u015Arednia godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 92, ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.hourAverage, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", (ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.hourPrediction) <= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Predykcja godz.: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](78, 95, ctx.data == null ? null : ctx.data.rightBottomTemp == null ? null : ctx.data.rightBottomTemp.hourPrediction, "1.1-1"), "\u2103 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWarning());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chartDayData)("type", "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chartMonthData)("type", "line");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".master-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n    height: 75px\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\r\n\r\n.cactus-svg[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    filter: invert(42%) sepia(38%) saturate(3940%) hue-rotate(92deg) brightness(116%) contrast(105%);\r\n}\r\n\r\n.thermometer-svg[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    filter: invert(42%) sepia(38%) saturate(3940%) hue-rotate(92deg) brightness(116%) contrast(105%);\r\n    margin-top: -35px;\r\n    margin-left: -13px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    flex: 2;\r\n    overflow: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-basis: 100%;\r\n    flex: 1;\r\n}\r\n\r\n.graph-column[_ngcontent-%COMP%] {\r\n    background-color: #fffeee;\r\n    height: 100%;\r\n    border-bottom: 1px solid grey;\r\n    border-top: 2px solid grey;\r\n}\r\n\r\n.schematic-column[_ngcontent-%COMP%] {\r\n    background-color: #F5FFF5;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    border-right: 1px solid grey;\r\n    border-bottom: 1px solid grey;\r\n    border-top: 2px solid grey;\r\n}\r\n\r\n.rectangle[_ngcontent-%COMP%] {\r\n    fill: lightgreen;\r\n    stroke: darkgreen;\r\n    stroke-width: 5;\r\n    fill-opacity: 0.1;\r\n    stroke-opacity: 1;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    fill: brown;\r\n    stroke: brown;\r\n    stroke-width: 4;\r\n    fill-opacity: 0.4;\r\n    stroke-opacity: 0.5;\r\n}\r\n\r\n.doors[_ngcontent-%COMP%] {\r\n    fill-opacity: 0.1;\r\n    stroke-opacity: 1;   \r\n    fill: darkgreen; \r\n    stroke: darkgreen;\r\n    stroke-width: 7;\r\n}\r\n\r\n.kuktasbox[_ngcontent-%COMP%] {\r\n    fill: lightgreen;\r\n    stroke-opacity: 1;   \r\n    stroke: #006400;\r\n    stroke-width: 4; \r\n}\r\n\r\n.kuktas-logo1[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    filter: invert(18%) sepia(44%) saturate(4727%) hue-rotate(109deg) brightness(95%) contrast(103%);\r\n}\r\n\r\n.kuktas-logo2[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    filter: invert(18%) sepia(44%) saturate(4727%) hue-rotate(109deg) brightness(95%) contrast(103%);\r\n}\r\n\r\n.kuktas-line[_ngcontent-%COMP%] {\r\n    fill-opacity: 0.1;\r\n    stroke-opacity: 1;   \r\n    fill: black; \r\n    stroke: black;\r\n    stroke-width: 4;\r\n    stroke-dasharray: 4;\r\n}\r\n\r\n.sensor-outline[_ngcontent-%COMP%] {\r\n    fill: darkgrey;\r\n    stroke: grey;\r\n    stroke-width: 5;\r\n    fill-opacity: 1;\r\n    stroke-opacity: 1;\r\n}\r\n\r\n.sensor[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    filter: invert(47%) sepia(6%) saturate(0%) hue-rotate(237deg) brightness(97%) contrast(87%);\r\n}\r\n\r\n.text-temp[_ngcontent-%COMP%] {\r\n    font: bold 18px sans-serif; \r\n}\r\n\r\n.text-temp2[_ngcontent-%COMP%] {\r\n    font: bold 16px sans-serif; \r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: red !important;\r\n    fill: red !important;\r\n    font: bold 25px sans-serif;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n    color: orange;\r\n    fill: #ffa500;\r\n    font: bold 15px sans-serif;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    min-height: 20px;\r\n    background-color: #EEEEEE;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 10px;\r\n}\r\n\r\n.exclamation-error[_ngcontent-%COMP%] {\r\n    width: 125px;\r\n    height: 125px;\r\n    filter: invert(16%) sepia(100%) saturate(7179%) hue-rotate(357deg) brightness(102%) contrast(118%);\r\n    animation: blinker 2s linear infinite;\r\n}\r\n\r\n.exclamation-warning[_ngcontent-%COMP%] {\r\n    width: 125px;\r\n    height: 125px;\r\n    filter: invert(60%) sepia(91%) saturate(1602%) hue-rotate(1deg) brightness(105%) contrast(104%);\r\n    animation: blinker 2s linear infinite;\r\n}\r\n\r\n@keyframes blinker {\r\n    50% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.top-spacer[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdHQUFnRztJQUNoRyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnR0FBZ0c7QUFDcEc7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0dBQWtHO0lBQ2xHLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0ZBQStGO0lBQy9GLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50b3BiYXIge1xyXG4gICAgaGVpZ2h0OiA3NXB4XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2FjdHVzLXN2ZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoMzglKSBzYXR1cmF0ZSgzOTQwJSkgaHVlLXJvdGF0ZSg5MmRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMDUlKTtcclxufVxyXG5cclxuLnRoZXJtb21ldGVyLXN2ZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoMzglKSBzYXR1cmF0ZSgzOTQwJSkgaHVlLXJvdGF0ZSg5MmRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMDUlKTtcclxuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5ncmFwaC1jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVlZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5zY2hlbWF0aWMtY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUZGRjU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5yZWN0YW5nbGUge1xyXG4gICAgZmlsbDogbGlnaHRncmVlbjtcclxuICAgIHN0cm9rZTogZGFya2dyZWVuO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjE7XHJcbiAgICBzdHJva2Utb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGZpbGw6IGJyb3duO1xyXG4gICAgc3Ryb2tlOiBicm93bjtcclxuICAgIHN0cm9rZS13aWR0aDogNDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC40O1xyXG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmRvb3JzIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC4xO1xyXG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7ICAgXHJcbiAgICBmaWxsOiBkYXJrZ3JlZW47IFxyXG4gICAgc3Ryb2tlOiBkYXJrZ3JlZW47XHJcbiAgICBzdHJva2Utd2lkdGg6IDc7XHJcbn1cclxuXHJcbi5rdWt0YXNib3gge1xyXG4gICAgZmlsbDogbGlnaHRncmVlbjtcclxuICAgIHN0cm9rZS1vcGFjaXR5OiAxOyAgIFxyXG4gICAgc3Ryb2tlOiAjMDA2NDAwO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA0OyBcclxufVxyXG5cclxuLmt1a3Rhcy1sb2dvMSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNDQlKSBzYXR1cmF0ZSg0NzI3JSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDMlKTtcclxufVxyXG5cclxuLmt1a3Rhcy1sb2dvMiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNDQlKSBzYXR1cmF0ZSg0NzI3JSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDMlKTtcclxufVxyXG5cclxuLmt1a3Rhcy1saW5lIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC4xO1xyXG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7ICAgXHJcbiAgICBmaWxsOiBibGFjazsgXHJcbiAgICBzdHJva2U6IGJsYWNrO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA0O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNDtcclxufVxyXG5cclxuLnNlbnNvci1vdXRsaW5lIHtcclxuICAgIGZpbGw6IGRhcmtncmV5O1xyXG4gICAgc3Ryb2tlOiBncmV5O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZW5zb3Ige1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCg0NyUpIHNlcGlhKDYlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyMzdkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NyUpO1xyXG59XHJcblxyXG4udGV4dC10ZW1wIHtcclxuICAgIGZvbnQ6IGJvbGQgMThweCBzYW5zLXNlcmlmOyBcclxufVxyXG5cclxuLnRleHQtdGVtcDIge1xyXG4gICAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7IFxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgZmlsbDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250OiBib2xkIDI1cHggc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZpbGw6ICNmZmE1MDA7XHJcbiAgICBmb250OiBib2xkIDE1cHggc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG59XHJcblxyXG5mb290ZXIgPiBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmV4Y2xhbWF0aW9uLWVycm9yIHtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxNiUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDcxNzklKSBodWUtcm90YXRlKDM1N2RlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMTglKTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5leGNsYW1hdGlvbi13YXJuaW5nIHtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDkxJSkgc2F0dXJhdGUoMTYwMiUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDQlKTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3Atc3BhY2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["NgChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__["NgChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_7__["NgChartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map