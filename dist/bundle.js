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
/* harmony import */ var _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-or-cancel-task-event */ "./src/add-or-cancel-task-event.js");








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

  project.addEventListener("click", setProjectForUse.bind(null, nameOfProject));
}

function setProjectForUse(nameOfProject, e) {
  if (e.target.className === "projects") {
    getTaskArray(nameOfProject);
    removeTasks();
    (0,_add_todo_button__WEBPACK_IMPORTED_MODULE_5__.todoAddButton)();
    (0,_add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_6__.displayTasks)();
    setHeaderToProjectName(nameOfProject);
  }
}

function setHeaderToProjectName(nameOfProject) {
  document.querySelector(".mainHeader").firstChild.textContent =
    nameOfProject.name;
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
/* harmony export */   "addAndCancelTask": () => (/* binding */ addAndCancelTask),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _display_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-todo-list */ "./src/display-todo-list.js");
/* harmony import */ var _new_task_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-task-input */ "./src/new-task-input.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");





function addAndCancelTask(e) {
  const taskList = document.querySelector(".task-list");
  const inputTaskForm = document.querySelector(".task-input-form");

  if (e.target.className == "add-task-button") {
    for (let i = 0; i < taskList.childNodes.length; i++) {
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
    }
    (0,_new_task_input__WEBPACK_IMPORTED_MODULE_2__.newTaskInput)();
  }

  if (e.target.className == "cancel-task") {
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }

  if (e.target.className == "add-task") {
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    if (document.querySelector(".date-input-form").value.trim() === "") return;

    pushToTaskArray();
    removeTaskFromList();
    displayTasks();
  }
}

function pushToTaskArray() {
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.currentProjectArray.push(
    new _project_constructor__WEBPACK_IMPORTED_MODULE_3__.TodoTask(
      document.querySelector(".title-input-form").value,
      document.querySelector(".text-area-form").value,
      document.querySelector(".date-input-form").value
    )
  );
}

function removeTaskFromList() {
  const taskList = document.querySelector(".task-list");
  if (!!taskList) {
    while (taskList.childNodes.length > 1)
      taskList.removeChild(taskList.firstChild);
  }
}

function displayTasks() {
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.currentProjectArray.forEach((task) =>
    (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(task.title, task.desc, task.date, task)
  );
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
/* harmony export */   "projectIndex": () => (/* binding */ projectIndex),
/* harmony export */   "taskIndex": () => (/* binding */ taskIndex)
/* harmony export */ });
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");



let projectIndex;
let taskIndex;

function popUpDeleteAndEdit(nameOfArray) {
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
    deleteProjectFromList.bind(deleteProject, nameOfArray)
  );

  getIndex.call(this, nameOfArray);
}

function deleteProjectFromList(nameOfArray) {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

  if (this.parentNode.parentNode.className === "new-task")
    _add_new_project__WEBPACK_IMPORTED_MODULE_0__.currentProjectArray.splice(_add_new_project__WEBPACK_IMPORTED_MODULE_0__.currentProjectArray.indexOf(nameOfArray), 1);
  else _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray.splice(_project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray.indexOf(nameOfArray), 1);
}

function getIndex(nameOfArray) {
  if (this.parentNode.parentNode.className === "projects")
    getProjectIndex(nameOfArray);
  if (this.parentNode.parentNode.className === "new-task")
    getTaskIndex(nameOfArray);
}

function getProjectIndex(nameOfArray) {
  projectIndex = _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray.indexOf(nameOfArray);
}

function getTaskIndex(nameOfArray) {
  taskIndex = _add_new_project__WEBPACK_IMPORTED_MODULE_0__.currentProjectArray.indexOf(nameOfArray);
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
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");








function displayAddedTasks(title, desc, date, task) {
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

  taskTitle.textContent = title;
  taskDesc.textContent = desc;
  dateInput.textContent = date;

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

  myTaskDots.addEventListener("click", _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_5__.popUpDeleteAndEdit.bind(myTaskDots, task));
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
  this.setName = (newName) => (this.name = newName);
}

function TodoTask(title, desc, date, completed, important) {
  this.title = title;
  this.desc = desc;
  this.date = date;

  this.completed = completed;
  this.important = important;

  this.setDetails = (newTitle, newDesc, newDate) => {
    this.title = newTitle;
    this.desc = newDesc;
    this.date = newDate;
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0s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LHVFQUFnQjtBQUNuRCxtQ0FBbUMsa0VBQXNCO0FBQ3pELHVDQUF1QywyREFBYTtBQUNwRCxxQ0FBcUMsK0RBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLW5ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtb3ItY2FuY2VsLXRhc2stZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC10b2RvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLWVkaXQtcG9wLXVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC1jdXJyZW50LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXQtY3VycmVudC10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXctdGFzay1pbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLW1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbW92ZS1wcm9qZWN0LXBvcHVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtbmF2LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZ2dsZS1zdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIC0tZm9vdGVyLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6ICNjYzk4ZmY7XFxuICAtLW1haW4taGVhZGVyLWJnQ29sb3I6ICMzMDhjNTZkNjtcXG4gIC0tbmF2LWhlYWRlcjogcmdiKDEsIDEzNCwgMSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5tYWluID4gbmF2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5uYXYge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5uYXYtaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxudWwge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMjI0LCAxODcsIDAuNik7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxubGk6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZlOWM3ZGM7XFxufVxcbmxpID4gaW1nIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5ociB7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5wdXQtTGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5pbnB1dC1MaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idXR0b24tY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMzBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5ob21lID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcsXFxuLnByb2plY3QgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucHJvamVjdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA3cHg7XFxufVxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbn1cXG4ucHJvamVjdHMgPiBpbWc6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IGJsYWNrO1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IGJsYWNrO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcCB7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwIHtcXG4gIHBhZGRpbmc6IDEycHggMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYig3OCwgMCwgNzgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYig3OCwgMCwgNzgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYW1lLWlucHV0IHtcXG4gIGZsZXg6IDE7XFxufVxcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtaGVhZGVyKTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZmxleDogMztcXG59XFxuLm1haW5IZWFkZXIge1xcbiAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4xKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWlucHV0LWZvcm0ge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnRhc2staW5wdXQtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxufVxcbi5idG4tY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjA1KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuLm5ldy10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjAyKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4udGFzay1kaXYgPiBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi50YXNrLWRpdiA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gaDIge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi50aXRsZS1hbmQtZGVzYy1kaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgY29sb3I6ICMzOTI5Mjk7XFxufVxcbi5zdGFyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyNXB4O1xcbn1cXG4uc3Rhci1kaXYgPiBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5zdGFyLWRpdiA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4uZGF0ZS1zcGFuID4gcCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDJweCA2cHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udW5jaGVjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVja2VkLXN0YXIsXFxuLmRvbmUtdGFzayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVjayxcXG4uZG9uZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5kYXRlLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubXktdGFzay1kb3RzIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uZGF0ZS1hbmQtc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsNEJBQTRCOztFQUU1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixr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O0FBQ3BCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgLS1mb290ZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMmFiZDY3O1xcbiAgLS1tYWluLWNvbG9yOiAjZWNlY2VjO1xcbiAgLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogI2MyZDhiNztcXG4gIC0taGVhZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAtLWhvcml6b250YWwtcnVsZTogI2NjOThmZjtcXG4gIC0tbWFpbi1oZWFkZXItYmdDb2xvcjogIzMwOGM1NmQ2O1xcbiAgLS1uYXYtaGVhZGVyOiByZ2IoMSwgMTM0LCAxKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gPiBuYXYge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLm5hdiB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZmxleDogMTtcXG59XFxuLm5hdi1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG51bCB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAyMjQsIDE4NywgMC42KTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5saTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxubGkgPiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbmhyIHtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ucHJvamVjdCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5pbnB1dC1MaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmlucHV0LUxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmhvbWUgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyxcXG4ucHJvamVjdCA+IGgyOmZpcnN0LWNoaWxkID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG59XFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcbi5wcm9qZWN0cyA+IGltZzpsYXN0LW9mLXR5cGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggYmxhY2s7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDM4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAwcHggYmxhY2s7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwIHtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHAge1xcbiAgcGFkZGluZzogMTJweCAxMHB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLm5hbWUtaW5wdXQge1xcbiAgZmxleDogMTtcXG59XFxuaDIge1xcbiAgY29sb3I6IHZhcigtLW5hdi1oZWFkZXIpO1xcbn1cXG5cXG4ubWFpblNlY3Rpb24ge1xcbiAgcGFkZGluZzogMzBweCA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmbGV4OiAzO1xcbn1cXG4ubWFpbkhlYWRlciB7XFxuICBwYWRkaW5nOiAxNXB4IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLnByb2plY3QtbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hZGQtdGFzay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuLmJ0bi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMDUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG4ubmV3LXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMTg5LCAxMDMsIDAuMDIpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2stZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcbi50YXNrLWRpdiA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnRhc2stZGl2ID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi50aXRsZS1hbmQtZGVzYy1kaXYgPiBoMiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBjb2xvcjogIzM5MjkyOTtcXG59XFxuLnN0YXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDI1cHg7XFxufVxcbi5zdGFyLWRpdiA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnN0YXItZGl2ID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5kYXRlLXNwYW4gPiBwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMnB4IDZweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi51bmNoZWNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrZWQtc3RhcixcXG4uZG9uZS10YXNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrLFxcbi5kb25lIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmRhdGUtc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5teS10YXNrLWRvdHMge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi5kYXRlLWFuZC1zcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9pY29ucy9wcm9qZWN0TWVudS5wbmdcIjtcbmltcG9ydCBQcm9qZWN0RG90cyBmcm9tIFwiLi9pY29ucy9kb3RzLnBuZ1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElucHV0IH0gZnJvbSBcIi4vcHJvamVjdC1pbnB1dFwiO1xuaW1wb3J0IHsgcG9wVXBEZWxldGVBbmRFZGl0IH0gZnJvbSBcIi4vZGVsZXRlLWVkaXQtcG9wLXVwXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB0b2RvQWRkQnV0dG9uIH0gZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9hZGQtb3ItY2FuY2VsLXRhc2stZXZlbnRcIjtcblxubGV0IGN1cnJlbnRQcm9qZWN0QXJyYXk7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSWZBbnlGb3JtRXhpc3QpO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmQW55Rm9ybUV4aXN0KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgaWYgKHByb2plY3RMaXN0LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0WzBdID09IFwiaW5wdXQtTGlcIikgcmV0dXJuO1xuICBnZXRQcm9qZWN0SW5wdXQoKTtcbiAgY2FuY2VsUHJvamVjdElucHV0KCk7XG4gIGFkZFByb2plY3RUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdElucHV0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSW5wdXRGb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5wdXRGb3JtKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKVxuICAgIC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LUxpXCIpKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgcHVzaE5ld1Byb2plY3RJbnN0YW5jZSgpO1xuICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiBwdXNoTmV3UHJvamVjdEluc3RhbmNlKCkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtaW5wdXRcIikudmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdExpc3RzKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICB3aGlsZSAocHJvamVjdExpc3QuY2hpbGROb2Rlcy5sZW5ndGggPiAxKVxuICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBBZGRQcm9qZWN0TmFtZVRvTGlzdChwcm9qZWN0Lm5hbWUsIHByb2plY3QpXG4gICk7XG59XG5cbmZ1bmN0aW9uIEFkZFByb2plY3ROYW1lVG9MaXN0KHByb2plY3ROYW1lLCBuYW1lT2ZQcm9qZWN0KSB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBteVByb2plY3REb3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBteVByb2plY3RNZW51ID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15UHJvamVjdERvdHMgPSBuZXcgSW1hZ2UoKTtcblxuICBteVByb2plY3RNZW51LnNyYyA9IFByb2plY3RNZW51O1xuICBteVByb2plY3REb3RzLnNyYyA9IFByb2plY3REb3RzO1xuXG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c1wiKTtcblxuICBwcm9qZWN0LmFwcGVuZChteVByb2plY3RNZW51LCBwcm9qZWN0TmFtZSk7XG4gIG15UHJvamVjdERvdHNEaXYuYXBwZW5kQ2hpbGQobXlQcm9qZWN0RG90cyk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQobXlQcm9qZWN0RG90c0Rpdik7XG4gIGFkZFByb2plY3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvamVjdCwgYWRkUHJvamVjdCk7XG5cbiAgbXlQcm9qZWN0RG90cy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBwb3BVcERlbGV0ZUFuZEVkaXQuYmluZChteVByb2plY3REb3RzLCBuYW1lT2ZQcm9qZWN0KVxuICApO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFByb2plY3RGb3JVc2UuYmluZChudWxsLCBuYW1lT2ZQcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RGb3JVc2UobmFtZU9mUHJvamVjdCwgZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzXCIpIHtcbiAgICBnZXRUYXNrQXJyYXkobmFtZU9mUHJvamVjdCk7XG4gICAgcmVtb3ZlVGFza3MoKTtcbiAgICB0b2RvQWRkQnV0dG9uKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgc2V0SGVhZGVyVG9Qcm9qZWN0TmFtZShuYW1lT2ZQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRIZWFkZXJUb1Byb2plY3ROYW1lKG5hbWVPZlByb2plY3QpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluSGVhZGVyXCIpLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPVxuICAgIG5hbWVPZlByb2plY3QubmFtZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0FycmF5KG5hbWVPZlByb2plY3QpIHtcbiAgY3VycmVudFByb2plY3RBcnJheSA9IG5hbWVPZlByb2plY3QudGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrcygpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5TZWN0aW9uXCIpO1xuICBpZiAoISF0YXNrTGlzdClcbiAgICB3aGlsZSAodGFza0xpc3QuY2hpbGROb2Rlcy5sZW5ndGggPiAxKVxuICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QubGFzdENoaWxkKTtcbn1cblxuZXhwb3J0IHsgYWRkTmV3UHJvamVjdCwgY3VycmVudFByb2plY3RBcnJheSB9OyIsImltcG9ydCB7IGN1cnJlbnRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9hZGQtbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10b2RvLWxpc3RcIjtcbmltcG9ydCB7IG5ld1Rhc2tJbnB1dCB9IGZyb20gXCIuL25ldy10YXNrLWlucHV0XCI7XG5pbXBvcnQgeyBUb2RvVGFzayB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcblxuZnVuY3Rpb24gYWRkQW5kQ2FuY2VsVGFzayhlKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGNvbnN0IGlucHV0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXQtZm9ybVwiKTtcblxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLXRhc2stYnV0dG9uXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrTGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFswXSA9PSBcInRhc2staW5wdXQtZm9ybVwiKSByZXR1cm47XG4gICAgfVxuICAgIG5ld1Rhc2tJbnB1dCgpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImNhbmNlbC10YXNrXCIpIHtcbiAgICBpbnB1dFRhc2tGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW5wdXRUYXNrRm9ybSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiYWRkLXRhc2tcIikge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuXG4gICAgcHVzaFRvVGFza0FycmF5KCk7XG4gICAgcmVtb3ZlVGFza0Zyb21MaXN0KCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVzaFRvVGFza0FycmF5KCkge1xuICBjdXJyZW50UHJvamVjdEFycmF5LnB1c2goXG4gICAgbmV3IFRvZG9UYXNrKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWFyZWEtZm9ybVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpLnZhbHVlXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbUxpc3QoKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGlmICghIXRhc2tMaXN0KSB7XG4gICAgd2hpbGUgKHRhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoID4gMSlcbiAgICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tMaXN0LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgY3VycmVudFByb2plY3RBcnJheS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgIGRpc3BsYXlBZGRlZFRhc2tzKHRhc2sudGl0bGUsIHRhc2suZGVzYywgdGFzay5kYXRlLCB0YXNrKVxuICApO1xufVxuXG5leHBvcnQgeyBhZGRBbmRDYW5jZWxUYXNrLCBkaXNwbGF5VGFza3MgfTsiLCJpbXBvcnQgQWRkVGFzayBmcm9tIFwiLi9pY29ucy9hZGRUYXNrLnBuZ1wiO1xuXG5mdW5jdGlvbiB0b2RvQWRkQnV0dG9uKCkge1xuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblNlY3Rpb25cIik7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG15QWRkVGFzayA9IG5ldyBJbWFnZSgpO1xuXG4gIG15QWRkVGFzay5zcmMgPSBBZGRUYXNrO1xuICBhZGRUYXNrQnV0dG9uLmFwcGVuZChteUFkZFRhc2ssIFwiQWRkIFRhc2tcIik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICBhZGRUYXNrU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2tTZWN0aW9uKTtcblxuICBhZGRUYXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stc2VjdGlvblwiKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdFwiKTtcbiAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xufVxuXG5leHBvcnQgeyB0b2RvQWRkQnV0dG9uIH07IiwiaW1wb3J0IHsgY3VycmVudFByb2plY3RBcnJheSB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vcHJvamVjdC1jb25zdHJ1Y3RvclwiO1xuXG5sZXQgcHJvamVjdEluZGV4O1xubGV0IHRhc2tJbmRleDtcblxuZnVuY3Rpb24gcG9wVXBEZWxldGVBbmRFZGl0KG5hbWVPZkFycmF5KSB7XG4gIGxldCBsaXN0Q2hpbGRyZW47XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKSBsaXN0Q2hpbGRyZW4gPSA0O1xuICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJwcm9qZWN0c1wiKSBsaXN0Q2hpbGRyZW4gPSAzO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiBsaXN0Q2hpbGRyZW4pIHJldHVybjtcblxuICBjb25zdCBkZWxldGVPckVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwicHJvamVjdHNcIilcbiAgICBkZWxldGVPckVkaXREaXYuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1lZGl0LWRpdlwiKTtcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcIm5ldy10YXNrXCIpXG4gICAgZGVsZXRlT3JFZGl0RGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZWRpdC10YXNrXCIpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKVxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIik7XG4gIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcInByb2plY3RzXCIpXG4gICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG5cbiAgZWRpdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlT3JFZGl0RGl2LmFwcGVuZChlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCk7XG4gIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGRlbGV0ZU9yRWRpdERpdik7XG5cbiAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgZGVsZXRlUHJvamVjdEZyb21MaXN0LmJpbmQoZGVsZXRlUHJvamVjdCwgbmFtZU9mQXJyYXkpXG4gICk7XG5cbiAgZ2V0SW5kZXguY2FsbCh0aGlzLCBuYW1lT2ZBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tTGlzdChuYW1lT2ZBcnJheSkge1xuICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcblxuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcIm5ldy10YXNrXCIpXG4gICAgY3VycmVudFByb2plY3RBcnJheS5zcGxpY2UoY3VycmVudFByb2plY3RBcnJheS5pbmRleE9mKG5hbWVPZkFycmF5KSwgMSk7XG4gIGVsc2UgcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0QXJyYXkuaW5kZXhPZihuYW1lT2ZBcnJheSksIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleChuYW1lT2ZBcnJheSkge1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcInByb2plY3RzXCIpXG4gICAgZ2V0UHJvamVjdEluZGV4KG5hbWVPZkFycmF5KTtcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PT0gXCJuZXctdGFza1wiKVxuICAgIGdldFRhc2tJbmRleChuYW1lT2ZBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleChuYW1lT2ZBcnJheSkge1xuICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihuYW1lT2ZBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJbmRleChuYW1lT2ZBcnJheSkge1xuICB0YXNrSW5kZXggPSBjdXJyZW50UHJvamVjdEFycmF5LmluZGV4T2YobmFtZU9mQXJyYXkpO1xufVxuXG5leHBvcnQgeyBwb3BVcERlbGV0ZUFuZEVkaXQsIHByb2plY3RJbmRleCwgdGFza0luZGV4IH07IiwiaW1wb3J0IFByb2plY3REb3RzIGZyb20gXCIuL2ljb25zL2RvdHMucG5nXCI7XG5pbXBvcnQgVW5jaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy91bmNoZWNrZWRTdGFyLnBuZ1wiO1xuaW1wb3J0IFVuZG9uZVRhc2sgZnJvbSBcIi4vaWNvbnMvdW5kb25lVGFzay5wbmdcIjtcbmltcG9ydCBDaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy9jaGVja2VkU3Rhci5wbmdcIjtcbmltcG9ydCBEb25ldGFzayBmcm9tIFwiLi9pY29ucy9kb25lVGFzay5wbmdcIjtcbmltcG9ydCB7IHBvcFVwRGVsZXRlQW5kRWRpdCB9IGZyb20gXCIuL2RlbGV0ZS1lZGl0LXBvcC11cFwiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3RBcnJheSB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5QWRkZWRUYXNrcyh0aXRsZSwgZGVzYywgZGF0ZSwgdGFzaykge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG5cbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGl0bGVBbmREZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3RhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlQW5kU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgbXlUYXNrRG90cyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuY2hlY2tlZFN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlVbmRvbmVUYXNrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15Q2hlY2tlZFN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlEb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIGRhdGVJbnB1dC50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgbXlUYXNrRG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgbXlVbmNoZWNrZWRTdGFyLnNyYyA9IFVuY2hlY2tlZFN0YXI7XG4gIG15VW5kb25lVGFzay5zcmMgPSBVbmRvbmVUYXNrO1xuICBteUNoZWNrZWRTdGFyLnNyYyA9IENoZWNrZWRTdGFyO1xuICBteURvbmVUYXNrLnNyYyA9IERvbmV0YXNrO1xuXG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrXCIpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gIHRpdGxlQW5kRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYW5kLWRlc2MtZGl2XCIpO1xuICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjXCIpO1xuICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1zcGFuXCIpO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGUtaW5wdXRcIik7XG4gIHN0YXJEaXYuY2xhc3NMaXN0LmFkZChcInN0YXItZGl2XCIpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKTtcbiAgbXlVbmNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJ1bmNoZWNrZWQtc3RhclwiKTtcbiAgbXlDaGVja2VkU3Rhci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1zdGFyXCIpO1xuICBteVVuZG9uZVRhc2suY2xhc3NMaXN0LmFkZChcInVuZG9uZS10YXNrXCIpO1xuICBteURvbmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkb25lLXRhc2tcIik7XG4gIG15VGFza0RvdHMuY2xhc3NMaXN0LmFkZChcIm15LXRhc2stZG90c1wiKTtcbiAgZGF0ZUFuZFNwYW4uY2xhc3NMaXN0LmFkZChcImRhdGUtYW5kLXNwYW5cIik7XG5cbiAgdGl0bGVBbmREZXNjRGl2LmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbiAgZGF0ZVNwYW4uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgZGF0ZUFuZFNwYW4uYXBwZW5kKGRhdGVTcGFuLCBteVRhc2tEb3RzKTtcbiAgc3RhckRpdi5hcHBlbmQobXlVbmNoZWNrZWRTdGFyLCBteUNoZWNrZWRTdGFyKTtcbiAgdGFza0Rpdi5hcHBlbmQobXlVbmRvbmVUYXNrLCBteURvbmVUYXNrKTtcbiAgbmV3VGFzay5hcHBlbmQodGFza0RpdiwgdGl0bGVBbmREZXNjRGl2LCBzdGFyRGl2LCBkYXRlQW5kU3Bhbik7XG4gIHRhc2tMaXN0Lmluc2VydEJlZm9yZShuZXdUYXNrLCBhZGRUYXNrQnV0dG9uKTtcblxuICBteVRhc2tEb3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3BVcERlbGV0ZUFuZEVkaXQuYmluZChteVRhc2tEb3RzLCB0YXNrKSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH07IiwiaW1wb3J0IHsgcHJvamVjdEluZGV4IH0gZnJvbSBcIi4vZGVsZXRlLWVkaXQtcG9wLXVwXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SW5wdXQgfSBmcm9tIFwiLi9wcm9qZWN0LWlucHV0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUVkaXRpbmcoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICBpZiAocHJvamVjdExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJpbnB1dC1MaVwiKSByZXR1cm47XG5cbiAgY29uc3QgZ2V0TmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcHJvamVjdC5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGNoaWxkcmVuQXJyYXkgPSBBcnJheS5mcm9tKGNoaWxkcmVuKTtcbiAgICBsZXQgcHJldmlvdXNOYW1lID0gY2hpbGRyZW5BcnJheVsxXS5kYXRhO1xuICAgIGlmIChwcmV2aW91c05hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY2hpbGRBcnJheSA9IEFycmF5LmZyb20oY2hpbGRyZW5BcnJheVsxXS5jaGlsZE5vZGVzKTtcbiAgICAgIHByZXZpb3VzTmFtZSA9IGNoaWxkQXJyYXlbMF0uZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlvdXNOYW1lIH07XG4gIH0pKCk7XG5cbiAgZ2V0UHJvamVjdElucHV0KCk7XG5cbiAgY29uc3QgaW5zZXJ0R2V0UHJvamVjdElucHV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtaW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1MaVwiKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBnZXROYW1lLnByZXZpb3VzTmFtZTtcbiAgICBwcm9qZWN0TGlzdC5pbnNlcnRCZWZvcmUoaW5wdXRGb3JtLCBuZXh0RWxlbWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0Rm9ybSxcbiAgICAgIG5hbWVJbnB1dCxcbiAgICB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5ld1Byb2plY3ROYW1lKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtaW5wdXRcIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgZWRpdFByb2plY3RBcnJheU5hbWUoKTtcbiAgICByZXBsYWNlT2xkTmFtZUluRG9tKCk7XG4gICAgcmVtb3ZlSW5wdXRGb3JtKCk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZU9sZE5hbWVJbkRvbSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld1Byb2plY3ROYW1lLnRleHRDb250ZW50ID0gaW5zZXJ0R2V0UHJvamVjdElucHV0Lm5hbWVJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0LnJlcGxhY2VDaGlsZChuZXdQcm9qZWN0TmFtZSwgcHJvamVjdC5jaGlsZE5vZGVzWzFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUlucHV0Rm9ybSgpIHtcbiAgICBpbnNlcnRHZXRQcm9qZWN0SW5wdXQuaW5wdXRGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG4gICAgICBpbnNlcnRHZXRQcm9qZWN0SW5wdXQuaW5wdXRGb3JtXG4gICAgKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdEFycmF5TmFtZSgpIHtcbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS5zZXROYW1lKGluc2VydEdldFByb2plY3RJbnB1dC5uYW1lSW5wdXQudmFsdWUpO1xuICB9XG5cbiAgKCgpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVJbnB1dEZvcm0pO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5hZGRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHVwZGF0ZU5ld1Byb2plY3ROYW1lKTtcbiAgfSkoKTtcbn1cblxuZnVuY3Rpb24gZWRpdEN1cmVudFByb2plY3QoZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdFwiKSBlbmFibGVFZGl0aW5nKCk7XG59XG5cbmV4cG9ydCB7IGVkaXRDdXJlbnRQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBuZXdUYXNrSW5wdXQgfSBmcm9tIFwiLi9uZXctdGFzay1pbnB1dFwiO1xuXG5mdW5jdGlvbiBlbmFibGVUYXNrRWRpdGluZygpIHtcbiAgY29uc3QgY3VycmVudFRhc2sgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrXCIpLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgaWYgKHRhc2tMaXN0LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0WzBdID09IFwidGFzay1pbnB1dC1mb3JtXCIpIHJldHVybjtcblxuICBjb25zdCBnZXROYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCB0YXNrVGl0bGUgPSBjdXJyZW50VGFzay5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IHRhc2tEZXNjID0gY3VycmVudFRhc2suY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdO1xuICAgIGxldCB0YXNrRGF0ZSA9IGN1cnJlbnRUYXNrLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0Rlc2MsIHRhc2tEYXRlIH07XG4gIH0pKCk7XG5cbiAgbmV3VGFza0lucHV0KCk7XG5cbiAgY29uc3QgaW5zZXJ0TmV3SW5wdXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByZXZpb3VzVGFzayA9IGN1cnJlbnRUYXNrLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCB0YXNrSW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0LWZvcm1cIik7XG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtaW5wdXQtZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtYXJlYS1mb3JtXCIpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpO1xuICAgIGlucHV0VGl0bGUudmFsdWUgPSBnZXROYW1lLnRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICBpbnB1dERlc2MudmFsdWUgPSBnZXROYW1lLnRhc2tEZXNjLnRleHRDb250ZW50O1xuICAgIGlucHV0RGF0ZS52YWx1ZSA9IGdldE5hbWUudGFza0RhdGUudGV4dENvbnRlbnQ7XG4gICAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dEZvcm0sIHByZXZpb3VzVGFzayk7XG4gICAgcmV0dXJuIHsgaW5wdXRUaXRsZSwgaW5wdXREZXNjLCBpbnB1dERhdGUsIHRhc2tJbnB1dEZvcm0gfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiB1cGRhdGVOZXdUYXNrTmFtZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgZ2V0TmFtZS50YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpbnNlcnROZXdJbnB1dC5pbnB1dFRpdGxlLnZhbHVlO1xuICAgIGdldE5hbWUudGFza0Rlc2MudGV4dENvbnRlbnQgPSBpbnNlcnROZXdJbnB1dC5pbnB1dERlc2MudmFsdWU7XG4gICAgZ2V0TmFtZS50YXNrRGF0ZS50ZXh0Q29udGVudCA9IGluc2VydE5ld0lucHV0LmlucHV0RGF0ZS52YWx1ZTtcbiAgICByZW1vdmVOZXdUYXNrSW5wdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5ld1Rhc2tJbnB1dCgpIHtcbiAgICBpbnNlcnROZXdJbnB1dC50YXNrSW5wdXRGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG4gICAgICBpbnNlcnROZXdJbnB1dC50YXNrSW5wdXRGb3JtXG4gICAgKTtcbiAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgLy8gRXZlbnRMaXN0ZW5lciBvbiBhZGRUYXNrIGFuZCBjYW5jZWxUYXNrIEJ1dHRvbnNcbiAgKCgpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLXRhc2tcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlbW92ZU5ld1Rhc2tJbnB1dCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHVwZGF0ZU5ld1Rhc2tOYW1lKTtcbiAgfSkoKTtcbn1cblxuZnVuY3Rpb24gZWRpdEN1cmVudFRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdC10YXNrXCIpIGVuYWJsZVRhc2tFZGl0aW5nKCk7XG59XG5leHBvcnQgeyBlZGl0Q3VyZW50VGFzayB9OyIsImZ1bmN0aW9uIG5ld1Rhc2tJbnB1dCgpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBjb25zdCB0YXNrSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGV4dGFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0QXJlYURlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRleHRBcmVhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdGl0bGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgdGV4dEFyZWFEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXRhaWxzIChPcHRpb25hbCk6XCI7XG4gIGRhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICB0aXRsZURpdi5hcHBlbmQodGl0bGVJbnB1dExhYmVsLCB0aXRsZUlucHV0KTtcbiAgdGV4dGFyZWFEaXYuYXBwZW5kKHRleHRBcmVhRGVzY3JpcHRpb25MYWJlbCwgdGV4dEFyZWFEZXNjcmlwdGlvbik7XG4gIGRhdGVEaXYuYXBwZW5kKGRhdGVJbnB1dExhYmVsLCBkYXRlSW5wdXQpO1xuICBidXR0b25EaXYuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgYWRkQnV0dG9uKTtcbiAgdGFza0lucHV0Rm9ybS5hcHBlbmQodGl0bGVEaXYsIHRleHRhcmVhRGl2LCBkYXRlRGl2LCBidXR0b25EaXYpO1xuICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUodGFza0lucHV0Rm9ybSwgYWRkVGFza0J1dHRvbik7XG5cbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZm9ybVwiKTtcbiAgdGV4dEFyZWFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC1hcmVhLWZvcm1cIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dC1mb3JtXCIpO1xuICB0YXNrSW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0LWZvcm1cIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsYXNzXCIpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC10YXNrXCIpO1xuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xufVxuZXhwb3J0IHsgbmV3VGFza0lucHV0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgYW5jaG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmQoXCJDb3B5cmlnaHQgXFx1MDBBOSAyMDIyIElBbVlvdW5nYm9zc3lcIik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3JMaW5rKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICBhbmNob3JMaW5rLnNldEF0dHJpYnV0ZShcbiAgICBcImhyZWZcIixcbiAgICBcImh0dHBzOi8vLy9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvY2FsY3VsYXRvclwiXG4gICk7XG4gIGdpdEh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBnaXRIdWJJY29uLnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOmJsYWNrXCI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9O1xuIiwiaW1wb3J0IE1lbnUgZnJvbSBcIi4vaWNvbnMvbWVudUljb24ucG5nXCI7XG5pbXBvcnQgVG9Eb0xvZ28gZnJvbSBcIi4vaWNvbnMvdG8tZG8ucG5nXCI7XG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vaWNvbnMvdGhlbWUucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvRG9Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGhlbWVUb2dnbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcIm1lbnVJY29uXCIpO1xuICB0b0RvTG9nby5jbGFzc0xpc3QuYWRkKFwidG9Eb0xvZ29cIik7XG4gIHRoZW1lVG9nZ2xlci5jbGFzc0xpc3QuYWRkKFwidGhlbWVUb2dnbGVyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodG9Eb0xvZ28pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhlbWVUb2dnbGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDb250ZW50KCkge1xuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUljb25cIik7XG4gIGNvbnN0IHRvRG9Mb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvTG9nb1wiKTtcbiAgY29uc3QgdGhlbWVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVRvZ2dsZXJcIik7XG4gIGNvbnN0IG15TWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlNZW51SWNvbi5zcmMgPSBNZW51O1xuICBtZW51SWNvbi5hcHBlbmRDaGlsZChteU1lbnVJY29uKTtcbiAgY29uc3QgbXlUb0RvTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBteVRvRG9Mb2dvLnNyYyA9IFRvRG9Mb2dvO1xuICB0b0RvTG9nby5hcHBlbmRDaGlsZChteVRvRG9Mb2dvKTtcbiAgY29uc3QgbXlUaGVtZVRvZ2dsZXIgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUaGVtZVRvZ2dsZXIuc3JjID0gVGhlbWU7XG4gIHRoZW1lVG9nZ2xlci5hcHBlbmRDaGlsZChteVRoZW1lVG9nZ2xlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlSGVhZGVyQ29udGVudCB9O1xuIiwiaW1wb3J0IEFsbFRhc2tzIGZyb20gXCIuL2ljb25zL3BsYW5uaW5nLnBuZ1wiO1xuaW1wb3J0IFRvZGF5IGZyb20gXCIuL2ljb25zL2NhbGVuZGFyLnBuZ1wiO1xuaW1wb3J0IFRoaXNXZWVrIGZyb20gXCIuL2ljb25zL25leHQtd2Vlay5wbmdcIjtcbmltcG9ydCBJbXBvcnRhbnQgZnJvbSBcIi4vaWNvbnMvY2hlY2tsaXN0LnBuZ1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaWNvbnMvaG9tZS5wbmdcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2ljb25zL3Byb2plY3QucG5nXCI7XG5pbXBvcnQgQWRkUHJvamVjdCBmcm9tIFwiLi9pY29ucy9hZGQucG5nXCI7XG5cbmZ1bmN0aW9uIENyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgbWFpbkJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluU2VjdGlvblwiKTtcbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Cb2R5Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2Q29udGVudCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIC8vVGFzayBkdXJhdGlvbnMgYW5kIEltcG9ydGFuY2VcbiAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgLy9UYXNrIGljb25zXG4gIGNvbnN0IG15QWxsVGFza3MgPSBuZXcgSW1hZ2UoKTtcbiAgbXlBbGxUYXNrcy5zcmMgPSBBbGxUYXNrcztcbiAgYWxsVGFza3MuYXBwZW5kQ2hpbGQobXlBbGxUYXNrcyk7XG4gIGNvbnN0IG15VG9kYXkgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUb2RheS5zcmMgPSBUb2RheTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQobXlUb2RheSk7XG4gIGNvbnN0IG15VGhpc1dlZWsgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUaGlzV2Vlay5zcmMgPSBUaGlzV2VlaztcbiAgdGhpc1dlZWsuYXBwZW5kQ2hpbGQobXlUaGlzV2Vlayk7XG4gIGNvbnN0IG15SW1wb3J0YW50ID0gbmV3IEltYWdlKCk7XG4gIG15SW1wb3J0YW50LnNyYyA9IEltcG9ydGFudDtcbiAgY29uc3QgbXlIb21lID0gbmV3IEltYWdlKCk7XG4gIG15SG9tZS5zcmMgPSBIb21lO1xuICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQobXlIb21lKTtcbiAgY29uc3QgbXlQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gIG15UHJvamVjdC5zcmMgPSBQcm9qZWN0O1xuXG4gIC8vQXR0YWNoZWQgdG8gdWxcbiAgaW1wb3J0YW50LmFwcGVuZENoaWxkKG15SW1wb3J0YW50KTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICBob21lLmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUpO1xuICBob21lLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gIC8vVGFzayB0ZXh0IGNvbnRlbnRcbiAgbmF2SGVhZGVyLmFwcGVuZChcIkhvbWVcIik7XG4gIGFsbFRhc2tzLmFwcGVuZChcIkFsbCBUYXNrc1wiKTtcbiAgdG9kYXkuYXBwZW5kKFwiVG9kYXlcIik7XG4gIHRoaXNXZWVrLmFwcGVuZChcIlRoaXMgV2Vla1wiKTtcbiAgaW1wb3J0YW50LmFwcGVuZChcIkltcG9ydGFudFwiKTtcblxuICAvL1Byb2plY3QgaGVhZGVyXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobXlQcm9qZWN0KTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmQoXCJQcm9qZWN0c1wiKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlMik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGNvbnN0IG15QWRkID0gbmV3IEltYWdlKCk7XG4gIG15QWRkLnNyYyA9IEFkZFByb2plY3Q7XG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQobXlBZGQpO1xuICBhZGRQcm9qZWN0LmFwcGVuZChcIkFkZCBwcm9qZWN0XCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uKCkge1xuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblNlY3Rpb25cIik7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkhlYWRlclwiKTtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJEZWZhdWx0XCI7XG59XG5cbmV4cG9ydCB7IENyZWF0ZU1haW4sIGNyZWF0ZU5hdkNvbnRlbnQsIGNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbiB9O1xuIiwibGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5mdW5jdGlvbiBQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIHRoaXMubmFtZSA9IHByb2plY3ROYW1lO1xuICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICB0aGlzLnNldE5hbWUgPSAobmV3TmFtZSkgPT4gKHRoaXMubmFtZSA9IG5ld05hbWUpO1xufVxuXG5mdW5jdGlvbiBUb2RvVGFzayh0aXRsZSwgZGVzYywgZGF0ZSwgY29tcGxldGVkLCBpbXBvcnRhbnQpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2MgPSBkZXNjO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuXG4gIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB0aGlzLmltcG9ydGFudCA9IGltcG9ydGFudDtcblxuICB0aGlzLnNldERldGFpbHMgPSAobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUpID0+IHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy5kZXNjID0gbmV3RGVzYztcbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICB9O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIFByb2plY3QsIFRvZG9UYXNrIH07IiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vaWNvbnMvbGlzdC5wbmdcIjtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdElucHV0KCkge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBteUlucHV0SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIG15SW5wdXRJY29uLnNyYyA9IExpc3Q7XG4gIGlucHV0RGl2LmFwcGVuZChteUlucHV0SWNvbiwgcHJvamVjdE5hbWVJbnB1dCk7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBhZGRCdXR0b24pO1xuICBpbnB1dExpLmFwcGVuZChpbnB1dERpdiwgYnV0dG9uRGl2KTtcbiAgYWRkUHJvamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dExpLCBhZGRQcm9qZWN0KTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWUtaW5wdXRcIik7XG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNsYXNzXCIpO1xuICBpbnB1dExpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1MaVwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lLlwiKTtcbn1cblxuZXhwb3J0IHsgZ2V0UHJvamVjdElucHV0IH07IiwiY29uc3QgcmVtb3ZlRGVsZXRlQW5kRWRpdFBvcFVwID0gKGUpID0+IHtcbiAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC1kaXZcIikpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKVxuICAgICAgICAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC10YXNrXCIpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXQtdGFza1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LXRhc2tcIilcbiAgICAgICAgLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC10YXNrXCIpKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgeyByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgfTsiLCJjb25zdCB0b2dnbGVOYXZMaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwibWVudUljb25cIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1oaWRkZW5cIik7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5leHBvcnQgeyB0b2dnbGVOYXZMaXN0IH07IiwiZnVuY3Rpb24gdG9nZ2xlUmVhZE9ySW1wb3J0YW5jZShlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT0gXCJ1bmNoZWNrZWQtc3RhclwiKSB7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJjaGVja1wiXG4gICAgKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwidW5kb25lLXRhc2tcIikge1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwiZG9uZVwiXG4gICAgKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImxpbmUtdGhyb3VnaFwiXG4gICAgKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImxpbmUtdGhyb3VnaFwiXG4gICAgKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImxpbmUtdGhyb3VnaFwiXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyB0b2dnbGVSZWFkT3JJbXBvcnRhbmNlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUhlYWRlckNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlTWFpbixcbiAgY3JlYXRlTmF2Q29udGVudCxcbiAgY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uLFxufSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vYWRkLW5ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBlZGl0Q3VyZW50UHJvamVjdCB9IGZyb20gXCIuL2VkaXQtY3VycmVudC1wcm9qZWN0XCI7XG5pbXBvcnQgeyByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW1vdmUtcHJvamVjdC1wb3B1cFwiO1xuaW1wb3J0IHsgYWRkQW5kQ2FuY2VsVGFzayB9IGZyb20gXCIuL2FkZC1vci1jYW5jZWwtdGFzay1ldmVudFwiO1xuaW1wb3J0IHsgdG9nZ2xlUmVhZE9ySW1wb3J0YW5jZSB9IGZyb20gXCIuL3RvZ2dsZS1zdGF0ZXNcIjtcbmltcG9ydCB7IHRvZ2dsZU5hdkxpc3QgfSBmcm9tIFwiLi90b2dnbGUtbmF2LWxpc3RcIjtcbmltcG9ydCB7IGVkaXRDdXJlbnRUYXNrIH0gZnJvbSBcIi4vZWRpdC1jdXJyZW50LXRhc2tcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVIZWFkZXJDb250ZW50KCk7XG5DcmVhdGVNYWluKCk7XG5jcmVhdGVOYXZDb250ZW50KCk7XG5jcmVhdGVmb290ZXIoKTtcbmNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbigpO1xudG9nZ2xlTmF2TGlzdDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZWRpdEN1cmVudFByb2plY3QpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXApO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEFuZENhbmNlbFRhc2spO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVJlYWRPckltcG9ydGFuY2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhZGROZXdQcm9qZWN0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVkaXRDdXJlbnRUYXNrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=