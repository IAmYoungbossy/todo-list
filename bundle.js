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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  --header-height: min-content;\n  --footer-height: min-content;\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: #cc98ff;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n\nmain {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\nimg {\n  width: 50px;\n  height: 50px;\n}\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n}\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 0 0 10px;\n  background-color: #a0e0bb;\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid black;\n}\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  background-color: white;\n  cursor: default;\n}\n.input-Li:hover {\n  background-color: white;\n  box-shadow: none;\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  right: 0;\n}\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  top: -240%;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\nh2 {\n  color: var(--nav-header);\n}\n\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n}\n.mainHeader {\n  padding: 30px 30px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\nfooter {\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n}\n.project-list {\n  position: relative;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n}\n.add-task-section {\n  width: 100%;\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  cursor: default;\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: white;\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  gap: 10px;\n  line-height: 1;\n  border: 1px solid;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.task-div > img:first-child {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n}\n.task-div > img:last-child {\n  width: 25px;\n  height: 25px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: black;\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: #392929;\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.star-div > img:first-child {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n}\n.star-div > img:last-child {\n  height: 20px;\n  width: 20px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  width: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star, .done-task {\n  visibility: hidden;\n}\n.check {\n  visibility: visible;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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B,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;AACA;;EAEE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,0CAA0C;EAC1C,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  --header-height: min-content;\n  --footer-height: min-content;\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: #cc98ff;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n\nmain {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\nimg {\n  width: 50px;\n  height: 50px;\n}\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n}\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 0 0 10px;\n  background-color: #a0e0bb;\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid black;\n}\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  background-color: white;\n  cursor: default;\n}\n.input-Li:hover {\n  background-color: white;\n  box-shadow: none;\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  right: 0;\n}\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  top: -240%;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px 0px black;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\nh2 {\n  color: var(--nav-header);\n}\n\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n}\n.mainHeader {\n  padding: 30px 30px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\nfooter {\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n}\n.project-list {\n  position: relative;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n}\n.add-task-section {\n  width: 100%;\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  cursor: default;\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: white;\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  gap: 10px;\n  line-height: 1;\n  border: 1px solid;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.task-div > img:first-child {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n}\n.task-div > img:last-child {\n  width: 25px;\n  height: 25px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: black;\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: #392929;\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.star-div > img:first-child {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n}\n.star-div > img:last-child {\n  height: 20px;\n  width: 20px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  width: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star, .done-task {\n  visibility: hidden;\n}\n.check {\n  visibility: visible;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _icons_menuIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/menuIcon.png */ "./src/icons/menuIcon.png");
/* harmony import */ var _icons_to_do_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/to-do.png */ "./src/icons/to-do.png");
/* harmony import */ var _icons_theme_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/theme.png */ "./src/icons/theme.png");
/* harmony import */ var _icons_planning_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/planning.png */ "./src/icons/planning.png");
/* harmony import */ var _icons_calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/calendar.png */ "./src/icons/calendar.png");
/* harmony import */ var _icons_next_week_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/next-week.png */ "./src/icons/next-week.png");
/* harmony import */ var _icons_checklist_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/checklist.png */ "./src/icons/checklist.png");
/* harmony import */ var _icons_home_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/home.png */ "./src/icons/home.png");
/* harmony import */ var _icons_project_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/project.png */ "./src/icons/project.png");
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");
/* harmony import */ var _icons_list_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/list.png */ "./src/icons/list.png");
/* harmony import */ var _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/projectMenu.png */ "./src/icons/projectMenu.png");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _icons_addTask_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/addTask.png */ "./src/icons/addTask.png");
/* harmony import */ var _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/uncheckedStar.png */ "./src/icons/uncheckedStar.png");
/* harmony import */ var _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/undoneTask.png */ "./src/icons/undoneTask.png");
/* harmony import */ var _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/checkedStar.png */ "./src/icons/checkedStar.png");
/* harmony import */ var _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/doneTask.png */ "./src/icons/doneTask.png");




















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
createHeader();

function createHeaderContent() {
  const menuIcon = document.querySelector(".menuIcon");
  const toDoLogo = document.querySelector(".toDoLogo");
  const themeToggler = document.querySelector(".themeToggler");
  const myMenuIcon = new Image();
  myMenuIcon.src = _icons_menuIcon_png__WEBPACK_IMPORTED_MODULE_1__;
  menuIcon.appendChild(myMenuIcon);
  const myToDoLogo = new Image();
  myToDoLogo.src = _icons_to_do_png__WEBPACK_IMPORTED_MODULE_2__;
  toDoLogo.appendChild(myToDoLogo);
  const myThemeToggler = new Image();
  myThemeToggler.src = _icons_theme_png__WEBPACK_IMPORTED_MODULE_3__;
  themeToggler.appendChild(myThemeToggler);
}
createHeaderContent();

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
CreateMain();

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
  myAllTasks.src = _icons_planning_png__WEBPACK_IMPORTED_MODULE_4__;
  allTasks.appendChild(myAllTasks);
  const myToday = new Image();
  myToday.src = _icons_calendar_png__WEBPACK_IMPORTED_MODULE_5__;
  today.appendChild(myToday);
  const myThisWeek = new Image();
  myThisWeek.src = _icons_next_week_png__WEBPACK_IMPORTED_MODULE_6__;
  thisWeek.appendChild(myThisWeek);
  const myImportant = new Image();
  myImportant.src = _icons_checklist_png__WEBPACK_IMPORTED_MODULE_7__;
  const myHome = new Image();
  myHome.src = _icons_home_png__WEBPACK_IMPORTED_MODULE_8__;
  navHeader.appendChild(myHome);
  const myProject = new Image();
  myProject.src = _icons_project_png__WEBPACK_IMPORTED_MODULE_9__;

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
  myAdd.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_10__;
  addProject.appendChild(myAdd);
  addProject.append("Add project");
  project.appendChild(projectList);
}
createNavContent();

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
createfooter();

function createMainSectionContent() {
  const mainSection = document.querySelector(".mainSection");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("mainHeader");
  const sectionHeader = document.createElement("h1");
  headerContainer.appendChild(sectionHeader);
  mainSection.appendChild(headerContainer);
  sectionHeader.textContent = "Default";
}
createMainSectionContent();

function getProjectInput() {
  const addProject = document.querySelector(".add-project");
  const inputDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const inputLi = document.createElement("li");
  const projectNameInput = document.createElement("input");
  const cancelButton = document.createElement("button");
  const addButton = document.createElement("button");
  const myInputIcon = new Image();

  myInputIcon.src = _icons_list_png__WEBPACK_IMPORTED_MODULE_11__;
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

function listenForNewProjectEvents() {
  const addProject = document.querySelector(".add-project");
  addProject.addEventListener("click", createProjectInputForm);

  function createProjectInputForm() {
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }
    getProjectInput();
    const inputForm = document.querySelector(".input-Li");
    const cancelButton = document.querySelector(".cancel");
    const addButton = document.querySelector(".add");
    cancelButton.addEventListener("click", removeInputForm);
    addButton.addEventListener("click", AddProjectNameToList);
    function removeInputForm() {
      projectList.removeChild(inputForm);
    }
    function AddProjectNameToList() {
      const inputField = document.querySelector(".name-input");
      if (inputField.value === "") return;
      const project = document.createElement("li");
      const myProjectMenu = new Image();
      myProjectMenu.src = _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_12__;
      const myProjectDots = new Image();
      myProjectDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_13__;
      project.setAttribute("class", "projects");
      project.append(myProjectMenu, inputField.value);
      project.appendChild(myProjectDots);
      addProject.parentNode.insertBefore(project, inputForm);
      projectList.removeChild(inputForm);

      function popUpDeleteAndEdit() {
        if (project.childNodes.length > 3) return;
        const deleteOrEditDiv = document.createElement("div");
        deleteOrEditDiv.classList.add("delete-edit-div");
        const editProject = document.createElement("p");
        editProject.classList.add("edit");
        editProject.textContent = "Edit";
        const deleteProject = document.createElement("p");
        deleteProject.textContent = "Delete";
        deleteOrEditDiv.append(editProject, deleteProject);
        project.appendChild(deleteOrEditDiv);

        function deleteProjectFromList() {
          project.parentNode.removeChild(project);
        }
        deleteProject.addEventListener("mousedown", deleteProjectFromList);
      }
      myProjectDots.addEventListener("click", popUpDeleteAndEdit);
    }
  }
}
listenForNewProjectEvents();

const removeDeleteAndEditPopUp = (e) => {
  if (!!document.querySelector(".delete-edit-div")) {
    if (e.target.className == "edit") {
      return;
    } else {
      document
        .querySelector(".delete-edit-div")
        .parentNode.removeChild(document.querySelector(".delete-edit-div"));
    }
  }
};

function editCurentProject() {
  const editButton = document.querySelector(".edit");
  if (!!editButton) {
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }
    const parentCurentProject = editButton.parentNode.parentNode;
    parentCurentProject.classList.add("hidden");
    const children = parentCurentProject.childNodes;
    const childrenArray = Array.from(children);
    let previousProjectName = childrenArray[1].data;
    if (previousProjectName === undefined) {
      const childArray = Array.from(childrenArray[1].childNodes);
      previousProjectName = childArray[0].data;
    }
    getProjectInput();
    const previousProject =
      document.querySelector(".hidden").nextElementSibling;
    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    const nameInput = document.querySelector(".name-input");
    nameInput.value = previousProjectName;
    const inputForm = document.querySelector(".input-Li");
    projectList.insertBefore(inputForm, previousProject);

    function updateNewProjectName() {
      const newProjectName = document.createElement("p");
      newProjectName.textContent = nameInput.value;
      parentCurentProject.replaceChild(
        newProjectName,
        parentCurentProject.childNodes[1]
      );
      removeInputForm();
      parentCurentProject.classList.remove("hidden");
    }
    function removeInputForm() {
      inputForm.parentNode.removeChild(inputForm);
      parentCurentProject.classList.remove("hidden");
    }
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  }
}
window.addEventListener("mouseup", editCurentProject);
document.addEventListener("mousedown", removeDeleteAndEditPopUp);

function createTasksSectionAndAddTask() {
  const mainSection = document.querySelector(".mainSection");
  const addTaskSection = document.createElement("div");
  const taskList = document.createElement("ul");
  const addTaskButton = document.createElement("li");
  const myAddTask = new Image();

  myAddTask.src = _icons_addTask_png__WEBPACK_IMPORTED_MODULE_14__;
  addTaskButton.append(myAddTask, "Add Task");
  taskList.appendChild(addTaskButton);
  addTaskSection.appendChild(taskList);
  mainSection.appendChild(addTaskSection);

  addTaskSection.classList.add("add-task-section");
  taskList.classList.add("task-list");
  addTaskButton.classList.add("add-task-button");
}
createTasksSectionAndAddTask();

function createTaskInputForm() {
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

  titleInput.classList.add("title-input");
  textAreaDescription.classList.add("text-area");
  dateInput.classList.add("date-input");
  taskInputForm.classList.add("task-input-form");
  buttonDiv.classList.add("btn-class");
  cancelButton.classList.add("cancel-task");
  addButton.classList.add("add-task");
}

function addAndCancelTask(e) {
  if (e.target.className == "add-task-button") {
    const taskList = document.querySelector(".task-list");
    for (let i = 0; i < taskList.childNodes.length; i++) {
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
    }
    createTaskInputForm();
  }
  if (e.target.className == "cancel-task") {
    const inputTaskForm = document.querySelector(".task-input-form");
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
  if (e.target.className == "add-task") {
    const dateInput = document.querySelector(".date-input");
    console.log(dateInput.value);
  }
}
document.addEventListener("click", addAndCancelTask);

function createTask() {
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
  const myTaskDots = new Image();
  const myUncheckedStar = new Image();
  const myUndoneTask = new Image();
  const myCheckedStar = new Image();
  const myDoneTask = new Image();

  taskTitle.textContent = "Muisc Rehersal";
  taskDesc.textContent =
    "I'll be learning how to play piano and drum when I am less busy with programming.";
  dateInput.textContent = "2022/07/30";

  myTaskDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_13__;
  myUncheckedStar.src = _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_15__;
  myUndoneTask.src = _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_16__;
  myCheckedStar.src = _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_17__;
  myDoneTask.src = _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_18__;

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

  titleAndDescDiv.append(taskTitle, taskDesc);
  dateSpan.appendChild(dateInput);
  starDiv.append(myUncheckedStar, myCheckedStar);
  taskDiv.append(myUndoneTask, myDoneTask);
  newTask.append(taskDiv, titleAndDescDiv, dateSpan, starDiv, myTaskDots);
  taskList.insertBefore(newTask, addTaskButton);
}
createTask();

function toggleStar(e) {
  if (e.target.className == "unchecked-star") {
    document.querySelector(".checked-star").classList.toggle("check");
  }
  if (e.target.className == "undone-task") {
    document.querySelector(".done-task").classList.toggle("check");
    document.querySelector(".task-desc").classList.toggle("line-through");
    document.querySelector(".date-input").classList.toggle("line-through");
    document.querySelector(".task-title").classList.toggle("line-through");
  }
}
document.addEventListener("click", toggleStar);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFFBQVEsaUNBQWlDLGlDQUFpQyxnQ0FBZ0MsNEJBQTRCLDBCQUEwQix1Q0FBdUMsMEJBQTBCLDhCQUE4QiwrQkFBK0IscUNBQXFDLGlDQUFpQyxvQkFBb0IsMkJBQTJCLGtCQUFrQix1QkFBdUIsb0NBQW9DLEdBQUcsVUFBVSxrQkFBa0IsbUNBQW1DLHdCQUF3Qix1QkFBdUIsaUNBQWlDLGlEQUFpRCw4Q0FBOEMsR0FBRyxVQUFVLFlBQVksa0JBQWtCLG1DQUFtQyxHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxNQUFNLHFCQUFxQixHQUFHLE1BQU0sMEJBQTBCLGtCQUFrQix3QkFBd0Isc0JBQXNCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLHdCQUF3QixvQkFBb0IsR0FBRyxZQUFZLGtDQUFrQyxnQ0FBZ0MsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsTUFBTSxxQkFBcUIsOEJBQThCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxhQUFhLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLEdBQUcsbUJBQW1CLDRCQUE0QixxQkFBcUIsR0FBRywwQkFBMEIsc0JBQXNCLGlCQUFpQiwwQkFBMEIsd0JBQXdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsaUJBQWlCLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcsdUNBQXVDLDBDQUEwQyx1QkFBdUIsZUFBZSxHQUFHLHNDQUFzQyx1QkFBdUIsZUFBZSxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsR0FBRyxrQ0FBa0Msa0JBQWtCLDZCQUE2QixpQkFBaUIsR0FBRyxrRUFBa0UsaUJBQWlCLGdCQUFnQixzQkFBc0IsR0FBRywwQkFBMEIsaUJBQWlCLGdCQUFnQixjQUFjLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLHdCQUF3QixHQUFHLGdDQUFnQyx1QkFBdUIsYUFBYSxHQUFHLG9CQUFvQiw4Q0FBOEMsdUJBQXVCLGFBQWEsZUFBZSxrQkFBa0IsMkJBQTJCLGlCQUFpQix3QkFBd0Isc0NBQXNDLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLDBDQUEwQywwQkFBMEIsK0NBQStDLGlDQUFpQyxrQ0FBa0MsR0FBRyx5Q0FBeUMsZUFBZSwrQ0FBK0Msb0NBQW9DLHFDQUFxQyxHQUFHLGVBQWUsWUFBWSxHQUFHLE1BQU0sNkJBQTZCLEdBQUcsa0JBQWtCLHVCQUF1Qix3Q0FBd0MsR0FBRyxlQUFlLHVCQUF1QiwwQ0FBMEMsdUJBQXVCLGtDQUFrQyxHQUFHLE1BQU0sb0JBQW9CLCtCQUErQixHQUFHLFlBQVksaUNBQWlDLHFCQUFxQix1QkFBdUIsa0JBQWtCLHFEQUFxRCxHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QixrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQixnQkFBZ0IsR0FBRyxvQkFBb0IsOEJBQThCLGlCQUFpQixHQUFHLDBCQUEwQix3QkFBd0IsOENBQThDLHFCQUFxQixHQUFHLG9CQUFvQix1QkFBdUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLEdBQUcsMEJBQTBCLHFCQUFxQiw0QkFBNEIsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQixnQkFBZ0Isd0JBQXdCLHFCQUFxQixHQUFHLHFDQUFxQyx3QkFBd0IsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLGlCQUFpQix3QkFBd0Isa0JBQWtCLDJCQUEyQixzQkFBc0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHdCQUF3QixrQkFBa0IsMkJBQTJCLHNCQUFzQixHQUFHLHVCQUF1QixzQkFBc0IsaUJBQWlCLDBCQUEwQix3QkFBd0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcseURBQXlELDZCQUE2QixHQUFHLGNBQWMsa0JBQWtCLG9CQUFvQixHQUFHLG9DQUFvQywwQ0FBMEMsR0FBRyxTQUFTLHFCQUFxQixHQUFHLGVBQWUsK0NBQStDLHFCQUFxQixrQkFBa0IsbUNBQW1DLHVCQUF1QixzQkFBc0Isd0JBQXdCLGNBQWMsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQiwrQ0FBK0MscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixhQUFhLGNBQWMsR0FBRywrQkFBK0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyw4QkFBOEIsZ0JBQWdCLGlCQUFpQixHQUFHLDRCQUE0QixzQkFBc0IsaUJBQWlCLEdBQUcsMkJBQTJCLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsR0FBRywrQkFBK0IsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyw4QkFBOEIsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHVCQUF1QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLFVBQVUsd0JBQXdCLEdBQUcsaUJBQWlCLGtDQUFrQyxnQkFBZ0IsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFXO0FBQzlCLHdCQUF3QixzREFBYTtBQUNyQyxxQkFBcUIsbURBQVU7QUFDL0Isc0JBQXNCLG9EQUFXO0FBQ2pDLG1CQUFtQixpREFBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIC0taGVhZGVyLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xcbiAgLS1ib3JkZXItY29sb3I6ICMyYWJkNjc7XFxuICAtLW1haW4tY29sb3I6ICNlY2VjZWM7XFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAjYzJkOGI3O1xcbiAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xcbiAgLS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC0taG9yaXpvbnRhbC1ydWxlOiAjY2M5OGZmO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbmltZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxubWFpbiA+IG5hdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubmF2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbnVsIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwZTBiYjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmxpOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZTljN2RjO1xcbn1cXG5saSA+IGltZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuaHIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XFxufVxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmlucHV0LUxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uaW5wdXQtTGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaG9tZSA+IGgyOmZpcnN0LWNoaWxkID4gaW1nLFxcbi5wcm9qZWN0ID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdHMgPiBpbWc6bGFzdC1vZi10eXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IC0yNDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMHB4IGJsYWNrO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcCB7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYig3OCwgMCwgNzgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYW1lLWlucHV0IHtcXG4gIGZsZXg6IDE7XFxufVxcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtaGVhZGVyKTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG4ubWFpbkhlYWRlciB7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmFkZC10YXNrLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi50YXNrLWlucHV0LWZvcm06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbn1cXG4uYnRuLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4wNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcbi5uZXctdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxODksIDEwMywgMC4wMik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnRhc2stZGl2ID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4udGFzay1kaXYgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIGNvbG9yOiAjMzkyOTI5O1xcbn1cXG4uc3Rhci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjVweDtcXG59XFxuLnN0YXItZGl2ID4gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4uc3Rhci1kaXYgPiBpbWc6bGFzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLmRhdGUtc3BhbiA+IHAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycHggNnB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnVuY2hlY2sge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uY2hlY2tlZC1zdGFyLCAuZG9uZS10YXNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsNEJBQTRCOztFQUU1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDRDQUE0QztFQUM1Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7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LGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgLS1mb290ZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMmFiZDY3O1xcbiAgLS1tYWluLWNvbG9yOiAjZWNlY2VjO1xcbiAgLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogI2MyZDhiNztcXG4gIC0taGVhZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAtLWhvcml6b250YWwtcnVsZTogI2NjOThmZjtcXG4gIC0tbWFpbi1oZWFkZXItYmdDb2xvcjogIzMwOGM1NmQ2O1xcbiAgLS1uYXYtaGVhZGVyOiByZ2IoMSwgMTM0LCAxKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxufVxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbm1haW4gPiBuYXYge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLm5hdiB7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG51bCB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGUwYmI7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5saTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxubGkgPiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbmhyIHtcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ucHJvamVjdCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5pbnB1dC1MaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmlucHV0LUxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmhvbWUgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyxcXG4ucHJvamVjdCA+IGgyOmZpcnN0LWNoaWxkID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RzID4gaW1nOmxhc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAtMjQwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCBibGFjaztcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHAge1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4ubmFtZS1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmF2LWhlYWRlcik7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuLm1haW5IZWFkZXIge1xcbiAgcGFkZGluZzogMzBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLnByb2plY3QtbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5hZGQtdGFzay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuLmJ0bi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMDUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG4ubmV3LXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMTg5LCAxMDMsIDAuMDIpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2stZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiA1cHg7XFxufVxcbi50YXNrLWRpdiA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnRhc2stZGl2ID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi50aXRsZS1hbmQtZGVzYy1kaXYgPiBoMiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBjb2xvcjogIzM5MjkyOTtcXG59XFxuLnN0YXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDI1cHg7XFxufVxcbi5zdGFyLWRpdiA+IGltZzpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnN0YXItZGl2ID4gaW1nOmxhc3QtY2hpbGQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5kYXRlLXNwYW4gPiBwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnB4IDZweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi51bmNoZWNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrZWQtc3RhciwgLmRvbmUtdGFzayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVjayB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9pY29ucy9tZW51SWNvbi5wbmdcIjtcbmltcG9ydCBUb0RvTG9nbyBmcm9tIFwiLi9pY29ucy90by1kby5wbmdcIjtcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi9pY29ucy90aGVtZS5wbmdcIjtcbmltcG9ydCBBbGxUYXNrcyBmcm9tIFwiLi9pY29ucy9wbGFubmluZy5wbmdcIjtcbmltcG9ydCBUb2RheSBmcm9tIFwiLi9pY29ucy9jYWxlbmRhci5wbmdcIjtcbmltcG9ydCBUaGlzV2VlayBmcm9tIFwiLi9pY29ucy9uZXh0LXdlZWsucG5nXCI7XG5pbXBvcnQgSW1wb3J0YW50IGZyb20gXCIuL2ljb25zL2NoZWNrbGlzdC5wbmdcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2ljb25zL2hvbWUucG5nXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9pY29ucy9wcm9qZWN0LnBuZ1wiO1xuaW1wb3J0IEFkZFByb2plY3QgZnJvbSBcIi4vaWNvbnMvYWRkLnBuZ1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vaWNvbnMvbGlzdC5wbmdcIjtcbmltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9pY29ucy9wcm9qZWN0TWVudS5wbmdcIjtcbmltcG9ydCBQcm9qZWN0RG90cyBmcm9tIFwiLi9pY29ucy9kb3RzLnBuZ1wiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4vaWNvbnMvYWRkVGFzay5wbmdcIjtcbmltcG9ydCBVbmNoZWNrZWRTdGFyIGZyb20gXCIuL2ljb25zL3VuY2hlY2tlZFN0YXIucG5nXCI7XG5pbXBvcnQgVW5kb25lVGFzayBmcm9tIFwiLi9pY29ucy91bmRvbmVUYXNrLnBuZ1wiO1xuaW1wb3J0IENoZWNrZWRTdGFyIGZyb20gXCIuL2ljb25zL2NoZWNrZWRTdGFyLnBuZ1wiO1xuaW1wb3J0IERvbmV0YXNrIGZyb20gXCIuL2ljb25zL2RvbmVUYXNrLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b0RvTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRoZW1lVG9nZ2xlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZW51SWNvblwiKTtcbiAgdG9Eb0xvZ28uY2xhc3NMaXN0LmFkZChcInRvRG9Mb2dvXCIpO1xuICB0aGVtZVRvZ2dsZXIuY2xhc3NMaXN0LmFkZChcInRoZW1lVG9nZ2xlclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRvRG9Mb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbmNyZWF0ZUhlYWRlcigpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDb250ZW50KCkge1xuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUljb25cIik7XG4gIGNvbnN0IHRvRG9Mb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvTG9nb1wiKTtcbiAgY29uc3QgdGhlbWVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVRvZ2dsZXJcIik7XG4gIGNvbnN0IG15TWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlNZW51SWNvbi5zcmMgPSBNZW51O1xuICBtZW51SWNvbi5hcHBlbmRDaGlsZChteU1lbnVJY29uKTtcbiAgY29uc3QgbXlUb0RvTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBteVRvRG9Mb2dvLnNyYyA9IFRvRG9Mb2dvO1xuICB0b0RvTG9nby5hcHBlbmRDaGlsZChteVRvRG9Mb2dvKTtcbiAgY29uc3QgbXlUaGVtZVRvZ2dsZXIgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUaGVtZVRvZ2dsZXIuc3JjID0gVGhlbWU7XG4gIHRoZW1lVG9nZ2xlci5hcHBlbmRDaGlsZChteVRoZW1lVG9nZ2xlcik7XG59XG5jcmVhdGVIZWFkZXJDb250ZW50KCk7XG5cbmZ1bmN0aW9uIENyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgbWFpbkJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluU2VjdGlvblwiKTtcbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Cb2R5Q29udGFpbmVyKTtcbn1cbkNyZWF0ZU1haW4oKTtcblxuZnVuY3Rpb24gY3JlYXRlTmF2Q29udGVudCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIC8vVGFzayBkdXJhdGlvbnMgYW5kIEltcG9ydGFuY2VcbiAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgLy9UYXNrIGljb25zXG4gIGNvbnN0IG15QWxsVGFza3MgPSBuZXcgSW1hZ2UoKTtcbiAgbXlBbGxUYXNrcy5zcmMgPSBBbGxUYXNrcztcbiAgYWxsVGFza3MuYXBwZW5kQ2hpbGQobXlBbGxUYXNrcyk7XG4gIGNvbnN0IG15VG9kYXkgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUb2RheS5zcmMgPSBUb2RheTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQobXlUb2RheSk7XG4gIGNvbnN0IG15VGhpc1dlZWsgPSBuZXcgSW1hZ2UoKTtcbiAgbXlUaGlzV2Vlay5zcmMgPSBUaGlzV2VlaztcbiAgdGhpc1dlZWsuYXBwZW5kQ2hpbGQobXlUaGlzV2Vlayk7XG4gIGNvbnN0IG15SW1wb3J0YW50ID0gbmV3IEltYWdlKCk7XG4gIG15SW1wb3J0YW50LnNyYyA9IEltcG9ydGFudDtcbiAgY29uc3QgbXlIb21lID0gbmV3IEltYWdlKCk7XG4gIG15SG9tZS5zcmMgPSBIb21lO1xuICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQobXlIb21lKTtcbiAgY29uc3QgbXlQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gIG15UHJvamVjdC5zcmMgPSBQcm9qZWN0O1xuXG4gIC8vQXR0YWNoZWQgdG8gdWxcbiAgaW1wb3J0YW50LmFwcGVuZENoaWxkKG15SW1wb3J0YW50KTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICBob21lLmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUpO1xuICBob21lLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gIC8vVGFzayB0ZXh0IGNvbnRlbnRcbiAgbmF2SGVhZGVyLmFwcGVuZChcIkhvbWVcIik7XG4gIGFsbFRhc2tzLmFwcGVuZChcIkFsbCBUYXNrc1wiKTtcbiAgdG9kYXkuYXBwZW5kKFwiVG9kYXlcIik7XG4gIHRoaXNXZWVrLmFwcGVuZChcIlRoaXMgV2Vla1wiKTtcbiAgaW1wb3J0YW50LmFwcGVuZChcIkltcG9ydGFudFwiKTtcblxuICAvL1Byb2plY3QgaGVhZGVyXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobXlQcm9qZWN0KTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmQoXCJQcm9qZWN0c1wiKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlMik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGNvbnN0IG15QWRkID0gbmV3IEltYWdlKCk7XG4gIG15QWRkLnNyYyA9IEFkZFByb2plY3Q7XG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQobXlBZGQpO1xuICBhZGRQcm9qZWN0LmFwcGVuZChcIkFkZCBwcm9qZWN0XCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbn1cbmNyZWF0ZU5hdkNvbnRlbnQoKTtcblxuZnVuY3Rpb24gY3JlYXRlZm9vdGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGFuY2hvckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZ2l0SHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBhbmNob3JMaW5rLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kKFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYW5jaG9yTGluayk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgYW5jaG9yTGluay5zZXRBdHRyaWJ1dGUoXG4gICAgXCJocmVmXCIsXG4gICAgXCJodHRwczovLy8vZ2l0aHViLmNvbS9JQW1Zb3VuZ2Jvc3N5L2NhbGN1bGF0b3JcIlxuICApO1xuICBnaXRIdWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWdpdGh1YlwiKTtcbiAgZ2l0SHViSWNvbi5zdHlsZS5jc3NUZXh0ID0gXCJjb2xvcjpibGFja1wiO1xufVxuY3JlYXRlZm9vdGVyKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5TZWN0aW9uQ29udGVudCgpIHtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5TZWN0aW9uXCIpO1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5IZWFkZXJcIik7XG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xufVxuY3JlYXRlTWFpblNlY3Rpb25Db250ZW50KCk7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbXlJbnB1dEljb24gPSBuZXcgSW1hZ2UoKTtcblxuICBteUlucHV0SWNvbi5zcmMgPSBMaXN0O1xuICBpbnB1dERpdi5hcHBlbmQobXlJbnB1dEljb24sIHByb2plY3ROYW1lSW5wdXQpO1xuICBidXR0b25EaXYuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgYWRkQnV0dG9uKTtcbiAgaW5wdXRMaS5hcHBlbmQoaW5wdXREaXYsIGJ1dHRvbkRpdik7XG4gIGFkZFByb2plY3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXRMaSwgYWRkUHJvamVjdCk7XG5cbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWUtaW5wdXRcIik7XG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNsYXNzXCIpO1xuICBpbnB1dExpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1MaVwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lLlwiKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRm9yTmV3UHJvamVjdEV2ZW50cygpIHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3RJbnB1dEZvcm0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJbnB1dEZvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFswXSA9PSBcImlucHV0LUxpXCIpIHJldHVybjtcbiAgICB9XG4gICAgZ2V0UHJvamVjdElucHV0KCk7XG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1MaVwiKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUlucHV0Rm9ybSk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBBZGRQcm9qZWN0TmFtZVRvTGlzdCk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5wdXRGb3JtKCkge1xuICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoaW5wdXRGb3JtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQWRkUHJvamVjdE5hbWVUb0xpc3QoKSB7XG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpO1xuICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBteVByb2plY3RNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgICBteVByb2plY3RNZW51LnNyYyA9IFByb2plY3RNZW51O1xuICAgICAgY29uc3QgbXlQcm9qZWN0RG90cyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlQcm9qZWN0RG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c1wiKTtcbiAgICAgIHByb2plY3QuYXBwZW5kKG15UHJvamVjdE1lbnUsIGlucHV0RmllbGQudmFsdWUpO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChteVByb2plY3REb3RzKTtcbiAgICAgIGFkZFByb2plY3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocHJvamVjdCwgaW5wdXRGb3JtKTtcbiAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGlucHV0Rm9ybSk7XG5cbiAgICAgIGZ1bmN0aW9uIHBvcFVwRGVsZXRlQW5kRWRpdCgpIHtcbiAgICAgICAgaWYgKHByb2plY3QuY2hpbGROb2Rlcy5sZW5ndGggPiAzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGRlbGV0ZU9yRWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlbGV0ZU9yRWRpdERpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWVkaXQtZGl2XCIpO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICAgICAgZWRpdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgZGVsZXRlT3JFZGl0RGl2LmFwcGVuZChlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlT3JFZGl0RGl2KTtcblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbUxpc3QoKSB7XG4gICAgICAgICAgcHJvamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkZWxldGVQcm9qZWN0RnJvbUxpc3QpO1xuICAgICAgfVxuICAgICAgbXlQcm9qZWN0RG90cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wVXBEZWxldGVBbmRFZGl0KTtcbiAgICB9XG4gIH1cbn1cbmxpc3RlbkZvck5ld1Byb2plY3RFdmVudHMoKTtcblxuY29uc3QgcmVtb3ZlRGVsZXRlQW5kRWRpdFBvcFVwID0gKGUpID0+IHtcbiAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC1kaXZcIikpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKVxuICAgICAgICAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBlZGl0Q3VyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgaWYgKCEhZWRpdEJ1dHRvbikge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJpbnB1dC1MaVwiKSByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEN1cmVudFByb2plY3QgPSBlZGl0QnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBwYXJlbnRDdXJlbnRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnRDdXJlbnRQcm9qZWN0LmNoaWxkTm9kZXM7XG4gICAgY29uc3QgY2hpbGRyZW5BcnJheSA9IEFycmF5LmZyb20oY2hpbGRyZW4pO1xuICAgIGxldCBwcmV2aW91c1Byb2plY3ROYW1lID0gY2hpbGRyZW5BcnJheVsxXS5kYXRhO1xuICAgIGlmIChwcmV2aW91c1Byb2plY3ROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNoaWxkQXJyYXkgPSBBcnJheS5mcm9tKGNoaWxkcmVuQXJyYXlbMV0uY2hpbGROb2Rlcyk7XG4gICAgICBwcmV2aW91c1Byb2plY3ROYW1lID0gY2hpbGRBcnJheVswXS5kYXRhO1xuICAgIH1cbiAgICBnZXRQcm9qZWN0SW5wdXQoKTtcbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3QgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIikubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBwcmV2aW91c1Byb2plY3ROYW1lO1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtTGlcIik7XG4gICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKGlucHV0Rm9ybSwgcHJldmlvdXNQcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5ld1Byb2plY3ROYW1lKCkge1xuICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG5ld1Byb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZUlucHV0LnZhbHVlO1xuICAgICAgcGFyZW50Q3VyZW50UHJvamVjdC5yZXBsYWNlQ2hpbGQoXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLFxuICAgICAgICBwYXJlbnRDdXJlbnRQcm9qZWN0LmNoaWxkTm9kZXNbMV1cbiAgICAgICk7XG4gICAgICByZW1vdmVJbnB1dEZvcm0oKTtcbiAgICAgIHBhcmVudEN1cmVudFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5wdXRGb3JtKCkge1xuICAgICAgaW5wdXRGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW5wdXRGb3JtKTtcbiAgICAgIHBhcmVudEN1cmVudFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcmVtb3ZlSW5wdXRGb3JtKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB1cGRhdGVOZXdQcm9qZWN0TmFtZSk7XG4gIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlZGl0Q3VyZW50UHJvamVjdCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlbW92ZURlbGV0ZUFuZEVkaXRQb3BVcCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzU2VjdGlvbkFuZEFkZFRhc2soKSB7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluU2VjdGlvblwiKTtcbiAgY29uc3QgYWRkVGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbXlBZGRUYXNrID0gbmV3IEltYWdlKCk7XG5cbiAgbXlBZGRUYXNrLnNyYyA9IEFkZFRhc2s7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kKG15QWRkVGFzaywgXCJBZGQgVGFza1wiKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFza1NlY3Rpb24pO1xuXG4gIGFkZFRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1zZWN0aW9uXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG59XG5jcmVhdGVUYXNrc1NlY3Rpb25BbmRBZGRUYXNrKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJbnB1dEZvcm0oKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcbiAgY29uc3QgdGFza0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRleHRhcmVhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGV4dEFyZWFEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0ZXh0QXJlYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHRpdGxlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIHRleHRBcmVhRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGV0YWlscyAoT3B0aW9uYWwpOlwiO1xuICBkYXRlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlSW5wdXRMYWJlbCwgdGl0bGVJbnB1dCk7XG4gIHRleHRhcmVhRGl2LmFwcGVuZCh0ZXh0QXJlYURlc2NyaXB0aW9uTGFiZWwsIHRleHRBcmVhRGVzY3JpcHRpb24pO1xuICBkYXRlRGl2LmFwcGVuZChkYXRlSW5wdXRMYWJlbCwgZGF0ZUlucHV0KTtcbiAgYnV0dG9uRGl2LmFwcGVuZChjYW5jZWxCdXR0b24sIGFkZEJ1dHRvbik7XG4gIHRhc2tJbnB1dEZvcm0uYXBwZW5kKHRpdGxlRGl2LCB0ZXh0YXJlYURpdiwgZGF0ZURpdiwgYnV0dG9uRGl2KTtcbiAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dEZvcm0sIGFkZFRhc2tCdXR0b24pO1xuXG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0XCIpO1xuICB0ZXh0QXJlYURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWFyZWFcIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dFwiKTtcbiAgdGFza0lucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1mb3JtXCIpO1xuICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImJ0bi1jbGFzc1wiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtdGFza1wiKTtcbiAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFza1wiKTtcbn1cblxuZnVuY3Rpb24gYWRkQW5kQ2FuY2VsVGFzayhlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJhZGQtdGFzay1idXR0b25cIikge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVUYXNrSW5wdXRGb3JtKCk7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImNhbmNlbC10YXNrXCIpIHtcbiAgICBjb25zdCBpbnB1dFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0LWZvcm1cIik7XG4gICAgaW5wdXRUYXNrRm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlucHV0VGFza0Zvcm0pO1xuICB9XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJhZGQtdGFza1wiKSB7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0XCIpO1xuICAgIGNvbnNvbGUubG9nKGRhdGVJbnB1dC52YWx1ZSk7XG4gIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRBbmRDYW5jZWxUYXNrKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aXRsZUFuZERlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG15VGFza0RvdHMgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlVbmNoZWNrZWRTdGFyID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5kb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteUNoZWNrZWRTdGFyID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15RG9uZVRhc2sgPSBuZXcgSW1hZ2UoKTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIk11aXNjIFJlaGVyc2FsXCI7XG4gIHRhc2tEZXNjLnRleHRDb250ZW50ID1cbiAgICBcIkknbGwgYmUgbGVhcm5pbmcgaG93IHRvIHBsYXkgcGlhbm8gYW5kIGRydW0gd2hlbiBJIGFtIGxlc3MgYnVzeSB3aXRoIHByb2dyYW1taW5nLlwiO1xuICBkYXRlSW5wdXQudGV4dENvbnRlbnQgPSBcIjIwMjIvMDcvMzBcIjtcblxuICBteVRhc2tEb3RzLnNyYyA9IFByb2plY3REb3RzO1xuICBteVVuY2hlY2tlZFN0YXIuc3JjID0gVW5jaGVja2VkU3RhcjtcbiAgbXlVbmRvbmVUYXNrLnNyYyA9IFVuZG9uZVRhc2s7XG4gIG15Q2hlY2tlZFN0YXIuc3JjID0gQ2hlY2tlZFN0YXI7XG4gIG15RG9uZVRhc2suc3JjID0gRG9uZXRhc2s7XG5cbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIik7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVBbmREZXNjRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1hbmQtZGVzYy1kaXZcIik7XG4gIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NcIik7XG4gIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkYXRlLXNwYW5cIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dFwiKTtcbiAgc3RhckRpdi5jbGFzc0xpc3QuYWRkKFwic3Rhci1kaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuICBteVVuY2hlY2tlZFN0YXIuY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZC1zdGFyXCIpO1xuICBteUNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXN0YXJcIik7XG4gIG15VW5kb25lVGFzay5jbGFzc0xpc3QuYWRkKFwidW5kb25lLXRhc2tcIik7XG4gIG15RG9uZVRhc2suY2xhc3NMaXN0LmFkZChcImRvbmUtdGFza1wiKTtcblxuICB0aXRsZUFuZERlc2NEaXYuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xuICBkYXRlU3Bhbi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBzdGFyRGl2LmFwcGVuZChteVVuY2hlY2tlZFN0YXIsIG15Q2hlY2tlZFN0YXIpO1xuICB0YXNrRGl2LmFwcGVuZChteVVuZG9uZVRhc2ssIG15RG9uZVRhc2spO1xuICBuZXdUYXNrLmFwcGVuZCh0YXNrRGl2LCB0aXRsZUFuZERlc2NEaXYsIGRhdGVTcGFuLCBzdGFyRGl2LCBteVRhc2tEb3RzKTtcbiAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIGFkZFRhc2tCdXR0b24pO1xufVxuY3JlYXRlVGFzaygpO1xuXG5mdW5jdGlvbiB0b2dnbGVTdGFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInVuY2hlY2tlZC1zdGFyXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrZWQtc3RhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tcIik7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInVuZG9uZS10YXNrXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmUtdGFza1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NcIikuY2xhc3NMaXN0LnRvZ2dsZShcImxpbmUtdGhyb3VnaFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImxpbmUtdGhyb3VnaFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImxpbmUtdGhyb3VnaFwiKTtcbiAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVN0YXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9