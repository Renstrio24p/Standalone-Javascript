"use strict";
(self["webpackChunkstandalone_javascript"] = self["webpackChunkstandalone_javascript"] || []).push([[701],{

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Start)
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
function Start(DOM) {
  return __async(this, null, function* () {
    const stylesModule = yield __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(__webpack_require__, 57));
    const styles = stylesModule.default;
    DOM.innerHTML = `
      <div id='container' class=${styles["d-flex-center-max"]}>
  
          <div class=${styles["d-flex-center-gap-20"]}>
              <a href="https://devdocs.io/javascript/">
                  <img 
                      class=${styles["js-image"]} 
                      src='images/javascript.png' 
                      alt='javascript logo'   
                  />
              </a>
              <h1 class=${styles["font-weight-400"]}>Standalone - JavaScript</h1>
              <a href="https://webpack.js.org/">
                  <img class=${styles["webpack-image"]} 
                   src='images/webpack.png' 
                   alt='webpack logo'
                  />
              </a>
          </div>
          <div>
              <button class=${styles["button-style"]} id='count'></button>
          </div>
          <div  class=${styles["d-flex-gap-20"]} id="rows"></div>
          <footer class=${styles["footer-abs-between"]} id="footer"></footer>
  
      </div>
    `;
    const { default: Render } = yield __webpack_require__.e(/* import() */ 401).then(__webpack_require__.bind(__webpack_require__, 401));
    Render();
  });
}


/***/ })

}]);