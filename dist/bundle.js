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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root.lightT {\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: black;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n  --nav-bg: white;\n  --task-border: black;\n  --title-color: black;\n  --theme-bg: white;\n  --github-icon: black;\n  --anchor-color: navy;\n}\n:root.darkT {\n  --background-color: #22303c;\n  --border-color: #1f8d4d;\n  --main-color: #192734;\n  --footer-background-color: #22303c;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: white;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(255 255 255);\n  --nav-bg: #15202b;\n  --task-border: white;\n  --title-color: white;\n  --theme-bg: #192734;\n  --github-icon: white;\n  --anchor-color: aqua;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\n\n/* HEADER STYLING */\nheader {\n  --header-height: min-content;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 40px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n.themeToggler {\n  position: relative;\n  cursor: pointer;\n}\n.menuIcon {\n  position: relative;\n  cursor: pointer;\n}\n.theme-light {\n  position: absolute;\n}\n.menu-light {\n  position: absolute;\n}\n.light-hidden {\n  visibility: hidden;\n}\n.dark {\n  visibility: hidden;\n}\n.dark-visible {\n  visibility: visible;\n}\n\n/* MAIN BODY STYLING */\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 35px;\n  height: 35px;\n}\n\n/* Nav Styling */\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n  background-color: var(--nav-bg);\n  border-radius: 0;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* List styling */\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n.selected {\n  background: linear-gradient(\n    to right,\n    #41584b99 0%,\n    #5c5c5c 5px,\n    #a0e0bb99 2%,\n    #a0e0bb99 100%\n  );\n  background-color: #afe9c7dc;\n}\n\n/* Horizontal Rule */\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid var(--horizontal-rule);\n}\n\n/* Projects and form styling */\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  cursor: default;\n  background-color: var(--nav-bg);\n}\n.input-Li:hover {\n  box-shadow: none;\n  background-color: var(--nav-bg);\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.project-list {\n  position: relative;\n}\n.add-project {\n  background-color: transparent;\n  color: var(--title-color);\n  font-weight: bold;\n}\n.add-project:hover {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Edit details pop-up styling */\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-div > p {\n  padding: 1px 10px;\n  color: var(--title-color);\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n  color: var(--title-color);\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\n\n/* Main section styling */\nh2 {\n  color: var(--nav-header);\n}\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\n/* Task input form styling */\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-section > p:first-of-type {\n  text-align: center;\n  font-weight: bold;\n  color: var(--title-color);\n}\n.add-task-section > p:nth-child(2) {\n  text-align: center;\n  font-size: 0.85rem;\n  color: var(--title-color);\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n  color: var(--title-color);\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--theme-bg);\n  cursor: default;\n  color: var(--title-color);\n  border: 2px solid var(--title-color);\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: var(--theme-bg);\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  cursor: default;\n  gap: 10px;\n  line-height: 1;\n  border: 2px solid var(--task-border);\n  min-width: min-content;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.undone-task {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.undone-task-dark {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.done-task {\n  width: 27px;\n  height: 27px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: var(--title-color);\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: var(--title-color);\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.unchecked-star {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  color: var(--title-color);\n  cursor: pointer;\n}\n.unchecked-star-dark {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  cursor: pointer;\n}\n.checked-star {\n  height: 21px;\n  width: 21px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n  color: var(--title-color);\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n  z-index: 1;\n  cursor: pointer;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.my-task-dots-dark {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  cursor: pointer;\n}\n.date-and-span {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  z-index: -1;\n}\n\n/* FOOTER STYLING */\nfooter {\n  --footer-height: min-content;\n\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n  color: var(--title-color);\n}\ni {\n  color: var(--github-icon);\n}\na[target]{\n  color: var(--anchor-color);\n  font-weight: bold;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 550px) {\n  main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-color);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root.lightT {\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: black;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n  --nav-bg: white;\n  --task-border: black;\n  --title-color: black;\n  --theme-bg: white;\n  --github-icon: black;\n  --anchor-color: navy;\n}\n:root.darkT {\n  --background-color: #22303c;\n  --border-color: #1f8d4d;\n  --main-color: #192734;\n  --footer-background-color: #22303c;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: white;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(255 255 255);\n  --nav-bg: #15202b;\n  --task-border: white;\n  --title-color: white;\n  --theme-bg: #192734;\n  --github-icon: white;\n  --anchor-color: aqua;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\n\n/* HEADER STYLING */\nheader {\n  --header-height: min-content;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 40px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n.themeToggler {\n  position: relative;\n  cursor: pointer;\n}\n.menuIcon {\n  position: relative;\n  cursor: pointer;\n}\n.theme-light {\n  position: absolute;\n}\n.menu-light {\n  position: absolute;\n}\n.light-hidden {\n  visibility: hidden;\n}\n.dark {\n  visibility: hidden;\n}\n.dark-visible {\n  visibility: visible;\n}\n\n/* MAIN BODY STYLING */\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 35px;\n  height: 35px;\n}\n\n/* Nav Styling */\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n  background-color: var(--nav-bg);\n  border-radius: 0;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* List styling */\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n.selected {\n  background: linear-gradient(\n    to right,\n    #41584b99 0%,\n    #5c5c5c 5px,\n    #a0e0bb99 2%,\n    #a0e0bb99 100%\n  );\n  background-color: #afe9c7dc;\n}\n\n/* Horizontal Rule */\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid var(--horizontal-rule);\n}\n\n/* Projects and form styling */\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  cursor: default;\n  background-color: var(--nav-bg);\n}\n.input-Li:hover {\n  box-shadow: none;\n  background-color: var(--nav-bg);\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.project-list {\n  position: relative;\n}\n.add-project {\n  background-color: transparent;\n  color: var(--title-color);\n  font-weight: bold;\n}\n.add-project:hover {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Edit details pop-up styling */\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-div > p {\n  padding: 1px 10px;\n  color: var(--title-color);\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n  color: var(--title-color);\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\n\n/* Main section styling */\nh2 {\n  color: var(--nav-header);\n}\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\n/* Task input form styling */\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-section > p:first-of-type {\n  text-align: center;\n  font-weight: bold;\n  color: var(--title-color);\n}\n.add-task-section > p:nth-child(2) {\n  text-align: center;\n  font-size: 0.85rem;\n  color: var(--title-color);\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n  color: var(--title-color);\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--theme-bg);\n  cursor: default;\n  color: var(--title-color);\n  border: 2px solid var(--title-color);\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: var(--theme-bg);\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  cursor: default;\n  gap: 10px;\n  line-height: 1;\n  border: 2px solid var(--task-border);\n  min-width: min-content;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.undone-task {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.undone-task-dark {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.done-task {\n  width: 27px;\n  height: 27px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: var(--title-color);\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: var(--title-color);\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.unchecked-star {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  color: var(--title-color);\n  cursor: pointer;\n}\n.unchecked-star-dark {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  cursor: pointer;\n}\n.checked-star {\n  height: 21px;\n  width: 21px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n  color: var(--title-color);\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n  z-index: 1;\n  cursor: pointer;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.my-task-dots-dark {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  cursor: pointer;\n}\n.date-and-span {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  z-index: -1;\n}\n\n/* FOOTER STYLING */\nfooter {\n  --footer-height: min-content;\n\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n  color: var(--title-color);\n}\ni {\n  color: var(--github-icon);\n}\na[target]{\n  color: var(--anchor-color);\n  font-weight: bold;\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 550px) {\n  main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-color);\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getSelectedProjectIndex": () => (/* binding */ getSelectedProjectIndex),
/* harmony export */   "projectArrayIndex": () => (/* binding */ projectArrayIndex),
/* harmony export */   "removeProjectLists": () => (/* binding */ removeProjectLists),
/* harmony export */   "removeTasks": () => (/* binding */ removeTasks),
/* harmony export */   "setSelectedClass": () => (/* binding */ setSelectedClass),
/* harmony export */   "styleSelectedList": () => (/* binding */ styleSelectedList)
/* harmony export */ });
/* harmony import */ var _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/projectMenu.png */ "./src/icons/projectMenu.png");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ "./src/project-input.js");
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _add_todo_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-todo-button */ "./src/add-todo-button.js");
/* harmony import */ var _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-or-cancel-task-event */ "./src/add-or-cancel-task-event.js");
/* harmony import */ var _toggle_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-theme */ "./src/toggle-theme.js");









let projectArrayIndex;
let selectedProjectIndex;

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
  getSelectedProjectIndex();
  pushNewProjectInstance();
  removeProjectLists();
  createProject();
  setSelectedClass();
}

function getSelectedProjectIndex() {
  selectedProjectIndex = undefined;
  const getProjectNode = document.querySelector(".project-list").childNodes;
  const getProjectArr = Array.from(getProjectNode);
  for (let i = 0; i < getProjectArr.length; i++)
    if (getProjectArr[i].classList[1] === "selected")
      selectedProjectIndex = getProjectArr.indexOf(getProjectArr[i]);
}

function pushNewProjectInstance() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_4__.projectArray.push(new _project_constructor__WEBPACK_IMPORTED_MODULE_4__.Project(document.querySelector(".name-input").value));
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_4__.setProjectArray)();
}

function removeProjectLists() {
  const projectList = document.querySelector(".project-list");
  while (projectList.childNodes.length > 1)
    projectList.removeChild(projectList.firstChild);
}

function createProject() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_4__.projectArray.forEach((project) => AddProjectNameToList(project));
}

// Re-apply selected class to same element
function setSelectedClass() {
  const setProjectNode = document.querySelector(".project-list").childNodes;
  const setProjectArr = Array.from(setProjectNode);
  for (let i = 0; i < setProjectArr.length; i++)
    if (setProjectArr.indexOf(setProjectArr[i]) === selectedProjectIndex)
      setProjectArr[i].classList.add("selected");
}

function AddProjectNameToList(proj) {
  const addProject = document.querySelector(".add-project");
  const myProjectDotsDiv = document.createElement("div");
  const project = document.createElement("li");
  const projectName = document.createElement("p");
  const myProjectMenu = new Image();
  const myProjectDots = new Image();

  myProjectMenu.src = _icons_projectMenu_png__WEBPACK_IMPORTED_MODULE_0__;
  myProjectDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__;
  projectName.textContent = proj.name;
  project.setAttribute("class", "projects");
  projectName.setAttribute("class", "title");
  project.append(myProjectMenu, projectName);
  myProjectDotsDiv.appendChild(myProjectDots);
  project.appendChild(myProjectDotsDiv);
  addProject.parentNode.insertBefore(project, addProject);

  myProjectDots.addEventListener(
    "click",
    _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_3__.popUpDeleteAndEdit.bind(myProjectDots, proj)
  );
  project.addEventListener("click", setProjectForUse.bind(project, proj));
}

function setProjectForUse(proj, e) {
  getTaskArray(proj);
  if (e.target.className === "projects" || e.target.className === "title") {
    removeTasks();
    (0,_add_todo_button__WEBPACK_IMPORTED_MODULE_5__.todoAddButton)();
    (0,_add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_6__.displayTasks)(e);
    setHeaderToProjectName(proj);
    (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_7__.toggleIcon)();
    styleSelectedList.call(this);
  }
}

function styleSelectedList() {
  document.querySelectorAll("li").forEach((list) => {
    if (list.classList[1] === "selected" || list.classList[0] === "selected")
      list.classList.remove("selected");
  });
  this.classList.add("selected");
}

function setHeaderToProjectName(proj) {
  document.querySelector(".mainHeader").firstChild.textContent = proj.name;
}

function getTaskArray(proj) {
  projectArrayIndex = _project_constructor__WEBPACK_IMPORTED_MODULE_4__.projectArray.indexOf(proj);
}

function removeTasks() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection)
    while (addTaskSection.firstChild)
      addTaskSection.removeChild(addTaskSection.lastChild);
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
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "removeTaskFromList": () => (/* binding */ removeTaskFromList)
/* harmony export */ });
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _display_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-todo-list */ "./src/display-todo-list.js");
/* harmony import */ var _new_task_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-task-input */ "./src/new-task-input.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _toggle_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-theme */ "./src/toggle-theme.js");






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
    (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_4__.toggleIcon)();
  }
}

function pushToTaskArray() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_3__.projectArray[_add_new_project__WEBPACK_IMPORTED_MODULE_0__.projectArrayIndex].taskArray.push(
    new _project_constructor__WEBPACK_IMPORTED_MODULE_3__.TodoTask(
      document.querySelector(".title-input-form").value,
      document.querySelector(".text-area-form").value,
      document.querySelector(".date-input-form").value
    )
  );
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_3__.setProjectArray)();
}

function removeTaskFromList() {
  const taskList = document.querySelector(".task-list");
  if (!!taskList) {
    while (taskList.childNodes.length > 1)
      taskList.removeChild(taskList.firstChild);
  }
}

function displayTasks() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_3__.projectArray[_add_new_project__WEBPACK_IMPORTED_MODULE_0__.projectArrayIndex].taskArray.forEach((task) => {
    Object.setPrototypeOf(task, _project_constructor__WEBPACK_IMPORTED_MODULE_3__.TodoTask.prototype);
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_3__.setProjectArray)();
    (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(task.title, task.desc, task.date, task);
  });
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
  const addTaskSection = document.querySelector(".add-task-section");
  const taskList = document.createElement("ul");
  const addTaskButton = document.createElement("li");
  const myAddTask = new Image();

  myAddTask.src = _icons_addTask_png__WEBPACK_IMPORTED_MODULE_0__;
  addTaskButton.append(myAddTask, "Add Task");
  taskList.appendChild(addTaskButton);
  addTaskSection.appendChild(taskList);

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
/* harmony export */   "getProjectIndex": () => (/* binding */ getProjectIndex),
/* harmony export */   "popUpDeleteAndEdit": () => (/* binding */ popUpDeleteAndEdit),
/* harmony export */   "projectIndex": () => (/* binding */ projectIndex),
/* harmony export */   "taskIndex": () => (/* binding */ taskIndex)
/* harmony export */ });
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-or-cancel-task-event */ "./src/add-or-cancel-task-event.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _task_grouping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-grouping */ "./src/task-grouping.js");





let projectIndex;
let taskIndex;

function popUpDeleteAndEdit(nameOfArray) {
  let listChildren;
  if (this.parentNode.parentNode.className == "new-task") listChildren = 4;
  else if (this.parentNode.parentNode.className == "projects") listChildren = 3;
  if (this.parentNode.parentNode.childNodes.length > listChildren) return;

  const deleteOrEditDiv = document.createElement("div");
  if (this.parentNode.parentNode.classList[0] == "projects")
    deleteOrEditDiv.classList.add("delete-edit-div");
  if (this.parentNode.parentNode.className == "new-task")
    deleteOrEditDiv.classList.add("delete-edit-task");

  const editProject = document.createElement("p");
  if (this.parentNode.parentNode.className == "new-task")
    editProject.classList.add("edit-task");
  else if (this.parentNode.parentNode.classList[0] == "projects")
    editProject.classList.add("edit");

  editProject.textContent = "Edit";
  const deleteProject = document.createElement("p");
  deleteProject.textContent = "Delete";
  deleteOrEditDiv.append(editProject, deleteProject);
  this.parentNode.parentNode.appendChild(deleteOrEditDiv);

  deleteProject.addEventListener(
    "mousedown",
    deleteFromList.bind(deleteProject)
  );
  getIndex.call(this, nameOfArray);
}

function deleteFromList() {
  if (this.parentNode.parentNode.className === "projects") {
    // Action when project is deleted
    this.parentNode.parentNode.parentNode.removeChild(
      this.parentNode.parentNode
    );
    _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.splice(_add_new_project__WEBPACK_IMPORTED_MODULE_0__.projectArrayIndex, 1);
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_2__.setProjectArray)();
    if (!!document.querySelector(".task-list")) {
      if (
        this.parentNode.parentNode.childNodes[1].textContent ===
        document.querySelector(".mainHeader").children[0].textContent
      ) {
        /** If the project being deleted is the current selected project
         * take following action.
         */
        (0,_task_grouping__WEBPACK_IMPORTED_MODULE_3__.clearTask)();
        (0,_task_grouping__WEBPACK_IMPORTED_MODULE_3__.showGroupTitle)("Deleted");
      }
    } else {
      /** This action updates the task grouping section if project is being
       * deleted without first being selected.
       */
      (0,_add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromList)();
      (0,_task_grouping__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
    }
  } else {
    // Action when task is deleted
    this.parentNode.parentNode.parentNode.removeChild(
      this.parentNode.parentNode
    );
    _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray[projectIndex].taskArray.splice(taskIndex, 1);
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_2__.setProjectArray)();
  }
}

function getIndex(nameOfArray) {
  if (this.parentNode.parentNode.className === "projects")
    getProjectIndex(nameOfArray);
  if (this.parentNode.parentNode.className === "new-task")
    getTaskIndex(nameOfArray);
}

function getProjectIndex(nameOfArray) {
  _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach((project) => {
    project.taskArray.forEach((task) => {
      if (task === nameOfArray) projectIndex = _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.indexOf(project);
    });
  });
}

function getTaskIndex(nameOfArray) {
  getProjectIndex(nameOfArray);
  taskIndex = _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray[projectIndex].taskArray.indexOf(nameOfArray);
}



/***/ }),

/***/ "./src/display-available-tasks.js":
/*!****************************************!*\
  !*** ./src/display-available-tasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayAllTasksOnPageLoad": () => (/* binding */ DisplayAllTasksOnPageLoad)
/* harmony export */ });
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _task_grouping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-grouping */ "./src/task-grouping.js");
/* harmony import */ var _toggle_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-theme */ "./src/toggle-theme.js");





// Display all available projects and tasks on page load.
function DisplayAllTasksOnPageLoad() {
  if (localStorage.getItem("projectArray") === null)
    localStorage.setItem("projectArray", JSON.stringify([]));
  else {
    _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((project) => {
      Object.setPrototypeOf(project, _project_constructor__WEBPACK_IMPORTED_MODULE_1__.Project.prototype);
      (0,_project_constructor__WEBPACK_IMPORTED_MODULE_1__.setProjectArray)();
      (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.removeProjectLists)();
      (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.createProject)();
    });
    (0,_task_grouping__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
    document.querySelector("li").classList.add("selected");
  }

  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.getThemeChoiceFromStorage)();
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
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
/* harmony import */ var _icons_dotsDark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dotsDark.png */ "./src/icons/dotsDark.png");
/* harmony import */ var _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/uncheckedStar.png */ "./src/icons/uncheckedStar.png");
/* harmony import */ var _icons_uncheckedStarDark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/uncheckedStarDark.png */ "./src/icons/uncheckedStarDark.png");
/* harmony import */ var _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/undoneTask.png */ "./src/icons/undoneTask.png");
/* harmony import */ var _icons_undoneTaskDark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/undoneTaskDark.png */ "./src/icons/undoneTaskDark.png");
/* harmony import */ var _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/checkedStar.png */ "./src/icons/checkedStar.png");
/* harmony import */ var _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/doneTask.png */ "./src/icons/doneTask.png");
/* harmony import */ var _toggle_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-states */ "./src/toggle-states.js");










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
  const myTaskDotsDark = new Image();
  const myUncheckedStar = new Image();
  const myUncheckedStarDark = new Image();
  const myUndoneTask = new Image();
  const myUndoneTaskDark = new Image();
  const myCheckedStar = new Image();
  const myDoneTask = new Image();

  taskTitle.textContent = title;
  taskDesc.textContent = desc;
  dateInput.textContent = date;

  myTaskDots.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_0__;
  myTaskDotsDark.src = _icons_dotsDark_png__WEBPACK_IMPORTED_MODULE_1__;
  myUncheckedStar.src = _icons_uncheckedStar_png__WEBPACK_IMPORTED_MODULE_2__;
  myUncheckedStarDark.src = _icons_uncheckedStarDark_png__WEBPACK_IMPORTED_MODULE_3__;
  myUndoneTask.src = _icons_undoneTask_png__WEBPACK_IMPORTED_MODULE_4__;
  myUndoneTaskDark.src = _icons_undoneTaskDark_png__WEBPACK_IMPORTED_MODULE_5__;
  myCheckedStar.src = _icons_checkedStar_png__WEBPACK_IMPORTED_MODULE_6__;
  myDoneTask.src = _icons_doneTask_png__WEBPACK_IMPORTED_MODULE_7__;

  newTask.classList.add("new-task");
  taskTitle.classList.add("task-title");
  titleAndDescDiv.classList.add("title-and-desc-div");
  taskDesc.classList.add("task-desc");
  dateSpan.classList.add("date-span");
  dateInput.classList.add("date-input");
  starDiv.classList.add("star-div");
  taskDiv.classList.add("task-div");
  myUncheckedStar.classList.add("unchecked-star", "light");
  myUncheckedStarDark.classList.add("unchecked-star-dark", "dark");
  myCheckedStar.classList.add("checked-star");
  myUndoneTask.classList.add("undone-task", "light");
  myUndoneTaskDark.classList.add("undone-task-dark", "dark");
  myDoneTask.classList.add("done-task");
  myTaskDots.classList.add("my-task-dots", "light");
  myTaskDotsDark.classList.add("my-task-dots-dark", "dark");
  dateAndSpan.classList.add("date-and-span");

  titleAndDescDiv.append(taskTitle, taskDesc);
  dateSpan.appendChild(dateInput);
  dateAndSpan.append(dateSpan, myTaskDots, myTaskDotsDark);
  starDiv.append(myUncheckedStar, myCheckedStar, myUncheckedStarDark);
  taskDiv.append(myUndoneTask, myDoneTask, myUndoneTaskDark);
  newTask.append(taskDiv, titleAndDescDiv, starDiv, dateAndSpan);

  // Checks if taskList for each project is available else display all tasks
  if (!!taskList) taskList.insertBefore(newTask, addTaskButton);
  else document.querySelector(".add-task-section").appendChild(newTask);

  (0,_toggle_states__WEBPACK_IMPORTED_MODULE_8__.toggleEvents)(
    task,
    myTaskDots,
    myDoneTask,
    myUndoneTask,
    myTaskDotsDark,
    myCheckedStar,
    myUndoneTaskDark,
    myUncheckedStar,
    myUncheckedStarDark
  );

  (0,_toggle_states__WEBPACK_IMPORTED_MODULE_8__.addClass)(task, myDoneTask, taskTitle, taskDesc, dateInput, myCheckedStar);
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
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ "./src/project-input.js");




function enableEditing() {
  const project = document.querySelector(".edit").parentNode.parentNode;
  const projectList = document.querySelector(".project-list");

  // For loop to check if there is an existing form opened, if true it returns
  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;

  const getName = (function () {
    project.classList.add("hidden");
    let projectName = project.children[1];
    let previousName = projectName.textContent;
    return { previousName, projectName };
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
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectIndex)();
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.removeProjectLists)();
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.createProject)();
    project.classList.remove("hidden");
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.setSelectedClass)();
  }

  function editProjectArrayName() {
    _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray[_add_new_project__WEBPACK_IMPORTED_MODULE_0__.projectArrayIndex].setName(
      insertGetProjectInput.nameInput.value
    );
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_1__.setProjectArray)();
  }

  function replaceOldNameInDom() {
    getName.projectName = insertGetProjectInput.nameInput.value;
  }

  function removeInputForm() {
    insertGetProjectInput.inputForm.parentNode.removeChild(
      insertGetProjectInput.inputForm
    );
    project.classList.remove("hidden");
  }

  // EventListener on cancel and add buttons
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
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");
/* harmony import */ var _new_task_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-task-input */ "./src/new-task-input.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");




function enableTaskEditing() {
  // currentTask is the current task being edited
  const currentTask =
    document.querySelector(".edit-task").parentNode.parentNode;
  const taskList = document.querySelector(".task-list");

  if (!!taskList) {
    for (let i = 0; i < taskList.childNodes.length; i++)
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
  }

  const getName = (function () {
    // Hides current task being edited
    currentTask.classList.add("hidden");

    let taskTitle = currentTask.childNodes[1].childNodes[0];
    let taskDesc = currentTask.childNodes[1].childNodes[1];
    let taskDate = currentTask.childNodes[3].childNodes[0].childNodes[0];
    return { taskTitle, taskDesc, taskDate };
  })();

  (0,_new_task_input__WEBPACK_IMPORTED_MODULE_1__.newTaskInput)();

  const insertNewInput = (function () {
    const previousTask = currentTask.nextElementSibling;
    const taskInputForm = document.querySelector(".task-input-form");
    const inputTitle = document.querySelector(".title-input-form");
    const inputDesc = document.querySelector(".text-area-form");
    const inputDate = document.querySelector(".date-input-form");

    inputTitle.value = getName.taskTitle.textContent;
    inputDesc.value = getName.taskDesc.textContent;
    inputDate.value = getName.taskDate.textContent;

    // If taskList is not found, insert taskInputForm in all task section
    if (!!taskList) taskList.insertBefore(taskInputForm, previousTask);
    else
      document
        .querySelector(".add-task-section")
        .insertBefore(taskInputForm, currentTask.nextSibling);

    return { inputTitle, inputDesc, inputDate, taskInputForm };
  })();

  function updateNewTaskName() {
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    if (document.querySelector(".title-input-form").value.trim() === "") return;

    getName.taskTitle.textContent = insertNewInput.inputTitle.value;
    getName.taskDesc.textContent = insertNewInput.inputDesc.value;
    getName.taskDate.textContent = insertNewInput.inputDate.value;

    updateNewTaskNameInArray(
      insertNewInput.inputTitle.value,
      insertNewInput.inputDesc.value,
      insertNewInput.inputDate.value
    );

    removeNewTaskInput();
  }

  function updateNewTaskNameInArray(title, desc, date) {
    _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray[_delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.projectIndex].taskArray[_delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.taskIndex].setDetails(
      title,
      desc,
      date
    );
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_2__.setProjectArray)();
  }

  function removeNewTaskInput() {
    insertNewInput.taskInputForm.parentNode.removeChild(
      insertNewInput.taskInputForm
    );

    // Removes hidden class from 'edited task'
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

  // If taskList is not found, insert taskInputForm in all task section
  if (!!taskList)
    taskList.insertBefore(
      taskInputForm,
      document.querySelector(".add-task-button")
    );
  else document.querySelector(".add-task-section").append(taskInputForm);

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
  const iconsCredit = document.createElement("p");
  const flatIconAnchor = document.createElement("a");
  const icons8Anchor = document.createElement("a");

  flatIconAnchor.textContent = " Flaticon ";
  icons8Anchor.textContent = " Icons8 ";
  iconsCredit.append("Icons by", flatIconAnchor, " & ", icons8Anchor);
  anchorLink.appendChild(gitHubIcon);

  flatIconAnchor.setAttribute("target", "_blank");
  icons8Anchor.setAttribute("target", "_blank");
  flatIconAnchor.setAttribute("href", "https://www.flaticon.com/");
  icons8Anchor.setAttribute("href", "https://icons8.com/");
  anchorLink.setAttribute("href", "https://github.com/IAmYoungbossy/todo-list");
  gitHubIcon.classList.add("fa", "fa-github");
  footer.append(
    "Copyright \u00A9 2022 IAmYoungbossy",
    "  ",
    anchorLink,
    iconsCredit
  );
  body.appendChild(footer);
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
/* harmony import */ var _icons_menuIconDark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/menuIconDark.png */ "./src/icons/menuIconDark.png");
/* harmony import */ var _icons_to_do_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/to-do.png */ "./src/icons/to-do.png");
/* harmony import */ var _icons_theme_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/theme.png */ "./src/icons/theme.png");
/* harmony import */ var _icons_themeDark_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/themeDark.png */ "./src/icons/themeDark.png");






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
  const myMenuIconDark = new Image();
  const myToDoLogo = new Image();
  const myThemeToggler = new Image();
  const myThemeTogglerDark = new Image();

  myMenuIcon.src = _icons_menuIcon_png__WEBPACK_IMPORTED_MODULE_0__;
  myToDoLogo.src = _icons_to_do_png__WEBPACK_IMPORTED_MODULE_2__;
  myThemeToggler.src = _icons_theme_png__WEBPACK_IMPORTED_MODULE_3__;
  myMenuIconDark.src = _icons_menuIconDark_png__WEBPACK_IMPORTED_MODULE_1__;
  myThemeTogglerDark.src = _icons_themeDark_png__WEBPACK_IMPORTED_MODULE_4__;

  myMenuIcon.classList.add("menu-light", "light");
  myMenuIconDark.classList.add("menu-Dark", "dark");
  myThemeToggler.classList.add("theme-light", "light");
  myThemeTogglerDark.classList.add("theme-dark", "dark");

  menuIcon.append(myMenuIcon, myMenuIconDark);
  toDoLogo.appendChild(myToDoLogo);
  themeToggler.append(myThemeToggler, myThemeTogglerDark);
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
  const mainSection = document.createElement("section");

  nav.classList.add("nav");
  mainSection.classList.add("mainSection");

  mainBodyContainer.appendChild(nav);
  mainBodyContainer.appendChild(mainSection);
  body.appendChild(mainBodyContainer);
}

function createNavContent() {
  const nav = document.querySelector(".nav");
  const home = document.createElement("div");
  const project = document.createElement("div");
  const horizontalRule = document.createElement("hr");

  home.classList.add("home");
  project.classList.add("project");
  
  nav.appendChild(home);
  nav.appendChild(project);

  const navHeader = document.createElement("h2");
  const unorderedList = document.createElement("ul");
  const allTasks = document.createElement("li");
  const today = document.createElement("li");
  const thisWeek = document.createElement("li");
  const important = document.createElement("li");

  const myAllTasks = new Image();
  const myToday = new Image();
  const myThisWeek = new Image();
  const myImportant = new Image();
  const myHome = new Image();
  const myProject = new Image();

  myAllTasks.src = _icons_planning_png__WEBPACK_IMPORTED_MODULE_0__;
  myToday.src = _icons_calendar_png__WEBPACK_IMPORTED_MODULE_1__;
  myThisWeek.src = _icons_next_week_png__WEBPACK_IMPORTED_MODULE_2__;
  myImportant.src = _icons_checklist_png__WEBPACK_IMPORTED_MODULE_3__;
  myHome.src = _icons_home_png__WEBPACK_IMPORTED_MODULE_4__;
  myProject.src = _icons_project_png__WEBPACK_IMPORTED_MODULE_5__;

  allTasks.appendChild(myAllTasks);
  today.appendChild(myToday);
  thisWeek.appendChild(myThisWeek);
  navHeader.appendChild(myHome);
  
  important.appendChild(myImportant);
  unorderedList.appendChild(allTasks);
  unorderedList.appendChild(today);
  unorderedList.appendChild(thisWeek);
  unorderedList.appendChild(important);
  home.appendChild(navHeader);
  home.appendChild(horizontalRule);
  home.appendChild(unorderedList);

  navHeader.append("Home");
  allTasks.append("All Tasks");
  today.append("Today");
  thisWeek.append("This Week");
  important.append("Important");

  const projectHeader = document.createElement("h2");
  const horizontalRule2 = document.createElement("hr");
  const projectList = document.createElement("ul");
  const addProject = document.createElement("li");
  const myAdd = new Image();
  myAdd.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_6__;

  projectHeader.appendChild(myProject);
  projectHeader.append("Projects");
  project.appendChild(projectHeader);
  project.appendChild(horizontalRule2);
  projectList.appendChild(addProject);
  addProject.appendChild(myAdd);
  addProject.append("Add project");
  project.appendChild(projectList);

  addProject.classList.add("add-project");
  projectList.classList.add("project-list");
}

function createTaskDisplaySection() {
  const mainSection = document.querySelector(".mainSection");
  const headerContainer = document.createElement("div");
  const sectionHeader = document.createElement("h1");
  const addTaskSection = document.createElement("div");

  headerContainer.classList.add("mainHeader");
  headerContainer.appendChild(sectionHeader);
  mainSection.appendChild(headerContainer);
  mainSection.appendChild(addTaskSection);
  sectionHeader.textContent = "All tasks";

  addTaskSection.classList.add("add-task-section");
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
/* harmony export */   "ThemeSetter": () => (/* binding */ ThemeSetter),
/* harmony export */   "TodoTask": () => (/* binding */ TodoTask),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "setProjectArray": () => (/* binding */ setProjectArray),
/* harmony export */   "setTheTheme": () => (/* binding */ setTheTheme),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/**
 * ProjectArray LocalStorage
 */
if (localStorage.getItem("projectArray") == null)
  localStorage.setItem("projectArray", JSON.stringify([]));

let projectArray = JSON.parse(localStorage.getItem("projectArray"));

function setProjectArray() {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

/**
 * Constructor Functions With Their Prototype Methods
 */

class Project {
  constructor(projectName) {
    this.name = projectName;
    this.taskArray = [];
  }
  setName(newName) {
    this.name = newName;
  }
}

class TodoTask {
  constructor(title, desc, date) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.completed;
    this.important;
  }
  setDetails(newTitle, newDesc, newDate) {
    this.title = newTitle;
    this.desc = newDesc;
    this.date = newDate;
  }
  toggleComplete() {
    this.completed ? (this.completed = false) : (this.completed = true);
  }
  toggleImportance() {
    this.important ? (this.important = false) : (this.important = true);
  }
}

class ThemeSetter {
  constructor() {
    this.darkTheme;
    this.lightIcon;
    this.darkIcon;
  }
  toggleDarkTheme() {
    if (this.darkTheme === true) this.darkTheme = false;
    else this.darkTheme = true;
  }
}

/**
 * Theme LocalStorage
 */
if (localStorage.getItem("theme") == null)
  localStorage.setItem("theme", JSON.stringify(new ThemeSetter()));

let theme = JSON.parse(localStorage.getItem("theme"));

function setTheTheme() {
  localStorage.setItem("theme", JSON.stringify(theme));
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

/***/ "./src/task-grouping.js":
/*!******************************!*\
  !*** ./src/task-grouping.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksEvent": () => (/* binding */ allTasksEvent),
/* harmony export */   "clearTask": () => (/* binding */ clearTask),
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "showGroupTitle": () => (/* binding */ showGroupTitle)
/* harmony export */ });
/* harmony import */ var date_fns_isWithinInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isWithinInterval */ "./node_modules/date-fns/esm/isWithinInterval/index.js");
/* harmony import */ var _add_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-project */ "./src/add-new-project.js");
/* harmony import */ var _display_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-todo-list */ "./src/display-todo-list.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");
/* harmony import */ var _toggle_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-theme */ "./src/toggle-theme.js");






function allTasksEvent() {
  const allTasks = document.querySelector(".home").childNodes[2].firstChild;
  const importantTasks =
    document.querySelector(".home").childNodes[2].lastChild;
  const thisWeek = document.querySelector(".home").childNodes[2].children[2];
  const thisDay = document.querySelector(".home").childNodes[2].children[1];

  allTasks.addEventListener("click", displayAllTasksForClick.bind(allTasks));
  thisDay.addEventListener("click", toDay.bind(thisDay));
  thisWeek.addEventListener("click", sevenDays.bind(thisWeek));
  importantTasks.addEventListener(
    "click",
    displayAllImportantTasks.bind(importantTasks)
  );
}

function toDay() {
  clearTask();
  nextNthDays(now, today);
  showGroupTitle("Today");
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.styleSelectedList.call(this);
  showNoTaskMessage.call(this);
}

function sevenDays() {
  clearTask();
  nextNthDays(now, next7Days);
  showGroupTitle("Next 7 Days");
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.styleSelectedList.call(this);
  showNoTaskMessage.call(this);
}

function displayAllTasksForClick() {
  clearTask();
  displayAll();
  showGroupTitle("All tasks");
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.styleSelectedList.call(this);
  this.classList.add("all");
  showNoTaskMessage.call(this);
  this.classList.remove("all");
}

function displayAllTasks() {
  clearTask();
  displayAll();
  showGroupTitle("All tasks");
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
  showNoTaskMessage.call(this);
}

function displayAllImportantTasks() {
  clearTask();
  displayImportantTasks();
  showGroupTitle("Important tasks");
  (0,_toggle_theme__WEBPACK_IMPORTED_MODULE_3__.toggleIcon)();
  _add_new_project__WEBPACK_IMPORTED_MODULE_0__.styleSelectedList.call(this);
  showNoTaskMessage.call(this);
}

function clearTask() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection)
    while (addTaskSection.childNodes.length > 0)
      addTaskSection.removeChild(addTaskSection.firstChild);
}

function displayAll() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach((project) =>
    project.taskArray.forEach((task) =>
      (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(task.title, task.desc, task.date, task)
    )
  );
}

function displayImportantTasks() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach((project) =>
    project.taskArray.forEach((task) => {
      if (task.important)
        (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(task.title, task.desc, task.date, task);
    })
  );
}

function showGroupTitle(groupTitle) {
  document.querySelector(".mainHeader").childNodes[0].textContent = groupTitle;
}

// Displays message if no task is available to display
function showNoTaskMessage() {
  const taskDisplayArea = document.querySelector(".add-task-section");
  const noTaskMessage = document.createElement("p");
  const instruction = document.createElement("p");
  if (taskDisplayArea.childNodes.length === 0) {
    if (this === undefined || this.classList[1] === "all") {
      noTaskMessage.textContent = "Oops! No tasks.";
      instruction.textContent =
        "Create a project file to add your todo list or add to existing if any.";
      taskDisplayArea.append(noTaskMessage, instruction);
    } else {
      noTaskMessage.textContent = "Oops! No tasks.";
      taskDisplayArea.append(noTaskMessage);
    }
  }
}

/**
 * Checks If Date Is Within Interval Using Date-fn Package
 */

// Function for adding Nth days to Date prototype
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const date = new Date();
const now = formatDate(new Date());
const today = formatDate(date.addDays(1));
const next7Days = formatDate(date.addDays(7));
date.setHours(0, 0, 0, 0);

// Format a date to YYYY,MM,DD
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join(",");
}

// Checks if date is within interval
function nextNthDays(startDay, endDay) {
  _project_constructor__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach((project) =>
    project.taskArray.forEach((task) => {
      if (
        (0,date_fns_isWithinInterval__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(task.date), {
          start: new Date(startDay),
          end: new Date(endDay),
        })
      )
        (0,_display_todo_list__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(task.title, task.desc, task.date, task);
    })
  );
}



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
      document.querySelector(".home").classList.toggle("nav-hidden");
      document.querySelector(".project").classList.toggle("nav-hidden");
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
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "addMethods": () => (/* binding */ addMethods),
/* harmony export */   "toggleEvents": () => (/* binding */ toggleEvents)
/* harmony export */ });
/* harmony import */ var _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-edit-pop-up */ "./src/delete-edit-pop-up.js");
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");



function addClass(
  task,
  myDoneTask,
  taskTitle,
  taskDesc,
  dateInput,
  myCheckedStar
) {
  if (task.completed) {
    myDoneTask.classList.add("done");
    taskTitle.classList.add("line-through");
    taskDesc.classList.add("line-through");
    dateInput.classList.add("line-through");
  }
  if (task.important) myCheckedStar.classList.add("check");
}

function toggleEvents(
  task,
  myTaskDots,
  myDoneTask,
  myUndoneTask,
  myTaskDotsDark,
  myCheckedStar,
  myUndoneTaskDark,
  myUncheckedStar,
  myUncheckedStarDark
) {
  (0,_delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(task);
  addMethods();
  myTaskDots.addEventListener(
    "click",
    _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.popUpDeleteAndEdit.bind(myTaskDots, task)
  );
  myTaskDotsDark.addEventListener(
    "click",
    _delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.popUpDeleteAndEdit.bind(myTaskDots, task)
  );
  myDoneTask.addEventListener("click", toggleCompleted.bind(null, task));
  myUndoneTask.addEventListener("click", toggleCompleted.bind(null, task));
  myUndoneTaskDark.addEventListener("click", toggleCompleted.bind(null, task));
  myCheckedStar.addEventListener("click", toggleStar.bind(null, task));
  myUncheckedStar.addEventListener("click", toggleStar.bind(null, task));
  myUncheckedStarDark.addEventListener("click", toggleStar.bind(null, task));
}

function addMethods() {
  _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray[_delete_edit_pop_up__WEBPACK_IMPORTED_MODULE_0__.projectIndex].taskArray.forEach((task) => {
    Object.setPrototypeOf(task, _project_constructor__WEBPACK_IMPORTED_MODULE_1__.TodoTask.prototype);
    (0,_project_constructor__WEBPACK_IMPORTED_MODULE_1__.setProjectArray)();
  });
}

function toggleCompleted(task, e) {
  task.toggleComplete();
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_1__.setProjectArray)();
  e.target.classList === "undone-task" ||
  e.target.classList === "undone-task-dark" ||
  e.target.classList === "done-task"
    ? toggleLineThrough(e)
    : toggleLineThrough(e);
}

function toggleStar(task, e) {
  task.toggleImportance();
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_1__.setProjectArray)();
  e.target.classList === "new-task" ||
  e.target.classList === "unchecked-star-dark" ||
  e.target.classList === "checked-star"
    ? toggle(e)
    : toggle(e);
}

function toggleLineThrough(e) {
  e.target.parentNode.parentNode.childNodes[0].childNodes[1].classList.toggle(
    "done"
  );
  e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.toggle(
    "line-through"
  );
  e.target.parentNode.parentNode.childNodes[3].childNodes[0].childNodes[0].classList.toggle(
    "line-through"
  );
  e.target.parentNode.parentNode.childNodes[1].childNodes[0].classList.toggle(
    "line-through"
  );
}

function toggle(e) {
  e.target.parentNode.parentNode.childNodes[2].childNodes[1].classList.toggle(
    "check"
  );
}



/***/ }),

/***/ "./src/toggle-theme.js":
/*!*****************************!*\
  !*** ./src/toggle-theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getThemeChoiceFromStorage": () => (/* binding */ getThemeChoiceFromStorage),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "toggleIcon": () => (/* binding */ toggleIcon)
/* harmony export */ });
/* harmony import */ var _project_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-constructor */ "./src/project-constructor.js");


// This function toggles between dark and light themes
function setTheme() {
  const darkThemeIcon = document.querySelectorAll(".dark");
  const lightThemeIcon = document.querySelectorAll(".light");
  const root = document.documentElement;
  let newTheme;

  // Add back ThemeSetter prototype to enable toggle method
  Object.setPrototypeOf(_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme, _project_constructor__WEBPACK_IMPORTED_MODULE_0__.ThemeSetter.prototype);
  _project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.toggleDarkTheme();
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_0__.setTheTheme)();
  if (_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme) newTheme = "darkT";
  else newTheme = "lightT";
  root.className = newTheme;

  lightThemeIcon.forEach((icon) => {
    if (_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme) icon.classList.add("light-hidden");
    else icon.classList.remove("light-hidden");
  });

  darkThemeIcon.forEach((icon) => {
    if (_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme) icon.classList.add("dark-visible");
    else icon.classList.remove("dark-visible");
  });
}

// Retrieves icon state from storage on page reload
function toggleIcon() {
  Object.setPrototypeOf(_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme, _project_constructor__WEBPACK_IMPORTED_MODULE_0__.ThemeSetter.prototype);
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_0__.setTheTheme)();
  document.querySelectorAll(".light").forEach((icon) => {
    if (_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme) icon.classList.add("light-hidden");
    else icon.classList.remove("light-hidden");
  });

  Object.setPrototypeOf(_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme, _project_constructor__WEBPACK_IMPORTED_MODULE_0__.ThemeSetter.prototype);
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_0__.setTheTheme)();
  document.querySelectorAll(".dark").forEach((icon) => {
    if (_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme) icon.classList.add("dark-visible");
    else icon.classList.remove("dark-visible");
  });
}

// Retrieves theme state from storage on page reload
function getThemeChoiceFromStorage() {
  Object.setPrototypeOf(_project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme, _project_constructor__WEBPACK_IMPORTED_MODULE_0__.ThemeSetter.prototype);
  (0,_project_constructor__WEBPACK_IMPORTED_MODULE_0__.setTheTheme)();
  const root = document.documentElement;
  const newTheme = _project_constructor__WEBPACK_IMPORTED_MODULE_0__.theme.darkTheme ? "darkT" : "lightT";
  root.className = newTheme;
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

module.exports = __webpack_require__.p + "01dd7582092d6942c6a3.png";

/***/ }),

/***/ "./src/icons/dotsDark.png":
/*!********************************!*\
  !*** ./src/icons/dotsDark.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0299efaa591b3bd7642a.png";

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

module.exports = __webpack_require__.p + "b8cff275e72b56cb149f.png";

/***/ }),

/***/ "./src/icons/menuIconDark.png":
/*!************************************!*\
  !*** ./src/icons/menuIconDark.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a696ac7e31f8878c7152.png";

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

module.exports = __webpack_require__.p + "d46a526f9c3f07e9ca6f.png";

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

module.exports = __webpack_require__.p + "2efb0c0d627ef4f9cd72.png";

/***/ }),

/***/ "./src/icons/themeDark.png":
/*!*********************************!*\
  !*** ./src/icons/themeDark.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9a587c87dde0382f780.png";

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

module.exports = __webpack_require__.p + "dd853f3be8b1228ed447.png";

/***/ }),

/***/ "./src/icons/uncheckedStarDark.png":
/*!*****************************************!*\
  !*** ./src/icons/uncheckedStarDark.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfebd364dc2609e94196.png";

/***/ }),

/***/ "./src/icons/undoneTask.png":
/*!**********************************!*\
  !*** ./src/icons/undoneTask.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7c4aa9f27611d9c701.png";

/***/ }),

/***/ "./src/icons/undoneTaskDark.png":
/*!**************************************!*\
  !*** ./src/icons/undoneTaskDark.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d292fe092da814fb93c9.png";

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
/* harmony import */ var _toggle_nav_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-nav-list */ "./src/toggle-nav-list.js");
/* harmony import */ var _edit_current_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-current-task */ "./src/edit-current-task.js");
/* harmony import */ var _task_grouping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-grouping */ "./src/task-grouping.js");
/* harmony import */ var _display_available_tasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display-available-tasks */ "./src/display-available-tasks.js");
/* harmony import */ var _toggle_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toggle-theme */ "./src/toggle-theme.js");














(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
(0,_page_header__WEBPACK_IMPORTED_MODULE_1__.createHeaderContent)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.CreateMain)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.createNavContent)();
(0,_page_footer__WEBPACK_IMPORTED_MODULE_3__.createfooter)();
(0,_page_main__WEBPACK_IMPORTED_MODULE_2__.createTaskDisplaySection)();
_toggle_nav_list__WEBPACK_IMPORTED_MODULE_8__.toggleNavList;
(0,_task_grouping__WEBPACK_IMPORTED_MODULE_10__.allTasksEvent)();
(0,_display_available_tasks__WEBPACK_IMPORTED_MODULE_11__.DisplayAllTasksOnPageLoad)();

document.addEventListener("mouseup", _edit_current_project__WEBPACK_IMPORTED_MODULE_5__.editCurentProject);
document.addEventListener("mousedown", _remove_project_popup__WEBPACK_IMPORTED_MODULE_6__.removeDeleteAndEditPopUp);
document.addEventListener("click", _add_or_cancel_task_event__WEBPACK_IMPORTED_MODULE_7__.addAndCancelTask);
document.addEventListener("mousedown", _add_new_project__WEBPACK_IMPORTED_MODULE_4__.addNewProject);
document.addEventListener("mouseup", _edit_current_task__WEBPACK_IMPORTED_MODULE_9__.editCurentTask);
document.querySelector(".themeToggler").addEventListener("click", _toggle_theme__WEBPACK_IMPORTED_MODULE_12__.setTheme);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLGdCQUFnQixnQ0FBZ0MsNEJBQTRCLDBCQUEwQix1Q0FBdUMsMEJBQTBCLDhCQUE4Qiw2QkFBNkIscUNBQXFDLGlDQUFpQyxvQkFBb0IseUJBQXlCLHlCQUF5QixzQkFBc0IseUJBQXlCLHlCQUF5QixHQUFHLGVBQWUsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsdUNBQXVDLDBCQUEwQiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxtQ0FBbUMsc0JBQXNCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsR0FBRyxRQUFRLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHVCQUF1QixvQ0FBb0MsR0FBRyxrQ0FBa0MsaUNBQWlDLG9CQUFvQixtQ0FBbUMsd0JBQXdCLHVCQUF1QixpQ0FBaUMsaURBQWlELDhDQUE4QyxHQUFHLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLFNBQVMsdUJBQXVCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLG1DQUFtQyxZQUFZLGtCQUFrQixHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQixHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyxRQUFRLHdCQUF3QixZQUFZLG9DQUFvQyxxQkFBcUIsR0FBRyxlQUFlLHVCQUF1Qix1QkFBdUIsR0FBRyw0QkFBNEIscUJBQXFCLEdBQUcsTUFBTSwwQkFBMEIsa0JBQWtCLHdCQUF3QixzQkFBc0IsMkJBQTJCLCtDQUErQyxvQkFBb0Isd0JBQXdCLG9CQUFvQiwyQkFBMkIsR0FBRyxZQUFZLGtDQUFrQyxnQ0FBZ0MsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsYUFBYSxpSUFBaUksZ0NBQWdDLEdBQUcsK0JBQStCLHFCQUFxQiwrQ0FBK0MsR0FBRywrQ0FBK0MscUJBQXFCLEdBQUcsb0JBQW9CLGtCQUFrQixjQUFjLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsb0JBQW9CLG9DQUFvQyxHQUFHLG1CQUFtQixxQkFBcUIsb0NBQW9DLEdBQUcsMEJBQTBCLHNCQUFzQixpQkFBaUIsMEJBQTBCLHdCQUF3QixpQkFBaUIsc0JBQXNCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLHVCQUF1QixHQUFHLHVDQUF1QywwQ0FBMEMsdUJBQXVCLGVBQWUsR0FBRyxzQ0FBc0MsdUJBQXVCLGVBQWUsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLEdBQUcsa0NBQWtDLGtCQUFrQiw2QkFBNkIsaUJBQWlCLEdBQUcsa0VBQWtFLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcsMEJBQTBCLGlCQUFpQixnQkFBZ0IsY0FBYyxHQUFHLGFBQWEsdUJBQXVCLGtCQUFrQix3QkFBd0IsdUJBQXVCLHdCQUF3QiwyQkFBMkIsR0FBRyx5QkFBeUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsYUFBYSxHQUFHLG1CQUFtQix1QkFBdUIsZUFBZSxHQUFHLGdDQUFnQyx1QkFBdUIsYUFBYSxlQUFlLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixrQ0FBa0MsOEJBQThCLHNCQUFzQixHQUFHLHNCQUFzQixrQ0FBa0MscUJBQXFCLEdBQUcseURBQXlELDhDQUE4Qyx1QkFBdUIsYUFBYSxpQkFBaUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsd0JBQXdCLHVDQUF1QyxlQUFlLEdBQUcscUJBQXFCLDhDQUE4Qyx1QkFBdUIsYUFBYSxpQkFBaUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsd0JBQXdCLHVDQUF1QyxlQUFlLEdBQUcsd0JBQXdCLHNCQUFzQiw4QkFBOEIsR0FBRyx5QkFBeUIsdUJBQXVCLDhCQUE4QixHQUFHLDBDQUEwQywwQkFBMEIsK0NBQStDLGlDQUFpQyxrQ0FBa0MsR0FBRywyQ0FBMkMsMEJBQTBCLCtDQUErQyxpQ0FBaUMsa0NBQWtDLEdBQUcseUNBQXlDLGVBQWUsK0NBQStDLG9DQUFvQyxxQ0FBcUMsR0FBRywwQ0FBMEMsZUFBZSwrQ0FBK0Msb0NBQW9DLHFDQUFxQyxHQUFHLGVBQWUsWUFBWSxHQUFHLG9DQUFvQyw2QkFBNkIsR0FBRyxnQkFBZ0IsdUJBQXVCLHdDQUF3QyxZQUFZLEdBQUcsZUFBZSx1QkFBdUIsMENBQTBDLHVCQUF1QixrQ0FBa0Msb0NBQW9DLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsR0FBRyxNQUFNLG9CQUFvQiwrQkFBK0IsR0FBRyxzREFBc0QsZ0JBQWdCLHFCQUFxQixzQkFBc0IsdUJBQXVCLEdBQUcsdUNBQXVDLHVCQUF1QixzQkFBc0IsOEJBQThCLEdBQUcsc0NBQXNDLHVCQUF1Qix1QkFBdUIsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixpQkFBaUIsOEJBQThCLEdBQUcsMEJBQTBCLHdCQUF3Qiw4Q0FBOEMscUJBQXFCLEdBQUcsb0JBQW9CLHVCQUF1QixrQkFBa0IsMkJBQTJCLHNDQUFzQyxvQkFBb0IsOEJBQThCLHlDQUF5QyxHQUFHLDBCQUEwQixxQkFBcUIsc0NBQXNDLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHdCQUF3QixxQkFBcUIsR0FBRyxxQ0FBcUMsd0JBQXdCLHVCQUF1QixtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixpQkFBaUIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsa0NBQWtDLGlCQUFpQix3QkFBd0Isa0JBQWtCLDJCQUEyQixzQkFBc0IsR0FBRyx1QkFBdUIsc0JBQXNCLGlCQUFpQiwwQkFBMEIsd0JBQXdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLG1CQUFtQixHQUFHLHlEQUF5RCw2QkFBNkIsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0IsR0FBRyxvQ0FBb0MsMENBQTBDLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxhQUFhLCtDQUErQyxxQkFBcUIsa0JBQWtCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLHdCQUF3QixvQkFBb0IsY0FBYyxtQkFBbUIseUNBQXlDLDJCQUEyQixHQUFHLG1CQUFtQiwrQ0FBK0MscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixhQUFhLGNBQWMsR0FBRyxnQkFBZ0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixHQUFHLDRCQUE0QixzQkFBc0IsOEJBQThCLEdBQUcsMkJBQTJCLHNCQUFzQixvQkFBb0IsOEJBQThCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQkFBbUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsOEJBQThCLG9CQUFvQixHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHVCQUF1QixvQkFBb0IsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDhCQUE4QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLGtCQUFrQix3QkFBd0IsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsa0NBQWtDLGdCQUFnQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGVBQWUsb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLFdBQVcsdUJBQXVCLGtCQUFrQix3QkFBd0IsdUJBQXVCLGdCQUFnQixHQUFHLGtDQUFrQyxpQ0FBaUMsbUNBQW1DLHFCQUFxQix1QkFBdUIsa0JBQWtCLHFEQUFxRCw4QkFBOEIsR0FBRyxLQUFLLDhCQUE4QixHQUFHLFlBQVksK0JBQStCLHNCQUFzQixHQUFHLHlHQUF5RyxVQUFVLGNBQWMsb0JBQW9CLDZCQUE2QixvQ0FBb0MsS0FBSyxHQUFHLG1CQUFtQjtBQUNuKzNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKd0M7QUFDaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGtCQUFrQiw0REFBTTtBQUN4QixnQkFBZ0IsNERBQU0sMEJBQTBCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckR5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBPQUEwTzs7QUFFMU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtEO0FBQ1A7QUFDTztBQUNRO0FBQ3FCO0FBQzdCO0FBQ1E7QUFDZDs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUNBQW1DO0FBQ3JEO0FBQ0EsRUFBRSwrREFBZTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbUVBQWlCLEtBQUsseURBQU87QUFDL0IsRUFBRSxxRUFBZTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBb0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbURBQVc7QUFDakMsc0JBQXNCLDRDQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdFQUF1QjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFhO0FBQ2pCLElBQUksdUVBQVk7QUFDaEI7QUFDQSxJQUFJLHlEQUFVO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNFQUFvQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Sm9EO0FBQ0U7QUFDUjtBQUNnQztBQUNwQzs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBWSxDQUFDLCtEQUFpQjtBQUNoQyxRQUFRLDBEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFlO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBWSxDQUFDLCtEQUFpQjtBQUNoQyxnQ0FBZ0Msb0VBQWtCO0FBQ2xELElBQUkscUVBQWU7QUFDbkIsSUFBSSxxRUFBaUI7QUFDckIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLCtDQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnNEO0FBQ1U7QUFDTTtBQUNPOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQW1CLENBQUMsK0RBQWlCO0FBQ3pDLElBQUkscUVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakIsUUFBUSw4REFBYztBQUN0QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZFQUFrQjtBQUN4QixNQUFNLCtEQUFlO0FBQ3JCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBWTtBQUNoQixJQUFJLHFFQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBb0I7QUFDdEI7QUFDQSwrQ0FBK0Msc0VBQW9CO0FBQ25FLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGNBQWMsOERBQVk7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZzRTtBQUNTO0FBQzdCO0FBQ3FCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIscUNBQXFDLG1FQUFpQjtBQUN0RCxNQUFNLHFFQUFlO0FBQ3JCLE1BQU0sb0VBQWtCO0FBQ3hCLE1BQU0sK0RBQWE7QUFDbkIsS0FBSztBQUNMLElBQUksK0RBQWU7QUFDbkI7QUFDQTs7QUFFQSxFQUFFLHdFQUF5QjtBQUMzQixFQUFFLHlEQUFVO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjJDO0FBQ1E7QUFDRztBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ047QUFDYTs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNENBQVc7QUFDOUIsdUJBQXVCLGdEQUFlO0FBQ3RDLHdCQUF3QixxREFBYTtBQUNyQyw0QkFBNEIseURBQWlCO0FBQzdDLHFCQUFxQixrREFBVTtBQUMvQix5QkFBeUIsc0RBQWM7QUFDdkMsc0JBQXNCLG1EQUFXO0FBQ2pDLG1CQUFtQixnREFBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsNERBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHdEQUFRO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRjJCO0FBQzJDO0FBQ3BCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUNBQW1DO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7O0FBRUgsRUFBRSwrREFBZTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUF1QjtBQUMzQixJQUFJLG9FQUFrQjtBQUN0QixJQUFJLCtEQUFhO0FBQ2pCO0FBQ0EsSUFBSSxrRUFBZ0I7QUFDcEI7O0FBRUE7QUFDQSxJQUFJLDhEQUFZLENBQUMsK0RBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxJQUFJLHFFQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRitEO0FBQ2Y7QUFDc0I7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHOztBQUVILEVBQUUsNkRBQVk7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUFZLENBQUMsNkRBQVksWUFBWSwwREFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQWU7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0J3QztBQUNRO0FBQ1A7QUFDSDtBQUNROztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0RBQUk7QUFDdkIsbUJBQW1CLDZDQUFRO0FBQzNCLHVCQUF1Qiw2Q0FBSztBQUM1Qix1QkFBdUIsb0RBQVE7QUFDL0IsMkJBQTJCLGlEQUFTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7QUFDSDtBQUNJO0FBQ0M7QUFDVjtBQUNNO0FBQ0Q7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0RBQVE7QUFDM0IsZ0JBQWdCLGdEQUFLO0FBQ3JCLG1CQUFtQixpREFBUTtBQUMzQixvQkFBb0IsaURBQVM7QUFDN0IsZUFBZSw0Q0FBSTtBQUNuQixrQkFBa0IsK0NBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQVU7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNENBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnlEO0FBQ0g7QUFDRTtBQUNIO0FBQ1Q7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBVTtBQUNaLEVBQUUsb0VBQXNCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFVO0FBQ1osRUFBRSxvRUFBc0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVU7QUFDWixFQUFFLG9FQUFzQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBVTtBQUNaLEVBQUUsb0VBQXNCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBb0I7QUFDdEI7QUFDQSxNQUFNLHFFQUFpQjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNFQUFvQjtBQUN0QjtBQUNBO0FBQ0EsUUFBUSxxRUFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsc0VBQW9CO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLHFFQUFnQjtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSxxRUFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o2QjtBQUNrRDs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0VBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsOERBQVksQ0FBQyw2REFBWTtBQUMzQixnQ0FBZ0Msb0VBQWtCO0FBQ2xELElBQUkscUVBQWU7QUFDbkIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFFQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxxRUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkd3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHVEQUFLLEVBQUUsdUVBQXFCO0FBQ3BELEVBQUUsdUVBQXFCO0FBQ3ZCLEVBQUUsaUVBQVc7QUFDYixNQUFNLGlFQUFlO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlFQUFlO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLFFBQVEsaUVBQWU7QUFDdkI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix1REFBSyxFQUFFLHVFQUFxQjtBQUNwRCxFQUFFLGlFQUFXO0FBQ2I7QUFDQSxRQUFRLGlFQUFlO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSCx3QkFBd0IsdURBQUssRUFBRSx1RUFBcUI7QUFDcEQsRUFBRSxpRUFBVztBQUNiO0FBQ0EsUUFBUSxpRUFBZTtBQUN2QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFLLEVBQUUsdUVBQXFCO0FBQ3BELEVBQUUsaUVBQVc7QUFDYjtBQUNBLG1CQUFtQixpRUFBZTtBQUNsQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkM7QUFLN0M7QUFDd0I7QUFDSztBQUNTO0FBQ087QUFDSjtBQUNaO0FBQ0c7QUFDTDtBQUNzQjtBQUM1Qjs7QUFFMUMsMERBQVk7QUFDWixpRUFBbUI7QUFDbkIsc0RBQVU7QUFDViw0REFBZ0I7QUFDaEIsMERBQVk7QUFDWixvRUFBd0I7QUFDeEIsMkRBQWE7QUFDYiw4REFBYTtBQUNiLG9GQUF5Qjs7QUFFekIscUNBQXFDLG9FQUFpQjtBQUN0RCx1Q0FBdUMsMkVBQXdCO0FBQy9ELG1DQUFtQyx1RUFBZ0I7QUFDbkQsdUNBQXVDLDJEQUFhO0FBQ3BELHFDQUFxQyw4REFBYztBQUNuRCxrRUFBa0Usb0RBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNXaXRoaW5JbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLW5ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtb3ItY2FuY2VsLXRhc2stZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC10b2RvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLWVkaXQtcG9wLXVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWF2YWlsYWJsZS10YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS10b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXQtY3VycmVudC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LWN1cnJlbnQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3LXRhc2staW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWlucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW1vdmUtcHJvamVjdC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1ncm91cGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9nZ2xlLW5hdi1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtc3RhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtdGhlbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290LmxpZ2h0VCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6IGJsYWNrO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcbiAgLS1uYXYtYmc6IHdoaXRlO1xcbiAgLS10YXNrLWJvcmRlcjogYmxhY2s7XFxuICAtLXRpdGxlLWNvbG9yOiBibGFjaztcXG4gIC0tdGhlbWUtYmc6IHdoaXRlO1xcbiAgLS1naXRodWItaWNvbjogYmxhY2s7XFxuICAtLWFuY2hvci1jb2xvcjogbmF2eTtcXG59XFxuOnJvb3QuZGFya1Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMDNjO1xcbiAgLS1ib3JkZXItY29sb3I6ICMxZjhkNGQ7XFxuICAtLW1haW4tY29sb3I6ICMxOTI3MzQ7XFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMDNjO1xcbiAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xcbiAgLS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC0taG9yaXpvbnRhbC1ydWxlOiB3aGl0ZTtcXG4gIC0tbWFpbi1oZWFkZXItYmdDb2xvcjogIzMwOGM1NmQ2O1xcbiAgLS1uYXYtaGVhZGVyOiByZ2IoMjU1IDI1NSAyNTUpO1xcbiAgLS1uYXYtYmc6ICMxNTIwMmI7XFxuICAtLXRhc2stYm9yZGVyOiB3aGl0ZTtcXG4gIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgLS10aGVtZS1iZzogIzE5MjczNDtcXG4gIC0tZ2l0aHViLWljb246IHdoaXRlO1xcbiAgLS1hbmNob3ItY29sb3I6IGFxdWE7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuLyogSEVBREVSIFNUWUxJTkcgKi9cXG5oZWFkZXIge1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi50aGVtZVRvZ2dsZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudUljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGhlbWUtbGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubWVudS1saWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5saWdodC1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uZGFyayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kYXJrLXZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogTUFJTiBCT0RZIFNUWUxJTkcgKi9cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi8qIE5hdiBTdHlsaW5nICovXFxubWFpbiA+IG5hdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubmF2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5uYXYtaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogTGlzdCBzdHlsaW5nICovXFxudWwge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMjI0LCAxODcsIDAuNik7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxubGk6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZlOWM3ZGM7XFxufVxcbmxpID4gaW1nIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgIzQxNTg0Yjk5IDAlLFxcbiAgICAjNWM1YzVjIDVweCxcXG4gICAgI2EwZTBiYjk5IDIlLFxcbiAgICAjYTBlMGJiOTkgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxuXFxuLyogSG9yaXpvbnRhbCBSdWxlICovXFxuaHIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0taG9yaXpvbnRhbC1ydWxlKTtcXG59XFxuXFxuLyogUHJvamVjdHMgYW5kIGZvcm0gc3R5bGluZyAqL1xcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmlucHV0LUxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxufVxcbi5pbnB1dC1MaTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmhvbWUgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyxcXG4ucHJvamVjdCA+IGgyOmZpcnN0LWNoaWxkID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG59XFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcbi5wcm9qZWN0cyA+IGltZzpsYXN0LW9mLXR5cGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBFZGl0IGRldGFpbHMgcG9wLXVwIHN0eWxpbmcgKi9cXG4uZGVsZXRlLWVkaXQtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiA0cHggM3B4IDEycHggMHB4IGJsYWNrO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMzhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTJweCAwcHggYmxhY2s7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcCB7XFxuICBwYWRkaW5nOiAxcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcCB7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLm5hbWUtaW5wdXQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uIHN0eWxpbmcgKi9cXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmF2LWhlYWRlcik7XFxufVxcbi5tYWluU2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZsZXg6IDM7XFxufVxcbi5tYWluSGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuLyogVGFzayBpbnB1dCBmb3JtIHN0eWxpbmcgKi9cXG4uYWRkLXRhc2stc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmFkZC10YXNrLXNlY3Rpb24gPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi50YXNrLWlucHV0LWZvcm06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnKTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuLmJ0bi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmV3LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMDUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRhc2stYm9yZGVyKTtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5uZXctdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxODksIDEwMywgMC4wMik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnVuZG9uZS10YXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udW5kb25lLXRhc2stZGFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvbmUtdGFzayB7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uc3Rhci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjVweDtcXG59XFxuLnVuY2hlY2tlZC1zdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVuY2hlY2tlZC1zdGFyLWRhcmsge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2VkLXN0YXIge1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgd2lkdGg6IDIxcHg7XFxufVxcbi5kYXRlLXNwYW4gPiBwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnB4IDZweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4udW5jaGVjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVja2VkLXN0YXIsXFxuLmRvbmUtdGFzayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVjayxcXG4uZG9uZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgei1pbmRleDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uZGF0ZS1zcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm15LXRhc2stZG90cyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm15LXRhc2stZG90cy1kYXJrIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRhdGUtYW5kLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogRk9PVEVSIFNUWUxJTkcgKi9cXG5mb290ZXIge1xcbiAgLS1mb290ZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbmkge1xcbiAgY29sb3I6IHZhcigtLWdpdGh1Yi1pY29uKTtcXG59XFxuYVt0YXJnZXRde1xcbiAgY29sb3I6IHZhcigtLWFuY2hvci1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVXNlcyBmbGV4LWRpcmVjdGlvbiBjb2x1bW4gZm9yIHNjcmVlbiBzaXplcyBiZWxvdyA2MDBweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBtYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLDRCQUE0Qjs7RUFFNUIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw0Q0FBNEM7RUFDNUMseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIs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RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLDRCQUE0Qjs7RUFFNUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRTtJQUNFLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290LmxpZ2h0VCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6IGJsYWNrO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcbiAgLS1uYXYtYmc6IHdoaXRlO1xcbiAgLS10YXNrLWJvcmRlcjogYmxhY2s7XFxuICAtLXRpdGxlLWNvbG9yOiBibGFjaztcXG4gIC0tdGhlbWUtYmc6IHdoaXRlO1xcbiAgLS1naXRodWItaWNvbjogYmxhY2s7XFxuICAtLWFuY2hvci1jb2xvcjogbmF2eTtcXG59XFxuOnJvb3QuZGFya1Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMDNjO1xcbiAgLS1ib3JkZXItY29sb3I6ICMxZjhkNGQ7XFxuICAtLW1haW4tY29sb3I6ICMxOTI3MzQ7XFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIzMDNjO1xcbiAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xcbiAgLS1mb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC0taG9yaXpvbnRhbC1ydWxlOiB3aGl0ZTtcXG4gIC0tbWFpbi1oZWFkZXItYmdDb2xvcjogIzMwOGM1NmQ2O1xcbiAgLS1uYXYtaGVhZGVyOiByZ2IoMjU1IDI1NSAyNTUpO1xcbiAgLS1uYXYtYmc6ICMxNTIwMmI7XFxuICAtLXRhc2stYm9yZGVyOiB3aGl0ZTtcXG4gIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgLS10aGVtZS1iZzogIzE5MjczNDtcXG4gIC0tZ2l0aHViLWljb246IHdoaXRlO1xcbiAgLS1hbmNob3ItY29sb3I6IGFxdWE7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG59XFxuXFxuLyogSEVBREVSIFNUWUxJTkcgKi9cXG5oZWFkZXIge1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi50aGVtZVRvZ2dsZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudUljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGhlbWUtbGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubWVudS1saWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5saWdodC1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uZGFyayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kYXJrLXZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogTUFJTiBCT0RZIFNUWUxJTkcgKi9cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi8qIE5hdiBTdHlsaW5nICovXFxubWFpbiA+IG5hdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ubmF2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5uYXYtaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogTGlzdCBzdHlsaW5nICovXFxudWwge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMjI0LCAxODcsIDAuNik7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxubGk6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZlOWM3ZGM7XFxufVxcbmxpID4gaW1nIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgIzQxNTg0Yjk5IDAlLFxcbiAgICAjNWM1YzVjIDVweCxcXG4gICAgI2EwZTBiYjk5IDIlLFxcbiAgICAjYTBlMGJiOTkgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxuXFxuLyogSG9yaXpvbnRhbCBSdWxlICovXFxuaHIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0taG9yaXpvbnRhbC1ydWxlKTtcXG59XFxuXFxuLyogUHJvamVjdHMgYW5kIGZvcm0gc3R5bGluZyAqL1xcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmlucHV0LUxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxufVxcbi5pbnB1dC1MaTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmJ1dHRvbi1jbGFzcyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAzMHB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmhvbWUgPiBoMjpmaXJzdC1jaGlsZCA+IGltZyxcXG4ucHJvamVjdCA+IGgyOmZpcnN0LWNoaWxkID4gaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDdweDtcXG59XFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcbi5wcm9qZWN0cyA+IGltZzpsYXN0LW9mLXR5cGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFkZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBFZGl0IGRldGFpbHMgcG9wLXVwIHN0eWxpbmcgKi9cXG4uZGVsZXRlLWVkaXQtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiA0cHggM3B4IDEycHggMHB4IGJsYWNrO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMzhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTJweCAwcHggYmxhY2s7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcCB7XFxuICBwYWRkaW5nOiAxcHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcCB7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uZGVsZXRlLWVkaXQtZGl2ID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC10YXNrID4gcDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDc4LCAwLCA3OCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTk4LCAxNDIsIDAuMyk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLm5hbWUtaW5wdXQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uIHN0eWxpbmcgKi9cXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmF2LWhlYWRlcik7XFxufVxcbi5tYWluU2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZsZXg6IDM7XFxufVxcbi5tYWluSGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuLyogVGFzayBpbnB1dCBmb3JtIHN0eWxpbmcgKi9cXG4uYWRkLXRhc2stc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmFkZC10YXNrLXNlY3Rpb24gPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCA1MiwgMTUzLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi50YXNrLWlucHV0LWZvcm06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJnKTtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdiA+IGlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuLmJ0bi1jbGFzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uYnRuLWNsYXNzID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubmV3LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMDUpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRhc2stYm9yZGVyKTtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5uZXctdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxODksIDEwMywgMC4wMik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLnVuZG9uZS10YXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udW5kb25lLXRhc2stZGFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvbmUtdGFzayB7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLnRpdGxlLWFuZC1kZXNjLWRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4uc3Rhci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjVweDtcXG59XFxuLnVuY2hlY2tlZC1zdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVuY2hlY2tlZC1zdGFyLWRhcmsge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2VkLXN0YXIge1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgd2lkdGg6IDIxcHg7XFxufVxcbi5kYXRlLXNwYW4gPiBwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnB4IDZweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4udW5jaGVjayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVja2VkLXN0YXIsXFxuLmRvbmUtdGFzayB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jaGVjayxcXG4uZG9uZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgei1pbmRleDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uZGF0ZS1zcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm15LXRhc2stZG90cyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm15LXRhc2stZG90cy1kYXJrIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRhdGUtYW5kLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogRk9PVEVSIFNUWUxJTkcgKi9cXG5mb290ZXIge1xcbiAgLS1mb290ZXItaGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbmkge1xcbiAgY29sb3I6IHZhcigtLWdpdGh1Yi1pY29uKTtcXG59XFxuYVt0YXJnZXRde1xcbiAgY29sb3I6IHZhcigtLWFuY2hvci1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVXNlcyBmbGV4LWRpcmVjdGlvbiBjb2x1bW4gZm9yIHNjcmVlbiBzaXplcyBiZWxvdyA2MDBweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICBtYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtJbnRlcnZhbH0gaW50ZXJ2YWwgLSB0aGUgaW50ZXJ2YWwgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB3aXRoaW4gdGhlIGludGVydmFsXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBUaGUgc3RhcnQgb2YgYW4gaW50ZXJ2YWwgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IERhdGUgaW4gaW50ZXJ2YWwgY2Fubm90IGJlIGBJbnZhbGlkIERhdGVgXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAzKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIG91dHNpZGUgb2YgdGhlIGludGVydmFsOlxuICogaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDcpXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBzdGFydDpcbiAqIGlzV2l0aGluSW50ZXJ2YWwoZGF0ZSwgeyBzdGFydCwgZW5kOiBkYXRlIH0pIC8vID0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGRhdGUgZXF1YWwgdG8gaW50ZXJ2YWwgZW5kOlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0OiBkYXRlLCBlbmQgfSkgLy8gPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1dpdGhpbkludGVydmFsKGRpcnR5RGF0ZSwgaW50ZXJ2YWwpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgc3RhcnRUaW1lID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KS5nZXRUaW1lKCk7XG4gIHZhciBlbmRUaW1lID0gdG9EYXRlKGludGVydmFsLmVuZCkuZ2V0VGltZSgpOyAvLyBUaHJvdyBhbiBleGNlcHRpb24gaWYgc3RhcnQgZGF0ZSBpcyBhZnRlciBlbmQgZGF0ZSBvciBpZiBhbnkgZGF0ZSBpcyBgSW52YWxpZCBEYXRlYFxuXG4gIGlmICghKHN0YXJ0VGltZSA8PSBlbmRUaW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGludGVydmFsJyk7XG4gIH1cblxuICByZXR1cm4gdGltZSA+PSBzdGFydFRpbWUgJiYgdGltZSA8PSBlbmRUaW1lO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdE1lbnUgZnJvbSBcIi4vaWNvbnMvcHJvamVjdE1lbnUucG5nXCI7XG5pbXBvcnQgUHJvamVjdERvdHMgZnJvbSBcIi4vaWNvbnMvZG90cy5wbmdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJbnB1dCB9IGZyb20gXCIuL3Byb2plY3QtaW5wdXRcIjtcbmltcG9ydCB7IHBvcFVwRGVsZXRlQW5kRWRpdCB9IGZyb20gXCIuL2RlbGV0ZS1lZGl0LXBvcC11cFwiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB0b2RvQWRkQnV0dG9uIH0gZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uXCI7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9hZGQtb3ItY2FuY2VsLXRhc2stZXZlbnRcIjtcbmltcG9ydCB7IHRvZ2dsZUljb24gfSBmcm9tIFwiLi90b2dnbGUtdGhlbWVcIjtcblxubGV0IHByb2plY3RBcnJheUluZGV4O1xubGV0IHNlbGVjdGVkUHJvamVjdEluZGV4O1xuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0lmQW55Rm9ybUV4aXN0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZkFueUZvcm1FeGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIGlmIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFswXSA9PSBcImlucHV0LUxpXCIpIHJldHVybjtcbiAgZ2V0UHJvamVjdElucHV0KCk7XG4gIGNhbmNlbFByb2plY3RJbnB1dCgpO1xuICBhZGRQcm9qZWN0VG9MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RJbnB1dCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUlucHV0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUlucHV0Rm9ybSgpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIilcbiAgICAucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1MaVwiKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtaW5wdXRcIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCk7XG4gIHB1c2hOZXdQcm9qZWN0SW5zdGFuY2UoKTtcbiAgcmVtb3ZlUHJvamVjdExpc3RzKCk7XG4gIGNyZWF0ZVByb2plY3QoKTtcbiAgc2V0U2VsZWN0ZWRDbGFzcygpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3RJbmRleCgpIHtcbiAgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPSB1bmRlZmluZWQ7XG4gIGNvbnN0IGdldFByb2plY3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIikuY2hpbGROb2RlcztcbiAgY29uc3QgZ2V0UHJvamVjdEFyciA9IEFycmF5LmZyb20oZ2V0UHJvamVjdE5vZGUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdldFByb2plY3RBcnIubGVuZ3RoOyBpKyspXG4gICAgaWYgKGdldFByb2plY3RBcnJbaV0uY2xhc3NMaXN0WzFdID09PSBcInNlbGVjdGVkXCIpXG4gICAgICBzZWxlY3RlZFByb2plY3RJbmRleCA9IGdldFByb2plY3RBcnIuaW5kZXhPZihnZXRQcm9qZWN0QXJyW2ldKTtcbn1cblxuZnVuY3Rpb24gcHVzaE5ld1Byb2plY3RJbnN0YW5jZSgpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpLnZhbHVlKSk7XG4gIHNldFByb2plY3RBcnJheSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0TGlzdHMoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIHdoaWxlIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiBBZGRQcm9qZWN0TmFtZVRvTGlzdChwcm9qZWN0KSk7XG59XG5cbi8vIFJlLWFwcGx5IHNlbGVjdGVkIGNsYXNzIHRvIHNhbWUgZWxlbWVudFxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRDbGFzcygpIHtcbiAgY29uc3Qgc2V0UHJvamVjdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKS5jaGlsZE5vZGVzO1xuICBjb25zdCBzZXRQcm9qZWN0QXJyID0gQXJyYXkuZnJvbShzZXRQcm9qZWN0Tm9kZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0UHJvamVjdEFyci5sZW5ndGg7IGkrKylcbiAgICBpZiAoc2V0UHJvamVjdEFyci5pbmRleE9mKHNldFByb2plY3RBcnJbaV0pID09PSBzZWxlY3RlZFByb2plY3RJbmRleClcbiAgICAgIHNldFByb2plY3RBcnJbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBBZGRQcm9qZWN0TmFtZVRvTGlzdChwcm9qKSB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBteVByb2plY3REb3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbXlQcm9qZWN0TWVudSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVByb2plY3REb3RzID0gbmV3IEltYWdlKCk7XG5cbiAgbXlQcm9qZWN0TWVudS5zcmMgPSBQcm9qZWN0TWVudTtcbiAgbXlQcm9qZWN0RG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qLm5hbWU7XG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c1wiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZVwiKTtcbiAgcHJvamVjdC5hcHBlbmQobXlQcm9qZWN0TWVudSwgcHJvamVjdE5hbWUpO1xuICBteVByb2plY3REb3RzRGl2LmFwcGVuZENoaWxkKG15UHJvamVjdERvdHMpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKG15UHJvamVjdERvdHNEaXYpO1xuICBhZGRQcm9qZWN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2plY3QsIGFkZFByb2plY3QpO1xuXG4gIG15UHJvamVjdERvdHMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcG9wVXBEZWxldGVBbmRFZGl0LmJpbmQobXlQcm9qZWN0RG90cywgcHJvailcbiAgKTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0UHJvamVjdEZvclVzZS5iaW5kKHByb2plY3QsIHByb2opKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdEZvclVzZShwcm9qLCBlKSB7XG4gIGdldFRhc2tBcnJheShwcm9qKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0c1wiIHx8IGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgcmVtb3ZlVGFza3MoKTtcbiAgICB0b2RvQWRkQnV0dG9uKCk7XG4gICAgZGlzcGxheVRhc2tzKGUpO1xuICAgIHNldEhlYWRlclRvUHJvamVjdE5hbWUocHJvaik7XG4gICAgdG9nZ2xlSWNvbigpO1xuICAgIHN0eWxlU2VsZWN0ZWRMaXN0LmNhbGwodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3R5bGVTZWxlY3RlZExpc3QoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgaWYgKGxpc3QuY2xhc3NMaXN0WzFdID09PSBcInNlbGVjdGVkXCIgfHwgbGlzdC5jbGFzc0xpc3RbMF0gPT09IFwic2VsZWN0ZWRcIilcbiAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICB9KTtcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIHNldEhlYWRlclRvUHJvamVjdE5hbWUocHJvaikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5IZWFkZXJcIikuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0FycmF5KHByb2opIHtcbiAgcHJvamVjdEFycmF5SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza3MoKSB7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1zZWN0aW9uXCIpO1xuICBpZiAoISFhZGRUYXNrU2VjdGlvbilcbiAgICB3aGlsZSAoYWRkVGFza1NlY3Rpb24uZmlyc3RDaGlsZClcbiAgICAgIGFkZFRhc2tTZWN0aW9uLnJlbW92ZUNoaWxkKGFkZFRhc2tTZWN0aW9uLmxhc3RDaGlsZCk7XG59XG5cbmV4cG9ydCB7XG4gIGFkZE5ld1Byb2plY3QsXG4gIHJlbW92ZVRhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0TGlzdHMsXG4gIHByb2plY3RBcnJheUluZGV4LFxuICBzdHlsZVNlbGVjdGVkTGlzdCxcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgsXG4gIHNldFNlbGVjdGVkQ2xhc3MsXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdEFycmF5SW5kZXggfSBmcm9tIFwiLi9hZGQtbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10b2RvLWxpc3RcIjtcbmltcG9ydCB7IG5ld1Rhc2tJbnB1dCB9IGZyb20gXCIuL25ldy10YXNrLWlucHV0XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSwgVG9kb1Rhc2sgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB0b2dnbGVJY29uIH0gZnJvbSBcIi4vdG9nZ2xlLXRoZW1lXCI7XG5cbmZ1bmN0aW9uIGFkZEFuZENhbmNlbFRhc2soZSkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBjb25zdCBpbnB1dFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0LWZvcm1cIik7XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10YXNrLWJ1dHRvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdUYXNrSW5wdXQoKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJjYW5jZWwtdGFza1wiKSB7XG4gICAgaW5wdXRUYXNrRm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlucHV0VGFza0Zvcm0pO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10YXNrXCIpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXQtZm9ybVwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblxuICAgIHB1c2hUb1Rhc2tBcnJheSgpO1xuICAgIHJlbW92ZVRhc2tGcm9tTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIHRvZ2dsZUljb24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdXNoVG9UYXNrQXJyYXkoKSB7XG4gIHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXlJbmRleF0udGFza0FycmF5LnB1c2goXG4gICAgbmV3IFRvZG9UYXNrKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWFyZWEtZm9ybVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpLnZhbHVlXG4gICAgKVxuICApO1xuICBzZXRQcm9qZWN0QXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21MaXN0KCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBpZiAoISF0YXNrTGlzdCkge1xuICAgIHdoaWxlICh0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXlJbmRleF0udGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgVG9kb1Rhc2sucHJvdG90eXBlKTtcbiAgICBzZXRQcm9qZWN0QXJyYXkoKTtcbiAgICBkaXNwbGF5QWRkZWRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzayk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBbmRDYW5jZWxUYXNrLCBkaXNwbGF5VGFza3MsIHJlbW92ZVRhc2tGcm9tTGlzdCB9OyIsImltcG9ydCBBZGRUYXNrIGZyb20gXCIuL2ljb25zL2FkZFRhc2sucG5nXCI7XG5cbmZ1bmN0aW9uIHRvZG9BZGRCdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1zZWN0aW9uXCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbXlBZGRUYXNrID0gbmV3IEltYWdlKCk7XG5cbiAgbXlBZGRUYXNrLnNyYyA9IEFkZFRhc2s7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kKG15QWRkVGFzaywgXCJBZGQgVGFza1wiKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcblxuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG59XG5cbmV4cG9ydCB7IHRvZG9BZGRCdXR0b24gfTsiLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXlJbmRleCB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFza0Zyb21MaXN0IH0gZnJvbSBcIi4vYWRkLW9yLWNhbmNlbC10YXNrLWV2ZW50XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IGNsZWFyVGFzaywgZGlzcGxheUFsbFRhc2tzLCBzaG93R3JvdXBUaXRsZSB9IGZyb20gXCIuL3Rhc2stZ3JvdXBpbmdcIjtcblxubGV0IHByb2plY3RJbmRleDtcbmxldCB0YXNrSW5kZXg7XG5cbmZ1bmN0aW9uIHBvcFVwRGVsZXRlQW5kRWRpdChuYW1lT2ZBcnJheSkge1xuICBsZXQgbGlzdENoaWxkcmVuO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwibmV3LXRhc2tcIikgbGlzdENoaWxkcmVuID0gNDtcbiAgZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwicHJvamVjdHNcIikgbGlzdENoaWxkcmVuID0gMztcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gbGlzdENoaWxkcmVuKSByZXR1cm47XG5cbiAgY29uc3QgZGVsZXRlT3JFZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdFswXSA9PSBcInByb2plY3RzXCIpXG4gICAgZGVsZXRlT3JFZGl0RGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZWRpdC1kaXZcIik7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKVxuICAgIGRlbGV0ZU9yRWRpdERpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWVkaXQtdGFza1wiKTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwibmV3LXRhc2tcIilcbiAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIpO1xuICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RbMF0gPT0gXCJwcm9qZWN0c1wiKVxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuXG4gIGVkaXRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZU9yRWRpdERpdi5hcHBlbmQoZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QpO1xuICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkZWxldGVPckVkaXREaXYpO1xuXG4gIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIGRlbGV0ZUZyb21MaXN0LmJpbmQoZGVsZXRlUHJvamVjdClcbiAgKTtcbiAgZ2V0SW5kZXguY2FsbCh0aGlzLCBuYW1lT2ZBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZyb21MaXN0KCkge1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcInByb2plY3RzXCIpIHtcbiAgICAvLyBBY3Rpb24gd2hlbiBwcm9qZWN0IGlzIGRlbGV0ZWRcbiAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICApO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEFycmF5SW5kZXgsIDEpO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPT09XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkhlYWRlclwiKS5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuICAgICAgKSB7XG4gICAgICAgIC8qKiBJZiB0aGUgcHJvamVjdCBiZWluZyBkZWxldGVkIGlzIHRoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgICogdGFrZSBmb2xsb3dpbmcgYWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYXJUYXNrKCk7XG4gICAgICAgIHNob3dHcm91cFRpdGxlKFwiRGVsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIFRoaXMgYWN0aW9uIHVwZGF0ZXMgdGhlIHRhc2sgZ3JvdXBpbmcgc2VjdGlvbiBpZiBwcm9qZWN0IGlzIGJlaW5nXG4gICAgICAgKiBkZWxldGVkIHdpdGhvdXQgZmlyc3QgYmVpbmcgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIHJlbW92ZVRhc2tGcm9tTGlzdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEFjdGlvbiB3aGVuIHRhc2sgaXMgZGVsZXRlZFxuICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG4gICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICk7XG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4KG5hbWVPZkFycmF5KSB7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwicHJvamVjdHNcIilcbiAgICBnZXRQcm9qZWN0SW5kZXgobmFtZU9mQXJyYXkpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcIm5ldy10YXNrXCIpXG4gICAgZ2V0VGFza0luZGV4KG5hbWVPZkFycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KG5hbWVPZkFycmF5KSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sgPT09IG5hbWVPZkFycmF5KSBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJbmRleChuYW1lT2ZBcnJheSkge1xuICBnZXRQcm9qZWN0SW5kZXgobmFtZU9mQXJyYXkpO1xuICB0YXNrSW5kZXggPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50YXNrQXJyYXkuaW5kZXhPZihuYW1lT2ZBcnJheSk7XG59XG5cbmV4cG9ydCB7IHBvcFVwRGVsZXRlQW5kRWRpdCwgcHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIGdldFByb2plY3RJbmRleCB9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3RMaXN0cyB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi90YXNrLWdyb3VwaW5nXCI7XG5pbXBvcnQgeyBnZXRUaGVtZUNob2ljZUZyb21TdG9yYWdlLCB0b2dnbGVJY29uIH0gZnJvbSBcIi4vdG9nZ2xlLXRoZW1lXCI7XG5cbi8vIERpc3BsYXkgYWxsIGF2YWlsYWJsZSBwcm9qZWN0cyBhbmQgdGFza3Mgb24gcGFnZSBsb2FkLlxuZnVuY3Rpb24gRGlzcGxheUFsbFRhc2tzT25QYWdlTG9hZCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpID09PSBudWxsKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIGVsc2Uge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgUHJvamVjdC5wcm90b3R5cGUpO1xuICAgICAgc2V0UHJvamVjdEFycmF5KCk7XG4gICAgICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgZ2V0VGhlbWVDaG9pY2VGcm9tU3RvcmFnZSgpO1xuICB0b2dnbGVJY29uKCk7XG59XG5cbmV4cG9ydCB7IERpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQgfTsiLCJpbXBvcnQgUHJvamVjdERvdHMgZnJvbSBcIi4vaWNvbnMvZG90cy5wbmdcIjtcbmltcG9ydCBQcm9qZWN0RG90c0RhcmsgZnJvbSBcIi4vaWNvbnMvZG90c0RhcmsucG5nXCI7XG5pbXBvcnQgVW5jaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy91bmNoZWNrZWRTdGFyLnBuZ1wiO1xuaW1wb3J0IFVuY2hlY2tlZFN0YXJEYXJrIGZyb20gXCIuL2ljb25zL3VuY2hlY2tlZFN0YXJEYXJrLnBuZ1wiO1xuaW1wb3J0IFVuZG9uZVRhc2sgZnJvbSBcIi4vaWNvbnMvdW5kb25lVGFzay5wbmdcIjtcbmltcG9ydCBVbmRvbmVUYXNrRGFyayBmcm9tIFwiLi9pY29ucy91bmRvbmVUYXNrRGFyay5wbmdcIjtcbmltcG9ydCBDaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy9jaGVja2VkU3Rhci5wbmdcIjtcbmltcG9ydCBEb25ldGFzayBmcm9tIFwiLi9pY29ucy9kb25lVGFzay5wbmdcIjtcbmltcG9ydCB7IGFkZENsYXNzLCB0b2dnbGVFdmVudHMgfSBmcm9tIFwiLi90b2dnbGUtc3RhdGVzXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRlZFRhc2tzKHRpdGxlLCBkZXNjLCBkYXRlLCB0YXNrKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aXRsZUFuZERlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVBbmRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBteVRhc2tEb3RzID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VGFza0RvdHNEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5jaGVja2VkU3RhciA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuY2hlY2tlZFN0YXJEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5kb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuZG9uZVRhc2tEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15Q2hlY2tlZFN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlEb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIGRhdGVJbnB1dC50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgbXlUYXNrRG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgbXlUYXNrRG90c0Rhcmsuc3JjID0gUHJvamVjdERvdHNEYXJrO1xuICBteVVuY2hlY2tlZFN0YXIuc3JjID0gVW5jaGVja2VkU3RhcjtcbiAgbXlVbmNoZWNrZWRTdGFyRGFyay5zcmMgPSBVbmNoZWNrZWRTdGFyRGFyaztcbiAgbXlVbmRvbmVUYXNrLnNyYyA9IFVuZG9uZVRhc2s7XG4gIG15VW5kb25lVGFza0Rhcmsuc3JjID0gVW5kb25lVGFza0Rhcms7XG4gIG15Q2hlY2tlZFN0YXIuc3JjID0gQ2hlY2tlZFN0YXI7XG4gIG15RG9uZVRhc2suc3JjID0gRG9uZXRhc2s7XG5cbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIik7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVBbmREZXNjRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1hbmQtZGVzYy1kaXZcIik7XG4gIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NcIik7XG4gIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkYXRlLXNwYW5cIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dFwiKTtcbiAgc3RhckRpdi5jbGFzc0xpc3QuYWRkKFwic3Rhci1kaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuICBteVVuY2hlY2tlZFN0YXIuY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZC1zdGFyXCIsIFwibGlnaHRcIik7XG4gIG15VW5jaGVja2VkU3RhckRhcmsuY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZC1zdGFyLWRhcmtcIiwgXCJkYXJrXCIpO1xuICBteUNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXN0YXJcIik7XG4gIG15VW5kb25lVGFzay5jbGFzc0xpc3QuYWRkKFwidW5kb25lLXRhc2tcIiwgXCJsaWdodFwiKTtcbiAgbXlVbmRvbmVUYXNrRGFyay5jbGFzc0xpc3QuYWRkKFwidW5kb25lLXRhc2stZGFya1wiLCBcImRhcmtcIik7XG4gIG15RG9uZVRhc2suY2xhc3NMaXN0LmFkZChcImRvbmUtdGFza1wiKTtcbiAgbXlUYXNrRG90cy5jbGFzc0xpc3QuYWRkKFwibXktdGFzay1kb3RzXCIsIFwibGlnaHRcIik7XG4gIG15VGFza0RvdHNEYXJrLmNsYXNzTGlzdC5hZGQoXCJteS10YXNrLWRvdHMtZGFya1wiLCBcImRhcmtcIik7XG4gIGRhdGVBbmRTcGFuLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWFuZC1zcGFuXCIpO1xuXG4gIHRpdGxlQW5kRGVzY0Rpdi5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzYyk7XG4gIGRhdGVTcGFuLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIGRhdGVBbmRTcGFuLmFwcGVuZChkYXRlU3BhbiwgbXlUYXNrRG90cywgbXlUYXNrRG90c0RhcmspO1xuICBzdGFyRGl2LmFwcGVuZChteVVuY2hlY2tlZFN0YXIsIG15Q2hlY2tlZFN0YXIsIG15VW5jaGVja2VkU3RhckRhcmspO1xuICB0YXNrRGl2LmFwcGVuZChteVVuZG9uZVRhc2ssIG15RG9uZVRhc2ssIG15VW5kb25lVGFza0RhcmspO1xuICBuZXdUYXNrLmFwcGVuZCh0YXNrRGl2LCB0aXRsZUFuZERlc2NEaXYsIHN0YXJEaXYsIGRhdGVBbmRTcGFuKTtcblxuICAvLyBDaGVja3MgaWYgdGFza0xpc3QgZm9yIGVhY2ggcHJvamVjdCBpcyBhdmFpbGFibGUgZWxzZSBkaXNwbGF5IGFsbCB0YXNrc1xuICBpZiAoISF0YXNrTGlzdCkgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIGFkZFRhc2tCdXR0b24pO1xuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKS5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICB0b2dnbGVFdmVudHMoXG4gICAgdGFzayxcbiAgICBteVRhc2tEb3RzLFxuICAgIG15RG9uZVRhc2ssXG4gICAgbXlVbmRvbmVUYXNrLFxuICAgIG15VGFza0RvdHNEYXJrLFxuICAgIG15Q2hlY2tlZFN0YXIsXG4gICAgbXlVbmRvbmVUYXNrRGFyayxcbiAgICBteVVuY2hlY2tlZFN0YXIsXG4gICAgbXlVbmNoZWNrZWRTdGFyRGFya1xuICApO1xuXG4gIGFkZENsYXNzKHRhc2ssIG15RG9uZVRhc2ssIHRhc2tUaXRsZSwgdGFza0Rlc2MsIGRhdGVJbnB1dCwgbXlDaGVja2VkU3Rhcik7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH07IiwiaW1wb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgsXG4gIHByb2plY3RBcnJheUluZGV4LFxuICByZW1vdmVQcm9qZWN0TGlzdHMsXG4gIHNldFNlbGVjdGVkQ2xhc3MsXG59IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SW5wdXQgfSBmcm9tIFwiLi9wcm9qZWN0LWlucHV0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUVkaXRpbmcoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIC8vIEZvciBsb29wIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGZvcm0gb3BlbmVkLCBpZiB0cnVlIGl0IHJldHVybnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIGlmIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdFswXSA9PSBcImlucHV0LUxpXCIpIHJldHVybjtcblxuICBjb25zdCBnZXROYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5jaGlsZHJlblsxXTtcbiAgICBsZXQgcHJldmlvdXNOYW1lID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHsgcHJldmlvdXNOYW1lLCBwcm9qZWN0TmFtZSB9O1xuICB9KSgpO1xuXG4gIGdldFByb2plY3RJbnB1dCgpO1xuXG4gIGNvbnN0IGluc2VydEdldFByb2plY3RJbnB1dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGRlblwiKS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtTGlcIik7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gZ2V0TmFtZS5wcmV2aW91c05hbWU7XG4gICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKGlucHV0Rm9ybSwgbmV4dEVsZW1lbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dEZvcm0sXG4gICAgICBuYW1lSW5wdXQsXG4gICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiB1cGRhdGVOZXdQcm9qZWN0TmFtZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGVkaXRQcm9qZWN0QXJyYXlOYW1lKCk7XG4gICAgcmVwbGFjZU9sZE5hbWVJbkRvbSgpO1xuICAgIHJlbW92ZUlucHV0Rm9ybSgpO1xuICAgIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCk7XG4gICAgcmVtb3ZlUHJvamVjdExpc3RzKCk7XG4gICAgY3JlYXRlUHJvamVjdCgpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBzZXRTZWxlY3RlZENsYXNzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdEFycmF5TmFtZSgpIHtcbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5SW5kZXhdLnNldE5hbWUoXG4gICAgICBpbnNlcnRHZXRQcm9qZWN0SW5wdXQubmFtZUlucHV0LnZhbHVlXG4gICAgKTtcbiAgICBzZXRQcm9qZWN0QXJyYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VPbGROYW1lSW5Eb20oKSB7XG4gICAgZ2V0TmFtZS5wcm9qZWN0TmFtZSA9IGluc2VydEdldFByb2plY3RJbnB1dC5uYW1lSW5wdXQudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJbnB1dEZvcm0oKSB7XG4gICAgaW5zZXJ0R2V0UHJvamVjdElucHV0LmlucHV0Rm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuICAgICAgaW5zZXJ0R2V0UHJvamVjdElucHV0LmlucHV0Rm9ybVxuICAgICk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgLy8gRXZlbnRMaXN0ZW5lciBvbiBjYW5jZWwgYW5kIGFkZCBidXR0b25zXG4gICgoKSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcmVtb3ZlSW5wdXRGb3JtKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB1cGRhdGVOZXdQcm9qZWN0TmFtZSk7XG4gIH0pKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDdXJlbnRQcm9qZWN0KGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXRcIikgZW5hYmxlRWRpdGluZygpO1xufVxuXG5leHBvcnQgeyBlZGl0Q3VyZW50UHJvamVjdCB9OyIsImltcG9ydCB7IHByb2plY3RJbmRleCwgdGFza0luZGV4IH0gZnJvbSBcIi4vZGVsZXRlLWVkaXQtcG9wLXVwXCI7XG5pbXBvcnQgeyBuZXdUYXNrSW5wdXQgfSBmcm9tIFwiLi9uZXctdGFzay1pbnB1dFwiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5cbmZ1bmN0aW9uIGVuYWJsZVRhc2tFZGl0aW5nKCkge1xuICAvLyBjdXJyZW50VGFzayBpcyB0aGUgY3VycmVudCB0YXNrIGJlaW5nIGVkaXRlZFxuICBjb25zdCBjdXJyZW50VGFzayA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuXG4gIGlmICghIXRhc2tMaXN0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKHRhc2tMaXN0LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0WzBdID09IFwidGFzay1pbnB1dC1mb3JtXCIpIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGdldE5hbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIEhpZGVzIGN1cnJlbnQgdGFzayBiZWluZyBlZGl0ZWRcbiAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgbGV0IHRhc2tUaXRsZSA9IGN1cnJlbnRUYXNrLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXTtcbiAgICBsZXQgdGFza0Rlc2MgPSBjdXJyZW50VGFzay5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV07XG4gICAgbGV0IHRhc2tEYXRlID0gY3VycmVudFRhc2suY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrRGVzYywgdGFza0RhdGUgfTtcbiAgfSkoKTtcblxuICBuZXdUYXNrSW5wdXQoKTtcblxuICBjb25zdCBpbnNlcnROZXdJbnB1dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJldmlvdXNUYXNrID0gY3VycmVudFRhc2submV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5wdXQtZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpO1xuICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1hcmVhLWZvcm1cIik7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0LWZvcm1cIik7XG5cbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gZ2V0TmFtZS50YXNrVGl0bGUudGV4dENvbnRlbnQ7XG4gICAgaW5wdXREZXNjLnZhbHVlID0gZ2V0TmFtZS50YXNrRGVzYy50ZXh0Q29udGVudDtcbiAgICBpbnB1dERhdGUudmFsdWUgPSBnZXROYW1lLnRhc2tEYXRlLnRleHRDb250ZW50O1xuXG4gICAgLy8gSWYgdGFza0xpc3QgaXMgbm90IGZvdW5kLCBpbnNlcnQgdGFza0lucHV0Rm9ybSBpbiBhbGwgdGFzayBzZWN0aW9uXG4gICAgaWYgKCEhdGFza0xpc3QpIHRhc2tMaXN0Lmluc2VydEJlZm9yZSh0YXNrSW5wdXRGb3JtLCBwcmV2aW91c1Rhc2spO1xuICAgIGVsc2VcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLXNlY3Rpb25cIilcbiAgICAgICAgLmluc2VydEJlZm9yZSh0YXNrSW5wdXRGb3JtLCBjdXJyZW50VGFzay5uZXh0U2libGluZyk7XG5cbiAgICByZXR1cm4geyBpbnB1dFRpdGxlLCBpbnB1dERlc2MsIGlucHV0RGF0ZSwgdGFza0lucHV0Rm9ybSB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5ld1Rhc2tOYW1lKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIikudmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtaW5wdXQtZm9ybVwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGdldE5hbWUudGFza1RpdGxlLnRleHRDb250ZW50ID0gaW5zZXJ0TmV3SW5wdXQuaW5wdXRUaXRsZS52YWx1ZTtcbiAgICBnZXROYW1lLnRhc2tEZXNjLnRleHRDb250ZW50ID0gaW5zZXJ0TmV3SW5wdXQuaW5wdXREZXNjLnZhbHVlO1xuICAgIGdldE5hbWUudGFza0RhdGUudGV4dENvbnRlbnQgPSBpbnNlcnROZXdJbnB1dC5pbnB1dERhdGUudmFsdWU7XG5cbiAgICB1cGRhdGVOZXdUYXNrTmFtZUluQXJyYXkoXG4gICAgICBpbnNlcnROZXdJbnB1dC5pbnB1dFRpdGxlLnZhbHVlLFxuICAgICAgaW5zZXJ0TmV3SW5wdXQuaW5wdXREZXNjLnZhbHVlLFxuICAgICAgaW5zZXJ0TmV3SW5wdXQuaW5wdXREYXRlLnZhbHVlXG4gICAgKTtcblxuICAgIHJlbW92ZU5ld1Rhc2tJbnB1dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTmV3VGFza05hbWVJbkFycmF5KHRpdGxlLCBkZXNjLCBkYXRlKSB7XG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udGFza0FycmF5W3Rhc2tJbmRleF0uc2V0RGV0YWlscyhcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzYyxcbiAgICAgIGRhdGVcbiAgICApO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTmV3VGFza0lucHV0KCkge1xuICAgIGluc2VydE5ld0lucHV0LnRhc2tJbnB1dEZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcbiAgICAgIGluc2VydE5ld0lucHV0LnRhc2tJbnB1dEZvcm1cbiAgICApO1xuXG4gICAgLy8gUmVtb3ZlcyBoaWRkZW4gY2xhc3MgZnJvbSAnZWRpdGVkIHRhc2snXG4gICAgY3VycmVudFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIC8vIEV2ZW50TGlzdGVuZXIgb24gYWRkVGFzayBhbmQgY2FuY2VsVGFzayBCdXR0b25zXG4gICgoKSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC10YXNrXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVOZXdUYXNrSW5wdXQpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB1cGRhdGVOZXdUYXNrTmFtZSk7XG4gIH0pKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDdXJlbnRUYXNrKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXQtdGFza1wiKSBlbmFibGVUYXNrRWRpdGluZygpO1xufVxuXG5leHBvcnQgeyBlZGl0Q3VyZW50VGFzayB9OyIsImZ1bmN0aW9uIG5ld1Rhc2tJbnB1dCgpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuICBjb25zdCB0YXNrSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGV4dGFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0QXJlYURlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRleHRBcmVhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdGl0bGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgdGV4dEFyZWFEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXRhaWxzIChPcHRpb25hbCk6XCI7XG4gIGRhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICB0aXRsZURpdi5hcHBlbmQodGl0bGVJbnB1dExhYmVsLCB0aXRsZUlucHV0KTtcbiAgdGV4dGFyZWFEaXYuYXBwZW5kKHRleHRBcmVhRGVzY3JpcHRpb25MYWJlbCwgdGV4dEFyZWFEZXNjcmlwdGlvbik7XG4gIGRhdGVEaXYuYXBwZW5kKGRhdGVJbnB1dExhYmVsLCBkYXRlSW5wdXQpO1xuICBidXR0b25EaXYuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgYWRkQnV0dG9uKTtcbiAgdGFza0lucHV0Rm9ybS5hcHBlbmQodGl0bGVEaXYsIHRleHRhcmVhRGl2LCBkYXRlRGl2LCBidXR0b25EaXYpO1xuXG4gIC8vIElmIHRhc2tMaXN0IGlzIG5vdCBmb3VuZCwgaW5zZXJ0IHRhc2tJbnB1dEZvcm0gaW4gYWxsIHRhc2sgc2VjdGlvblxuICBpZiAoISF0YXNrTGlzdClcbiAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUoXG4gICAgICB0YXNrSW5wdXRGb3JtLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIilcbiAgICApO1xuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKS5hcHBlbmQodGFza0lucHV0Rm9ybSk7XG5cbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZm9ybVwiKTtcbiAgdGV4dEFyZWFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC1hcmVhLWZvcm1cIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dC1mb3JtXCIpO1xuICB0YXNrSW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0LWZvcm1cIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsYXNzXCIpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC10YXNrXCIpO1xuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xufVxuXG5leHBvcnQgeyBuZXdUYXNrSW5wdXQgfTsiLCJmdW5jdGlvbiBjcmVhdGVmb290ZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgYW5jaG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGljb25zQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZsYXRJY29uQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGljb25zOEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIGZsYXRJY29uQW5jaG9yLnRleHRDb250ZW50ID0gXCIgRmxhdGljb24gXCI7XG4gIGljb25zOEFuY2hvci50ZXh0Q29udGVudCA9IFwiIEljb25zOCBcIjtcbiAgaWNvbnNDcmVkaXQuYXBwZW5kKFwiSWNvbnMgYnlcIiwgZmxhdEljb25BbmNob3IsIFwiICYgXCIsIGljb25zOEFuY2hvcik7XG4gIGFuY2hvckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbik7XG5cbiAgZmxhdEljb25BbmNob3Iuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBpY29uczhBbmNob3Iuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBmbGF0SWNvbkFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiKTtcbiAgaWNvbnM4QW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2ljb25zOC5jb20vXCIpO1xuICBhbmNob3JMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vSUFtWW91bmdib3NzeS90b2RvLWxpc3RcIik7XG4gIGdpdEh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBmb290ZXIuYXBwZW5kKFxuICAgIFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIsXG4gICAgXCIgIFwiLFxuICAgIGFuY2hvckxpbmssXG4gICAgaWNvbnNDcmVkaXRcbiAgKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVmb290ZXIgfTsiLCJpbXBvcnQgTWVudSBmcm9tIFwiLi9pY29ucy9tZW51SWNvbi5wbmdcIjtcbmltcG9ydCBNZW51RGFyayBmcm9tIFwiLi9pY29ucy9tZW51SWNvbkRhcmsucG5nXCI7XG5pbXBvcnQgVG9Eb0xvZ28gZnJvbSBcIi4vaWNvbnMvdG8tZG8ucG5nXCI7XG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4vaWNvbnMvdGhlbWUucG5nXCI7XG5pbXBvcnQgVGhlbWVEYXJrIGZyb20gXCIuL2ljb25zL3RoZW1lRGFyay5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9Eb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZW51SWNvblwiKTtcbiAgdG9Eb0xvZ28uY2xhc3NMaXN0LmFkZChcInRvRG9Mb2dvXCIpO1xuICB0aGVtZVRvZ2dsZXIuY2xhc3NMaXN0LmFkZChcInRoZW1lVG9nZ2xlclwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodG9Eb0xvZ28pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhlbWVUb2dnbGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDb250ZW50KCkge1xuICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUljb25cIik7XG4gIGNvbnN0IHRvRG9Mb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvTG9nb1wiKTtcbiAgY29uc3QgdGhlbWVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVRvZ2dsZXJcIik7XG5cbiAgY29uc3QgbXlNZW51SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteU1lbnVJY29uRGFyayA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVRvRG9Mb2dvID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VGhlbWVUb2dnbGVyID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VGhlbWVUb2dnbGVyRGFyayA9IG5ldyBJbWFnZSgpO1xuXG4gIG15TWVudUljb24uc3JjID0gTWVudTtcbiAgbXlUb0RvTG9nby5zcmMgPSBUb0RvTG9nbztcbiAgbXlUaGVtZVRvZ2dsZXIuc3JjID0gVGhlbWU7XG4gIG15TWVudUljb25EYXJrLnNyYyA9IE1lbnVEYXJrO1xuICBteVRoZW1lVG9nZ2xlckRhcmsuc3JjID0gVGhlbWVEYXJrO1xuXG4gIG15TWVudUljb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlnaHRcIiwgXCJsaWdodFwiKTtcbiAgbXlNZW51SWNvbkRhcmsuY2xhc3NMaXN0LmFkZChcIm1lbnUtRGFya1wiLCBcImRhcmtcIik7XG4gIG15VGhlbWVUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1saWdodFwiLCBcImxpZ2h0XCIpO1xuICBteVRoZW1lVG9nZ2xlckRhcmsuY2xhc3NMaXN0LmFkZChcInRoZW1lLWRhcmtcIiwgXCJkYXJrXCIpO1xuXG4gIG1lbnVJY29uLmFwcGVuZChteU1lbnVJY29uLCBteU1lbnVJY29uRGFyayk7XG4gIHRvRG9Mb2dvLmFwcGVuZENoaWxkKG15VG9Eb0xvZ28pO1xuICB0aGVtZVRvZ2dsZXIuYXBwZW5kKG15VGhlbWVUb2dnbGVyLCBteVRoZW1lVG9nZ2xlckRhcmspO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUhlYWRlckNvbnRlbnQgfTsiLCJpbXBvcnQgQWxsVGFza3MgZnJvbSBcIi4vaWNvbnMvcGxhbm5pbmcucG5nXCI7XG5pbXBvcnQgVG9kYXkgZnJvbSBcIi4vaWNvbnMvY2FsZW5kYXIucG5nXCI7XG5pbXBvcnQgVGhpc1dlZWsgZnJvbSBcIi4vaWNvbnMvbmV4dC13ZWVrLnBuZ1wiO1xuaW1wb3J0IEltcG9ydGFudCBmcm9tIFwiLi9pY29ucy9jaGVja2xpc3QucG5nXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pY29ucy9ob21lLnBuZ1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vaWNvbnMvcHJvamVjdC5wbmdcIjtcbmltcG9ydCBBZGRQcm9qZWN0IGZyb20gXCIuL2ljb25zL2FkZC5wbmdcIjtcblxuZnVuY3Rpb24gQ3JlYXRlTWFpbigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtYWluQm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICBtYWluU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpblNlY3Rpb25cIik7XG5cbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbWFpbkJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Cb2R5Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2Q29udGVudCgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgXG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGNvbnN0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IG15QWxsVGFza3MgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlUb2RheSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVRoaXNXZWVrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15SW1wb3J0YW50ID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15SG9tZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVByb2plY3QgPSBuZXcgSW1hZ2UoKTtcblxuICBteUFsbFRhc2tzLnNyYyA9IEFsbFRhc2tzO1xuICBteVRvZGF5LnNyYyA9IFRvZGF5O1xuICBteVRoaXNXZWVrLnNyYyA9IFRoaXNXZWVrO1xuICBteUltcG9ydGFudC5zcmMgPSBJbXBvcnRhbnQ7XG4gIG15SG9tZS5zcmMgPSBIb21lO1xuICBteVByb2plY3Quc3JjID0gUHJvamVjdDtcblxuICBhbGxUYXNrcy5hcHBlbmRDaGlsZChteUFsbFRhc2tzKTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQobXlUb2RheSk7XG4gIHRoaXNXZWVrLmFwcGVuZENoaWxkKG15VGhpc1dlZWspO1xuICBuYXZIZWFkZXIuYXBwZW5kQ2hpbGQobXlIb21lKTtcbiAgXG4gIGltcG9ydGFudC5hcHBlbmRDaGlsZChteUltcG9ydGFudCk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaW1wb3J0YW50KTtcbiAgaG9tZS5hcHBlbmRDaGlsZChuYXZIZWFkZXIpO1xuICBob21lLmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlKTtcbiAgaG9tZS5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMaXN0KTtcblxuICBuYXZIZWFkZXIuYXBwZW5kKFwiSG9tZVwiKTtcbiAgYWxsVGFza3MuYXBwZW5kKFwiQWxsIFRhc2tzXCIpO1xuICB0b2RheS5hcHBlbmQoXCJUb2RheVwiKTtcbiAgdGhpc1dlZWsuYXBwZW5kKFwiVGhpcyBXZWVrXCIpO1xuICBpbXBvcnRhbnQuYXBwZW5kKFwiSW1wb3J0YW50XCIpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGhvcml6b250YWxSdWxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG15QWRkID0gbmV3IEltYWdlKCk7XG4gIG15QWRkLnNyYyA9IEFkZFByb2plY3Q7XG5cbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChteVByb2plY3QpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZChcIlByb2plY3RzXCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlMik7XG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKG15QWRkKTtcbiAgYWRkUHJvamVjdC5hcHBlbmQoXCJBZGQgcHJvamVjdFwiKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3RcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbigpIHtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5TZWN0aW9uXCIpO1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluSGVhZGVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRhc2tTZWN0aW9uKTtcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsIHRhc2tzXCI7XG5cbiAgYWRkVGFza1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXNlY3Rpb25cIik7XG59XG5cbmV4cG9ydCB7IENyZWF0ZU1haW4sIGNyZWF0ZU5hdkNvbnRlbnQsIGNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbiB9OyIsIi8qKlxuICogUHJvamVjdEFycmF5IExvY2FsU3RvcmFnZVxuICovXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikgPT0gbnVsbClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxubGV0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikpO1xuXG5mdW5jdGlvbiBzZXRQcm9qZWN0QXJyYXkoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xufVxuXG4vKipcbiAqIENvbnN0cnVjdG9yIEZ1bmN0aW9ucyBXaXRoIFRoZWlyIFByb3RvdHlwZSBNZXRob2RzXG4gKi9cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG59XG5cbmNsYXNzIFRvZG9UYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGRhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuY29tcGxldGVkO1xuICAgIHRoaXMuaW1wb3J0YW50O1xuICB9XG4gIHNldERldGFpbHMobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy5kZXNjID0gbmV3RGVzYztcbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICB9XG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIHRoaXMuY29tcGxldGVkID8gKHRoaXMuY29tcGxldGVkID0gZmFsc2UpIDogKHRoaXMuY29tcGxldGVkID0gdHJ1ZSk7XG4gIH1cbiAgdG9nZ2xlSW1wb3J0YW5jZSgpIHtcbiAgICB0aGlzLmltcG9ydGFudCA/ICh0aGlzLmltcG9ydGFudCA9IGZhbHNlKSA6ICh0aGlzLmltcG9ydGFudCA9IHRydWUpO1xuICB9XG59XG5cbmNsYXNzIFRoZW1lU2V0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXJrVGhlbWU7XG4gICAgdGhpcy5saWdodEljb247XG4gICAgdGhpcy5kYXJrSWNvbjtcbiAgfVxuICB0b2dnbGVEYXJrVGhlbWUoKSB7XG4gICAgaWYgKHRoaXMuZGFya1RoZW1lID09PSB0cnVlKSB0aGlzLmRhcmtUaGVtZSA9IGZhbHNlO1xuICAgIGVsc2UgdGhpcy5kYXJrVGhlbWUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlbWUgTG9jYWxTdG9yYWdlXG4gKi9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09IG51bGwpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgSlNPTi5zdHJpbmdpZnkobmV3IFRoZW1lU2V0dGVyKCkpKTtcblxubGV0IHRoZW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKTtcblxuZnVuY3Rpb24gc2V0VGhlVGhlbWUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhlbWUpKTtcbn1cblxuZXhwb3J0IHtcbiAgcHJvamVjdEFycmF5LFxuICBQcm9qZWN0LFxuICBUb2RvVGFzayxcbiAgc2V0UHJvamVjdEFycmF5LFxuICBUaGVtZVNldHRlcixcbiAgc2V0VGhlVGhlbWUsXG4gIHRoZW1lLFxufTsiLCJpbXBvcnQgTGlzdCBmcm9tIFwiLi9pY29ucy9saXN0LnBuZ1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgY29uc3QgbXlJbnB1dEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbnB1dEljb24uc3JjID0gTGlzdDtcbiAgXG4gIGlucHV0RGl2LmFwcGVuZChteUlucHV0SWNvbiwgcHJvamVjdE5hbWVJbnB1dCk7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBhZGRCdXR0b24pO1xuICBpbnB1dExpLmFwcGVuZChpbnB1dERpdiwgYnV0dG9uRGl2KTtcbiAgYWRkUHJvamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dExpLCBhZGRQcm9qZWN0KTtcblxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcblxuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYW1lLWlucHV0XCIpO1xuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jbGFzc1wiKTtcbiAgaW5wdXRMaS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtTGlcIik7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHByb2plY3QgbmFtZS5cIik7XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RJbnB1dCB9OyIsImNvbnN0IHJlbW92ZURlbGV0ZUFuZEVkaXRQb3BVcCA9IChlKSA9PiB7XG4gIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtZGl2XCIpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC1kaXZcIilcbiAgICAgICAgLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC1kaXZcIikpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtdGFza1wiKSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJlZGl0LXRhc2tcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC10YXNrXCIpXG4gICAgICAgIC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWVkaXQtdGFza1wiKSk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IHsgcmVtb3ZlRGVsZXRlQW5kRWRpdFBvcFVwIH07IiwiaW1wb3J0IGlzV2l0aGluSW50ZXJ2YWwgZnJvbSBcImRhdGUtZm5zL2lzV2l0aGluSW50ZXJ2YWxcIjtcbmltcG9ydCB7IHN0eWxlU2VsZWN0ZWRMaXN0IH0gZnJvbSBcIi4vYWRkLW5ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5QWRkZWRUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXktdG9kby1saXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB0b2dnbGVJY29uIH0gZnJvbSBcIi4vdG9nZ2xlLXRoZW1lXCI7XG5cbmZ1bmN0aW9uIGFsbFRhc2tzRXZlbnQoKSB7XG4gIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmNoaWxkTm9kZXNbMl0uZmlyc3RDaGlsZDtcbiAgY29uc3QgaW1wb3J0YW50VGFza3MgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKS5jaGlsZE5vZGVzWzJdLmxhc3RDaGlsZDtcbiAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuY2hpbGROb2Rlc1syXS5jaGlsZHJlblsyXTtcbiAgY29uc3QgdGhpc0RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzFdO1xuXG4gIGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVGFza3NGb3JDbGljay5iaW5kKGFsbFRhc2tzKSk7XG4gIHRoaXNEYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvRGF5LmJpbmQodGhpc0RheSkpO1xuICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V2ZW5EYXlzLmJpbmQodGhpc1dlZWspKTtcbiAgaW1wb3J0YW50VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZGlzcGxheUFsbEltcG9ydGFudFRhc2tzLmJpbmQoaW1wb3J0YW50VGFza3MpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHRvRGF5KCkge1xuICBjbGVhclRhc2soKTtcbiAgbmV4dE50aERheXMobm93LCB0b2RheSk7XG4gIHNob3dHcm91cFRpdGxlKFwiVG9kYXlcIik7XG4gIHRvZ2dsZUljb24oKTtcbiAgc3R5bGVTZWxlY3RlZExpc3QuY2FsbCh0aGlzKTtcbiAgc2hvd05vVGFza01lc3NhZ2UuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gc2V2ZW5EYXlzKCkge1xuICBjbGVhclRhc2soKTtcbiAgbmV4dE50aERheXMobm93LCBuZXh0N0RheXMpO1xuICBzaG93R3JvdXBUaXRsZShcIk5leHQgNyBEYXlzXCIpO1xuICB0b2dnbGVJY29uKCk7XG4gIHN0eWxlU2VsZWN0ZWRMaXN0LmNhbGwodGhpcyk7XG4gIHNob3dOb1Rhc2tNZXNzYWdlLmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrc0ZvckNsaWNrKCkge1xuICBjbGVhclRhc2soKTtcbiAgZGlzcGxheUFsbCgpO1xuICBzaG93R3JvdXBUaXRsZShcIkFsbCB0YXNrc1wiKTtcbiAgdG9nZ2xlSWNvbigpO1xuICBzdHlsZVNlbGVjdGVkTGlzdC5jYWxsKHRoaXMpO1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhbGxcIik7XG4gIHNob3dOb1Rhc2tNZXNzYWdlLmNhbGwodGhpcyk7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFsbFwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICBjbGVhclRhc2soKTtcbiAgZGlzcGxheUFsbCgpO1xuICBzaG93R3JvdXBUaXRsZShcIkFsbCB0YXNrc1wiKTtcbiAgdG9nZ2xlSWNvbigpO1xuICBzaG93Tm9UYXNrTWVzc2FnZS5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsSW1wb3J0YW50VGFza3MoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBkaXNwbGF5SW1wb3J0YW50VGFza3MoKTtcbiAgc2hvd0dyb3VwVGl0bGUoXCJJbXBvcnRhbnQgdGFza3NcIik7XG4gIHRvZ2dsZUljb24oKTtcbiAgc3R5bGVTZWxlY3RlZExpc3QuY2FsbCh0aGlzKTtcbiAgc2hvd05vVGFza01lc3NhZ2UuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKTtcbiAgaWYgKCEhYWRkVGFza1NlY3Rpb24pXG4gICAgd2hpbGUgKGFkZFRhc2tTZWN0aW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgIGFkZFRhc2tTZWN0aW9uLnJlbW92ZUNoaWxkKGFkZFRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsKCkge1xuICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgZGlzcGxheUFkZGVkVGFza3ModGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmRhdGUsIHRhc2spXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgIHByb2plY3QudGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmltcG9ydGFudClcbiAgICAgICAgZGlzcGxheUFkZGVkVGFza3ModGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmRhdGUsIHRhc2spO1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNob3dHcm91cFRpdGxlKGdyb3VwVGl0bGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluSGVhZGVyXCIpLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBncm91cFRpdGxlO1xufVxuXG4vLyBEaXNwbGF5cyBtZXNzYWdlIGlmIG5vIHRhc2sgaXMgYXZhaWxhYmxlIHRvIGRpc3BsYXlcbmZ1bmN0aW9uIHNob3dOb1Rhc2tNZXNzYWdlKCkge1xuICBjb25zdCB0YXNrRGlzcGxheUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLXNlY3Rpb25cIik7XG4gIGNvbnN0IG5vVGFza01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaWYgKHRhc2tEaXNwbGF5QXJlYS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmICh0aGlzID09PSB1bmRlZmluZWQgfHwgdGhpcy5jbGFzc0xpc3RbMV0gPT09IFwiYWxsXCIpIHtcbiAgICAgIG5vVGFza01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk9vcHMhIE5vIHRhc2tzLlwiO1xuICAgICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPVxuICAgICAgICBcIkNyZWF0ZSBhIHByb2plY3QgZmlsZSB0byBhZGQgeW91ciB0b2RvIGxpc3Qgb3IgYWRkIHRvIGV4aXN0aW5nIGlmIGFueS5cIjtcbiAgICAgIHRhc2tEaXNwbGF5QXJlYS5hcHBlbmQobm9UYXNrTWVzc2FnZSwgaW5zdHJ1Y3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBub1Rhc2tNZXNzYWdlLnRleHRDb250ZW50ID0gXCJPb3BzISBObyB0YXNrcy5cIjtcbiAgICAgIHRhc2tEaXNwbGF5QXJlYS5hcHBlbmQobm9UYXNrTWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIElmIERhdGUgSXMgV2l0aGluIEludGVydmFsIFVzaW5nIERhdGUtZm4gUGFja2FnZVxuICovXG5cbi8vIEZ1bmN0aW9uIGZvciBhZGRpbmcgTnRoIGRheXMgdG8gRGF0ZSBwcm90b3R5cGVcbkRhdGUucHJvdG90eXBlLmFkZERheXMgPSBmdW5jdGlvbiAoZGF5cykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IG5vdyA9IGZvcm1hdERhdGUobmV3IERhdGUoKSk7XG5jb25zdCB0b2RheSA9IGZvcm1hdERhdGUoZGF0ZS5hZGREYXlzKDEpKTtcbmNvbnN0IG5leHQ3RGF5cyA9IGZvcm1hdERhdGUoZGF0ZS5hZGREYXlzKDcpKTtcbmRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbi8vIEZvcm1hdCBhIGRhdGUgdG8gWVlZWSxNTSxERFxuZnVuY3Rpb24gcGFkVG8yRGlnaXRzKG51bSkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgcmV0dXJuIFtcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgIHBhZFRvMkRpZ2l0cyhkYXRlLmdldERhdGUoKSksXG4gIF0uam9pbihcIixcIik7XG59XG5cbi8vIENoZWNrcyBpZiBkYXRlIGlzIHdpdGhpbiBpbnRlcnZhbFxuZnVuY3Rpb24gbmV4dE50aERheXMoc3RhcnREYXksIGVuZERheSkge1xuICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzV2l0aGluSW50ZXJ2YWwobmV3IERhdGUodGFzay5kYXRlKSwge1xuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShzdGFydERheSksXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZShlbmREYXkpLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgICBkaXNwbGF5QWRkZWRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzayk7XG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IHsgYWxsVGFza3NFdmVudCwgZGlzcGxheUFsbFRhc2tzLCBjbGVhclRhc2ssIHNob3dHcm91cFRpdGxlIH07IiwiY29uc3QgdG9nZ2xlTmF2TGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcIm1lbnVJY29uXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuZXhwb3J0IHsgdG9nZ2xlTmF2TGlzdCB9OyIsImltcG9ydCB7XG4gIGdldFByb2plY3RJbmRleCxcbiAgcG9wVXBEZWxldGVBbmRFZGl0LFxuICBwcm9qZWN0SW5kZXgsXG59IGZyb20gXCIuL2RlbGV0ZS1lZGl0LXBvcC11cFwiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXksIFRvZG9UYXNrIH0gZnJvbSBcIi4vcHJvamVjdC1jb25zdHJ1Y3RvclwiO1xuXG5mdW5jdGlvbiBhZGRDbGFzcyhcbiAgdGFzayxcbiAgbXlEb25lVGFzayxcbiAgdGFza1RpdGxlLFxuICB0YXNrRGVzYyxcbiAgZGF0ZUlucHV0LFxuICBteUNoZWNrZWRTdGFyXG4pIHtcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgbXlEb25lVGFzay5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpbmUtdGhyb3VnaFwiKTtcbiAgICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwibGluZS10aHJvdWdoXCIpO1xuICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibGluZS10aHJvdWdoXCIpO1xuICB9XG4gIGlmICh0YXNrLmltcG9ydGFudCkgbXlDaGVja2VkU3Rhci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUV2ZW50cyhcbiAgdGFzayxcbiAgbXlUYXNrRG90cyxcbiAgbXlEb25lVGFzayxcbiAgbXlVbmRvbmVUYXNrLFxuICBteVRhc2tEb3RzRGFyayxcbiAgbXlDaGVja2VkU3RhcixcbiAgbXlVbmRvbmVUYXNrRGFyayxcbiAgbXlVbmNoZWNrZWRTdGFyLFxuICBteVVuY2hlY2tlZFN0YXJEYXJrXG4pIHtcbiAgZ2V0UHJvamVjdEluZGV4KHRhc2spO1xuICBhZGRNZXRob2RzKCk7XG4gIG15VGFza0RvdHMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcG9wVXBEZWxldGVBbmRFZGl0LmJpbmQobXlUYXNrRG90cywgdGFzaylcbiAgKTtcbiAgbXlUYXNrRG90c0RhcmsuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcG9wVXBEZWxldGVBbmRFZGl0LmJpbmQobXlUYXNrRG90cywgdGFzaylcbiAgKTtcbiAgbXlEb25lVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29tcGxldGVkLmJpbmQobnVsbCwgdGFzaykpO1xuICBteVVuZG9uZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNvbXBsZXRlZC5iaW5kKG51bGwsIHRhc2spKTtcbiAgbXlVbmRvbmVUYXNrRGFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29tcGxldGVkLmJpbmQobnVsbCwgdGFzaykpO1xuICBteUNoZWNrZWRTdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTdGFyLmJpbmQobnVsbCwgdGFzaykpO1xuICBteVVuY2hlY2tlZFN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVN0YXIuYmluZChudWxsLCB0YXNrKSk7XG4gIG15VW5jaGVja2VkU3RhckRhcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVN0YXIuYmluZChudWxsLCB0YXNrKSk7XG59XG5cbmZ1bmN0aW9uIGFkZE1ldGhvZHMoKSB7XG4gIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdLnRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIFRvZG9UYXNrLnByb3RvdHlwZSk7XG4gICAgc2V0UHJvamVjdEFycmF5KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQodGFzaywgZSkge1xuICB0YXNrLnRvZ2dsZUNvbXBsZXRlKCk7XG4gIHNldFByb2plY3RBcnJheSgpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwidW5kb25lLXRhc2tcIiB8fFxuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwidW5kb25lLXRhc2stZGFya1wiIHx8XG4gIGUudGFyZ2V0LmNsYXNzTGlzdCA9PT0gXCJkb25lLXRhc2tcIlxuICAgID8gdG9nZ2xlTGluZVRocm91Z2goZSlcbiAgICA6IHRvZ2dsZUxpbmVUaHJvdWdoKGUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTdGFyKHRhc2ssIGUpIHtcbiAgdGFzay50b2dnbGVJbXBvcnRhbmNlKCk7XG4gIHNldFByb2plY3RBcnJheSgpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwibmV3LXRhc2tcIiB8fFxuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwidW5jaGVja2VkLXN0YXItZGFya1wiIHx8XG4gIGUudGFyZ2V0LmNsYXNzTGlzdCA9PT0gXCJjaGVja2VkLXN0YXJcIlxuICAgID8gdG9nZ2xlKGUpXG4gICAgOiB0b2dnbGUoZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxpbmVUaHJvdWdoKGUpIHtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwiZG9uZVwiXG4gICk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICBcImxpbmUtdGhyb3VnaFwiXG4gICk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwibGluZS10aHJvdWdoXCJcbiAgKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwibGluZS10aHJvdWdoXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwiY2hlY2tcIlxuICApO1xufVxuXG5leHBvcnQgeyBhZGRDbGFzcywgdG9nZ2xlRXZlbnRzLCBhZGRNZXRob2RzIH07IiwiaW1wb3J0IHsgc2V0VGhlVGhlbWUsIHRoZW1lLCBUaGVtZVNldHRlciB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiB0b2dnbGVzIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgdGhlbWVzXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcbiAgY29uc3QgZGFya1RoZW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya1wiKTtcbiAgY29uc3QgbGlnaHRUaGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZ2h0XCIpO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBsZXQgbmV3VGhlbWU7XG5cbiAgLy8gQWRkIGJhY2sgVGhlbWVTZXR0ZXIgcHJvdG90eXBlIHRvIGVuYWJsZSB0b2dnbGUgbWV0aG9kXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGVtZSwgVGhlbWVTZXR0ZXIucHJvdG90eXBlKTtcbiAgdGhlbWUudG9nZ2xlRGFya1RoZW1lKCk7XG4gIHNldFRoZVRoZW1lKCk7XG4gIGlmICh0aGVtZS5kYXJrVGhlbWUpIG5ld1RoZW1lID0gXCJkYXJrVFwiO1xuICBlbHNlIG5ld1RoZW1lID0gXCJsaWdodFRcIjtcbiAgcm9vdC5jbGFzc05hbWUgPSBuZXdUaGVtZTtcblxuICBsaWdodFRoZW1lSWNvbi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwibGlnaHQtaGlkZGVuXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtaGlkZGVuXCIpO1xuICB9KTtcblxuICBkYXJrVGhlbWVJY29uLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpZiAodGhlbWUuZGFya1RoZW1lKSBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXJrLXZpc2libGVcIik7XG4gICAgZWxzZSBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLXZpc2libGVcIik7XG4gIH0pO1xufVxuXG4vLyBSZXRyaWV2ZXMgaWNvbiBzdGF0ZSBmcm9tIHN0b3JhZ2Ugb24gcGFnZSByZWxvYWRcbmZ1bmN0aW9uIHRvZ2dsZUljb24oKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGVtZSwgVGhlbWVTZXR0ZXIucHJvdG90eXBlKTtcbiAgc2V0VGhlVGhlbWUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWdodFwiKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwibGlnaHQtaGlkZGVuXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtaGlkZGVuXCIpO1xuICB9KTtcblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhlbWUsIFRoZW1lU2V0dGVyLnByb3RvdHlwZSk7XG4gIHNldFRoZVRoZW1lKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya1wiKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZGFyay12aXNpYmxlXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay12aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuLy8gUmV0cmlldmVzIHRoZW1lIHN0YXRlIGZyb20gc3RvcmFnZSBvbiBwYWdlIHJlbG9hZFxuZnVuY3Rpb24gZ2V0VGhlbWVDaG9pY2VGcm9tU3RvcmFnZSgpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoZW1lLCBUaGVtZVNldHRlci5wcm90b3R5cGUpO1xuICBzZXRUaGVUaGVtZSgpO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lLmRhcmtUaGVtZSA/IFwiZGFya1RcIiA6IFwibGlnaHRUXCI7XG4gIHJvb3QuY2xhc3NOYW1lID0gbmV3VGhlbWU7XG59XG5cbmV4cG9ydCB7IHNldFRoZW1lLCBnZXRUaGVtZUNob2ljZUZyb21TdG9yYWdlLCB0b2dnbGVJY29uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUhlYWRlckNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlTWFpbixcbiAgY3JlYXRlTmF2Q29udGVudCxcbiAgY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uLFxufSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vYWRkLW5ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBlZGl0Q3VyZW50UHJvamVjdCB9IGZyb20gXCIuL2VkaXQtY3VycmVudC1wcm9qZWN0XCI7XG5pbXBvcnQgeyByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW1vdmUtcHJvamVjdC1wb3B1cFwiO1xuaW1wb3J0IHsgYWRkQW5kQ2FuY2VsVGFzayB9IGZyb20gXCIuL2FkZC1vci1jYW5jZWwtdGFzay1ldmVudFwiO1xuaW1wb3J0IHsgdG9nZ2xlTmF2TGlzdCB9IGZyb20gXCIuL3RvZ2dsZS1uYXYtbGlzdFwiO1xuaW1wb3J0IHsgZWRpdEN1cmVudFRhc2sgfSBmcm9tIFwiLi9lZGl0LWN1cnJlbnQtdGFza1wiO1xuaW1wb3J0IHsgYWxsVGFza3NFdmVudCB9IGZyb20gXCIuL3Rhc2stZ3JvdXBpbmdcIjtcbmltcG9ydCB7IERpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQgfSBmcm9tIFwiLi9kaXNwbGF5LWF2YWlsYWJsZS10YXNrc1wiO1xuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tIFwiLi90b2dnbGUtdGhlbWVcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVIZWFkZXJDb250ZW50KCk7XG5DcmVhdGVNYWluKCk7XG5jcmVhdGVOYXZDb250ZW50KCk7XG5jcmVhdGVmb290ZXIoKTtcbmNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbigpO1xudG9nZ2xlTmF2TGlzdDtcbmFsbFRhc2tzRXZlbnQoKTtcbkRpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZWRpdEN1cmVudFByb2plY3QpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXApO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEFuZENhbmNlbFRhc2spO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhZGROZXdQcm9qZWN0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVkaXRDdXJlbnRUYXNrKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWVUb2dnbGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRUaGVtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9