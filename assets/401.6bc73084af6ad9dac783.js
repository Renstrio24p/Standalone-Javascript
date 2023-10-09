"use strict";
(self["webpackChunkstandalone_javascript"] = self["webpackChunkstandalone_javascript"] || []).push([[401],{

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Render)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function Render() {
  return __async(this, null, function* () {
    const { default: Footer } = yield __webpack_require__.e(/* import() */ 360).then(__webpack_require__.bind(__webpack_require__, 360));
    const { setupCounter } = yield __webpack_require__.e(/* import() */ 738).then(__webpack_require__.bind(__webpack_require__, 738));
    const { default: Rows } = yield __webpack_require__.e(/* import() */ 301).then(__webpack_require__.bind(__webpack_require__, 301));
    const { default: UniqueHash } = yield __webpack_require__.e(/* import() */ 234).then(__webpack_require__.bind(__webpack_require__, 234));
    const ContainerDOM = document.getElementById("container");
    const APP = document.getElementById("count");
    const Row = document.getElementById("rows");
    const Foot = document.getElementById("footer");
    window.addEventListener("DOMContentLoaded", () => {
      ContainerDOM.id = UniqueHash();
      APP.id = UniqueHash();
      Row.id = UniqueHash();
      Foot.id = UniqueHash();
    });
    setupCounter(APP);
    Rows(Row);
    Footer(Foot);
  });
}


/***/ })

}]);