"use strict";
(self["webpackChunkstandalone_javascript"] = self["webpackChunkstandalone_javascript"] || []).push([[360],{

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
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
function Footer(DOM) {
  return __async(this, null, function* () {
    const stylesModule = yield __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(__webpack_require__, 57));
    const styles = stylesModule.default;
    DOM.innerHTML = `
        <div class=${styles["d-flex-between"]}>
            <span>Version 1.0.4</span>
            <img class=${styles["sass_img"]} src='images/sass.png' alt='sass logo' />
        </div>
        <div class=${styles["d-flex-between"]}>
            <img class=${styles["github_img"]} src='images/github.png' alt='github' />
            <span>Codespaces</span>
        </div>
    `;
  });
}


/***/ })

}]);