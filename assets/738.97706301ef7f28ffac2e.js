"use strict";
(self["webpackChunkstandalone_javascript"] = self["webpackChunkstandalone_javascript"] || []).push([[738],{

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupCounter: () => (/* binding */ setupCounter)
/* harmony export */ });
function setupCounter(BTNElement) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    BTNElement.innerHTML = `count is ${counter}`;
  };
  BTNElement.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}


/***/ })

}]);