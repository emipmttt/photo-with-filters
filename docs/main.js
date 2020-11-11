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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_os_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/os.js */ "MGOS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CameraComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.putFilter(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", filter_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r2.title);
} }
function CameraComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.alertMessage, "\n");
} }
class CameraComponent {
    constructor() {
        this.filters = [
            {
                title: "Santa Claus",
                url: "https://media.tenor.com/images/8b360df95045a73b283fab18cdda9ea7/tenor.gif"
            },
            {
                title: "Santa Claus",
                url: "https://media.tenor.com/images/cd870e19bed53868c0419ad65bdbbdf9/tenor.gif"
            }
        ];
        this.filterSelected = 0;
        this.x = 0;
        this.y = 0;
        this.pulsed = false;
        this.unselectable = false;
        this.alertMessage = "";
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
            video.srcObject = stream;
            video.play();
        };
        const throwError = (e) => {
            console.log(e);
        };
        const snap = () => {
            canvas.style.display = "initial";
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
            context.drawImage(filter, parseInt(filter.style.left.replace(/px/, "")), parseInt(filter.style.top.replace(/px/, "")), 
            // parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth,
            // parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight
            filter.clientWidth, filter.clientHeight);
            console.log(parseInt(filter.style.left.replace(/px/, "")), parseInt(filter.style.top.replace(/px/, "")), parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth, parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight);
            const imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            if (Object(_utils_os_js__WEBPACK_IMPORTED_MODULE_1__["default"])() == "iOS") {
                console.log("ios");
                canvas.toBlob((blob => {
                    console.log(blob);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var link = document.getElementById('link');
                        link.setAttribute('download', Date.now() + '.png');
                        // link.setAttribute('href', reader.result.replace("image/png", "image/octet-stream"));
                        link.click();
                    };
                    reader.readAsDataURL(blob);
                }));
            }
            else {
                // console.log(canvas.toDataURL())
                var link = document.getElementById('link');
                // link.setAttribute('download', Date.now() + '.png');
                link.setAttribute('href', canvas.toDataURL());
                link.click();
                canvas.style.display = "none";
            }
        };
        document.querySelector("#snap").addEventListener("click", snap);
        // navigator.getUserMedia({ video: true }, streamWebCam, throwError)
        var vm = this;
        const constraints = { video: { facingMode: "user" }, audio: false };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
            // track = stream.getTracks()[0];
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
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 14, vars: 4, consts: [[1, "app-container"], [1, "app-container__photo"], [1, "app-container__photo__img-container"], ["draggable", "false", "crossOrigin", "Anonymous", "id", "filter", 2, "left", "0px", "top", "0px", 3, "ngClass", "src"], ["id", "video", "webkit-playsinline", "true", "playsinline", "true"], [1, "app-container__photo__snap-container"], ["id", "snap"], [1, "app-container__controls"], ["class", "app-container__controls__button", 3, "click", 4, "ngFor", "ngForOf"], ["id", "link"], ["id", "picResult"], ["id", "canvas"], ["class", "alert", 4, "ngIf"], [1, "app-container__controls__button", 3, "click"], [3, "src"], [1, "alert"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Snap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CameraComponent_div_9_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CameraComponent_div_13_Template, 2, 1, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "filter")("src", ctx.filters[ctx.filterSelected].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  top: 0;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(#555555, #333333);\n}\n\n.app-container__photo[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%] {\n  margin-top: -200px;\n  text-align: center;\n  position: relative;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%] {\n  align-self: center;\n  background: #2cc3ff;\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: none;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:hover {\n  outline: none;\n  background: #7ad9ff;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: #4b8da7;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-container__photo__img-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\n.app-container__controls[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  float: 3;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.7);\n  transition: 0.2s;\n  padding: 10px 20px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-left: -10px;\n  margin-right: 10px;\n  transition: 0.2s;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n@media (max-width: 1200px) {\n  .app-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .app-container__photo__snap-container[_ngcontent-%COMP%] {\n    text-align: center;\n    position: fixed;\n    bottom: 150px;\n    left: calc(50% - 50px);\n  }\n  .app-container__controls[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%] {\n    transition: 0.2s;\n    padding: 20px;\n    cursor: pointer;\n    display: inline-block;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 70px;\n    height: 70px;\n    transition: 0.2s;\n    margin-right: 0px;\n    border-radius: 5px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 25px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover {\n    padding: 10px 20px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n    margin-left: 0px;\n    margin-right: 0px;\n    transition: 0.2s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFHQSxNQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBQUhGOztBQUtFO0VBQ0UsT0FBQTtBQUhKOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSE47O0FBT007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFMUjs7QUFRTTtFQUNFLGFBQUE7QUFOUjs7QUFTTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVBSOztBQVVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBWUk7RUFDRSxXQUFBO0FBVk47O0FBYUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFYTjs7QUFjSTtFQUNFLFdBQUE7QUFaTjs7QUFnQkU7RUFDRSwrRUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxRQUFBO0FBZEo7O0FBZ0JJO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0FBZk47O0FBaUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFmUjs7QUFxQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFuQk47O0FBcUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFuQlI7O0FBc0JNO0VBQ0UsZUFBQTtBQXBCUjs7QUE0QkE7RUFFRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQTFCRjtFQTZCSTtJQUNFLFdBQUE7RUEzQk47RUErQkk7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7RUE5Qk47RUFvQ0U7SUFDRSwrRUFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWxDSjtFQW9DSTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQWxDTjtFQW9DTTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQWxDUjtFQXFDTTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBbkNSO0VBd0NJO0lBR0Usa0JBQUE7RUF4Q047RUEwQ007SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXhDUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjYW52YXMge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5hbGVydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcblxuXG4gIHRvcDogMDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU1NTU1NSwgIzMzMzMzMyk7XG5cbiAgJl9fcGhvdG8ge1xuICAgIGZsZXg6IDM7XG5cbiAgICAmX19zbmFwLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuXG4gICAgICAjc25hcCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDQ0LCAxOTUsIDI1NSk7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAjc25hcDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNzbmFwOmhvdmVyIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEyMiwgMjE3LCAyNTUpO1xuICAgICAgfVxuXG4gICAgICAjc25hcDphY3RpdmUge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDE0MSwgMTY3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjdmlkZW8ge1xuICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAmX19pbWctY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmZpbHRlciB7XG4gICAgICB3aWR0aDogNTB2dztcbiAgICB9XG4gIH1cblxuICAmX19jb250cm9scyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBmbG9hdDogMztcblxuICAgICZfX2J1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICB0cmFuc2l0aW9uOiAuMnM7XG5cbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcblxuICAgICAgfVxuICAgIH1cblxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmX19waG90byB7XG4gICAgICAjdmlkZW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuXG4gICAgICAmX19zbmFwLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgICAgIGJvdHRvbTogMTUwcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG5cblxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRyb2xzIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSk7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAmX19idXR0b246aG92ZXIge1xuXG5cbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
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

/***/ "MGOS":
/*!*************************!*\
  !*** ./src/utils/os.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
});


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