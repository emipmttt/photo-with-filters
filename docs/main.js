(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Documents/proyectos/vmly&r/photo/src/main.ts */"zUnb");


/***/ }),

/***/ "3Qc0":
/*!*******************************************************!*\
  !*** ./src/app/components/camera/camera.component.ts ***!
  \*******************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "dCQc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CameraComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.putFilter(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", filter_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](filter_r3.title);
} }
function CameraComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.alertMessage, " ");
} }
function CameraComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_15_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.removeUrlPhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Volver a la Camara");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.urlPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CameraComponent {
    constructor() {
        this.filters = [
            {
                title: "Santa Claus",
                url: "../../assets/img/s1.gif"
            },
            {
                title: "Santa Claus",
                url: "../../assets/img/s1.gif"
            }
        ];
        this.filterSelected = 0;
        this.x = 0;
        this.y = 0;
        this.pulsed = false;
        this.unselectable = false;
        this.alertMessage = "";
        this.urlPhoto = "";
        this.removeUrlPhoto = () => {
            this.urlPhoto = "";
        };
    }
    putFilter(index) {
        this.filterSelected = index;
    }
    ngOnInit() {
        var video = document.getElementById("video");
        var filter = document.getElementById("filter");
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        const streamWebCam = (stream) => {
            this.currentStream = stream;
            if (stream) {
                video.srcObject = stream;
                vm.alertMessage = "";
            }
            else {
                vm.alertMessage = "No pudimos acceder a tu camara :(";
            }
            video.play();
        };
        const throwError = (e) => {
            console.log(e);
        };
        const snap = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            canvas.style.display = "initial";
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
            context.drawImage(filter, parseInt(filter.style.left.replace(/px/, "")), parseInt(filter.style.top.replace(/px/, "")), 
            // parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth,
            // parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight
            filter.clientWidth, filter.clientHeight);
            let bodyHeight = document.querySelector("body").clientHeight;
            window.scrollTo(0, document.querySelector("video").clientHeight * 2);
            console.log(parseInt(filter.style.left.replace(/px/, "")), parseInt(filter.style.top.replace(/px/, "")), parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth, parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight);
            const imageData = canvas.toDataURL("image/png");
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post("/file", {
                image: imageData
            });
            const audioPath = 'https://photo-filter-backend.herokuapp.com' + response.data.data.replace(/storage/g, "");
            console.log(audioPath);
            console.log(response.data.data.replace(/storage/g, ""));
            console.log(response.data);
            try {
                // var link = document.getElementById('link');
                // link.setAttribute('href', audioPath);
                // link.setAttribute('target', "_blank");
                // link.click();
                this.urlPhoto = audioPath;
                // window.open(audioPath, "_taget")
            }
            catch (error) {
                console.log(error);
            }
            // if (os() == "iOS") {
            //   console.log("ios");
            //   canvas.toBlob((blob => {
            //     console.log(blob);
            //     var reader = new FileReader();
            //     reader.onload = function (e) {
            //       var link = document.getElementById('link');
            //       link.setAttribute('download', Date.now() + '.png');
            //       // link.setAttribute('href', reader.result.replace("image/png", "image/octet-stream"));
            //       // link.click();
            //     }
            //     reader.readAsDataURL(blob);
            //   }))
            // } else {
            //   var link = document.getElementById('link');
            //   // link.setAttribute('download', Date.now() + '.png');
            //   link.setAttribute('href', canvas.toDataURL());
            //   // link.click();
            //   canvas.style.display = "none"
            // }
        });
        document.querySelector("#snap").addEventListener("click", snap);
        // navigator.getUserMedia({ video: true }, streamWebCam, throwError)
        var vm = this;
        const constraints = { video: { facingMode: "user" }, audio: false };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
            streamWebCam(stream);
            vm.alertMessage = "";
        })
            .catch(function (error) {
            vm.alertMessage = "No pudimos acceder a tu camara :(";
            console.error("Oops. Something is broken.", error);
        });
        // navigator.mediaDevices.getUserMedia().then(function (mediaStream) {
        // }).catch(throwError);
        // drag filter
        window.onload = addListeners;
        function addListeners() {
            document.getElementById('filter').addEventListener('mousedown', mouseDown, false);
            document.getElementById('filter').addEventListener('touchstart', mouseDown, false);
            window.addEventListener('mouseup', mouseUp, false);
            window.addEventListener('touchleave', mouseUp, false);
            document.querySelector("#video").addEventListener('click', divMove);
        }
        function mouseUp() {
            window.removeEventListener('mousemove', divMove, true);
            window.removeEventListener('touchmove', divMove, true);
        }
        function mouseDown(e) {
            window.addEventListener('mousemove', divMove, true);
            window.addEventListener('touchmove', divMove, true);
        }
        function divMove(e) {
            var div = document.getElementById('filter');
            div.style.position = 'absolute';
            div.style.top = e.clientY - (div.clientHeight / 2) + 'px';
            div.style.left = e.clientX - (div.clientWidth / 2) + 'px';
        }
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 16, vars: 5, consts: [["id", "app_height"], [1, "app-container"], [1, "app-container__photo"], [1, "app-container__photo__img-container"], ["draggable", "false", "crossOrigin", "Anonymous", "id", "filter", 2, "left", "0px", "top", "0px", 3, "ngClass", "src"], [1, "app-container__photo__snap-container"], ["id", "snap"], ["id", "video", "webkit-playsinline", "true", "playsinline", "true"], [1, "app-container__controls"], ["class", "app-container__controls__button", 3, "click", 4, "ngFor", "ngForOf"], ["id", "link"], ["id", "picResult"], ["id", "canvas"], ["class", "alert", 4, "ngIf"], [1, "app-container__controls__button", 3, "click"], [3, "src"], [1, "alert"], ["target", "_blank", 3, "href"], [3, "click"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Snap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CameraComponent_div_10_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CameraComponent_div_14_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CameraComponent_div_15_Template, 8, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "filter")("src", ctx.filters[ctx.filterSelected].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alertMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.urlPhoto);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  z-index: 3;\n  top: 0;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(#555555, #333333);\n}\n\n.app-container__photo[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  bottom: 150px;\n  left: calc(50% - 50px);\n  z-index: 2;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%] {\n  align-self: center;\n  background: #2cc3ff;\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: none;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:hover {\n  outline: none;\n  background: #7ad9ff;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: #4b8da7;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-container__photo__img-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\n.app-container__controls[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  float: 3;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.7);\n  transition: 0.2s;\n  padding: 10px 20px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-left: -10px;\n  margin-right: 10px;\n  transition: 0.2s;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n@media (max-width: 1200px) {\n  .app-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .app-container__photo__snap-container[_ngcontent-%COMP%] {\n    text-align: center;\n    position: fixed;\n    bottom: 150px;\n    left: calc(50% - 50px);\n  }\n  .app-container__controls[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%] {\n    transition: 0.2s;\n    padding: 20px;\n    cursor: pointer;\n    display: inline-block;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 70px;\n    height: 70px;\n    transition: 0.2s;\n    margin-right: 0px;\n    border-radius: 5px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 25px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover {\n    padding: 10px 20px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n    margin-left: 0px;\n    margin-right: 0px;\n    transition: 0.2s;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFHQSxNQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBQUhGOztBQUtFO0VBQ0UsT0FBQTtBQUhKOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUpOOztBQVFNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBTlI7O0FBU007RUFDRSxhQUFBO0FBUFI7O0FBVU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFXTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVRSOztBQWFJO0VBQ0UsV0FBQTtBQVhOOztBQWNJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBWk47O0FBZUk7RUFDRSxXQUFBO0FBYk47O0FBaUJFO0VBQ0UsK0VBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsUUFBQTtBQWZKOztBQWlCSTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWhCTjs7QUFrQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhCUjs7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFwQk47O0FBc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFwQlI7O0FBdUJNO0VBQ0UsZUFBQTtBQXJCUjs7QUE2QkE7RUFFRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQTNCRjtFQThCSTtJQUNFLFdBQUE7RUE1Qk47RUFnQ0k7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7RUEvQk47RUFxQ0U7SUFDRSwrRUFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQW5DSjtFQXFDSTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQW5DTjtFQXFDTTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQW5DUjtFQXNDTTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBcENSO0VBeUNJO0lBR0Usa0JBQUE7RUF6Q047RUEyQ007SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXpDUjtBQUNGOztBQW1EQTtFQUNFLFlBQUE7QUFqREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NhbnZhcyB7XG4gIGRpc3BsYXk6IG5vbmVcbn1cblxuLmFsZXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAzO1xuXG5cbiAgdG9wOiAwO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTU1NTU1LCAjMzMzMzMzKTtcblxuICAmX19waG90byB7XG4gICAgZmxleDogMztcblxuICAgICZfX3NuYXAtY29udGFpbmVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgICAgYm90dG9tOiAxNTBweDtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICB6LWluZGV4OiAyO1xuXG5cblxuICAgICAgI3NuYXAge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig0NCwgMTk1LCAyNTUpO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgI3NuYXA6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICAjc25hcDpob3ZlciB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDIxNywgMjU1KTtcbiAgICAgIH1cblxuICAgICAgI3NuYXA6YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDc1LCAxNDEsIDE2Nyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgI3ZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgJl9faW1nLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5maWx0ZXIge1xuICAgICAgd2lkdGg6IDUwdnc7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udHJvbHMge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgZmxvYXQ6IDM7XG5cbiAgICAmX19idXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgdHJhbnNpdGlvbjogLjJzO1xuXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG5cbiAgICAgIH1cbiAgICB9XG5cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblxuICAuYXBwLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fcGhvdG8ge1xuICAgICAgI3ZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cblxuICAgICAgJl9fc25hcC1jb250YWluZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgICAgICBib3R0b206IDE1MHB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuXG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250cm9scyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkpO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgJl9fYnV0dG9uOmhvdmVyIHtcblxuXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxufVxuXG5cbmEge1xuICBjb2xvcjogd2hpdGVcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-camera',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_main_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/app.component */ "qHy1");
/* harmony import */ var _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/camera/camera.component */ "3Qc0");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_components_main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dCQc":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://photo-filter-backend.herokuapp.com/',
  // baseURL: 'http://localhost:3000',
}));


/***/ }),

/***/ "qHy1":
/*!**************************************************!*\
  !*** ./src/app/components/main/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../camera/camera.component */ "3Qc0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'photo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_camera_camera_component__WEBPACK_IMPORTED_MODULE_1__["CameraComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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