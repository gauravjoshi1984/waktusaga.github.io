(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <hr>\n                <div class=\"topnav\" id=\"myTopnav\">\n                        <a href=\"#home\" class=\"active\">Home</a>\n                        <a href=\"#news\">News</a>\n                        <a href=\"#contact\">Contact</a>\n                        <a href=\"#about\">About</a>\n                        <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n                          <i class=\"fa fa-bars\"></i>\n                        </a>\n                      </div>\n                      <hr>\n        \n              \n\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-8\">\n        <app-servers></app-servers>\n    </div>\n    <div class=\"col-xs-4\">\n        <app-essay></app-essay>\n    </div>\n  </div>\n</div>\n-->\n<app-timer></app-timer>\n<app-interogation></app-interogation>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/essay/essay.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/essay/essay.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-3\">\n                <p>Hi I am the app essay i like to discuss more and more things</p>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/interogation/interogation.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/interogation/interogation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n\n         <hr>\n         <div class=\"col-xs-12\">\n             <h4>ALIANS</h4>\n             \n             <hr>\n             <div class=\"col-xs-4\">\n                 <h6>Information</h6>\n                <div id=\"die1\" class=\"dice\">0</div>\n            </div>\n            <div class=\"col-xs-4\">\n                <h6>Chance</h6>\n             <div id=\"die2\" class=\"dice\">0</div>\n             </div>\n             <button class=\"btn btn-primary\" (click)=\"rollDice()\">ROll DICE</button>\n             <button class=\"btn btn-primary\" (click)=\"swap()\">Swap</button>\n             \n                \n        </div> \n        <div class=\"col-xs-12\">\n            <H4>HUMANS</H4>\n            <hr>\n                <div class=\"col-xs-4\">\n                    <h6>Information</h6>\n                   <div id=\"die3\" class=\"dice\">0</div>\n               </div>\n               <div class=\"col-xs-4\">\n                   <h6>Chance</h6>\n                <div id=\"die4\" class=\"dice\">0</div>\n                </div>\n                <button class=\"btn btn-primary\" (click)=\"rollDice2()\">ROll DICE</button>\n                <button class=\"btn btn-primary\" (click)=\"swap2()\">Swap</button>\n\n                \n                   \n           </div> \n\n        \n\n        </div>\n        \n    </div>\n    \n</div>\n<hr>\n<div class=\"contanier\">\n    <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"col-xs-12\">\n            \n                     \n                </div>\n            </div>\n    </div>\n</div>\n<div class=\"col-xs-4\">\n        <button class=\"btn btn-primary\" (click)=\"interiogate()\">Interogate</button>\n        \n       \n</div>\n<H4 id=\"status\"></H4>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/server/server.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/server/server.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>I am {{'Server'}} My id is {{serverId}} and my status is {{serverStatus1()}}</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/servers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-3\">\n                <button class=\"btn btn-primary\">Add Server</button>\n        </div>\n        <div class=\"col-xs 6\">\n                <app-server></app-server>\n                <app-server></app-server>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timer/timer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        \n      "

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    color : darkblue;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    background-color: #333;\n    overflow: hidden;\n  }\n\n/* Style the links inside the navigation bar */\n\n.topnav a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n\n/* Change the color of links on hover */\n\n.topnav a:hover {\n    background-color: #ddd;\n    color: black;\n  }\n\n/* Add an active class to highlight the current page */\n\n.topnav a.active {\n    background-color: #4CAF50;\n    color: white;\n  }\n\n/* Hide the link that should open and close the topnav on small screens */\n\n.topnav .icon {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsdURBQXVEOztBQUN2RDtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUEsc0RBQXNEOztBQUN0RDtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBRUEseUVBQXlFOztBQUN6RTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIGNvbG9yIDogZGFya2JsdWU7XG59XG5cbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXG4udG9wbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4gIC50b3BuYXYgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXG4gIC50b3BuYXYgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC8qIEFkZCBhbiBhY3RpdmUgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjdXJyZW50IHBhZ2UgKi9cbiAgLnRvcG5hdiBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC8qIEhpZGUgdGhlIGxpbmsgdGhhdCBzaG91bGQgb3BlbiBhbmQgY2xvc2UgdGhlIHRvcG5hdiBvbiBzbWFsbCBzY3JlZW5zICovXG4gIC50b3BuYXYgLmljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _essay_essay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./essay/essay.component */ "./src/app/essay/essay.component.ts");
/* harmony import */ var _interogation_interogation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interogation/interogation.component */ "./src/app/interogation/interogation.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _server_server_component__WEBPACK_IMPORTED_MODULE_5__["ServerComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_6__["ServersComponent"],
                _essay_essay_component__WEBPACK_IMPORTED_MODULE_7__["EssayComponent"],
                _interogation_interogation_component__WEBPACK_IMPORTED_MODULE_8__["InterogationComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_9__["TimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/essay/essay.component.css":
/*!*******************************************!*\
  !*** ./src/app/essay/essay.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    color:red;\n    background-color: aqua;\n    padding: 20px;\n    border-style: solid;\n    border-color:rgb(140, 206, 53) ;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNzYXkvZXNzYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBK0I7O0FBRW5DIiwiZmlsZSI6InNyYy9hcHAvZXNzYXkvZXNzYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGNvbG9yOnJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6cmdiKDE0MCwgMjA2LCA1MykgO1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/essay/essay.component.ts":
/*!******************************************!*\
  !*** ./src/app/essay/essay.component.ts ***!
  \******************************************/
/*! exports provided: EssayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayComponent", function() { return EssayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EssayComponent = /** @class */ (function () {
    function EssayComponent() {
    }
    EssayComponent.prototype.ngOnInit = function () {
    };
    EssayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-essay',
            template: __webpack_require__(/*! raw-loader!./essay.component.html */ "./node_modules/raw-loader/index.js!./src/app/essay/essay.component.html"),
            styles: [__webpack_require__(/*! ./essay.component.css */ "./src/app/essay/essay.component.css")]
        })
    ], EssayComponent);
    return EssayComponent;
}());



/***/ }),

/***/ "./src/app/interogation/interogation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/interogation/interogation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dice {\n    float: left;\n    width: 32px;\n    background: red;\n    border: #999 1px solid;\n    padding: 10px;\n    font-size: 24px;\n    text-align: center;\n    margin:5px;\n\n    \n}\n\nbutton {\n\n    align-items: center;\n    background-color: rgba(37, 34, 231, 0.897);\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJvZ2F0aW9uL2ludGVyb2dhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7OztBQUdkOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ludGVyb2dhdGlvbi9pbnRlcm9nYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWNlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgYm9yZGVyOiAjOTk5IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOjVweDtcblxuICAgIFxufVxuXG5idXR0b24ge1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNCwgMjMxLCAwLjg5Nyk7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interogation/interogation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/interogation/interogation.component.ts ***!
  \********************************************************/
/*! exports provided: InterogationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterogationComponent", function() { return InterogationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterogationComponent = /** @class */ (function () {
    function InterogationComponent() {
    }
    InterogationComponent.prototype.ngOnInit = function () {
    };
    InterogationComponent.prototype.rollDice = function () {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        die1.innerHTML = d1.toString();
        die2.innerHTML = d2.toString();
    };
    InterogationComponent.prototype.swap = function () {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var temp = die1.innerHTML;
        die1.innerHTML = die2.innerHTML;
        die2.innerHTML = temp;
    };
    InterogationComponent.prototype.rollDice2 = function () {
        var die3 = document.getElementById("die3");
        var die4 = document.getElementById("die4");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var d3 = d1.toString();
        var d4 = d2.toString();
        die3.innerHTML = d3;
        die4.innerHTML = d4;
    };
    InterogationComponent.prototype.swap2 = function () {
        var die3 = document.getElementById("die3");
        var die4 = document.getElementById("die4");
        var temp = die3.innerHTML;
        die3.innerHTML = die4.innerHTML;
        die4.innerHTML = temp;
    };
    InterogationComponent.prototype.interiogate = function () {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var die3 = document.getElementById("die3");
        var die4 = document.getElementById("die4");
        var status = document.getElementById("status");
        var temp1 = die1.innerHTML;
        var alianinfo = parseInt(temp1);
        var temp2 = die2.innerHTML;
        var alianchance = parseInt(temp2);
        var temp3 = die3.innerHTML;
        var humaninfo = parseInt(temp3);
        var temp4 = die4.innerHTML;
        var humanchance = parseInt(temp4);
        if (alianinfo == humaninfo && alianchance > humanchance) {
            status.innerHTML = "Humans ! You Lose a Turn";
        }
        else if (alianinfo == humaninfo && alianchance < humanchance) {
            status.innerHTML = "Alians ! You Lose a Turn";
        }
        else if (alianinfo == humaninfo && alianchance == humanchance) {
            status.innerHTML = "Continue Playing !!";
        }
        else if (alianinfo < humaninfo && alianchance > humanchance) {
            status.innerHTML = "Humans you got the info but you skip a turn";
        }
        else if (alianinfo < humaninfo && alianchance < humanchance) {
            status.innerHTML = "Humans you got the info and Alians will skip a turn";
        }
        else if (alianinfo < humaninfo && alianchance == humanchance) {
            status.innerHTML = "Humans ! You got the information ";
        }
        else if (alianinfo > humaninfo && alianchance > humanchance) {
            status.innerHTML = "Alian you information is safe and Humans Lose a Turn";
        }
        else if (alianinfo > humaninfo && alianchance < humanchance) {
            status.innerHTML = "Alians you information is safe but You Lose a Turn";
        }
        else if (alianinfo > humaninfo && alianchance == humanchance) {
            status.innerHTML = "Alians you info is safe";
        }
        else {
            console.log("error");
        }
    };
    InterogationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interogation',
            template: __webpack_require__(/*! raw-loader!./interogation.component.html */ "./node_modules/raw-loader/index.js!./src/app/interogation/interogation.component.html"),
            styles: [__webpack_require__(/*! ./interogation.component.css */ "./src/app/interogation/interogation.component.css")]
        })
    ], InterogationComponent);
    return InterogationComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.css":
/*!*********************************************!*\
  !*** ./src/app/server/server.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    align-content: right;\n    text-align: left;\n    padding-left: 50px;\n    color: rgb(150, 60, 53);\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgYWxpZ24tY29udGVudDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgY29sb3I6IHJnYigxNTAsIDYwLCA1Myk7XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.serverStatus = 'Offline';
    }
    ServerComponent.prototype.serverStatus1 = function () {
        return this.serverStatus;
    };
    ServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! raw-loader!./server.component.html */ "./node_modules/raw-loader/index.js!./src/app/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/server/server.component.css")]
        })
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! raw-loader!./servers.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        })
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n\n    align-items: center;\n    background-color: rgba(37, 34, 231, 0.897);\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90aW1lci90aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzQsIDIzMSwgMC44OTcpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")]
        })
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Gauravjo/Desktop/Angular/my-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map