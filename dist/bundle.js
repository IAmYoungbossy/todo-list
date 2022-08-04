/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  --header-height: min-content;\n  --footer-height: min-content;\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: #cc98ff;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 50px;\n  height: 50px;\n}\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid black;\n}\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  background-color: white;\n  cursor: default;\n}\n.input-Li:hover {\n  background-color: white;\n  box-shadow: none;\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\nh2 {\n  color: var(--nav-header);\n}\n\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\nfooter {\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n}\n.project-list {\n  position: relative;\n}\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  cursor: default;\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: white;\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  gap: 10px;\n  line-height: 1;\n  border: 1px solid;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.task-div > img:first-child {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n}\n.task-div > img:last-child {\n  width: 25px;\n  height: 25px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: black;\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: #392929;\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.star-div > img:first-child {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n}\n.star-div > img:last-child {\n  height: 20px;\n  width: 20px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  width: max-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n}\n.date-and-span {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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CA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;AACA;;EAEE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,0CAA0C;EAC1C,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  --header-height: min-content;\n  --footer-height: min-content;\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: #cc98ff;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 50px;\n  height: 50px;\n}\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid black;\n}\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  background-color: white;\n  cursor: default;\n}\n.input-Li:hover {\n  background-color: white;\n  box-shadow: none;\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\nh2 {\n  color: var(--nav-header);\n}\n\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\nfooter {\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n}\n.project-list {\n  position: relative;\n}\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  cursor: default;\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: white;\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  gap: 10px;\n  line-height: 1;\n  border: 1px solid;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.task-div > img:first-child {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n}\n.task-div > img:last-child {\n  width: 25px;\n  height: 25px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: black;\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: #392929;\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.star-div > img:first-child {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n}\n.star-div > img:last-child {\n  height: 20px;\n  width: 20px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  width: max-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n}\n.date-and-span {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-new-project.js":
/*!********************************!*\
  !*** ./src/add-new-project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "currentProjectArray": () => (/* binding */ currentProjectArray)
/* harmony export */ });
/* harmony import */ var _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/projectMenu.png */ "./src/icons/projectMenu.png");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ "./src/project-input.js");
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _add_todo_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-todo-button */ "./src/add-todo-button.js");







let currentProjectArray;

function addNewProject() {
  document
    .querySelector(".add-project")
    .addEventListener("click", checkIfAnyFormExist);
}

function checkIfAnyFormExist() {
  const projectList = document.querySelector(".project-list");
  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;
  (0,_project_input__WEBPACK_IMPORTED_MODULE_2__.getProjectInput)();
  cancelProjectInput();
  addProjectToList();
}

function cancelProjectInput() {
  document.querySelector(".cancel").addEventListener("click", removeInputForm);
}

function removeInputForm() {
  document
    .querySelector(".project-list")
    .removeChild(document.querySelector(".input-Li"));
}

function addProjectToList() {
  document.querySelector(".add").addEventListener("click", displayProjects);
}

function displayProjects() {
  if (document.querySelector(".name-input").value.trim() === "") return;
  pushNewProjectInstance();
  removeProjectLists();
  createProject();
}

function pushNewProjectInstance() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_4__.projectArray.push(new _project_constructor__WEBPACK_IMPORTED_MODULE_4__.Project(document.querySelector(".name-input").value));
}

function removeProjectLists() {
  const projectList = document.querySelector(".project-list");
  while (projectList.childNodes.length > 1)
    projectList.removeChild(projectList.firstChild);
}

function createProject() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_4__.projectArray.forEach((project) =>
    AddProjectNameToList(project.name, project)
  );
}

function AddProjectNameToList(projectName, nameOfProject) {
  const addProject = document.querySelector(".add-project");
  const myProjectDotsDiv = document.createElement("div");
  const project = document.createElement("li");
  const myProjectMenu = new Image();
  const myProjectDots = new Image();

  myProjectMenu.src = _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_0__;
  myProjectDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__;

  project.setAttribute("class", "projects");
  project.append(myProjectMenu, projectName);
  myProjectDotsDiv.appendChild(myProjectDots);
  project.appendChild(myProjectDotsDiv);
  addProject.parentNode.insertBefore(project, addProject);

  myProjectDots.addEventListener(
    "click",
    _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_3__.popUpDeleteAndEdit.bind(myProjectDots, nameOfProject)
  );

  project.addEventListener(
    "click",
    setHeaderToProjectName.bind(null, nameOfProject)
  );
}

function setHeaderToProjectName(nameOfProject, e) {
  if (e.target.className === "projects") {
    getTaskArray(nameOfProject);
    removeTasks();
    (0,_add_todo_button__WEBPACK_IMPORTED_MODULE_5__.todoAddButton)();
    document.querySelector(".mainHeader").firstChild.textContent =
      nameOfProject.name;
  }
}

function getTaskArray(nameOfProject) {
  currentProjectArray = nameOfProject.taskArray;
}

function removeTasks() {
  const taskList = document.querySelector(".mainSection");
  if (!!taskList)
    while (taskList.childNodes.length > 1)
      taskList.removeChild(taskList.lastChild);
}



/***/ }),

/***/ "./src/add-or-cancel-task-event.js":
/*!*****************************************!*\
  !*** ./src/add-or-cancel-task-event.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAndCancelTask": () => (/* binding */ addAndCancelTask)
/* harmony export */ });
/* harmony import */ var _display_todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-todo-list */ "./src/display-todo-list.js");
/* harmony import */ var _new_task_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-task-input */ "./src/new-task-input.js");



function addAndCancelTask(e) {
  const taskList = document.querySelector(".task-list");
  const inputTaskForm = document.querySelector(".task-input-form");
  if (e.target.className == "add-task-button") {
    for (let i = 0; i < taskList.childNodes.length; i++) {
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
    }
    (0,_new_task_input__WEBPACK_IMPORTED_MODULE_1__.newTaskInput)();
  }
  if (e.target.className == "cancel-task") {
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
  if (e.target.className == "add-task") {
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    if (document.querySelector(".date-input-form").value.trim() === "") return;
    (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_0__.displayAddedTasks)();
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
}




/***/ }),

/***/ "./src/add-todo-button.js":
/*!********************************!*\
  !*** ./src/add-todo-button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoAddButton": () => (/* binding */ todoAddButton)
/* harmony export */ });
/* harmony import */ var _icons_addTask_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/addTask.png */ "./src/icons/addTask.png");


function todoAddButton() {
  const mainSection = document.querySelector(".mainSection");
  const addTaskSection = document.createElement("div");
  const taskList = document.createElement("ul");
  const addTaskButton = document.createElement("li");
  const myAddTask = new Image();

  myAddTask.src = _icons_addTask_png__WEBPACK_IMPORTED_MODULE_0__;
  addTaskButton.append(myAddTask, "Add Task");
  taskList.appendChild(addTaskButton);
  addTaskSection.appendChild(taskList);
  mainSection.appendChild(addTaskSection);

  addTaskSection.classList.add("add-task-section");
  taskList.classList.add("task-list");
  addTaskButton.classList.add("add-task-button");
}



/***/ }),

/***/ "./src/delete-edit-pop-up.js":
/*!***********************************!*\
  !*** ./src/delete-edit-pop-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popUpDeleteAndEdit": () => (/* binding */ popUpDeleteAndEdit),
/* harmony export */   "projectIndex": () => (/* binding */ projectIndex)
/* harmony export */ });
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");


let projectIndex;

function popUpDeleteAndEdit(NameOfProject) {
  let listChildren;
  if (this.parentNode.parentNode.className == "new-task") listChildren = 4;
  else if (this.parentNode.parentNode.className == "projects") listChildren = 3;
  if (this.parentNode.parentNode.childNodes.length > listChildren) return;

  const deleteOrEditDiv = document.createElement("div");
  if (this.parentNode.parentNode.className == "projects")
    deleteOrEditDiv.classList.add("delete-edit-div");
  if (this.parentNode.parentNode.className == "new-task")
    deleteOrEditDiv.classList.add("delete-edit-task");

  const editProject = document.createElement("p");
  if (this.parentNode.parentNode.className == "new-task")
    editProject.classList.add("edit-task");
  else if (this.parentNode.parentNode.className == "projects")
    editProject.classList.add("edit");

  editProject.textContent = "Edit";
  const deleteProject = document.createElement("p");
  deleteProject.textContent = "Delete";
  deleteOrEditDiv.append(editProject, deleteProject);
  this.parentNode.parentNode.appendChild(deleteOrEditDiv);

  deleteProject.addEventListener(
    "mousedown",
    deleteProjectFromList.bind(deleteProject, NameOfProject)
  );
  getProjectIndex(NameOfProject);
}

function getProjectIndex(NameOfProject) {
  projectIndex = _project_constructor__WEBPACK_IMPORTED_MODULE_0__.projectArray.indexOf(NameOfProject);
}

function deleteProjectFromList(nameOfProject) {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  _project_constructor__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(_project_constructor__WEBPACK_IMPORTED_MODULE_0__.projectArray.indexOf(nameOfProject), 1);
}



/***/ }),

/***/ "./src/display-todo-list.js":
/*!**********************************!*\
  !*** ./src/display-todo-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAddedTasks": () => (/* binding */ displayAddedTasks)
/* harmony export */ });
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/uncheckedStar.png */ "./src/icons/uncheckedStar.png");
/* harmony import */ var _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/undoneTask.png */ "./src/icons/undoneTask.png");
/* harmony import */ var _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/checkedStar.png */ "./src/icons/checkedStar.png");
/* harmony import */ var _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/doneTask.png */ "./src/icons/doneTask.png");
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");







function displayAddedTasks() {
  const dateInputForm = document.querySelector(".date-input-form");
  const titleInput = document.querySelector(".title-input-form");
  const textDesc = document.querySelector(".text-area-form");
  const addTaskButton = document.querySelector(".add-task-button");
  const taskList = document.querySelector(".task-list");
  const newTask = document.createElement("li");
  const titleAndDescDiv = document.createElement("div");
  const taskTitle = document.createElement("h2");
  const taskDesc = document.createElement("p");
  const dateSpan = document.createElement("span");
  const dateInput = document.createElement("p");
  const starDiv = document.createElement("div");
  const taskDiv = document.createElement("div");
  const dateAndSpan = document.createElement("div");
  const myTaskDots = new Image();
  const myUncheckedStar = new Image();
  const myUndoneTask = new Image();
  const myCheckedStar = new Image();
  const myDoneTask = new Image();

  taskTitle.textContent = titleInput.value;
  dateInput.textContent = dateInputForm.value;
  taskDesc.textContent = textDesc.value;
  myTaskDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_0__;
  myUncheckedStar.src = _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_1__;
  myUndoneTask.src = _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_2__;
  myCheckedStar.src = _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_3__;
  myDoneTask.src = _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_4__;

  newTask.classList.add("new-task");
  taskTitle.classList.add("task-title");
  titleAndDescDiv.classList.add("title-and-desc-div");
  taskDesc.classList.add("task-desc");
  dateSpan.classList.add("date-span");
  dateInput.classList.add("date-input");
  starDiv.classList.add("star-div");
  taskDiv.classList.add("task-div");
  myUncheckedStar.classList.add("unchecked-star");
  myCheckedStar.classList.add("checked-star");
  myUndoneTask.classList.add("undone-task");
  myDoneTask.classList.add("done-task");
  myTaskDots.classList.add("my-task-dots");
  dateAndSpan.classList.add("date-and-span");

  titleAndDescDiv.append(taskTitle, taskDesc);
  dateSpan.appendChild(dateInput);
  dateAndSpan.append(dateSpan, myTaskDots);
  starDiv.append(myUncheckedStar, myCheckedStar);
  taskDiv.append(myUndoneTask, myDoneTask);
  newTask.append(taskDiv, titleAndDescDiv, starDiv, dateAndSpan);
  taskList.insertBefore(newTask, addTaskButton);
  myTaskDots.addEventListener("click", _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_5__.popUpDeleteAndEdit);
}



/***/ }),

/***/ "./src/edit-current-project.js":
/*!*************************************!*\
  !*** ./src/edit-current-project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editCurentProject": () => (/* binding */ editCurentProject)
/* harmony export */ });
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ "./src/project-input.js");




function enableEditing() {
  const project = document.querySelector(".edit").parentNode.parentNode;
  const projectList = document.querySelector(".project-list");

  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;

  const getName = (function () {
    project.classList.add("hidden");
    const children = project.childNodes;
    const childrenArray = Array.from(children);
    let previousName = childrenArray[1].data;
    if (previousName === undefined) {
      const childArray = Array.from(childrenArray[1].childNodes);
      previousName = childArray[0].data;
    }
    return { previousName };
  })();

  (0,_project_input__WEBPACK_IMPORTED_MODULE_2__.getProjectInput)();

  const insertGetProjectInput = (function () {
    const nextElement = document.querySelector(".hidden").nextElementSibling;
    const nameInput = document.querySelector(".name-input");
    const inputForm = document.querySelector(".input-Li");
    nameInput.value = getName.previousName;
    projectList.insertBefore(inputForm, nextElement);
    return {
      inputForm,
      nameInput,
    };
  })();

  function updateNewProjectName() {
    if (document.querySelector(".name-input").value.trim() === "") return;
    editProjectArrayName();
    replaceOldNameInDom();
    removeInputForm();
    project.classList.remove("hidden");
  }

  function replaceOldNameInDom() {
    const newProjectName = document.createElement("p");
    newProjectName.textContent = insertGetProjectInput.nameInput.value;
    project.replaceChild(newProjectName, project.childNodes[1]);
  }

  function removeInputForm() {
    insertGetProjectInput.inputForm.parentNode.removeChild(
      insertGetProjectInput.inputForm
    );
    project.classList.remove("hidden");
  }

  function editProjectArrayName() {
    _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray[_delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.projectIndex].setName(insertGetProjectInput.nameInput.value);
  }

  (() => {
    document
      .querySelector(".cancel")
      .addEventListener("mousedown", removeInputForm);
    document
      .querySelector(".add")
      .addEventListener("mousedown", updateNewProjectName);
  })();
}

function editCurentProject(e) {
  if (e.target.className == "edit") enableEditing();
}




/***/ }),

/***/ "./src/edit-current-task.js":
/*!**********************************!*\
  !*** ./src/edit-current-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editCurentTask": () => (/* binding */ editCurentTask)
/* harmony export */ });
/* harmony import */ var _new_task_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task-input */ "./src/new-task-input.js");


function enableTaskEditing() {
  const currentTask =
    document.querySelector(".edit-task").parentNode.parentNode;
  const taskList = document.querySelector(".task-list");

  for (let i = 0; i < taskList.childNodes.length; i++)
    if (taskList.childNodes[i].classList[0] == "task-input-form") return;

  const getName = (function () {
    currentTask.classList.add("hidden");
    let taskTitle = currentTask.childNodes[1].childNodes[0];
    let taskDesc = currentTask.childNodes[1].childNodes[1];
    let taskDate = currentTask.childNodes[3].childNodes[0].childNodes[0];
    return { taskTitle, taskDesc, taskDate };
  })();

  (0,_new_task_input__WEBPACK_IMPORTED_MODULE_0__.newTaskInput)();

  const insertNewInput = (function () {
    const previousTask = currentTask.nextElementSibling;
    const taskInputForm = document.querySelector(".task-input-form");
    const inputTitle = document.querySelector(".title-input-form");
    const inputDesc = document.querySelector(".text-area-form");
    const inputDate = document.querySelector(".date-input-form");
    inputTitle.value = getName.taskTitle.textContent;
    inputDesc.value = getName.taskDesc.textContent;
    inputDate.value = getName.taskDate.textContent;
    taskList.insertBefore(taskInputForm, previousTask);
    return { inputTitle, inputDesc, inputDate, taskInputForm };
  })();

  function updateNewTaskName() {
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    getName.taskTitle.textContent = insertNewInput.inputTitle.value;
    getName.taskDesc.textContent = insertNewInput.inputDesc.value;
    getName.taskDate.textContent = insertNewInput.inputDate.value;
    removeNewTaskInput();
  }

  function removeNewTaskInput() {
    insertNewInput.taskInputForm.parentNode.removeChild(
      insertNewInput.taskInputForm
    );
    currentTask.classList.remove("hidden");
  }

  // EventListener on addTask and cancelTask Buttons
  (() => {
    document
      .querySelector(".cancel-task")
      .addEventListener("mousedown", removeNewTaskInput);

    document
      .querySelector(".add-task")
      .addEventListener("mousedown", updateNewTaskName);
  })();
}

function editCurentTask(e) {
  if (e.target.className == "edit-task") enableTaskEditing();
}


/***/ }),

/***/ "./src/new-task-input.js":
/*!*******************************!*\
  !*** ./src/new-task-input.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTaskInput": () => (/* binding */ newTaskInput)
/* harmony export */ });
function newTaskInput() {
  const addTaskButton = document.querySelector(".add-task-button");
  const taskList = document.querySelector(".task-list");
  const taskInputForm = document.createElement("li");
  const titleDiv = document.createElement("div");
  const titleInputLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const textareaDiv = document.createElement("div");
  const textAreaDescriptionLabel = document.createElement("label");
  const textAreaDescription = document.createElement("textarea");
  const dateDiv = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  const buttonDiv = document.createElement("div");
  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  dateInput.setAttribute("type", "date");
  titleInputLabel.textContent = "Title:";
  textAreaDescriptionLabel.textContent = "Details (Optional):";
  dateInputLabel.textContent = "Date:";
  addButton.textContent = "Project";
  cancelButton.textContent = "Cancel";

  titleDiv.append(titleInputLabel, titleInput);
  textareaDiv.append(textAreaDescriptionLabel, textAreaDescription);
  dateDiv.append(dateInputLabel, dateInput);
  buttonDiv.append(cancelButton, addButton);
  taskInputForm.append(titleDiv, textareaDiv, dateDiv, buttonDiv);
  taskList.insertBefore(taskInputForm, addTaskButton);

  titleInput.classList.add("title-input-form");
  textAreaDescription.classList.add("text-area-form");
  dateInput.classList.add("date-input-form");
  taskInputForm.classList.add("task-input-form");
  buttonDiv.classList.add("btn-class");
  cancelButton.classList.add("cancel-task");
  addButton.classList.add("add-task");
}



/***/ }),

/***/ "./src/page-footer.js":
/*!****************************!*\
  !*** ./src/page-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createfooter": () => (/* binding */ createfooter)
/* harmony export */ });
function createfooter() {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const anchorLink = document.createElement("a");
  const gitHubIcon = document.createElement("i");
  anchorLink.appendChild(gitHubIcon);
  footer.append("Copyright \u00A9 2022 IAmYoungbossy");
  footer.appendChild(anchorLink);
  body.appendChild(footer);
  anchorLink.setAttribute(
    "href",
    "https:////github.com/IAmYoungbossy/calculator"
  );
  gitHubIcon.classList.add("fa", "fa-github");
  gitHubIcon.style.cssText = "color:black";
}




/***/ }),

/***/ "./src/page-header.js":
/*!****************************!*\
  !*** ./src/page-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createHeaderContent": () => (/* binding */ createHeaderContent)
/* harmony export */ });
/* harmony import */ var _icons_menuIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/menuIcon.png */ "./src/icons/menuIcon.png");
/* harmony import */ var _icons_to_do_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/to-do.png */ "./src/icons/to-do.png");
/* harmony import */ var _icons_theme_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/theme.png */ "./src/icons/theme.png");




function createHeader() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const menuIcon = document.createElement("div");
  const toDoLogo = document.createElement("div");
  const themeToggler = document.createElement("div");
  menuIcon.classList.add("menuIcon");
  toDoLogo.classList.add("toDoLogo");
  themeToggler.classList.add("themeToggler");
  header.appendChild(menuIcon);
  header.appendChild(toDoLogo);
  header.appendChild(themeToggler);
  body.appendChild(header);
}

function createHeaderContent() {
  const menuIcon = document.querySelector(".menuIcon");
  const toDoLogo = document.querySelector(".toDoLogo");
  const themeToggler = document.querySelector(".themeToggler");
  const myMenuIcon = new Image();
  myMenuIcon.src = _icons_menuIcon_png__WEBPACK_IMPORTED_MODULE_0__;
  menuIcon.appendChild(myMenuIcon);
  const myToDoLogo = new Image();
  myToDoLogo.src = _icons_to_do_png__WEBPACK_IMPORTED_MODULE_1__;
  toDoLogo.appendChild(myToDoLogo);
  const myThemeToggler = new Image();
  myThemeToggler.src = _icons_theme_png__WEBPACK_IMPORTED_MODULE_2__;
  themeToggler.appendChild(myThemeToggler);
}




/***/ }),

/***/ "./src/page-main.js":
/*!**************************!*\
  !*** ./src/page-main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMain": () => (/* binding */ CreateMain),
/* harmony export */   "createNavContent": () => (/* binding */ createNavContent),
/* harmony export */   "createTaskDisplaySection": () => (/* binding */ createTaskDisplaySection)
/* harmony export */ });
/* harmony import */ var _icons_planning_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/planning.png */ "./src/icons/planning.png");
/* harmony import */ var _icons_calendar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/calendar.png */ "./src/icons/calendar.png");
/* harmony import */ var _icons_next_week_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/next-week.png */ "./src/icons/next-week.png");
/* harmony import */ var _icons_checklist_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/checklist.png */ "./src/icons/checklist.png");
/* harmony import */ var _icons_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/home.png */ "./src/icons/home.png");
/* harmony import */ var _icons_project_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/project.png */ "./src/icons/project.png");
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");








function CreateMain() {
  const body = document.querySelector("body");
  const mainBodyContainer = document.createElement("main");
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const mainSection = document.createElement("section");
  mainSection.classList.add("mainSection");
  mainBodyContainer.appendChild(nav);
  mainBodyContainer.appendChild(mainSection);
  body.appendChild(mainBodyContainer);
}

function createNavContent() {
  const nav = document.querySelector(".nav");
  const home = document.createElement("div");
  home.classList.add("home");
  const project = document.createElement("div");
  project.classList.add("project");
  const horizontalRule = document.createElement("hr");
  nav.appendChild(home);
  nav.appendChild(project);

  //Task durations and Importance
  const navHeader = document.createElement("h2");
  const unorderedList = document.createElement("ul");
  const allTasks = document.createElement("li");
  const today = document.createElement("li");
  const thisWeek = document.createElement("li");
  const important = document.createElement("li");

  //Task icons
  const myAllTasks = new Image();
  myAllTasks.src = _icons_planning_png__WEBPACK_IMPORTED_MODULE_0__;
  allTasks.appendChild(myAllTasks);
  const myToday = new Image();
  myToday.src = _icons_calendar_png__WEBPACK_IMPORTED_MODULE_1__;
  today.appendChild(myToday);
  const myThisWeek = new Image();
  myThisWeek.src = _icons_next_week_png__WEBPACK_IMPORTED_MODULE_2__;
  thisWeek.appendChild(myThisWeek);
  const myImportant = new Image();
  myImportant.src = _icons_checklist_png__WEBPACK_IMPORTED_MODULE_3__;
  const myHome = new Image();
  myHome.src = _icons_home_png__WEBPACK_IMPORTED_MODULE_4__;
  navHeader.appendChild(myHome);
  const myProject = new Image();
  myProject.src = _icons_project_png__WEBPACK_IMPORTED_MODULE_5__;

  //Attached to ul
  important.appendChild(myImportant);
  unorderedList.appendChild(allTasks);
  unorderedList.appendChild(today);
  unorderedList.appendChild(thisWeek);
  unorderedList.appendChild(important);
  home.appendChild(navHeader);
  home.appendChild(horizontalRule);
  home.appendChild(unorderedList);

  //Task text content
  navHeader.append("Home");
  allTasks.append("All Tasks");
  today.append("Today");
  thisWeek.append("This Week");
  important.append("Important");

  //Project header
  const projectHeader = document.createElement("h2");
  projectHeader.appendChild(myProject);
  projectHeader.append("Projects");
  project.appendChild(projectHeader);
  const horizontalRule2 = document.createElement("hr");
  project.appendChild(horizontalRule2);
  const projectList = document.createElement("ul");
  const addProject = document.createElement("li");
  addProject.classList.add("add-project");
  projectList.classList.add("project-list");
  projectList.appendChild(addProject);
  const myAdd = new Image();
  myAdd.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_6__;
  addProject.appendChild(myAdd);
  addProject.append("Add project");
  project.appendChild(projectList);
}

function createTaskDisplaySection() {
  const mainSection = document.querySelector(".mainSection");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("mainHeader");
  const sectionHeader = document.createElement("h1");
  headerContainer.appendChild(sectionHeader);
  mainSection.appendChild(headerContainer);
  sectionHeader.textContent = "Default";
}




/***/ }),

/***/ "./src/project-constructor.js":
/*!************************************!*\
  !*** ./src/project-constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "TodoTask": () => (/* binding */ TodoTask),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
let projectArray = [];

function Project(projectName) {
  this.name = projectName;
  this.taskArray = [];
  this.setName = (newName) => {
    this.name = newName;
  };
}

function TodoTask(title, desc, date, completed, important) {
  this.title = title;
  this.desc = desc;
  this.date = date;
  this.completed = completed;
  this.important = important;
}




/***/ }),

/***/ "./src/project-input.js":
/*!******************************!*\
  !*** ./src/project-input.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectInput": () => (/* binding */ getProjectInput)
/* harmony export */ });
/* harmony import */ var _icons_list_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/list.png */ "./src/icons/list.png");


function getProjectInput() {
  const addProject = document.querySelector(".add-project");
  const inputDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const inputLi = document.createElement("li");
  const projectNameInput = document.createElement("input");
  const cancelButton = document.createElement("button");
  const addButton = document.createElement("button");
  const myInputIcon = new Image();

  myInputIcon.src = _icons_list_png__WEBPACK_IMPORTED_MODULE_0__;
  inputDiv.append(myInputIcon, projectNameInput);
  buttonDiv.append(cancelButton, addButton);
  inputLi.append(inputDiv, buttonDiv);
  addProject.parentNode.insertBefore(inputLi, addProject);
  cancelButton.textContent = "Cancel";
  addButton.textContent = "Project";
  projectNameInput.setAttribute("type", "text");
  projectNameInput.classList.add("name-input");
  inputDiv.classList.add("input-container");
  buttonDiv.classList.add("button-class");
  inputLi.classList.add("input-Li");
  cancelButton.classList.add("cancel");
  addButton.classList.add("add");
  projectNameInput.setAttribute("placeholder", "Enter project name.");
}



/***/ }),

/***/ "./src/remove-project-popup.js":
/*!*************************************!*\
  !*** ./src/remove-project-popup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDeleteAndEditPopUp": () => (/* binding */ removeDeleteAndEditPopUp)
/* harmony export */ });
const removeDeleteAndEditPopUp = (e) => {
  if (!!document.querySelector(".delete-edit-div")) {
    if (e.target.className == "edit") {
      return;
    } else {
      document
        .querySelector(".delete-edit-div")
        .parentNode.removeChild(document.querySelector(".delete-edit-div"));
    }
  } else if (!!document.querySelector(".delete-edit-task")) {
    if (e.target.className == "edit-task") {
      return;
    } else {
      document
        .querySelector(".delete-edit-task")
        .parentNode.removeChild(document.querySelector(".delete-edit-task"));
    }
  }
};


/***/ }),

/***/ "./src/toggle-nav-list.js":
/*!********************************!*\
  !*** ./src/toggle-nav-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleNavList": () => (/* binding */ toggleNavList)
/* harmony export */ });
const toggleNavList = (function () {
  document.addEventListener("mouseup", (e) => {
    if (e.target.parentNode.className === "menuIcon") {
      document.querySelector(".nav").classList.toggle("nav-hidden");
    }
  });
})();


/***/ }),

/***/ "./src/toggle-states.js":
/*!******************************!*\
  !*** ./src/toggle-states.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleReadOrImportance": () => (/* binding */ toggleReadOrImportance)
/* harmony export */ });
function toggleReadOrImportance(e) {
  if (e.target.classList[0] == "unchecked-star") {
    e.target.parentNode.parentNode.childNodes[2].childNodes[1].classList.toggle(
      "check"
    );
  }
  if (e.target.className == "undone-task") {
    e.target.parentNode.parentNode.childNodes[0].childNodes[1].classList.toggle(
      "done"
    );
    e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.toggle(
      "line-through"
    );
    e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[3].childNodes[0].childNodes[0].classList.toggle(
      "line-through"
    );
    e.target.parentNode.parentNode.childNodes[1].childNodes[0].classList.toggle(
      "line-through"
    );
  }
}



/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66a538adc588bbf106ab.png";

/***/ }),

/***/ "./src/icons/addTask.png":
/*!*******************************!*\
  !*** ./src/icons/addTask.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d4fde030bab5e36d8fe.png";

/***/ }),

/***/ "./src/icons/calendar.png":
/*!********************************!*\
  !*** ./src/icons/calendar.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b031c13da29f753d0333.png";

/***/ }),

/***/ "./src/icons/checkedStar.png":
/*!***********************************!*\
  !*** ./src/icons/checkedStar.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "618d11e122cbca3f8e9e.png";

/***/ }),

/***/ "./src/icons/checklist.png":
/*!*********************************!*\
  !*** ./src/icons/checklist.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fe434bf04da1b7184d2.png";

/***/ }),

/***/ "./src/icons/doneTask.png":
/*!********************************!*\
  !*** ./src/icons/doneTask.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21e91f989208922404a9.png";

/***/ }),

/***/ "./src/icons/dots.png":
/*!****************************!*\
  !*** ./src/icons/dots.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f587c2b8be786d80be09.png";

/***/ }),

/***/ "./src/icons/home.png":
/*!****************************!*\
  !*** ./src/icons/home.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0fe0af761b15e94f199.png";

/***/ }),

/***/ "./src/icons/list.png":
/*!****************************!*\
  !*** ./src/icons/list.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef4ede6bc848827b4f2d.png";

/***/ }),

/***/ "./src/icons/menuIcon.png":
/*!********************************!*\
  !*** ./src/icons/menuIcon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "780183873f97b54f9186.png";

/***/ }),

/***/ "./src/icons/next-week.png":
/*!*********************************!*\
  !*** ./src/icons/next-week.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "005779003dffa7a1befd.png";

/***/ }),

/***/ "./src/icons/planning.png":
/*!********************************!*\
  !*** ./src/icons/planning.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6665dd233091835ebc73.png";

/***/ }),

/***/ "./src/icons/project.png":
/*!*******************************!*\
  !*** ./src/icons/project.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cca9c7dde55b11cf6acf.png";

/***/ }),

/***/ "./src/icons/projectMenu.png":
/*!***********************************!*\
  !*** ./src/icons/projectMenu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b434b2ba928d93ec2e06.png";

/***/ }),

/***/ "./src/icons/theme.png":
/*!*****************************!*\
  !*** ./src/icons/theme.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dbe9f511aa1920d7eaf.png";

/***/ }),

/***/ "./src/icons/to-do.png":
/*!*****************************!*\
  !*** ./src/icons/to-do.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0acd1590f093bef35e0a.png";

/***/ }),

/***/ "./src/icons/uncheckedStar.png":
/*!*************************************!*\
  !*** ./src/icons/uncheckedStar.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "190d870d386afd29523a.png";

/***/ }),

/***/ "./src/icons/undoneTask.png":
/*!**********************************!*\
  !*** ./src/icons/undoneTask.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7c4aa9f27611d9c701.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header */ "./src/page-header.js");
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-main */ "./src/page-main.js");
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-footer */ "./src/page-footer.js");
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _edit_current_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-current-project */ "./src/edit-current-project.js");
/* harmony import */ var _remove_project_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-project-popup */ "./src/remove-project-popup.js");
/* harmony import */ var _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-or-cancel-task-event */ "./src/add-or-cancel-task-event.js");
/* harmony import */ var _toggle_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-states */ "./src/toggle-states.js");
/* harmony import */ var _toggle_nav_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggle-nav-list */ "./src/toggle-nav-list.js");
/* harmony import */ var _edit_current_task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-current-task */ "./src/edit-current-task.js");












(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeaderContent)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.CreateMain)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.createNavContent)();
(0,_page_footer__WEBPACK_IMPORTED_MODULE_3__.createfooter)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.createTaskDisplaySection)();
_toggle_nav_list__WEBPACK_IMPORTED_MODULE_9__.toggleNavList;

document.addEventListener("mouseup", _edit_current_project__WEBPACK_IMPORTED_MODULE_5__.editCurentProject);
document.addEventListener("mousedown", _remove_project_popup__WEBPACK_IMPORTED_MODULE_6__.removeDeleteAndEditPopUp);
document.addEventListener("click", _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_7__.addAndCancelTask);
document.addEventListener("click", _toggle_states__WEBPACK_IMPORTED_MODULE_8__.toggleReadOrImportance);
document.addEventListener("mousedown", _add_new_project__WEBPACK_IMPORTED_MODULE_4__.addNewProject);
document.addEventListener("mouseup", _edit_current_task__WEBPACK_IMPORTED_MODULE_10__.editCurentTask);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0s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QVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkM7QUFLN0M7QUFDd0I7QUFDSztBQUNTO0FBQ087QUFDSjtBQUNMO0FBQ1A7QUFDRzs7QUFFckQsMERBQVk7QUFDWixpRUFBbUI7QUFDbkIsc0RBQVU7QUFDViw0REFBZ0I7QUFDaEIsMERBQVk7QUFDWixvRUFBd0I7QUFDeEIsMkRBQWE7O0FBRWIscUNBQXFDLG9FQUFpQjtBQUN0RCx1Q0FBdUMsMkVBQXdCO0FBQy9ELG1DQUFtQyx1RUFBZ0I7QUFDbkQsbUNBQW1DLGtFQUFzQjtBQUN6RCx1Q0FBdUMsMkRBQWE7QUFDcEQscUNBQXFDLCtEQUFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC1uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLW9yLWNhbmNlbC10YXNrLWV2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtdG9kby1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1lZGl0LXBvcC11cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS10b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXQtY3VycmVudC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LWN1cnJlbnQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3LXRhc2staW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWlucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW1vdmUtcHJvamVjdC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9nZ2xlLW5hdi1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtc3RhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIC0taGVhZGVyLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xcbiAgLS1ib3JkZXItY29sb3I6ICMyYWJkNjc7XFxuICAtLW1haW4tY29sb3I6ICNlY2VjZWM7XFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAjYzJkOGI3O1xcbiAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xcbiAgLS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC0taG9yaXpvbnRhbC1ydWxlOiAjY2M5OGZmO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmltZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiA+IG5hdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubmF2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmbGV4OiAxO1xcbn1cXG4ubmF2LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbnVsIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDIyNCwgMTg3LCAwLjYpO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbmxpOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZTljN2RjO1xcbn1cXG5saSA+IGltZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuaHIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XFxufVxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmlucHV0LUxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaW5wdXQtTGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaG9tZSA+IGgyOmZpcnN0LWNoaWxkID4gaW1nLFxcbi5wcm9qZWN0ID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLnByb2plY3RzID4gaW1nOmxhc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCBibGFjaztcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMzhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCBibGFjaztcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHAge1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcCB7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4ubmFtZS1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmF2LWhlYWRlcik7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZsZXg6IDM7XFxufVxcbi5tYWluSGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZC10YXNrLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi50YXNrLWlucHV0LWZvcm06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbn1cXG4uYnRuLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4wNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcbi5uZXctdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxODksIDEwMywgMC4wMik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnRhc2stZGl2ID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4udGFzay1kaXYgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIGNvbG9yOiAjMzkyOTI5O1xcbn1cXG4uc3Rhci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjVweDtcXG59XFxuLnN0YXItZGl2ID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4uc3Rhci1kaXYgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLmRhdGUtc3BhbiA+IHAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycHggNnB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnVuY2hlY2sge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uY2hlY2tlZC1zdGFyLFxcbi5kb25lLXRhc2sge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uY2hlY2ssXFxuLmRvbmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uZGF0ZS1zcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm15LXRhc2stZG90cyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLmRhdGUtYW5kLXNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLDRCQUE0Qjs7RUFFNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw0Q0FBNEM7RUFDNUMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztBQUNUO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNF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XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIC0tZm9vdGVyLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6ICNjYzk4ZmY7XFxuICAtLW1haW4taGVhZGVyLWJnQ29sb3I6ICMzMDhjNTZkNjtcXG4gIC0tbmF2LWhlYWRlcjogcmdiKDEsIDEzNCwgMSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluID4gbmF2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5uYXYge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5uYXYtaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxudWwge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMjI0LCAxODcsIDAuNik7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxubGk6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZlOWM3ZGM7XFxufVxcbmxpID4gaW1nIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5ociB7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5wdXQtTGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5pbnB1dC1MaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idXR0b24tY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5ob21lID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcsXFxuLnByb2plY3QgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucHJvamVjdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxufVxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbn1cXG4ucHJvamVjdHMgPiBpbWc6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IGJsYWNrO1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IGJsYWNrO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcCB7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwIHtcXG4gIHBhZGRpbmc6IDEycHggMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYig3OCwgMCwgNzgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYig3OCwgMCwgNzgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYW1lLWlucHV0IHtcXG4gIGZsZXg6IDE7XFxufVxcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtaGVhZGVyKTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZmxleDogMztcXG59XFxuLm1haW5IZWFkZXIge1xcbiAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4xKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWlucHV0LWZvcm0ge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnRhc2staW5wdXQtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxufVxcbi5idG4tY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjA1KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuLm5ldy10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjAyKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4udGFzay1kaXYgPiBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi50YXNrLWRpdiA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gaDIge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi50aXRsZS1hbmQtZGVzYy1kaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgY29sb3I6ICMzOTI5Mjk7XFxufVxcbi5zdGFyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyNXB4O1xcbn1cXG4uc3Rhci1kaXYgPiBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5zdGFyLWRpdiA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4uZGF0ZS1zcGFuID4gcCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDJweCA2cHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udW5jaGVjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVja2VkLXN0YXIsXFxuLmRvbmUtdGFzayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVjayxcXG4uZG9uZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5kYXRlLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubXktdGFzay1kb3RzIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uZGF0ZS1hbmQtc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdE1lbnUgZnJvbSBcIi4vaWNvbnMvcHJvamVjdE1lbnUucG5nXCI7XG5pbXBvcnQgUHJvamVjdERvdHMgZnJvbSBcIi4vaWNvbnMvZG90cy5wbmdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJbnB1dCB9IGZyb20gXCIuL3Byb2plY3QtaW5wdXRcIjtcbmltcG9ydCB7IHBvcFVwRGVsZXRlQW5kRWRpdCB9IGZyb20gXCIuL2RlbGV0ZS1lZGl0LXBvcC11cFwiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vcHJvamVjdC1jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHsgdG9kb0FkZEJ1dHRvbiB9IGZyb20gXCIuL2FkZC10b2RvLWJ1dHRvblwiO1xuXG5sZXQgY3VycmVudFByb2plY3RBcnJheTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tJZkFueUZvcm1FeGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZBbnlGb3JtRXhpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICBpZiAocHJvamVjdExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJpbnB1dC1MaVwiKSByZXR1cm47XG4gIGdldFByb2plY3RJbnB1dCgpO1xuICBjYW5jZWxQcm9qZWN0SW5wdXQoKTtcbiAgYWRkUHJvamVjdFRvTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0SW5wdXQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVJbnB1dEZvcm0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnB1dEZvcm0oKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpXG4gICAgLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtTGlcIikpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICBwdXNoTmV3UHJvamVjdEluc3RhbmNlKCk7XG4gIHJlbW92ZVByb2plY3RMaXN0cygpO1xuICBjcmVhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHB1c2hOZXdQcm9qZWN0SW5zdGFuY2UoKSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ldyBQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKS52YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0TGlzdHMoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIHdoaWxlIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgIEFkZFByb2plY3ROYW1lVG9MaXN0KHByb2plY3QubmFtZSwgcHJvamVjdClcbiAgKTtcbn1cblxuZnVuY3Rpb24gQWRkUHJvamVjdE5hbWVUb0xpc3QocHJvamVjdE5hbWUsIG5hbWVPZlByb2plY3QpIHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGNvbnN0IG15UHJvamVjdERvdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBteVByb2plY3RNZW51ID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15UHJvamVjdERvdHMgPSBuZXcgSW1hZ2UoKTtcblxuICBteVByb2plY3RNZW51LnNyYyA9IFByb2plY3RNZW51O1xuICBteVByb2plY3REb3RzLnNyYyA9IFByb2plY3REb3RzO1xuXG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c1wiKTtcbiAgcHJvamVjdC5hcHBlbmQobXlQcm9qZWN0TWVudSwgcHJvamVjdE5hbWUpO1xuICBteVByb2plY3REb3RzRGl2LmFwcGVuZENoaWxkKG15UHJvamVjdERvdHMpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKG15UHJvamVjdERvdHNEaXYpO1xuICBhZGRQcm9qZWN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2plY3QsIGFkZFByb2plY3QpO1xuXG4gIG15UHJvamVjdERvdHMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcG9wVXBEZWxldGVBbmRFZGl0LmJpbmQobXlQcm9qZWN0RG90cywgbmFtZU9mUHJvamVjdClcbiAgKTtcblxuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHNldEhlYWRlclRvUHJvamVjdE5hbWUuYmluZChudWxsLCBuYW1lT2ZQcm9qZWN0KVxuICApO1xufVxuXG5mdW5jdGlvbiBzZXRIZWFkZXJUb1Byb2plY3ROYW1lKG5hbWVPZlByb2plY3QsIGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgZ2V0VGFza0FycmF5KG5hbWVPZlByb2plY3QpO1xuICAgIHJlbW92ZVRhc2tzKCk7XG4gICAgdG9kb0FkZEJ1dHRvbigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkhlYWRlclwiKS5maXJzdENoaWxkLnRleHRDb250ZW50ID1cbiAgICAgIG5hbWVPZlByb2plY3QubmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrQXJyYXkobmFtZU9mUHJvamVjdCkge1xuICBjdXJyZW50UHJvamVjdEFycmF5ID0gbmFtZU9mUHJvamVjdC50YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tzKCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblNlY3Rpb25cIik7XG4gIGlmICghIXRhc2tMaXN0KVxuICAgIHdoaWxlICh0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5sYXN0Q2hpbGQpO1xufVxuXG5leHBvcnQgeyBhZGROZXdQcm9qZWN0LCBjdXJyZW50UHJvamVjdEFycmF5IH07IiwiaW1wb3J0IHsgZGlzcGxheUFkZGVkVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5LXRvZG8tbGlzdFwiO1xuaW1wb3J0IHsgbmV3VGFza0lucHV0IH0gZnJvbSBcIi4vbmV3LXRhc2staW5wdXRcIjtcblxuZnVuY3Rpb24gYWRkQW5kQ2FuY2VsVGFzayhlKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGNvbnN0IGlucHV0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXQtZm9ybVwiKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10YXNrLWJ1dHRvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdUYXNrSW5wdXQoKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiY2FuY2VsLXRhc2tcIikge1xuICAgIGlucHV0VGFza0Zvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnB1dFRhc2tGb3JtKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLXRhc2tcIikge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGRpc3BsYXlBZGRlZFRhc2tzKCk7XG4gICAgaW5wdXRUYXNrRm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlucHV0VGFza0Zvcm0pO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZEFuZENhbmNlbFRhc2sgfTtcbiIsImltcG9ydCBBZGRUYXNrIGZyb20gXCIuL2ljb25zL2FkZFRhc2sucG5nXCI7XG5cbmZ1bmN0aW9uIHRvZG9BZGRCdXR0b24oKSB7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluU2VjdGlvblwiKTtcbiAgY29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbXlBZGRUYXNrID0gbmV3IEltYWdlKCk7XG5cbiAgbXlBZGRUYXNrLnNyYyA9IEFkZFRhc2s7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kKG15QWRkVGFzaywgXCJBZGQgVGFza1wiKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFza1NlY3Rpb24pO1xuXG4gIGFkZFRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1zZWN0aW9uXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG59XG5cbmV4cG9ydCB7IHRvZG9BZGRCdXR0b24gfTsiLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5cbmxldCBwcm9qZWN0SW5kZXg7XG5cbmZ1bmN0aW9uIHBvcFVwRGVsZXRlQW5kRWRpdChOYW1lT2ZQcm9qZWN0KSB7XG4gIGxldCBsaXN0Q2hpbGRyZW47XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKSBsaXN0Q2hpbGRyZW4gPSA0O1xuICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJwcm9qZWN0c1wiKSBsaXN0Q2hpbGRyZW4gPSAzO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiBsaXN0Q2hpbGRyZW4pIHJldHVybjtcblxuICBjb25zdCBkZWxldGVPckVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwicHJvamVjdHNcIilcbiAgICBkZWxldGVPckVkaXREaXYuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1lZGl0LWRpdlwiKTtcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcIm5ldy10YXNrXCIpXG4gICAgZGVsZXRlT3JFZGl0RGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZWRpdC10YXNrXCIpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKVxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIik7XG4gIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcInByb2plY3RzXCIpXG4gICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG5cbiAgZWRpdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlT3JFZGl0RGl2LmFwcGVuZChlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCk7XG4gIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGRlbGV0ZU9yRWRpdERpdik7XG5cbiAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgZGVsZXRlUHJvamVjdEZyb21MaXN0LmJpbmQoZGVsZXRlUHJvamVjdCwgTmFtZU9mUHJvamVjdClcbiAgKTtcbiAgZ2V0UHJvamVjdEluZGV4KE5hbWVPZlByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXgoTmFtZU9mUHJvamVjdCkge1xuICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihOYW1lT2ZQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21MaXN0KG5hbWVPZlByb2plY3QpIHtcbiAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEFycmF5LmluZGV4T2YobmFtZU9mUHJvamVjdCksIDEpO1xufVxuXG5leHBvcnQgeyBwb3BVcERlbGV0ZUFuZEVkaXQsIHByb2plY3RJbmRleCB9OyIsImltcG9ydCBQcm9qZWN0RG90cyBmcm9tIFwiLi9pY29ucy9kb3RzLnBuZ1wiO1xuaW1wb3J0IFVuY2hlY2tlZFN0YXIgZnJvbSBcIi4vaWNvbnMvdW5jaGVja2VkU3Rhci5wbmdcIjtcbmltcG9ydCBVbmRvbmVUYXNrIGZyb20gXCIuL2ljb25zL3VuZG9uZVRhc2sucG5nXCI7XG5pbXBvcnQgQ2hlY2tlZFN0YXIgZnJvbSBcIi4vaWNvbnMvY2hlY2tlZFN0YXIucG5nXCI7XG5pbXBvcnQgRG9uZXRhc2sgZnJvbSBcIi4vaWNvbnMvZG9uZVRhc2sucG5nXCI7XG5pbXBvcnQgeyBwb3BVcERlbGV0ZUFuZEVkaXQgfSBmcm9tIFwiLi9kZWxldGUtZWRpdC1wb3AtdXBcIjtcblxuZnVuY3Rpb24gZGlzcGxheUFkZGVkVGFza3MoKSB7XG4gIGNvbnN0IGRhdGVJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXQtZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtaW5wdXQtZm9ybVwiKTtcbiAgY29uc3QgdGV4dERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtYXJlYS1mb3JtXCIpO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRpdGxlQW5kRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN0YXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUFuZFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBteVRhc2tEb3RzID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5jaGVja2VkU3RhciA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuZG9uZVRhc2sgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlDaGVja2VkU3RhciA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteURvbmVUYXNrID0gbmV3IEltYWdlKCk7XG5cbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgZGF0ZUlucHV0LnRleHRDb250ZW50ID0gZGF0ZUlucHV0Rm9ybS52YWx1ZTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0ZXh0RGVzYy52YWx1ZTtcbiAgbXlUYXNrRG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgbXlVbmNoZWNrZWRTdGFyLnNyYyA9IFVuY2hlY2tlZFN0YXI7XG4gIG15VW5kb25lVGFzay5zcmMgPSBVbmRvbmVUYXNrO1xuICBteUNoZWNrZWRTdGFyLnNyYyA9IENoZWNrZWRTdGFyO1xuICBteURvbmVUYXNrLnNyYyA9IERvbmV0YXNrO1xuXG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrXCIpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gIHRpdGxlQW5kRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYW5kLWRlc2MtZGl2XCIpO1xuICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjXCIpO1xuICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1zcGFuXCIpO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGUtaW5wdXRcIik7XG4gIHN0YXJEaXYuY2xhc3NMaXN0LmFkZChcInN0YXItZGl2XCIpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKTtcbiAgbXlVbmNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJ1bmNoZWNrZWQtc3RhclwiKTtcbiAgbXlDaGVja2VkU3Rhci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1zdGFyXCIpO1xuICBteVVuZG9uZVRhc2suY2xhc3NMaXN0LmFkZChcInVuZG9uZS10YXNrXCIpO1xuICBteURvbmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkb25lLXRhc2tcIik7XG4gIG15VGFza0RvdHMuY2xhc3NMaXN0LmFkZChcIm15LXRhc2stZG90c1wiKTtcbiAgZGF0ZUFuZFNwYW4uY2xhc3NMaXN0LmFkZChcImRhdGUtYW5kLXNwYW5cIik7XG5cbiAgdGl0bGVBbmREZXNjRGl2LmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbiAgZGF0ZVNwYW4uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgZGF0ZUFuZFNwYW4uYXBwZW5kKGRhdGVTcGFuLCBteVRhc2tEb3RzKTtcbiAgc3RhckRpdi5hcHBlbmQobXlVbmNoZWNrZWRTdGFyLCBteUNoZWNrZWRTdGFyKTtcbiAgdGFza0Rpdi5hcHBlbmQobXlVbmRvbmVUYXNrLCBteURvbmVUYXNrKTtcbiAgbmV3VGFzay5hcHBlbmQodGFza0RpdiwgdGl0bGVBbmREZXNjRGl2LCBzdGFyRGl2LCBkYXRlQW5kU3Bhbik7XG4gIHRhc2tMaXN0Lmluc2VydEJlZm9yZShuZXdUYXNrLCBhZGRUYXNrQnV0dG9uKTtcbiAgbXlUYXNrRG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wVXBEZWxldGVBbmRFZGl0KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheUFkZGVkVGFza3MgfTsiLCJpbXBvcnQgeyBwcm9qZWN0SW5kZXggfSBmcm9tIFwiLi9kZWxldGUtZWRpdC1wb3AtdXBcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IGdldFByb2plY3RJbnB1dCB9IGZyb20gXCIuL3Byb2plY3QtaW5wdXRcIjtcblxuZnVuY3Rpb24gZW5hYmxlRWRpdGluZygpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIGlmIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFswXSA9PSBcImlucHV0LUxpXCIpIHJldHVybjtcblxuICBjb25zdCBnZXROYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwcm9qZWN0LmNoaWxkTm9kZXM7XG4gICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IEFycmF5LmZyb20oY2hpbGRyZW4pO1xuICAgIGxldCBwcmV2aW91c05hbWUgPSBjaGlsZHJlbkFycmF5WzFdLmRhdGE7XG4gICAgaWYgKHByZXZpb3VzTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZEFycmF5ID0gQXJyYXkuZnJvbShjaGlsZHJlbkFycmF5WzFdLmNoaWxkTm9kZXMpO1xuICAgICAgcHJldmlvdXNOYW1lID0gY2hpbGRBcnJheVswXS5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aW91c05hbWUgfTtcbiAgfSkoKTtcblxuICBnZXRQcm9qZWN0SW5wdXQoKTtcblxuICBjb25zdCBpbnNlcnRHZXRQcm9qZWN0SW5wdXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIikubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LUxpXCIpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IGdldE5hbWUucHJldmlvdXNOYW1lO1xuICAgIHByb2plY3RMaXN0Lmluc2VydEJlZm9yZShpbnB1dEZvcm0sIG5leHRFbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRGb3JtLFxuICAgICAgbmFtZUlucHV0LFxuICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlTmV3UHJvamVjdE5hbWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBlZGl0UHJvamVjdEFycmF5TmFtZSgpO1xuICAgIHJlcGxhY2VPbGROYW1lSW5Eb20oKTtcbiAgICByZW1vdmVJbnB1dEZvcm0oKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlT2xkTmFtZUluRG9tKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBpbnNlcnRHZXRQcm9qZWN0SW5wdXQubmFtZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3QucmVwbGFjZUNoaWxkKG5ld1Byb2plY3ROYW1lLCBwcm9qZWN0LmNoaWxkTm9kZXNbMV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSW5wdXRGb3JtKCkge1xuICAgIGluc2VydEdldFByb2plY3RJbnB1dC5pbnB1dEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcbiAgICAgIGluc2VydEdldFByb2plY3RJbnB1dC5pbnB1dEZvcm1cbiAgICApO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0QXJyYXlOYW1lKCkge1xuICAgIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdLnNldE5hbWUoaW5zZXJ0R2V0UHJvamVjdElucHV0Lm5hbWVJbnB1dC52YWx1ZSk7XG4gIH1cblxuICAoKCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlbW92ZUlucHV0Rm9ybSk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdXBkYXRlTmV3UHJvamVjdE5hbWUpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBlZGl0Q3VyZW50UHJvamVjdChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJlZGl0XCIpIGVuYWJsZUVkaXRpbmcoKTtcbn1cblxuZXhwb3J0IHsgZWRpdEN1cmVudFByb2plY3QgfTtcbiIsImltcG9ydCB7IG5ld1Rhc2tJbnB1dCB9IGZyb20gXCIuL25ldy10YXNrLWlucHV0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZVRhc2tFZGl0aW5nKCkge1xuICBjb25zdCBjdXJyZW50VGFzayA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbGV0IHRhc2tUaXRsZSA9IGN1cnJlbnRUYXNrLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXTtcbiAgICBsZXQgdGFza0Rlc2MgPSBjdXJyZW50VGFzay5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV07XG4gICAgbGV0IHRhc2tEYXRlID0gY3VycmVudFRhc2suY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrRGVzYywgdGFza0RhdGUgfTtcbiAgfSkoKTtcblxuICBuZXdUYXNrSW5wdXQoKTtcblxuICBjb25zdCBpbnNlcnROZXdJbnB1dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJldmlvdXNUYXNrID0gY3VycmVudFRhc2submV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXQtZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpO1xuICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1hcmVhLWZvcm1cIik7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0LWZvcm1cIik7XG4gICAgaW5wdXRUaXRsZS52YWx1ZSA9IGdldE5hbWUudGFza1RpdGxlLnRleHRDb250ZW50O1xuICAgIGlucHV0RGVzYy52YWx1ZSA9IGdldE5hbWUudGFza0Rlc2MudGV4dENvbnRlbnQ7XG4gICAgaW5wdXREYXRlLnZhbHVlID0gZ2V0TmFtZS50YXNrRGF0ZS50ZXh0Q29udGVudDtcbiAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUodGFza0lucHV0Rm9ybSwgcHJldmlvdXNUYXNrKTtcbiAgICByZXR1cm4geyBpbnB1dFRpdGxlLCBpbnB1dERlc2MsIGlucHV0RGF0ZSwgdGFza0lucHV0Rm9ybSB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5ld1Rhc2tOYW1lKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtaW5wdXQtZm9ybVwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBnZXROYW1lLnRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGluc2VydE5ld0lucHV0LmlucHV0VGl0bGUudmFsdWU7XG4gICAgZ2V0TmFtZS50YXNrRGVzYy50ZXh0Q29udGVudCA9IGluc2VydE5ld0lucHV0LmlucHV0RGVzYy52YWx1ZTtcbiAgICBnZXROYW1lLnRhc2tEYXRlLnRleHRDb250ZW50ID0gaW5zZXJ0TmV3SW5wdXQuaW5wdXREYXRlLnZhbHVlO1xuICAgIHJlbW92ZU5ld1Rhc2tJbnB1dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTmV3VGFza0lucHV0KCkge1xuICAgIGluc2VydE5ld0lucHV0LnRhc2tJbnB1dEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcbiAgICAgIGluc2VydE5ld0lucHV0LnRhc2tJbnB1dEZvcm1cbiAgICApO1xuICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICAvLyBFdmVudExpc3RlbmVyIG9uIGFkZFRhc2sgYW5kIGNhbmNlbFRhc2sgQnV0dG9uc1xuICAoKCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtdGFza1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcmVtb3ZlTmV3VGFza0lucHV0KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdXBkYXRlTmV3VGFza05hbWUpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBlZGl0Q3VyZW50VGFzayhlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJlZGl0LXRhc2tcIikgZW5hYmxlVGFza0VkaXRpbmcoKTtcbn1cbmV4cG9ydCB7IGVkaXRDdXJlbnRUYXNrIH07IiwiZnVuY3Rpb24gbmV3VGFza0lucHV0KCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0ZXh0YXJlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRBcmVhRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGV4dEFyZWFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0aXRsZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICB0ZXh0QXJlYURlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRldGFpbHMgKE9wdGlvbmFsKTpcIjtcbiAgZGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIHRpdGxlRGl2LmFwcGVuZCh0aXRsZUlucHV0TGFiZWwsIHRpdGxlSW5wdXQpO1xuICB0ZXh0YXJlYURpdi5hcHBlbmQodGV4dEFyZWFEZXNjcmlwdGlvbkxhYmVsLCB0ZXh0QXJlYURlc2NyaXB0aW9uKTtcbiAgZGF0ZURpdi5hcHBlbmQoZGF0ZUlucHV0TGFiZWwsIGRhdGVJbnB1dCk7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBhZGRCdXR0b24pO1xuICB0YXNrSW5wdXRGb3JtLmFwcGVuZCh0aXRsZURpdiwgdGV4dGFyZWFEaXYsIGRhdGVEaXYsIGJ1dHRvbkRpdik7XG4gIHRhc2tMaXN0Lmluc2VydEJlZm9yZSh0YXNrSW5wdXRGb3JtLCBhZGRUYXNrQnV0dG9uKTtcblxuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1mb3JtXCIpO1xuICB0ZXh0QXJlYURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWFyZWEtZm9ybVwiKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWlucHV0LWZvcm1cIik7XG4gIHRhc2tJbnB1dEZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtZm9ybVwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJidG4tY2xhc3NcIik7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLXRhc2tcIik7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG59XG5leHBvcnQgeyBuZXdUYXNrSW5wdXQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZWZvb3RlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBhbmNob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdpdEh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgYW5jaG9yTGluay5hcHBlbmRDaGlsZChnaXRIdWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZChcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjIgSUFtWW91bmdib3NzeVwiKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGFuY2hvckxpbmspO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGFuY2hvckxpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly8vL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS9jYWxjdWxhdG9yXCJcbiAgKTtcbiAgZ2l0SHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1naXRodWJcIik7XG4gIGdpdEh1Ykljb24uc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6YmxhY2tcIjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlZm9vdGVyIH07XG4iLCJpbXBvcnQgTWVudSBmcm9tIFwiLi9pY29ucy9tZW51SWNvbi5wbmdcIjtcbmltcG9ydCBUb0RvTG9nbyBmcm9tIFwiLi9pY29ucy90by1kby5wbmdcIjtcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi9pY29ucy90aGVtZS5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9Eb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudUljb25cIik7XG4gIHRvRG9Mb2dvLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTG9nb1wiKTtcbiAgdGhlbWVUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGVtZVRvZ2dsZXJcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0b0RvTG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51SWNvblwiKTtcbiAgY29uc3QgdG9Eb0xvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Mb2dvXCIpO1xuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lVG9nZ2xlclwiKTtcbiAgY29uc3QgbXlNZW51SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteU1lbnVJY29uLnNyYyA9IE1lbnU7XG4gIG1lbnVJY29uLmFwcGVuZENoaWxkKG15TWVudUljb24pO1xuICBjb25zdCBteVRvRG9Mb2dvID0gbmV3IEltYWdlKCk7XG4gIG15VG9Eb0xvZ28uc3JjID0gVG9Eb0xvZ287XG4gIHRvRG9Mb2dvLmFwcGVuZENoaWxkKG15VG9Eb0xvZ28pO1xuICBjb25zdCBteVRoZW1lVG9nZ2xlciA9IG5ldyBJbWFnZSgpO1xuICBteVRoZW1lVG9nZ2xlci5zcmMgPSBUaGVtZTtcbiAgdGhlbWVUb2dnbGVyLmFwcGVuZENoaWxkKG15VGhlbWVUb2dnbGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVIZWFkZXJDb250ZW50IH07XG4iLCJpbXBvcnQgQWxsVGFza3MgZnJvbSBcIi4vaWNvbnMvcGxhbm5pbmcucG5nXCI7XG5pbXBvcnQgVG9kYXkgZnJvbSBcIi4vaWNvbnMvY2FsZW5kYXIucG5nXCI7XG5pbXBvcnQgVGhpc1dlZWsgZnJvbSBcIi4vaWNvbnMvbmV4dC13ZWVrLnBuZ1wiO1xuaW1wb3J0IEltcG9ydGFudCBmcm9tIFwiLi9pY29ucy9jaGVja2xpc3QucG5nXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pY29ucy9ob21lLnBuZ1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vaWNvbnMvcHJvamVjdC5wbmdcIjtcbmltcG9ydCBBZGRQcm9qZWN0IGZyb20gXCIuL2ljb25zL2FkZC5wbmdcIjtcblxuZnVuY3Rpb24gQ3JlYXRlTWFpbigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtYWluQm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWFpblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1haW5TZWN0aW9uXCIpO1xuICBtYWluQm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICBtYWluQm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHlDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZDb250ZW50KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBob3Jpem9udGFsUnVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgLy9UYXNrIGR1cmF0aW9ucyBhbmQgSW1wb3J0YW5jZVxuICBjb25zdCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAvL1Rhc2sgaWNvbnNcbiAgY29uc3QgbXlBbGxUYXNrcyA9IG5ldyBJbWFnZSgpO1xuICBteUFsbFRhc2tzLnNyYyA9IEFsbFRhc2tzO1xuICBhbGxUYXNrcy5hcHBlbmRDaGlsZChteUFsbFRhc2tzKTtcbiAgY29uc3QgbXlUb2RheSA9IG5ldyBJbWFnZSgpO1xuICBteVRvZGF5LnNyYyA9IFRvZGF5O1xuICB0b2RheS5hcHBlbmRDaGlsZChteVRvZGF5KTtcbiAgY29uc3QgbXlUaGlzV2VlayA9IG5ldyBJbWFnZSgpO1xuICBteVRoaXNXZWVrLnNyYyA9IFRoaXNXZWVrO1xuICB0aGlzV2Vlay5hcHBlbmRDaGlsZChteVRoaXNXZWVrKTtcbiAgY29uc3QgbXlJbXBvcnRhbnQgPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbXBvcnRhbnQuc3JjID0gSW1wb3J0YW50O1xuICBjb25zdCBteUhvbWUgPSBuZXcgSW1hZ2UoKTtcbiAgbXlIb21lLnNyYyA9IEhvbWU7XG4gIG5hdkhlYWRlci5hcHBlbmRDaGlsZChteUhvbWUpO1xuICBjb25zdCBteVByb2plY3QgPSBuZXcgSW1hZ2UoKTtcbiAgbXlQcm9qZWN0LnNyYyA9IFByb2plY3Q7XG5cbiAgLy9BdHRhY2hlZCB0byB1bFxuICBpbXBvcnRhbnQuYXBwZW5kQ2hpbGQobXlJbXBvcnRhbnQpO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGFsbFRhc2tzKTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodGhpc1dlZWspO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQobmF2SGVhZGVyKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob3Jpem9udGFsUnVsZSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgLy9UYXNrIHRleHQgY29udGVudFxuICBuYXZIZWFkZXIuYXBwZW5kKFwiSG9tZVwiKTtcbiAgYWxsVGFza3MuYXBwZW5kKFwiQWxsIFRhc2tzXCIpO1xuICB0b2RheS5hcHBlbmQoXCJUb2RheVwiKTtcbiAgdGhpc1dlZWsuYXBwZW5kKFwiVGhpcyBXZWVrXCIpO1xuICBpbXBvcnRhbnQuYXBwZW5kKFwiSW1wb3J0YW50XCIpO1xuXG4gIC8vUHJvamVjdCBoZWFkZXJcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChteVByb2plY3QpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZChcIlByb2plY3RzXCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICBjb25zdCBob3Jpem9udGFsUnVsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUyKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0XCIpO1xuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgY29uc3QgbXlBZGQgPSBuZXcgSW1hZ2UoKTtcbiAgbXlBZGQuc3JjID0gQWRkUHJvamVjdDtcbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChteUFkZCk7XG4gIGFkZFByb2plY3QuYXBwZW5kKFwiQWRkIHByb2plY3RcIik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGlzcGxheVNlY3Rpb24oKSB7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluU2VjdGlvblwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluSGVhZGVyXCIpO1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbn1cblxuZXhwb3J0IHsgQ3JlYXRlTWFpbiwgY3JlYXRlTmF2Q29udGVudCwgY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uIH07XG4iLCJsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmZ1bmN0aW9uIFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWU7XG4gIHRoaXMudGFza0FycmF5ID0gW107XG4gIHRoaXMuc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gVG9kb1Rhc2sodGl0bGUsIGRlc2MsIGRhdGUsIGNvbXBsZXRlZCwgaW1wb3J0YW50KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjID0gZGVzYztcbiAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIHRoaXMuaW1wb3J0YW50ID0gaW1wb3J0YW50O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIFByb2plY3QsIFRvZG9UYXNrIH07XG4iLCJpbXBvcnQgTGlzdCBmcm9tIFwiLi9pY29ucy9saXN0LnBuZ1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG15SW5wdXRJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgbXlJbnB1dEljb24uc3JjID0gTGlzdDtcbiAgaW5wdXREaXYuYXBwZW5kKG15SW5wdXRJY29uLCBwcm9qZWN0TmFtZUlucHV0KTtcbiAgYnV0dG9uRGl2LmFwcGVuZChjYW5jZWxCdXR0b24sIGFkZEJ1dHRvbik7XG4gIGlucHV0TGkuYXBwZW5kKGlucHV0RGl2LCBidXR0b25EaXYpO1xuICBhZGRQcm9qZWN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0TGksIGFkZFByb2plY3QpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZS1pbnB1dFwiKTtcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY2xhc3NcIik7XG4gIGlucHV0TGkuY2xhc3NMaXN0LmFkZChcImlucHV0LUxpXCIpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBwcm9qZWN0IG5hbWUuXCIpO1xufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0SW5wdXQgfTsiLCJjb25zdCByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgPSAoZSkgPT4ge1xuICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJlZGl0XCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtZGl2XCIpXG4gICAgICAgIC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtZGl2XCIpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LXRhc2tcIikpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdC10YXNrXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtdGFza1wiKVxuICAgICAgICAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LXRhc2tcIikpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCB7IHJlbW92ZURlbGV0ZUFuZEVkaXRQb3BVcCB9OyIsImNvbnN0IHRvZ2dsZU5hdkxpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PT0gXCJtZW51SWNvblwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWhpZGRlblwiKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbmV4cG9ydCB7IHRvZ2dsZU5hdkxpc3QgfTsiLCJmdW5jdGlvbiB0b2dnbGVSZWFkT3JJbXBvcnRhbmNlKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcInVuY2hlY2tlZC1zdGFyXCIpIHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImNoZWNrXCJcbiAgICApO1xuICB9XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ1bmRvbmUtdGFza1wiKSB7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJkb25lXCJcbiAgICApO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwibGluZS10aHJvdWdoXCJcbiAgICApO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwibGluZS10aHJvdWdoXCJcbiAgICApO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwibGluZS10aHJvdWdoXCJcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZ2dsZVJlYWRPckltcG9ydGFuY2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlSGVhZGVyQ29udGVudCB9IGZyb20gXCIuL3BhZ2UtaGVhZGVyXCI7XG5pbXBvcnQge1xuICBDcmVhdGVNYWluLFxuICBjcmVhdGVOYXZDb250ZW50LFxuICBjcmVhdGVUYXNrRGlzcGxheVNlY3Rpb24sXG59IGZyb20gXCIuL3BhZ2UtbWFpblwiO1xuaW1wb3J0IHsgY3JlYXRlZm9vdGVyIH0gZnJvbSBcIi4vcGFnZS1mb290ZXJcIjtcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9hZGQtbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IGVkaXRDdXJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vZWRpdC1jdXJyZW50LXByb2plY3RcIjtcbmltcG9ydCB7IHJlbW92ZURlbGV0ZUFuZEVkaXRQb3BVcCB9IGZyb20gXCIuL3JlbW92ZS1wcm9qZWN0LXBvcHVwXCI7XG5pbXBvcnQgeyBhZGRBbmRDYW5jZWxUYXNrIH0gZnJvbSBcIi4vYWRkLW9yLWNhbmNlbC10YXNrLWV2ZW50XCI7XG5pbXBvcnQgeyB0b2dnbGVSZWFkT3JJbXBvcnRhbmNlIH0gZnJvbSBcIi4vdG9nZ2xlLXN0YXRlc1wiO1xuaW1wb3J0IHsgdG9nZ2xlTmF2TGlzdCB9IGZyb20gXCIuL3RvZ2dsZS1uYXYtbGlzdFwiO1xuaW1wb3J0IHsgZWRpdEN1cmVudFRhc2sgfSBmcm9tIFwiLi9lZGl0LWN1cnJlbnQtdGFza1wiO1xuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZUhlYWRlckNvbnRlbnQoKTtcbkNyZWF0ZU1haW4oKTtcbmNyZWF0ZU5hdkNvbnRlbnQoKTtcbmNyZWF0ZWZvb3RlcigpO1xuY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uKCk7XG50b2dnbGVOYXZMaXN0O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlZGl0Q3VyZW50UHJvamVjdCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlbW92ZURlbGV0ZUFuZEVkaXRQb3BVcCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQW5kQ2FuY2VsVGFzayk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUmVhZE9ySW1wb3J0YW5jZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFkZE5ld1Byb2plY3QpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZWRpdEN1cmVudFRhc2spOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==