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





function CameraComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.putFilter(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", filter_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](filter_r2.title);
} }
function CameraComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.alertMessage, "\n");
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
            console.log(parseInt(filter.style.left.replace(/px/, "")), parseInt(filter.style.top.replace(/px/, "")), parseInt(filter.style.left.replace(/px/, "")) + filter.clientWidth, parseInt(filter.style.top.replace(/px/, "")) + filter.clientHeight);
            const imageData = canvas.toDataURL("image/png");
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post("/file", {
                image: imageData
            });
            const audioPath = 'http://localhost:3000' + response.data.data.replace(/storage/g, "");
            console.log(audioPath);
            console.log(response.data.data.replace(/storage/g, ""));
            console.log(response.data);
            var link = document.getElementById('link');
            link.setAttribute('href', audioPath);
            link.setAttribute('target', "_blank");
            link.click();
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
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 14, vars: 4, consts: [[1, "app-container"], [1, "app-container__photo"], [1, "app-container__photo__img-container"], ["draggable", "false", "crossOrigin", "Anonymous", "id", "filter", 2, "left", "0px", "top", "0px", 3, "ngClass", "src"], [1, "app-container__photo__snap-container"], ["id", "snap"], ["id", "video", "webkit-playsinline", "true", "playsinline", "true"], [1, "app-container__controls"], ["class", "app-container__controls__button", 3, "click", 4, "ngFor", "ngForOf"], ["id", "link"], ["id", "picResult"], ["id", "canvas"], ["class", "alert", 4, "ngIf"], [1, "app-container__controls__button", 3, "click"], [3, "src"], [1, "alert"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Snap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CameraComponent_div_9_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CameraComponent_div_13_Template, 2, 1, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "filter")("src", ctx.filters[ctx.filterSelected].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alertMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  color: white;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  top: 0;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(#555555, #333333);\n}\n\n.app-container__photo[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  bottom: 150px;\n  left: calc(50% - 50px);\n  z-index: 2;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%] {\n  align-self: center;\n  background: #2cc3ff;\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: none;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:hover {\n  outline: none;\n  background: #7ad9ff;\n}\n\n.app-container__photo__snap-container[_ngcontent-%COMP%]   #snap[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: #4b8da7;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-container__photo__img-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n\n.app-container__photo[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\n.app-container__controls[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  float: 3;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.7);\n  transition: 0.2s;\n  padding: 10px 20px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-left: -10px;\n  margin-right: 10px;\n  transition: 0.2s;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n@media (max-width: 1200px) {\n  .app-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-container__photo[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .app-container__photo__snap-container[_ngcontent-%COMP%] {\n    text-align: center;\n    position: fixed;\n    bottom: 150px;\n    left: calc(50% - 50px);\n  }\n  .app-container__controls[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%] {\n    transition: 0.2s;\n    padding: 20px;\n    cursor: pointer;\n    display: inline-block;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 70px;\n    height: 70px;\n    transition: 0.2s;\n    margin-right: 0px;\n    border-radius: 5px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 25px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover {\n    padding: 10px 20px;\n  }\n  .app-container__controls__button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n    margin-left: 0px;\n    margin-right: 0px;\n    transition: 0.2s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFHQSxNQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBQUhGOztBQUtFO0VBQ0UsT0FBQTtBQUhKOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUpOOztBQVFNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBTlI7O0FBU007RUFDRSxhQUFBO0FBUFI7O0FBVU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFXTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVRSOztBQWFJO0VBQ0UsV0FBQTtBQVhOOztBQWNJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBWk47O0FBZUk7RUFDRSxXQUFBO0FBYk47O0FBaUJFO0VBQ0UsK0VBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsUUFBQTtBQWZKOztBQWlCSTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWhCTjs7QUFrQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhCUjs7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFwQk47O0FBc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFwQlI7O0FBdUJNO0VBQ0UsZUFBQTtBQXJCUjs7QUE2QkE7RUFFRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQTNCRjtFQThCSTtJQUNFLFdBQUE7RUE1Qk47RUFnQ0k7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7RUEvQk47RUFxQ0U7SUFDRSwrRUFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQW5DSjtFQXFDSTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQW5DTjtFQXFDTTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQW5DUjtFQXNDTTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBcENSO0VBeUNJO0lBR0Usa0JBQUE7RUF6Q047RUEyQ007SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXpDUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjYW52YXMge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5hbGVydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcblxuXG4gIHRvcDogMDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU1NTU1NSwgIzMzMzMzMyk7XG5cbiAgJl9fcGhvdG8ge1xuICAgIGZsZXg6IDM7XG5cbiAgICAmX19zbmFwLWNvbnRhaW5lciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAgIGJvdHRvbTogMTUwcHg7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgICAgei1pbmRleDogMjtcblxuXG5cbiAgICAgICNzbmFwIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDQsIDE5NSwgMjU1KTtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgICNzbmFwOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3NuYXA6aG92ZXIge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIyLCAyMTcsIDI1NSk7XG4gICAgICB9XG5cbiAgICAgICNzbmFwOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig3NSwgMTQxLCAxNjcpO1xuICAgICAgfVxuICAgIH1cblxuICAgICN2aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgICZfX2ltZy1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuZmlsdGVyIHtcbiAgICAgIHdpZHRoOiA1MHZ3O1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRyb2xzIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGZsb2F0OiAzO1xuXG4gICAgJl9fYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIHRyYW5zaXRpb246IC4ycztcblxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xuXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAmX19idXR0b24ge1xuICAgICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cbiAgLmFwcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICZfX3Bob3RvIHtcbiAgICAgICN2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG5cbiAgICAgICZfX3NuYXAtY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAgICAgYm90dG9tOiAxNTBweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcblxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udHJvbHMge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpKTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmX19idXR0b24ge1xuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgICZfX2J1dHRvbjpob3ZlciB7XG5cblxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"] });
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