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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root.lightT {\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: black;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n  --nav-bg: white;\n  --task-border: black;\n  --title-color: black;\n  --theme-bg: white;\n  --github-icon: black;\n}\n:root.darkT {\n  --background-color: #22303c;\n  --border-color: #1f8d4d;\n  --main-color: #192734;\n  --footer-background-color: #22303c;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: white;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(255 255 255);\n  --nav-bg: #15202b;\n  --task-border: white;\n  --title-color: white;\n  --theme-bg: #192734;\n  --github-icon: white;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\n\n/* HEADER STYLING */\nheader {\n  --header-height: min-content;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 40px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n.themeToggler {\n  position: relative;\n  cursor: pointer;\n}\n.menuIcon {\n  position: relative;\n  cursor: pointer;\n}\n.theme-light {\n  position: absolute;\n}\n.menu-light {\n  position: absolute;\n}\n.light-hidden {\n  visibility: hidden;\n}\n.dark {\n  visibility: hidden;\n}\n.dark-visible {\n  visibility: visible;\n}\n\n/* MAIN BODY STYLING */\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 35px;\n  height: 35px;\n}\n\n/* Nav Styling */\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n  background-color: var(--nav-bg);\n  border-radius: 0;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* List styling */\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n.selected {\n  background: linear-gradient(\n    to right,\n    #41584b99 0%,\n    #5c5c5c 5px,\n    #a0e0bb99 2%,\n    #a0e0bb99 100%\n  );\n  background-color: #afe9c7dc;\n}\n\n/* Horizontal Rule */\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid var(--horizontal-rule);\n}\n\n/* Projects and form styling */\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  cursor: default;\n  background-color: var(--nav-bg);\n}\n.input-Li:hover {\n  box-shadow: none;\n  background-color: var(--nav-bg);\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.project-list {\n  position: relative;\n}\n.add-project {\n  background-color: transparent;\n  color: var(--title-color);\n  font-weight: bold;\n}\n.add-project:hover {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Edit details pop-up styling */\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n  color: var(--title-color);\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n  color: var(--title-color);\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\n\n/* Main section styling */\nh2 {\n  color: var(--nav-header);\n}\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\n/* Task input form styling */\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-section > p:first-of-type {\n  text-align: center;\n  font-weight: bold;\n  color: var(--title-color);\n}\n.add-task-section > p:nth-child(2) {\n  text-align: center;\n  font-size: 0.85rem;\n  color: var(--title-color);\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n  color: var(--title-color);\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--theme-bg);\n  cursor: default;\n  color: var(--title-color);\n  border: 2px solid var(--title-color);\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: var(--theme-bg);\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  cursor: default;\n  gap: 10px;\n  line-height: 1;\n  border: 2px solid var(--task-border);\n  min-width: min-content;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.undone-task {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.undone-task-dark {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.done-task {\n  width: 27px;\n  height: 27px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: var(--title-color);\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: var(--title-color);\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.unchecked-star {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  color: var(--title-color);\n  cursor: pointer;\n}\n.unchecked-star-dark {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  cursor: pointer;\n}\n.checked-star {\n  height: 21px;\n  width: 21px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n  color: var(--title-color);\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n  z-index: 1;\n  cursor: pointer;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.my-task-dots-dark {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  cursor: pointer;\n}\n.date-and-span {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  z-index: -1;\n}\n\n/* FOOTER STYLING */\nfooter {\n  --footer-height: min-content;\n\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n  color: var(--title-color);\n}\ni {\n  color: var(--github-icon);\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 550px) {\n  main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-color);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root.lightT {\n  --background-color: #f2f3f5;\n  --border-color: #2abd67;\n  --main-color: #ececec;\n  --footer-background-color: #c2d8b7;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: black;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(1, 134, 1);\n  --nav-bg: white;\n  --task-border: black;\n  --title-color: black;\n  --theme-bg: white;\n  --github-icon: black;\n}\n:root.darkT {\n  --background-color: #22303c;\n  --border-color: #1f8d4d;\n  --main-color: #192734;\n  --footer-background-color: #22303c;\n  --header-color: white;\n  --font-family: sans-serif;\n  --horizontal-rule: white;\n  --main-header-bgColor: #308c56d6;\n  --nav-header: rgb(255 255 255);\n  --nav-bg: #15202b;\n  --task-border: white;\n  --title-color: white;\n  --theme-bg: #192734;\n  --github-icon: white;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  font-family: var(--font-family);\n}\n\n/* HEADER STYLING */\nheader {\n  --header-height: min-content;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 40px;\n  height: var(--header-height);\n  border-bottom: 2px solid var(--border-color);\n  background-color: var(--background-color);\n}\n.themeToggler {\n  position: relative;\n  cursor: pointer;\n}\n.menuIcon {\n  position: relative;\n  cursor: pointer;\n}\n.theme-light {\n  position: absolute;\n}\n.menu-light {\n  position: absolute;\n}\n.light-hidden {\n  visibility: hidden;\n}\n.dark {\n  visibility: hidden;\n}\n.dark-visible {\n  visibility: visible;\n}\n\n/* MAIN BODY STYLING */\nmain {\n  flex: 1;\n  display: flex;\n}\nimg {\n  width: 35px;\n  height: 35px;\n}\n\n/* Nav Styling */\nmain > nav {\n  padding: 20px;\n}\n.nav {\n  border-radius: 25px;\n  flex: 1;\n  background-color: var(--nav-bg);\n  border-radius: 0;\n}\n.nav-hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* List styling */\nul {\n  margin-top: 15px;\n}\nli {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  line-height: 40px;\n  padding: 0 10px 0 10px;\n  background-color: rgba(160, 224, 187, 0.6);\n  margin-top: 5px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: max-content;\n}\nli:hover {\n  box-shadow: 0px 2px 2px black;\n  background-color: #afe9c7dc;\n}\nli > img {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n.selected {\n  background: linear-gradient(\n    to right,\n    #41584b99 0%,\n    #5c5c5c 5px,\n    #a0e0bb99 2%,\n    #a0e0bb99 100%\n  );\n  background-color: #afe9c7dc;\n}\n\n/* Horizontal Rule */\nhr {\n  margin: 10px 0 0;\n  border: 1.5px solid var(--horizontal-rule);\n}\n\n/* Projects and form styling */\n.project {\n  margin-top: 20px;\n}\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.input-Li {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  cursor: default;\n  background-color: var(--nav-bg);\n}\n.input-Li:hover {\n  box-shadow: none;\n  background-color: var(--nav-bg);\n}\n.button-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.button-class {\n  display: flex;\n  margin-top: 5px;\n  position: relative;\n}\n.button-class > button:last-of-type {\n  background-color: var(--border-color);\n  position: absolute;\n  right: 0px;\n}\n.button-class > button:first-child {\n  position: relative;\n  left: 30px;\n}\n.input-container > input {\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 5px;\n}\n.input-container > input:focus {\n  outline: none;\n  border: 1px solid purple;\n  padding: 5px;\n}\n.home > h2:first-child > img,\n.project > h2:first-child > img {\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.input-container > img {\n  height: 20px;\n  width: 20px;\n  margin: 0;\n}\n.projects {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 45px;\n  padding-right: 30px;\n  min-width: max-content;\n}\n.projects > div > img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 7px;\n}\n.projects > div {\n  position: absolute;\n  right: 5px;\n}\n.projects > img:last-of-type {\n  position: absolute;\n  top: 7px;\n  left: 10px;\n}\n.project-list {\n  position: relative;\n}\n.add-project {\n  background-color: transparent;\n  color: var(--title-color);\n  font-weight: bold;\n}\n.add-project:hover {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Edit details pop-up styling */\n.delete-edit-div {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-task {\n  background-color: var(--background-color);\n  position: absolute;\n  right: 0;\n  bottom: 38px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  border-radius: 15px;\n  box-shadow: 4px 3px 12px 0px black;\n  z-index: 2;\n}\n.delete-edit-div > p {\n  padding: 4px 10px;\n  color: var(--title-color);\n}\n.delete-edit-task > p {\n  padding: 12px 10px;\n  color: var(--title-color);\n}\n.delete-edit-div > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-task > p:first-child:hover {\n  color: rgb(78, 0, 78);\n  background-color: rgba(162, 198, 142, 0.3);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.delete-edit-div > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.delete-edit-task > p:last-child:hover {\n  color: red;\n  background-color: rgba(162, 198, 142, 0.3);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.name-input {\n  flex: 1;\n}\n\n/* Main section styling */\nh2 {\n  color: var(--nav-header);\n}\n.mainSection {\n  padding: 30px 40px;\n  background-color: var(--main-color);\n  flex: 3;\n}\n.mainHeader {\n  padding: 15px 50px;\n  background-color: var(--border-color);\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px black;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n}\nh1 {\n  font-size: 2rem;\n  color: var(--header-color);\n}\n\n/* Task input form styling */\n.add-task-section {\n  width: 100%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.add-task-section > p:first-of-type {\n  text-align: center;\n  font-weight: bold;\n  color: var(--title-color);\n}\n.add-task-section > p:nth-child(2) {\n  text-align: center;\n  font-size: 0.85rem;\n  color: var(--title-color);\n}\n.add-task-button {\n  background-color: inherit;\n  width: 120px;\n  color: var(--title-color);\n}\n.add-task-button:hover {\n  border-radius: 10px;\n  background-color: rgba(153, 52, 153, 0.1);\n  box-shadow: none;\n}\n.task-input-form {\n  padding: 10px 30px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--theme-bg);\n  cursor: default;\n  color: var(--title-color);\n  border: 2px solid var(--title-color);\n}\n.task-input-form:hover {\n  box-shadow: none;\n  background-color: var(--theme-bg);\n}\n.task-input-form > div {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  line-height: normal;\n  margin: 0 0 10px;\n}\n.task-input-form > div:last-child {\n  flex-direction: row;\n  width: min-content;\n  margin: 0 auto;\n}\ntextarea {\n  height: 60px;\n  resize: none;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.task-input-form > div > input {\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid grey;\n  padding: 2px 10px;\n}\n.btn-class > button {\n  padding: 5px 10px;\n  border: none;\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.task-input-form > div > input:focus,\ntextarea:focus {\n  border: 1px solid purple;\n}\n.btn-class {\n  display: flex;\n  margin-top: 5px;\n}\n.btn-class > button:last-of-type {\n  background-color: var(--border-color);\n}\nlabel {\n  font-weight: 400;\n}\n.new-task {\n  background-color: rgba(153, 52, 153, 0.05);\n  box-shadow: none;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 5px 50px;\n  align-items: center;\n  cursor: default;\n  gap: 10px;\n  line-height: 1;\n  border: 2px solid var(--task-border);\n  min-width: min-content;\n}\n.new-task:hover {\n  background-color: rgba(42, 189, 103, 0.02);\n  box-shadow: none;\n}\n.task-div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: min-content;\n  height: min-content;\n  top: 5px;\n  left: 5px;\n}\n.undone-task {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.undone-task-dark {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.done-task {\n  width: 27px;\n  height: 27px;\n}\n.title-and-desc-div > h2 {\n  font-size: 0.9rem;\n  color: var(--title-color);\n}\n.title-and-desc-div > p {\n  font-size: 0.8rem;\n  margin-top: 1px;\n  color: var(--title-color);\n}\n.star-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: min-content;\n  width: min-content;\n  position: absolute;\n  right: 25px;\n}\n.unchecked-star {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  color: var(--title-color);\n  cursor: pointer;\n}\n.unchecked-star-dark {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  cursor: pointer;\n}\n.checked-star {\n  height: 21px;\n  width: 21px;\n}\n.date-span > p {\n  border: 1px solid #0000002e;\n  border-radius: 10px;\n  height: min-content;\n  padding: 2px 6px 0px;\n  text-align: center;\n  color: var(--title-color);\n}\n.uncheck {\n  visibility: hidden;\n}\n.checked-star,\n.done-task {\n  visibility: hidden;\n}\n.check,\n.done {\n  visibility: visible;\n  z-index: 1;\n  cursor: pointer;\n}\n.line-through {\n  text-decoration: line-through;\n  color: grey;\n}\n.date-span {\n  position: relative;\n}\n.my-task-dots {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.my-task-dots-dark {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  right: 0px;\n  cursor: pointer;\n}\n.date-and-span {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hidden {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  z-index: -1;\n}\n\n/* FOOTER STYLING */\nfooter {\n  --footer-height: min-content;\n\n  height: var(--footer-height);\n  margin-top: auto;\n  text-align: center;\n  padding: 10px;\n  background-color: var(--footer-background-color);\n  color: var(--title-color);\n}\ni {\n  color: var(--github-icon);\n}\n\n/* Uses flex-direction column for screen sizes below 600px */\n@media screen and (max-width: 550px) {\n  main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-color);\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "projectArrayIndex": () => (/* binding */ projectArrayIndex),
/* harmony export */   "removeProjectLists": () => (/* binding */ removeProjectLists),
/* harmony export */   "removeTasks": () => (/* binding */ removeTasks),
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
  // Gets selected project index
  selectedProjectIndex = null
  const getProjectNode = document.querySelector(".project-list").childNodes;
  const getProjectArr = Array.from(getProjectNode);
  for (let i = 0; i < getProjectArr.length; i++)
    if (getProjectArr[i].classList[1] === "selected")
      selectedProjectIndex = getProjectArr.indexOf(getProjectArr[i]);

  // If added project is empty strings it returns
  if (document.querySelector(".name-input").value.trim() === "") return;
  pushNewProjectInstance();
  removeProjectLists();
  createProject();
  setSelectedClass(selectedProjectIndex);
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
function setSelectedClass(selectedProject) {
  const setProjectNode = document.querySelector(".project-list").childNodes;
  const setProjectArr = Array.from(setProjectNode);
  for (let i = 0; i < setProjectArr.length; i++)
    if (setProjectArr.indexOf(setProjectArr[i]) === selectedProject)
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
  if (e.target.className === "projects") {
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
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.removeProjectLists)();
    (0,_add_new_project__WEBPACK_IMPORTED_MODULE_0__.createProject)();
    project.classList.remove("hidden");
  }

  function editProjectArrayName() {
    _project_constructor__WEBPACK_IMPORTED_MODULE_1__.projectArray[_add_new_project__WEBPACK_IMPORTED_MODULE_0__.projectArrayIndex].setName(insertGetProjectInput.nameInput.value);
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

  anchorLink.appendChild(gitHubIcon);
  footer.append("Copyright \u00A9 2022 IAmYoungbossy");
  footer.appendChild(anchorLink);
  body.appendChild(footer);

  anchorLink.setAttribute(
    "href",
    "https:////github.com/IAmYoungbossy/calculator"
  );

  gitHubIcon.classList.add("fa", "fa-github");
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
  e.target.classList === "undone-task" ||
  e.target.classList === "undone-task-dark" ||
  e.target.classList === "done-task"
    ? toggleLineThrough(e)
    : toggleLineThrough(e);
}

function toggleStar(task, e) {
  task.toggleImportance();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxnQkFBZ0IsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsdUNBQXVDLDBCQUEwQiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxpQ0FBaUMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHlCQUF5QixHQUFHLGVBQWUsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsdUNBQXVDLDBCQUEwQiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxtQ0FBbUMsc0JBQXNCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLHlCQUF5QixHQUFHLFFBQVEsa0JBQWtCLDJCQUEyQixrQkFBa0IsdUJBQXVCLG9DQUFvQyxHQUFHLGtDQUFrQyxpQ0FBaUMsb0JBQW9CLG1DQUFtQyx3QkFBd0IsdUJBQXVCLGlDQUFpQyxpREFBaUQsOENBQThDLEdBQUcsaUJBQWlCLHVCQUF1QixvQkFBb0IsR0FBRyxhQUFhLHVCQUF1QixvQkFBb0IsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsbUNBQW1DLFlBQVksa0JBQWtCLEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLEdBQUcsbUNBQW1DLGtCQUFrQixHQUFHLFFBQVEsd0JBQXdCLFlBQVksb0NBQW9DLHFCQUFxQixHQUFHLGVBQWUsdUJBQXVCLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsR0FBRyxNQUFNLDBCQUEwQixrQkFBa0Isd0JBQXdCLHNCQUFzQiwyQkFBMkIsK0NBQStDLG9CQUFvQix3QkFBd0Isb0JBQW9CLDJCQUEyQixHQUFHLFlBQVksa0NBQWtDLGdDQUFnQyxHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxhQUFhLGlJQUFpSSxnQ0FBZ0MsR0FBRywrQkFBK0IscUJBQXFCLCtDQUErQyxHQUFHLCtDQUErQyxxQkFBcUIsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxhQUFhLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHlCQUF5QixvQkFBb0Isb0NBQW9DLEdBQUcsbUJBQW1CLHFCQUFxQixvQ0FBb0MsR0FBRywwQkFBMEIsc0JBQXNCLGlCQUFpQiwwQkFBMEIsd0JBQXdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsaUJBQWlCLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcsdUNBQXVDLDBDQUEwQyx1QkFBdUIsZUFBZSxHQUFHLHNDQUFzQyx1QkFBdUIsZUFBZSxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsR0FBRyxrQ0FBa0Msa0JBQWtCLDZCQUE2QixpQkFBaUIsR0FBRyxrRUFBa0UsaUJBQWlCLGdCQUFnQixzQkFBc0IsR0FBRywwQkFBMEIsaUJBQWlCLGdCQUFnQixjQUFjLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLDJCQUEyQixHQUFHLHlCQUF5QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixhQUFhLEdBQUcsbUJBQW1CLHVCQUF1QixlQUFlLEdBQUcsZ0NBQWdDLHVCQUF1QixhQUFhLGVBQWUsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLGtDQUFrQyw4QkFBOEIsc0JBQXNCLEdBQUcsc0JBQXNCLGtDQUFrQyxxQkFBcUIsR0FBRyx5REFBeUQsOENBQThDLHVCQUF1QixhQUFhLGlCQUFpQixrQkFBa0IsMkJBQTJCLGlCQUFpQix3QkFBd0IsdUNBQXVDLGVBQWUsR0FBRyxxQkFBcUIsOENBQThDLHVCQUF1QixhQUFhLGlCQUFpQixrQkFBa0IsMkJBQTJCLGlCQUFpQix3QkFBd0IsdUNBQXVDLGVBQWUsR0FBRyx3QkFBd0Isc0JBQXNCLDhCQUE4QixHQUFHLHlCQUF5Qix1QkFBdUIsOEJBQThCLEdBQUcsMENBQTBDLDBCQUEwQiwrQ0FBK0MsaUNBQWlDLGtDQUFrQyxHQUFHLDJDQUEyQywwQkFBMEIsK0NBQStDLGlDQUFpQyxrQ0FBa0MsR0FBRyx5Q0FBeUMsZUFBZSwrQ0FBK0Msb0NBQW9DLHFDQUFxQyxHQUFHLDBDQUEwQyxlQUFlLCtDQUErQyxvQ0FBb0MscUNBQXFDLEdBQUcsZUFBZSxZQUFZLEdBQUcsb0NBQW9DLDZCQUE2QixHQUFHLGdCQUFnQix1QkFBdUIsd0NBQXdDLFlBQVksR0FBRyxlQUFlLHVCQUF1QiwwQ0FBMEMsdUJBQXVCLGtDQUFrQyxvQ0FBb0MsZ0NBQWdDLHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3QixHQUFHLE1BQU0sb0JBQW9CLCtCQUErQixHQUFHLHNEQUFzRCxnQkFBZ0IscUJBQXFCLHNCQUFzQix1QkFBdUIsR0FBRyx1Q0FBdUMsdUJBQXVCLHNCQUFzQiw4QkFBOEIsR0FBRyxzQ0FBc0MsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLGlCQUFpQiw4QkFBOEIsR0FBRywwQkFBMEIsd0JBQXdCLDhDQUE4QyxxQkFBcUIsR0FBRyxvQkFBb0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsc0NBQXNDLG9CQUFvQiw4QkFBOEIseUNBQXlDLEdBQUcsMEJBQTBCLHFCQUFxQixzQ0FBc0MsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQixnQkFBZ0Isd0JBQXdCLHFCQUFxQixHQUFHLHFDQUFxQyx3QkFBd0IsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLGlCQUFpQix3QkFBd0Isa0JBQWtCLDJCQUEyQixzQkFBc0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHdCQUF3QixrQkFBa0IsMkJBQTJCLHNCQUFzQixHQUFHLHVCQUF1QixzQkFBc0IsaUJBQWlCLDBCQUEwQix3QkFBd0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcseURBQXlELDZCQUE2QixHQUFHLGNBQWMsa0JBQWtCLG9CQUFvQixHQUFHLG9DQUFvQywwQ0FBMEMsR0FBRyxTQUFTLHFCQUFxQixHQUFHLGFBQWEsK0NBQStDLHFCQUFxQixrQkFBa0IsbUNBQW1DLHVCQUF1QixzQkFBc0Isd0JBQXdCLG9CQUFvQixjQUFjLG1CQUFtQix5Q0FBeUMsMkJBQTJCLEdBQUcsbUJBQW1CLCtDQUErQyxxQkFBcUIsR0FBRyxhQUFhLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLGFBQWEsY0FBYyxHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcsNEJBQTRCLHNCQUFzQiw4QkFBOEIsR0FBRywyQkFBMkIsc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLGdCQUFnQixHQUFHLG1CQUFtQix1QkFBdUIsaUJBQWlCLGdCQUFnQiw4QkFBOEIsb0JBQW9CLEdBQUcsd0JBQXdCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLGdDQUFnQyx3QkFBd0Isd0JBQXdCLHlCQUF5Qix1QkFBdUIsOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsa0JBQWtCLHdCQUF3QixlQUFlLG9CQUFvQixHQUFHLGlCQUFpQixrQ0FBa0MsZ0JBQWdCLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsR0FBRyxzQkFBc0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsV0FBVyx1QkFBdUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLEdBQUcsa0NBQWtDLGlDQUFpQyxtQ0FBbUMscUJBQXFCLHVCQUF1QixrQkFBa0IscURBQXFELDhCQUE4QixHQUFHLEtBQUssOEJBQThCLEdBQUcseUdBQXlHLFVBQVUsY0FBYyxvQkFBb0IsNkJBQTZCLG9DQUFvQyxLQUFLLEdBQUcscUJBQXFCO0FBQzdyM0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p3QztBQUNpQjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFVBQVU7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsa0JBQWtCLDREQUFNO0FBQ3hCLGdCQUFnQiw0REFBTSwwQkFBMEI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRHlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtEO0FBQ1A7QUFDTztBQUNRO0FBQ3FCO0FBQzdCO0FBQ1E7QUFDZDs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUNBQW1DO0FBQ3JEO0FBQ0EsRUFBRSwrREFBZTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1FQUFpQixLQUFLLHlEQUFPO0FBQy9CLEVBQUUscUVBQWU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0VBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1EQUFXO0FBQ2pDLHNCQUFzQiw0Q0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3RUFBdUI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBYTtBQUNqQixJQUFJLHVFQUFZO0FBQ2hCO0FBQ0EsSUFBSSx5REFBVTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzRUFBb0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpvRDtBQUNFO0FBQ1I7QUFDZ0M7QUFDcEM7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBLElBQUksNkRBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLEVBQUUsOERBQVksQ0FBQywrREFBaUI7QUFDaEMsUUFBUSwwREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBZTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsOERBQVksQ0FBQywrREFBaUI7QUFDaEMsZ0NBQWdDLG9FQUFrQjtBQUNsRCxJQUFJLHFFQUFlO0FBQ25CLElBQUkscUVBQWlCO0FBQ3JCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwrQ0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzRDtBQUNVO0FBQ007QUFDTzs7QUFFN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFtQixDQUFDLCtEQUFpQjtBQUN6QyxJQUFJLHFFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFTO0FBQ2pCLFFBQVEsOERBQWM7QUFDdEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBa0I7QUFDeEIsTUFBTSwrREFBZTtBQUNyQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQVk7QUFDaEIsSUFBSSxxRUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0VBQW9CO0FBQ3RCO0FBQ0EsK0NBQStDLHNFQUFvQjtBQUNuRSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDhEQUFZO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGc0U7QUFDUztBQUM3QjtBQUNxQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQW9CO0FBQ3hCLHFDQUFxQyxtRUFBaUI7QUFDdEQsTUFBTSxxRUFBZTtBQUNyQixNQUFNLG9FQUFrQjtBQUN4QixNQUFNLCtEQUFhO0FBQ25CLEtBQUs7QUFDTCxJQUFJLCtEQUFlO0FBQ25CO0FBQ0E7O0FBRUEsRUFBRSx3RUFBeUI7QUFDM0IsRUFBRSx5REFBVTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIyQztBQUNRO0FBQ0c7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUNOO0FBQ2E7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRDQUFXO0FBQzlCLHVCQUF1QixnREFBZTtBQUN0Qyx3QkFBd0IscURBQWE7QUFDckMsNEJBQTRCLHlEQUFpQjtBQUM3QyxxQkFBcUIsa0RBQVU7QUFDL0IseUJBQXlCLHNEQUFjO0FBQ3ZDLHNCQUFzQixtREFBVztBQUNqQyxtQkFBbUIsZ0RBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDREQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx3REFBUTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZ5RjtBQUNuQjtBQUNwQjs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQ0FBbUM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSCxFQUFFLCtEQUFlOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWtCO0FBQ3RCLElBQUksK0RBQWE7QUFDakI7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQVksQ0FBQywrREFBaUI7QUFDbEMsSUFBSSxxRUFBZTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkUrRDtBQUNmO0FBQ3NCOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSCxFQUFFLDZEQUFZOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4REFBWSxDQUFDLDZEQUFZLFlBQVksMERBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCd0M7QUFDUTtBQUNQO0FBQ0g7QUFDUTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdEQUFJO0FBQ3ZCLG1CQUFtQiw2Q0FBUTtBQUMzQix1QkFBdUIsNkNBQUs7QUFDNUIsdUJBQXVCLG9EQUFRO0FBQy9CLDJCQUEyQixpREFBUzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDRDO0FBQ0g7QUFDSTtBQUNDO0FBQ1Y7QUFDTTtBQUNEOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdEQUFRO0FBQzNCLGdCQUFnQixnREFBSztBQUNyQixtQkFBbUIsaURBQVE7QUFDM0Isb0JBQW9CLGlEQUFTO0FBQzdCLGVBQWUsNENBQUk7QUFDbkIsa0JBQWtCLCtDQUFPOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUFVOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDRDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ5RDtBQUNIO0FBQ0U7QUFDSDtB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkM7QUFLN0M7QUFDd0I7QUFDSztBQUNTO0FBQ087QUFDSjtBQUNaO0FBQ0c7QUFDTDtBQUNzQjtBQUM1Qjs7QUFFMUMsMERBQVk7QUFDWixpRUFBbUI7QUFDbkIsc0RBQVU7QUFDViw0REFBZ0I7QUFDaEIsMERBQVk7QUFDWixvRUFBd0I7QUFDeEIsMkRBQWE7QUFDYiw4REFBYTtBQUNiLG9GQUF5Qjs7QUFFekIscUNBQXFDLG9FQUFpQjtBQUN0RCx1Q0FBdUMsMkVBQXdCO0FBQy9ELG1DQUFtQyx1RUFBZ0I7QUFDbkQsdUNBQXVDLDJEQUFhO0FBQ3BELHFDQUFxQyw4REFBYztBQUNuRCxrRUFBa0Usb0RBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNXaXRoaW5JbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLW5ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtb3ItY2FuY2VsLXRhc2stZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC10b2RvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLWVkaXQtcG9wLXVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWF2YWlsYWJsZS10YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS10b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXQtY3VycmVudC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LWN1cnJlbnQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3LXRhc2staW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLWhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWlucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW1vdmUtcHJvamVjdC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1ncm91cGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9nZ2xlLW5hdi1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtc3RhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2dnbGUtdGhlbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290LmxpZ2h0VCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6IGJsYWNrO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcbiAgLS1uYXYtYmc6IHdoaXRlO1xcbiAgLS10YXNrLWJvcmRlcjogYmxhY2s7XFxuICAtLXRpdGxlLWNvbG9yOiBibGFjaztcXG4gIC0tdGhlbWUtYmc6IHdoaXRlO1xcbiAgLS1naXRodWItaWNvbjogYmxhY2s7XFxufVxcbjpyb290LmRhcmtUIHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzIyMzAzYztcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMWY4ZDRkO1xcbiAgLS1tYWluLWNvbG9yOiAjMTkyNzM0O1xcbiAgLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogIzIyMzAzYztcXG4gIC0taGVhZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAtLWhvcml6b250YWwtcnVsZTogd2hpdGU7XFxuICAtLW1haW4taGVhZGVyLWJnQ29sb3I6ICMzMDhjNTZkNjtcXG4gIC0tbmF2LWhlYWRlcjogcmdiKDI1NSAyNTUgMjU1KTtcXG4gIC0tbmF2LWJnOiAjMTUyMDJiO1xcbiAgLS10YXNrLWJvcmRlcjogd2hpdGU7XFxuICAtLXRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4gIC0tdGhlbWUtYmc6ICMxOTI3MzQ7XFxuICAtLWdpdGh1Yi1pY29uOiB3aGl0ZTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTElORyAqL1xcbmhlYWRlciB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLnRoZW1lVG9nZ2xlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50aGVtZS1saWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5tZW51LWxpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmxpZ2h0LWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kYXJrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRhcmstdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBNQUlOIEJPRFkgU1RZTElORyAqL1xcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLyogTmF2IFN0eWxpbmcgKi9cXG5tYWluID4gbmF2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5uYXYge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLm5hdi1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBMaXN0IHN0eWxpbmcgKi9cXG51bCB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAyMjQsIDE4NywgMC42KTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5saTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxubGkgPiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICAjNDE1ODRiOTkgMCUsXFxuICAgICM1YzVjNWMgNXB4LFxcbiAgICAjYTBlMGJiOTkgMiUsXFxuICAgICNhMGUwYmI5OSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZTljN2RjO1xcbn1cXG5cXG4vKiBIb3Jpem9udGFsIFJ1bGUgKi9cXG5ociB7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ob3Jpem9udGFsLXJ1bGUpO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBhbmQgZm9ybSBzdHlsaW5nICovXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5wdXQtTGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLmlucHV0LUxpOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaG9tZSA+IGgyOmZpcnN0LWNoaWxkID4gaW1nLFxcbi5wcm9qZWN0ID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLnByb2plY3RzID4gaW1nOmxhc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEVkaXQgZGV0YWlscyBwb3AtdXAgc3R5bGluZyAqL1xcbi5kZWxldGUtZWRpdC1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTJweCAwcHggYmxhY2s7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogNHB4IDNweCAxMnB4IDBweCBibGFjaztcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwIHtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwIHtcXG4gIHBhZGRpbmc6IDEycHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4ubmFtZS1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gc3R5bGluZyAqL1xcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtaGVhZGVyKTtcXG59XFxuLm1haW5TZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZmxleDogMztcXG59XFxuLm1haW5IZWFkZXIge1xcbiAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4vKiBUYXNrIGlucHV0IGZvcm0gc3R5bGluZyAqL1xcbi5hZGQtdGFzay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1zZWN0aW9uID4gcDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmcpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLnRhc2staW5wdXQtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmcpO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbn1cXG4uYnRuLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uZXctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4wNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGFzay1ib3JkZXIpO1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm5ldy10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjAyKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4udW5kb25lLXRhc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi51bmRvbmUtdGFzay1kYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG9uZS10YXNrIHtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gaDIge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5zdGFyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyNXB4O1xcbn1cXG4udW5jaGVja2VkLXN0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udW5jaGVja2VkLXN0YXItZGFyayB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrZWQtc3RhciB7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICB3aWR0aDogMjFweDtcXG59XFxuLmRhdGUtc3BhbiA+IHAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycHggNnB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi51bmNoZWNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrZWQtc3RhcixcXG4uZG9uZS10YXNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrLFxcbi5kb25lIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB6LWluZGV4OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5kYXRlLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubXktdGFzay1kb3RzIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubXktdGFzay1kb3RzLWRhcmsge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGF0ZS1hbmQtc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiBGT09URVIgU1RZTElORyAqL1xcbmZvb3RlciB7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuaSB7XFxuICBjb2xvcjogdmFyKC0tZ2l0aHViLWljb24pO1xcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFD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QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLDRCQUE0Qjs7RUFFNUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRTtJQUNFLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290LmxpZ2h0VCB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICAtLWJvcmRlci1jb2xvcjogIzJhYmQ2NztcXG4gIC0tbWFpbi1jb2xvcjogI2VjZWNlYztcXG4gIC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICNjMmQ4Yjc7XFxuICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1ob3Jpem9udGFsLXJ1bGU6IGJsYWNrO1xcbiAgLS1tYWluLWhlYWRlci1iZ0NvbG9yOiAjMzA4YzU2ZDY7XFxuICAtLW5hdi1oZWFkZXI6IHJnYigxLCAxMzQsIDEpO1xcbiAgLS1uYXYtYmc6IHdoaXRlO1xcbiAgLS10YXNrLWJvcmRlcjogYmxhY2s7XFxuICAtLXRpdGxlLWNvbG9yOiBibGFjaztcXG4gIC0tdGhlbWUtYmc6IHdoaXRlO1xcbiAgLS1naXRodWItaWNvbjogYmxhY2s7XFxufVxcbjpyb290LmRhcmtUIHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzIyMzAzYztcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMWY4ZDRkO1xcbiAgLS1tYWluLWNvbG9yOiAjMTkyNzM0O1xcbiAgLS1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogIzIyMzAzYztcXG4gIC0taGVhZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAtLWhvcml6b250YWwtcnVsZTogd2hpdGU7XFxuICAtLW1haW4taGVhZGVyLWJnQ29sb3I6ICMzMDhjNTZkNjtcXG4gIC0tbmF2LWhlYWRlcjogcmdiKDI1NSAyNTUgMjU1KTtcXG4gIC0tbmF2LWJnOiAjMTUyMDJiO1xcbiAgLS10YXNrLWJvcmRlcjogd2hpdGU7XFxuICAtLXRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4gIC0tdGhlbWUtYmc6ICMxOTI3MzQ7XFxuICAtLWdpdGh1Yi1pY29uOiB3aGl0ZTtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTElORyAqL1xcbmhlYWRlciB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLnRoZW1lVG9nZ2xlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51SWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50aGVtZS1saWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5tZW51LWxpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmxpZ2h0LWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kYXJrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRhcmstdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBNQUlOIEJPRFkgU1RZTElORyAqL1xcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLyogTmF2IFN0eWxpbmcgKi9cXG5tYWluID4gbmF2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5uYXYge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLm5hdi1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBMaXN0IHN0eWxpbmcgKi9cXG51bCB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAyMjQsIDE4NywgMC42KTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5saTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmU5YzdkYztcXG59XFxubGkgPiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICAjNDE1ODRiOTkgMCUsXFxuICAgICM1YzVjNWMgNXB4LFxcbiAgICAjYTBlMGJiOTkgMiUsXFxuICAgICNhMGUwYmI5OSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZTljN2RjO1xcbn1cXG5cXG4vKiBIb3Jpem9udGFsIFJ1bGUgKi9cXG5ociB7XFxuICBtYXJnaW46IDEwcHggMCAwO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ob3Jpem9udGFsLXJ1bGUpO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBhbmQgZm9ybSBzdHlsaW5nICovXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5wdXQtTGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG59XFxuLmlucHV0LUxpOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idXR0b24tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uYnV0dG9uLWNsYXNzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMwcHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaG9tZSA+IGgyOmZpcnN0LWNoaWxkID4gaW1nLFxcbi5wcm9qZWN0ID4gaDI6Zmlyc3QtY2hpbGQgPiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogN3B4O1xcbn1cXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLnByb2plY3RzID4gaW1nOmxhc3Qtb2YtdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYWRkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEVkaXQgZGV0YWlscyBwb3AtdXAgc3R5bGluZyAqL1xcbi5kZWxldGUtZWRpdC1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTJweCAwcHggYmxhY2s7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogNHB4IDNweCAxMnB4IDBweCBibGFjaztcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwIHtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwIHtcXG4gIHBhZGRpbmc6IDEycHggMTBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5kZWxldGUtZWRpdC1kaXYgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LXRhc2sgPiBwOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzgsIDAsIDc4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxOTgsIDE0MiwgMC4zKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuLmRlbGV0ZS1lZGl0LWRpdiA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uZGVsZXRlLWVkaXQtdGFzayA+IHA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE5OCwgMTQyLCAwLjMpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG4ubmFtZS1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gc3R5bGluZyAqL1xcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uYXYtaGVhZGVyKTtcXG59XFxuLm1haW5TZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZmxleDogMztcXG59XFxuLm1haW5IZWFkZXIge1xcbiAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4vKiBUYXNrIGlucHV0IGZvcm0gc3R5bGluZyAqL1xcbi5hZGQtdGFzay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uYWRkLXRhc2stc2VjdGlvbiA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5hZGQtdGFzay1zZWN0aW9uID4gcDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDUyLCAxNTMsIDAuMSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmcpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuLnRhc2staW5wdXQtZm9ybTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmcpO1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuLnRhc2staW5wdXQtZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcbi50YXNrLWlucHV0LWZvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuLmJ0bi1jbGFzcyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4udGFzay1pbnB1dC1mb3JtID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbn1cXG4uYnRuLWNsYXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5idG4tY2xhc3MgPiBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5uZXctdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgNTIsIDE1MywgMC4wNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGFzay1ib3JkZXIpO1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm5ldy10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjAyKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG4udW5kb25lLXRhc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi51bmRvbmUtdGFzay1kYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG9uZS10YXNrIHtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gaDIge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbn1cXG4udGl0bGUtYW5kLWRlc2MtZGl2ID4gcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi5zdGFyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyNXB4O1xcbn1cXG4udW5jaGVja2VkLXN0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udW5jaGVja2VkLXN0YXItZGFyayB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrZWQtc3RhciB7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICB3aWR0aDogMjFweDtcXG59XFxuLmRhdGUtc3BhbiA+IHAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycHggNnB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxufVxcbi51bmNoZWNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrZWQtc3RhcixcXG4uZG9uZS10YXNrIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNoZWNrLFxcbi5kb25lIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB6LWluZGV4OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5kYXRlLXNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubXktdGFzay1kb3RzIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubXktdGFzay1kb3RzLWRhcmsge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGF0ZS1hbmQtc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiBGT09URVIgU1RZTElORyAqL1xcbmZvb3RlciB7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuaSB7XFxuICBjb2xvcjogdmFyKC0tZ2l0aHViLWljb24pO1xcbn1cXG5cXG4vKiBVc2VzIGZsZXgtZGlyZWN0aW9uIGNvbHVtbiBmb3Igc2NyZWVuIHNpemVzIGJlbG93IDYwMHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1dpdGhpbkludGVydmFsXG4gKiBAY2F0ZWdvcnkgSW50ZXJ2YWwgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSBpbnRlcnZhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/IChJbmNsdWRpbmcgc3RhcnQgYW5kIGVuZC4pXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0ludGVydmFsfSBpbnRlcnZhbCAtIHRoZSBpbnRlcnZhbCB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IFRoZSBzdGFydCBvZiBhbiBpbnRlcnZhbCBjYW5ub3QgYmUgYWZ0ZXIgaXRzIGVuZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gRGF0ZSBpbiBpbnRlcnZhbCBjYW5ub3QgYmUgYEludmFsaWQgRGF0ZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSkgLy8gPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBlbmQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQ6IGRhdGUsIGVuZCB9KSAvLyA9PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGlydHlEYXRlLCBpbnRlcnZhbCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWUgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBzdGFydFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLmdldFRpbWUoKTtcbiAgdmFyIGVuZFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKS5nZXRUaW1lKCk7IC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG5cbiAgaWYgKCEoc3RhcnRUaW1lIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9pY29ucy9wcm9qZWN0TWVudS5wbmdcIjtcbmltcG9ydCBQcm9qZWN0RG90cyBmcm9tIFwiLi9pY29ucy9kb3RzLnBuZ1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElucHV0IH0gZnJvbSBcIi4vcHJvamVjdC1pbnB1dFwiO1xuaW1wb3J0IHsgcG9wVXBEZWxldGVBbmRFZGl0IH0gZnJvbSBcIi4vZGVsZXRlLWVkaXQtcG9wLXVwXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IHRvZG9BZGRCdXR0b24gfSBmcm9tIFwiLi9hZGQtdG9kby1idXR0b25cIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2FkZC1vci1jYW5jZWwtdGFzay1ldmVudFwiO1xuaW1wb3J0IHsgdG9nZ2xlSWNvbiB9IGZyb20gXCIuL3RvZ2dsZS10aGVtZVwiO1xuXG5sZXQgcHJvamVjdEFycmF5SW5kZXg7XG5sZXQgc2VsZWN0ZWRQcm9qZWN0SW5kZXg7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSWZBbnlGb3JtRXhpc3QpO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmQW55Rm9ybUV4aXN0KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgaWYgKHByb2plY3RMaXN0LmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0WzBdID09IFwiaW5wdXQtTGlcIikgcmV0dXJuO1xuICBnZXRQcm9qZWN0SW5wdXQoKTtcbiAgY2FuY2VsUHJvamVjdElucHV0KCk7XG4gIGFkZFByb2plY3RUb0xpc3QoKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdElucHV0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSW5wdXRGb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5wdXRGb3JtKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKVxuICAgIC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LUxpXCIpKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgLy8gR2V0cyBzZWxlY3RlZCBwcm9qZWN0IGluZGV4XG4gIHNlbGVjdGVkUHJvamVjdEluZGV4ID0gbnVsbFxuICBjb25zdCBnZXRQcm9qZWN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpLmNoaWxkTm9kZXM7XG4gIGNvbnN0IGdldFByb2plY3RBcnIgPSBBcnJheS5mcm9tKGdldFByb2plY3ROb2RlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRQcm9qZWN0QXJyLmxlbmd0aDsgaSsrKVxuICAgIGlmIChnZXRQcm9qZWN0QXJyW2ldLmNsYXNzTGlzdFsxXSA9PT0gXCJzZWxlY3RlZFwiKVxuICAgICAgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0QXJyLmluZGV4T2YoZ2V0UHJvamVjdEFycltpXSk7XG5cbiAgLy8gSWYgYWRkZWQgcHJvamVjdCBpcyBlbXB0eSBzdHJpbmdzIGl0IHJldHVybnNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgcHVzaE5ld1Byb2plY3RJbnN0YW5jZSgpO1xuICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICBzZXRTZWxlY3RlZENsYXNzKHNlbGVjdGVkUHJvamVjdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gcHVzaE5ld1Byb2plY3RJbnN0YW5jZSgpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3IFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWlucHV0XCIpLnZhbHVlKSk7XG4gIHNldFByb2plY3RBcnJheSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0TGlzdHMoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIik7XG4gIHdoaWxlIChwcm9qZWN0TGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiBBZGRQcm9qZWN0TmFtZVRvTGlzdChwcm9qZWN0KSk7XG59XG5cbi8vIFJlLWFwcGx5IHNlbGVjdGVkIGNsYXNzIHRvIHNhbWUgZWxlbWVudFxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRDbGFzcyhzZWxlY3RlZFByb2plY3QpIHtcbiAgY29uc3Qgc2V0UHJvamVjdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKS5jaGlsZE5vZGVzO1xuICBjb25zdCBzZXRQcm9qZWN0QXJyID0gQXJyYXkuZnJvbShzZXRQcm9qZWN0Tm9kZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0UHJvamVjdEFyci5sZW5ndGg7IGkrKylcbiAgICBpZiAoc2V0UHJvamVjdEFyci5pbmRleE9mKHNldFByb2plY3RBcnJbaV0pID09PSBzZWxlY3RlZFByb2plY3QpXG4gICAgICBzZXRQcm9qZWN0QXJyW2ldLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gQWRkUHJvamVjdE5hbWVUb0xpc3QocHJvaikge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgY29uc3QgbXlQcm9qZWN0RG90c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG15UHJvamVjdE1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlQcm9qZWN0RG90cyA9IG5ldyBJbWFnZSgpO1xuXG4gIG15UHJvamVjdE1lbnUuc3JjID0gUHJvamVjdE1lbnU7XG4gIG15UHJvamVjdERvdHMuc3JjID0gUHJvamVjdERvdHM7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvai5uYW1lO1xuICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNcIik7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVcIik7XG4gIHByb2plY3QuYXBwZW5kKG15UHJvamVjdE1lbnUsIHByb2plY3ROYW1lKTtcbiAgbXlQcm9qZWN0RG90c0Rpdi5hcHBlbmRDaGlsZChteVByb2plY3REb3RzKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChteVByb2plY3REb3RzRGl2KTtcbiAgYWRkUHJvamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9qZWN0LCBhZGRQcm9qZWN0KTtcblxuICBteVByb2plY3REb3RzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHBvcFVwRGVsZXRlQW5kRWRpdC5iaW5kKG15UHJvamVjdERvdHMsIHByb2opXG4gICk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFByb2plY3RGb3JVc2UuYmluZChwcm9qZWN0LCBwcm9qKSk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RGb3JVc2UocHJvaiwgZSkge1xuICBnZXRUYXNrQXJyYXkocHJvaik7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdHNcIikge1xuICAgIHJlbW92ZVRhc2tzKCk7XG4gICAgdG9kb0FkZEJ1dHRvbigpO1xuICAgIGRpc3BsYXlUYXNrcyhlKTtcbiAgICBzZXRIZWFkZXJUb1Byb2plY3ROYW1lKHByb2opO1xuICAgIHRvZ2dsZUljb24oKTtcbiAgICBzdHlsZVNlbGVjdGVkTGlzdC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0eWxlU2VsZWN0ZWRMaXN0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIikuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGlmIChsaXN0LmNsYXNzTGlzdFsxXSA9PT0gXCJzZWxlY3RlZFwiIHx8IGxpc3QuY2xhc3NMaXN0WzBdID09PSBcInNlbGVjdGVkXCIpXG4gICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBzZXRIZWFkZXJUb1Byb2plY3ROYW1lKHByb2opIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluSGVhZGVyXCIpLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBwcm9qLm5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tBcnJheShwcm9qKSB7XG4gIHByb2plY3RBcnJheUluZGV4ID0gcHJvamVjdEFycmF5LmluZGV4T2YocHJvaik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tzKCkge1xuICBjb25zdCBhZGRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKTtcbiAgaWYgKCEhYWRkVGFza1NlY3Rpb24pXG4gICAgd2hpbGUgKGFkZFRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpXG4gICAgICBhZGRUYXNrU2VjdGlvbi5yZW1vdmVDaGlsZChhZGRUYXNrU2VjdGlvbi5sYXN0Q2hpbGQpO1xufVxuXG5leHBvcnQge1xuICBhZGROZXdQcm9qZWN0LFxuICByZW1vdmVUYXNrcyxcbiAgY3JlYXRlUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdExpc3RzLFxuICBwcm9qZWN0QXJyYXlJbmRleCxcbiAgc3R5bGVTZWxlY3RlZExpc3QsXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdEFycmF5SW5kZXggfSBmcm9tIFwiLi9hZGQtbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10b2RvLWxpc3RcIjtcbmltcG9ydCB7IG5ld1Rhc2tJbnB1dCB9IGZyb20gXCIuL25ldy10YXNrLWlucHV0XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSwgVG9kb1Rhc2sgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyB0b2dnbGVJY29uIH0gZnJvbSBcIi4vdG9nZ2xlLXRoZW1lXCI7XG5cbmZ1bmN0aW9uIGFkZEFuZENhbmNlbFRhc2soZSkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBjb25zdCBpbnB1dFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0LWZvcm1cIik7XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10YXNrLWJ1dHRvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdUYXNrSW5wdXQoKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJjYW5jZWwtdGFza1wiKSB7XG4gICAgaW5wdXRUYXNrRm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlucHV0VGFza0Zvcm0pO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZC10YXNrXCIpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXQtZm9ybVwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblxuICAgIHB1c2hUb1Rhc2tBcnJheSgpO1xuICAgIHJlbW92ZVRhc2tGcm9tTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIHRvZ2dsZUljb24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdXNoVG9UYXNrQXJyYXkoKSB7XG4gIHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXlJbmRleF0udGFza0FycmF5LnB1c2goXG4gICAgbmV3IFRvZG9UYXNrKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWFyZWEtZm9ybVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC1mb3JtXCIpLnZhbHVlXG4gICAgKVxuICApO1xuICBzZXRQcm9qZWN0QXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21MaXN0KCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuICBpZiAoISF0YXNrTGlzdCkge1xuICAgIHdoaWxlICh0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXG4gICAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXlJbmRleF0udGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgVG9kb1Rhc2sucHJvdG90eXBlKTtcbiAgICBzZXRQcm9qZWN0QXJyYXkoKTtcbiAgICBkaXNwbGF5QWRkZWRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzayk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBbmRDYW5jZWxUYXNrLCBkaXNwbGF5VGFza3MsIHJlbW92ZVRhc2tGcm9tTGlzdCB9OyIsImltcG9ydCBBZGRUYXNrIGZyb20gXCIuL2ljb25zL2FkZFRhc2sucG5nXCI7XG5cbmZ1bmN0aW9uIHRvZG9BZGRCdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1zZWN0aW9uXCIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbXlBZGRUYXNrID0gbmV3IEltYWdlKCk7XG5cbiAgbXlBZGRUYXNrLnNyYyA9IEFkZFRhc2s7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kKG15QWRkVGFzaywgXCJBZGQgVGFza1wiKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcblxuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idXR0b25cIik7XG59XG5cbmV4cG9ydCB7IHRvZG9BZGRCdXR0b24gfTsiLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXlJbmRleCB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFza0Zyb21MaXN0IH0gZnJvbSBcIi4vYWRkLW9yLWNhbmNlbC10YXNrLWV2ZW50XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IGNsZWFyVGFzaywgZGlzcGxheUFsbFRhc2tzLCBzaG93R3JvdXBUaXRsZSB9IGZyb20gXCIuL3Rhc2stZ3JvdXBpbmdcIjtcblxubGV0IHByb2plY3RJbmRleDtcbmxldCB0YXNrSW5kZXg7XG5cbmZ1bmN0aW9uIHBvcFVwRGVsZXRlQW5kRWRpdChuYW1lT2ZBcnJheSkge1xuICBsZXQgbGlzdENoaWxkcmVuO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwibmV3LXRhc2tcIikgbGlzdENoaWxkcmVuID0gNDtcbiAgZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwicHJvamVjdHNcIikgbGlzdENoaWxkcmVuID0gMztcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gbGlzdENoaWxkcmVuKSByZXR1cm47XG5cbiAgY29uc3QgZGVsZXRlT3JFZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdFswXSA9PSBcInByb2plY3RzXCIpXG4gICAgZGVsZXRlT3JFZGl0RGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZWRpdC1kaXZcIik7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gXCJuZXctdGFza1wiKVxuICAgIGRlbGV0ZU9yRWRpdERpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWVkaXQtdGFza1wiKTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwibmV3LXRhc2tcIilcbiAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIpO1xuICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RbMF0gPT0gXCJwcm9qZWN0c1wiKVxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuXG4gIGVkaXRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZU9yRWRpdERpdi5hcHBlbmQoZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QpO1xuICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkZWxldGVPckVkaXREaXYpO1xuXG4gIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIGRlbGV0ZUZyb21MaXN0LmJpbmQoZGVsZXRlUHJvamVjdClcbiAgKTtcbiAgZ2V0SW5kZXguY2FsbCh0aGlzLCBuYW1lT2ZBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZyb21MaXN0KCkge1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcInByb2plY3RzXCIpIHtcbiAgICAvLyBBY3Rpb24gd2hlbiBwcm9qZWN0IGlzIGRlbGV0ZWRcbiAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICApO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEFycmF5SW5kZXgsIDEpO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPT09XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkhlYWRlclwiKS5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuICAgICAgKSB7XG4gICAgICAgIC8qKiBJZiB0aGUgcHJvamVjdCBiZWluZyBkZWxldGVkIGlzIHRoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgICogdGFrZSBmb2xsb3dpbmcgYWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYXJUYXNrKCk7XG4gICAgICAgIHNob3dHcm91cFRpdGxlKFwiRGVsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIFRoaXMgYWN0aW9uIHVwZGF0ZXMgdGhlIHRhc2sgZ3JvdXBpbmcgc2VjdGlvbiBpZiBwcm9qZWN0IGlzIGJlaW5nXG4gICAgICAgKiBkZWxldGVkIHdpdGhvdXQgZmlyc3QgYmVpbmcgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIHJlbW92ZVRhc2tGcm9tTGlzdCgpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEFjdGlvbiB3aGVuIHRhc2sgaXMgZGVsZXRlZFxuICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG4gICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICk7XG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4KG5hbWVPZkFycmF5KSB7XG4gIGlmICh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwicHJvamVjdHNcIilcbiAgICBnZXRQcm9qZWN0SW5kZXgobmFtZU9mQXJyYXkpO1xuICBpZiAodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcIm5ldy10YXNrXCIpXG4gICAgZ2V0VGFza0luZGV4KG5hbWVPZkFycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KG5hbWVPZkFycmF5KSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sgPT09IG5hbWVPZkFycmF5KSBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJbmRleChuYW1lT2ZBcnJheSkge1xuICBnZXRQcm9qZWN0SW5kZXgobmFtZU9mQXJyYXkpO1xuICB0YXNrSW5kZXggPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50YXNrQXJyYXkuaW5kZXhPZihuYW1lT2ZBcnJheSk7XG59XG5cbmV4cG9ydCB7IHBvcFVwRGVsZXRlQW5kRWRpdCwgcHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIGdldFByb2plY3RJbmRleCB9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3RMaXN0cyB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi90YXNrLWdyb3VwaW5nXCI7XG5pbXBvcnQgeyBnZXRUaGVtZUNob2ljZUZyb21TdG9yYWdlLCB0b2dnbGVJY29uIH0gZnJvbSBcIi4vdG9nZ2xlLXRoZW1lXCI7XG5cbi8vIERpc3BsYXkgYWxsIGF2YWlsYWJsZSBwcm9qZWN0cyBhbmQgdGFza3Mgb24gcGFnZSBsb2FkLlxuZnVuY3Rpb24gRGlzcGxheUFsbFRhc2tzT25QYWdlTG9hZCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpID09PSBudWxsKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIGVsc2Uge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgUHJvamVjdC5wcm90b3R5cGUpO1xuICAgICAgc2V0UHJvamVjdEFycmF5KCk7XG4gICAgICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgZ2V0VGhlbWVDaG9pY2VGcm9tU3RvcmFnZSgpO1xuICB0b2dnbGVJY29uKCk7XG59XG5cbmV4cG9ydCB7IERpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQgfTsiLCJpbXBvcnQgUHJvamVjdERvdHMgZnJvbSBcIi4vaWNvbnMvZG90cy5wbmdcIjtcbmltcG9ydCBQcm9qZWN0RG90c0RhcmsgZnJvbSBcIi4vaWNvbnMvZG90c0RhcmsucG5nXCI7XG5pbXBvcnQgVW5jaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy91bmNoZWNrZWRTdGFyLnBuZ1wiO1xuaW1wb3J0IFVuY2hlY2tlZFN0YXJEYXJrIGZyb20gXCIuL2ljb25zL3VuY2hlY2tlZFN0YXJEYXJrLnBuZ1wiO1xuaW1wb3J0IFVuZG9uZVRhc2sgZnJvbSBcIi4vaWNvbnMvdW5kb25lVGFzay5wbmdcIjtcbmltcG9ydCBVbmRvbmVUYXNrRGFyayBmcm9tIFwiLi9pY29ucy91bmRvbmVUYXNrRGFyay5wbmdcIjtcbmltcG9ydCBDaGVja2VkU3RhciBmcm9tIFwiLi9pY29ucy9jaGVja2VkU3Rhci5wbmdcIjtcbmltcG9ydCBEb25ldGFzayBmcm9tIFwiLi9pY29ucy9kb25lVGFzay5wbmdcIjtcbmltcG9ydCB7IGFkZENsYXNzLCB0b2dnbGVFdmVudHMgfSBmcm9tIFwiLi90b2dnbGUtc3RhdGVzXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRlZFRhc2tzKHRpdGxlLCBkZXNjLCBkYXRlLCB0YXNrKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0aXRsZUFuZERlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVBbmRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBteVRhc2tEb3RzID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VGFza0RvdHNEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5jaGVja2VkU3RhciA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuY2hlY2tlZFN0YXJEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VW5kb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVVuZG9uZVRhc2tEYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15Q2hlY2tlZFN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlEb25lVGFzayA9IG5ldyBJbWFnZSgpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIGRhdGVJbnB1dC50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgbXlUYXNrRG90cy5zcmMgPSBQcm9qZWN0RG90cztcbiAgbXlUYXNrRG90c0Rhcmsuc3JjID0gUHJvamVjdERvdHNEYXJrO1xuICBteVVuY2hlY2tlZFN0YXIuc3JjID0gVW5jaGVja2VkU3RhcjtcbiAgbXlVbmNoZWNrZWRTdGFyRGFyay5zcmMgPSBVbmNoZWNrZWRTdGFyRGFyaztcbiAgbXlVbmRvbmVUYXNrLnNyYyA9IFVuZG9uZVRhc2s7XG4gIG15VW5kb25lVGFza0Rhcmsuc3JjID0gVW5kb25lVGFza0Rhcms7XG4gIG15Q2hlY2tlZFN0YXIuc3JjID0gQ2hlY2tlZFN0YXI7XG4gIG15RG9uZVRhc2suc3JjID0gRG9uZXRhc2s7XG5cbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIik7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVBbmREZXNjRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1hbmQtZGVzYy1kaXZcIik7XG4gIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NcIik7XG4gIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJkYXRlLXNwYW5cIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1pbnB1dFwiKTtcbiAgc3RhckRpdi5jbGFzc0xpc3QuYWRkKFwic3Rhci1kaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuICBteVVuY2hlY2tlZFN0YXIuY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZC1zdGFyXCIsIFwibGlnaHRcIik7XG4gIG15VW5jaGVja2VkU3RhckRhcmsuY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZC1zdGFyLWRhcmtcIiwgXCJkYXJrXCIpO1xuICBteUNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXN0YXJcIik7XG4gIG15VW5kb25lVGFzay5jbGFzc0xpc3QuYWRkKFwidW5kb25lLXRhc2tcIiwgXCJsaWdodFwiKTtcbiAgbXlVbmRvbmVUYXNrRGFyay5jbGFzc0xpc3QuYWRkKFwidW5kb25lLXRhc2stZGFya1wiLCBcImRhcmtcIik7XG4gIG15RG9uZVRhc2suY2xhc3NMaXN0LmFkZChcImRvbmUtdGFza1wiKTtcbiAgbXlUYXNrRG90cy5jbGFzc0xpc3QuYWRkKFwibXktdGFzay1kb3RzXCIsIFwibGlnaHRcIik7XG4gIG15VGFza0RvdHNEYXJrLmNsYXNzTGlzdC5hZGQoXCJteS10YXNrLWRvdHMtZGFya1wiLCBcImRhcmtcIik7XG4gIGRhdGVBbmRTcGFuLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWFuZC1zcGFuXCIpO1xuXG4gIHRpdGxlQW5kRGVzY0Rpdi5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzYyk7XG4gIGRhdGVTcGFuLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIGRhdGVBbmRTcGFuLmFwcGVuZChkYXRlU3BhbiwgbXlUYXNrRG90cywgbXlUYXNrRG90c0RhcmspO1xuICBzdGFyRGl2LmFwcGVuZChteVVuY2hlY2tlZFN0YXIsIG15Q2hlY2tlZFN0YXIsIG15VW5jaGVja2VkU3RhckRhcmspO1xuICB0YXNrRGl2LmFwcGVuZChteVVuZG9uZVRhc2ssIG15RG9uZVRhc2ssIG15VW5kb25lVGFza0RhcmspO1xuICBuZXdUYXNrLmFwcGVuZCh0YXNrRGl2LCB0aXRsZUFuZERlc2NEaXYsIHN0YXJEaXYsIGRhdGVBbmRTcGFuKTtcblxuICAvLyBDaGVja3MgaWYgdGFza0xpc3QgZm9yIGVhY2ggcHJvamVjdCBpcyBhdmFpbGFibGUgZWxzZSBkaXNwbGF5IGFsbCB0YXNrc1xuICBpZiAoISF0YXNrTGlzdCkgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIGFkZFRhc2tCdXR0b24pO1xuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKS5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICB0b2dnbGVFdmVudHMoXG4gICAgdGFzayxcbiAgICBteVRhc2tEb3RzLFxuICAgIG15RG9uZVRhc2ssXG4gICAgbXlVbmRvbmVUYXNrLFxuICAgIG15VGFza0RvdHNEYXJrLFxuICAgIG15Q2hlY2tlZFN0YXIsXG4gICAgbXlVbmRvbmVUYXNrRGFyayxcbiAgICBteVVuY2hlY2tlZFN0YXIsXG4gICAgbXlVbmNoZWNrZWRTdGFyRGFya1xuICApO1xuXG4gIGFkZENsYXNzKHRhc2ssIG15RG9uZVRhc2ssIHRhc2tUaXRsZSwgdGFza0Rlc2MsIGRhdGVJbnB1dCwgbXlDaGVja2VkU3Rhcik7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdEFycmF5SW5kZXgsIHJlbW92ZVByb2plY3RMaXN0cyB9IGZyb20gXCIuL2FkZC1uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBzZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SW5wdXQgfSBmcm9tIFwiLi9wcm9qZWN0LWlucHV0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUVkaXRpbmcoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICBpZiAocHJvamVjdExpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJpbnB1dC1MaVwiKSByZXR1cm47XG5cbiAgY29uc3QgZ2V0TmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QuY2hpbGRyZW5bMV07XG4gICAgbGV0IHByZXZpb3VzTmFtZSA9IHByb2plY3ROYW1lLnRleHRDb250ZW50O1xuICAgIHJldHVybiB7IHByZXZpb3VzTmFtZSwgcHJvamVjdE5hbWUgfTtcbiAgfSkoKTtcblxuICBnZXRQcm9qZWN0SW5wdXQoKTtcblxuICBjb25zdCBpbnNlcnRHZXRQcm9qZWN0SW5wdXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIikubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LUxpXCIpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IGdldE5hbWUucHJldmlvdXNOYW1lO1xuICAgIHByb2plY3RMaXN0Lmluc2VydEJlZm9yZShpbnB1dEZvcm0sIG5leHRFbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRGb3JtLFxuICAgICAgbmFtZUlucHV0LFxuICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlTmV3UHJvamVjdE5hbWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1pbnB1dFwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBlZGl0UHJvamVjdEFycmF5TmFtZSgpO1xuICAgIHJlcGxhY2VPbGROYW1lSW5Eb20oKTtcbiAgICByZW1vdmVJbnB1dEZvcm0oKTtcbiAgICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFByb2plY3RBcnJheU5hbWUoKSB7XG4gICAgcHJvamVjdEFycmF5W3Byb2plY3RBcnJheUluZGV4XS5zZXROYW1lKGluc2VydEdldFByb2plY3RJbnB1dC5uYW1lSW5wdXQudmFsdWUpO1xuICAgIHNldFByb2plY3RBcnJheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZU9sZE5hbWVJbkRvbSgpIHtcbiAgICBnZXROYW1lLnByb2plY3ROYW1lID0gaW5zZXJ0R2V0UHJvamVjdElucHV0Lm5hbWVJbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUlucHV0Rm9ybSgpIHtcbiAgICBpbnNlcnRHZXRQcm9qZWN0SW5wdXQuaW5wdXRGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG4gICAgICBpbnNlcnRHZXRQcm9qZWN0SW5wdXQuaW5wdXRGb3JtXG4gICAgKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICAvLyBFdmVudExpc3RlbmVyIG9uIGNhbmNlbCBhbmQgYWRkIGJ1dHRvbnNcbiAgKCgpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVJbnB1dEZvcm0pO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5hZGRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHVwZGF0ZU5ld1Byb2plY3ROYW1lKTtcbiAgfSkoKTtcbn1cblxuZnVuY3Rpb24gZWRpdEN1cmVudFByb2plY3QoZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdFwiKSBlbmFibGVFZGl0aW5nKCk7XG59XG5cbmV4cG9ydCB7IGVkaXRDdXJlbnRQcm9qZWN0IH07IiwiaW1wb3J0IHsgcHJvamVjdEluZGV4LCB0YXNrSW5kZXggfSBmcm9tIFwiLi9kZWxldGUtZWRpdC1wb3AtdXBcIjtcbmltcG9ydCB7IG5ld1Rhc2tJbnB1dCB9IGZyb20gXCIuL25ldy10YXNrLWlucHV0XCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcblxuZnVuY3Rpb24gZW5hYmxlVGFza0VkaXRpbmcoKSB7XG4gIC8vIGN1cnJlbnRUYXNrIGlzIHRoZSBjdXJyZW50IHRhc2sgYmVpbmcgZWRpdGVkXG4gIGNvbnN0IGN1cnJlbnRUYXNrID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFza1wiKS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG5cbiAgaWYgKCEhdGFza0xpc3QpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICBpZiAodGFza0xpc3QuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3RbMF0gPT0gXCJ0YXNrLWlucHV0LWZvcm1cIikgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZ2V0TmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gSGlkZXMgY3VycmVudCB0YXNrIGJlaW5nIGVkaXRlZFxuICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICBsZXQgdGFza1RpdGxlID0gY3VycmVudFRhc2suY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdO1xuICAgIGxldCB0YXNrRGVzYyA9IGN1cnJlbnRUYXNrLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgdGFza0RhdGUgPSBjdXJyZW50VGFzay5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICByZXR1cm4geyB0YXNrVGl0bGUsIHRhc2tEZXNjLCB0YXNrRGF0ZSB9O1xuICB9KSgpO1xuXG4gIG5ld1Rhc2tJbnB1dCgpO1xuXG4gIGNvbnN0IGluc2VydE5ld0lucHV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSBjdXJyZW50VGFzay5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgdGFza0lucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbnB1dC1mb3JtXCIpO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0LWZvcm1cIik7XG4gICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWFyZWEtZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXQtZm9ybVwiKTtcblxuICAgIGlucHV0VGl0bGUudmFsdWUgPSBnZXROYW1lLnRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICBpbnB1dERlc2MudmFsdWUgPSBnZXROYW1lLnRhc2tEZXNjLnRleHRDb250ZW50O1xuICAgIGlucHV0RGF0ZS52YWx1ZSA9IGdldE5hbWUudGFza0RhdGUudGV4dENvbnRlbnQ7XG5cbiAgICAvLyBJZiB0YXNrTGlzdCBpcyBub3QgZm91bmQsIGluc2VydCB0YXNrSW5wdXRGb3JtIGluIGFsbCB0YXNrIHNlY3Rpb25cbiAgICBpZiAoISF0YXNrTGlzdCkgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dEZvcm0sIHByZXZpb3VzVGFzayk7XG4gICAgZWxzZVxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKVxuICAgICAgICAuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dEZvcm0sIGN1cnJlbnRUYXNrLm5leHRTaWJsaW5nKTtcblxuICAgIHJldHVybiB7IGlucHV0VGl0bGUsIGlucHV0RGVzYywgaW5wdXREYXRlLCB0YXNrSW5wdXRGb3JtIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlTmV3VGFza05hbWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtaW5wdXQtZm9ybVwiKS52YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dC1mb3JtXCIpLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xuXG4gICAgZ2V0TmFtZS50YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpbnNlcnROZXdJbnB1dC5pbnB1dFRpdGxlLnZhbHVlO1xuICAgIGdldE5hbWUudGFza0Rlc2MudGV4dENvbnRlbnQgPSBpbnNlcnROZXdJbnB1dC5pbnB1dERlc2MudmFsdWU7XG4gICAgZ2V0TmFtZS50YXNrRGF0ZS50ZXh0Q29udGVudCA9IGluc2VydE5ld0lucHV0LmlucHV0RGF0ZS52YWx1ZTtcblxuICAgIHVwZGF0ZU5ld1Rhc2tOYW1lSW5BcnJheShcbiAgICAgIGluc2VydE5ld0lucHV0LmlucHV0VGl0bGUudmFsdWUsXG4gICAgICBpbnNlcnROZXdJbnB1dC5pbnB1dERlc2MudmFsdWUsXG4gICAgICBpbnNlcnROZXdJbnB1dC5pbnB1dERhdGUudmFsdWVcbiAgICApO1xuXG4gICAgcmVtb3ZlTmV3VGFza0lucHV0KCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVOZXdUYXNrTmFtZUluQXJyYXkodGl0bGUsIGRlc2MsIGRhdGUpIHtcbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XS50YXNrQXJyYXlbdGFza0luZGV4XS5zZXREZXRhaWxzKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjLFxuICAgICAgZGF0ZVxuICAgICk7XG4gICAgc2V0UHJvamVjdEFycmF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOZXdUYXNrSW5wdXQoKSB7XG4gICAgaW5zZXJ0TmV3SW5wdXQudGFza0lucHV0Rm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuICAgICAgaW5zZXJ0TmV3SW5wdXQudGFza0lucHV0Rm9ybVxuICAgICk7XG5cbiAgICAvLyBSZW1vdmVzIGhpZGRlbiBjbGFzcyBmcm9tICdlZGl0ZWQgdGFzaydcbiAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgLy8gRXZlbnRMaXN0ZW5lciBvbiBhZGRUYXNrIGFuZCBjYW5jZWxUYXNrIEJ1dHRvbnNcbiAgKCgpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLXRhc2tcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlbW92ZU5ld1Rhc2tJbnB1dCk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHVwZGF0ZU5ld1Rhc2tOYW1lKTtcbiAgfSkoKTtcbn1cblxuZnVuY3Rpb24gZWRpdEN1cmVudFRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdC10YXNrXCIpIGVuYWJsZVRhc2tFZGl0aW5nKCk7XG59XG5cbmV4cG9ydCB7IGVkaXRDdXJlbnRUYXNrIH07IiwiZnVuY3Rpb24gbmV3VGFza0lucHV0KCkge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xuXG4gIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0ZXh0YXJlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRBcmVhRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGV4dEFyZWFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0aXRsZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICB0ZXh0QXJlYURlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRldGFpbHMgKE9wdGlvbmFsKTpcIjtcbiAgZGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIHRpdGxlRGl2LmFwcGVuZCh0aXRsZUlucHV0TGFiZWwsIHRpdGxlSW5wdXQpO1xuICB0ZXh0YXJlYURpdi5hcHBlbmQodGV4dEFyZWFEZXNjcmlwdGlvbkxhYmVsLCB0ZXh0QXJlYURlc2NyaXB0aW9uKTtcbiAgZGF0ZURpdi5hcHBlbmQoZGF0ZUlucHV0TGFiZWwsIGRhdGVJbnB1dCk7XG4gIGJ1dHRvbkRpdi5hcHBlbmQoY2FuY2VsQnV0dG9uLCBhZGRCdXR0b24pO1xuICB0YXNrSW5wdXRGb3JtLmFwcGVuZCh0aXRsZURpdiwgdGV4dGFyZWFEaXYsIGRhdGVEaXYsIGJ1dHRvbkRpdik7XG5cbiAgLy8gSWYgdGFza0xpc3QgaXMgbm90IGZvdW5kLCBpbnNlcnQgdGFza0lucHV0Rm9ybSBpbiBhbGwgdGFzayBzZWN0aW9uXG4gIGlmICghIXRhc2tMaXN0KVxuICAgIHRhc2tMaXN0Lmluc2VydEJlZm9yZShcbiAgICAgIHRhc2tJbnB1dEZvcm0sXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKVxuICAgICk7XG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1zZWN0aW9uXCIpLmFwcGVuZCh0YXNrSW5wdXRGb3JtKTtcblxuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1mb3JtXCIpO1xuICB0ZXh0QXJlYURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWFyZWEtZm9ybVwiKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWlucHV0LWZvcm1cIik7XG4gIHRhc2tJbnB1dEZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtZm9ybVwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJidG4tY2xhc3NcIik7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLXRhc2tcIik7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG59XG5cbmV4cG9ydCB7IG5ld1Rhc2tJbnB1dCB9OyIsImZ1bmN0aW9uIGNyZWF0ZWZvb3RlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBhbmNob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdpdEh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICBhbmNob3JMaW5rLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kKFwiQ29weXJpZ2h0IFxcdTAwQTkgMjAyMiBJQW1Zb3VuZ2Jvc3N5XCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYW5jaG9yTGluayk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBhbmNob3JMaW5rLnNldEF0dHJpYnV0ZShcbiAgICBcImhyZWZcIixcbiAgICBcImh0dHBzOi8vLy9naXRodWIuY29tL0lBbVlvdW5nYm9zc3kvY2FsY3VsYXRvclwiXG4gICk7XG5cbiAgZ2l0SHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1naXRodWJcIik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZWZvb3RlciB9OyIsImltcG9ydCBNZW51IGZyb20gXCIuL2ljb25zL21lbnVJY29uLnBuZ1wiO1xuaW1wb3J0IE1lbnVEYXJrIGZyb20gXCIuL2ljb25zL21lbnVJY29uRGFyay5wbmdcIjtcbmltcG9ydCBUb0RvTG9nbyBmcm9tIFwiLi9pY29ucy90by1kby5wbmdcIjtcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi9pY29ucy90aGVtZS5wbmdcIjtcbmltcG9ydCBUaGVtZURhcmsgZnJvbSBcIi4vaWNvbnMvdGhlbWVEYXJrLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b0RvTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRoZW1lVG9nZ2xlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcIm1lbnVJY29uXCIpO1xuICB0b0RvTG9nby5jbGFzc0xpc3QuYWRkKFwidG9Eb0xvZ29cIik7XG4gIHRoZW1lVG9nZ2xlci5jbGFzc0xpc3QuYWRkKFwidGhlbWVUb2dnbGVyXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0b0RvTG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51SWNvblwiKTtcbiAgY29uc3QgdG9Eb0xvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Mb2dvXCIpO1xuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lVG9nZ2xlclwiKTtcblxuICBjb25zdCBteU1lbnVJY29uID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15TWVudUljb25EYXJrID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VG9Eb0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlUaGVtZVRvZ2dsZXIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlUaGVtZVRvZ2dsZXJEYXJrID0gbmV3IEltYWdlKCk7XG5cbiAgbXlNZW51SWNvbi5zcmMgPSBNZW51O1xuICBteVRvRG9Mb2dvLnNyYyA9IFRvRG9Mb2dvO1xuICBteVRoZW1lVG9nZ2xlci5zcmMgPSBUaGVtZTtcbiAgbXlNZW51SWNvbkRhcmsuc3JjID0gTWVudURhcms7XG4gIG15VGhlbWVUb2dnbGVyRGFyay5zcmMgPSBUaGVtZURhcms7XG5cbiAgbXlNZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1saWdodFwiLCBcImxpZ2h0XCIpO1xuICBteU1lbnVJY29uRGFyay5jbGFzc0xpc3QuYWRkKFwibWVudS1EYXJrXCIsIFwiZGFya1wiKTtcbiAgbXlUaGVtZVRvZ2dsZXIuY2xhc3NMaXN0LmFkZChcInRoZW1lLWxpZ2h0XCIsIFwibGlnaHRcIik7XG4gIG15VGhlbWVUb2dnbGVyRGFyay5jbGFzc0xpc3QuYWRkKFwidGhlbWUtZGFya1wiLCBcImRhcmtcIik7XG5cbiAgbWVudUljb24uYXBwZW5kKG15TWVudUljb24sIG15TWVudUljb25EYXJrKTtcbiAgdG9Eb0xvZ28uYXBwZW5kQ2hpbGQobXlUb0RvTG9nbyk7XG4gIHRoZW1lVG9nZ2xlci5hcHBlbmQobXlUaGVtZVRvZ2dsZXIsIG15VGhlbWVUb2dnbGVyRGFyayk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlSGVhZGVyQ29udGVudCB9OyIsImltcG9ydCBBbGxUYXNrcyBmcm9tIFwiLi9pY29ucy9wbGFubmluZy5wbmdcIjtcbmltcG9ydCBUb2RheSBmcm9tIFwiLi9pY29ucy9jYWxlbmRhci5wbmdcIjtcbmltcG9ydCBUaGlzV2VlayBmcm9tIFwiLi9pY29ucy9uZXh0LXdlZWsucG5nXCI7XG5pbXBvcnQgSW1wb3J0YW50IGZyb20gXCIuL2ljb25zL2NoZWNrbGlzdC5wbmdcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2ljb25zL2hvbWUucG5nXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9pY29ucy9wcm9qZWN0LnBuZ1wiO1xuaW1wb3J0IEFkZFByb2plY3QgZnJvbSBcIi4vaWNvbnMvYWRkLnBuZ1wiO1xuXG5mdW5jdGlvbiBDcmVhdGVNYWluKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG1haW5Cb2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluU2VjdGlvblwiKTtcblxuICBtYWluQm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICBtYWluQm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHlDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZDb250ZW50KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob3Jpem9udGFsUnVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uc3QgbXlBbGxUYXNrcyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBteVRvZGF5ID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15VGhpc1dlZWsgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlJbXBvcnRhbnQgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbXlIb21lID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG15UHJvamVjdCA9IG5ldyBJbWFnZSgpO1xuXG4gIG15QWxsVGFza3Muc3JjID0gQWxsVGFza3M7XG4gIG15VG9kYXkuc3JjID0gVG9kYXk7XG4gIG15VGhpc1dlZWsuc3JjID0gVGhpc1dlZWs7XG4gIG15SW1wb3J0YW50LnNyYyA9IEltcG9ydGFudDtcbiAgbXlIb21lLnNyYyA9IEhvbWU7XG4gIG15UHJvamVjdC5zcmMgPSBQcm9qZWN0O1xuXG4gIGFsbFRhc2tzLmFwcGVuZENoaWxkKG15QWxsVGFza3MpO1xuICB0b2RheS5hcHBlbmRDaGlsZChteVRvZGF5KTtcbiAgdGhpc1dlZWsuYXBwZW5kQ2hpbGQobXlUaGlzV2Vlayk7XG4gIG5hdkhlYWRlci5hcHBlbmRDaGlsZChteUhvbWUpO1xuICBcbiAgaW1wb3J0YW50LmFwcGVuZENoaWxkKG15SW1wb3J0YW50KTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG4gIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICBob21lLmFwcGVuZENoaWxkKG5hdkhlYWRlcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUpO1xuICBob21lLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gIG5hdkhlYWRlci5hcHBlbmQoXCJIb21lXCIpO1xuICBhbGxUYXNrcy5hcHBlbmQoXCJBbGwgVGFza3NcIik7XG4gIHRvZGF5LmFwcGVuZChcIlRvZGF5XCIpO1xuICB0aGlzV2Vlay5hcHBlbmQoXCJUaGlzIFdlZWtcIik7XG4gIGltcG9ydGFudC5hcHBlbmQoXCJJbXBvcnRhbnRcIik7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgaG9yaXpvbnRhbFJ1bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbXlBZGQgPSBuZXcgSW1hZ2UoKTtcbiAgbXlBZGQuc3JjID0gQWRkUHJvamVjdDtcblxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKG15UHJvamVjdCk7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kKFwiUHJvamVjdHNcIik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUyKTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQobXlBZGQpO1xuICBhZGRQcm9qZWN0LmFwcGVuZChcIkFkZCBwcm9qZWN0XCIpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdFwiKTtcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uKCkge1xuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblNlY3Rpb25cIik7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5IZWFkZXJcIik7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFza1NlY3Rpb24pO1xuICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJBbGwgdGFza3NcIjtcblxuICBhZGRUYXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stc2VjdGlvblwiKTtcbn1cblxuZXhwb3J0IHsgQ3JlYXRlTWFpbiwgY3JlYXRlTmF2Q29udGVudCwgY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uIH07IiwiLyoqXG4gKiBQcm9qZWN0QXJyYXkgTG9jYWxTdG9yYWdlXG4gKi9cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSA9PSBudWxsKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG5sZXQgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSk7XG5cbmZ1bmN0aW9uIHNldFByb2plY3RBcnJheSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG59XG5cbi8qKlxuICogQ29uc3RydWN0b3IgRnVuY3Rpb25zIFdpdGggVGhlaXIgUHJvdG90eXBlIE1ldGhvZHNcbiAqL1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICB9XG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH1cbn1cblxuY2xhc3MgVG9kb1Rhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5jb21wbGV0ZWQ7XG4gICAgdGhpcy5pbXBvcnRhbnQ7XG4gIH1cbiAgc2V0RGV0YWlscyhuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aGlzLmRlc2MgPSBuZXdEZXNjO1xuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gIH1cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPyAodGhpcy5jb21wbGV0ZWQgPSBmYWxzZSkgOiAodGhpcy5jb21wbGV0ZWQgPSB0cnVlKTtcbiAgfVxuICB0b2dnbGVJbXBvcnRhbmNlKCkge1xuICAgIHRoaXMuaW1wb3J0YW50ID8gKHRoaXMuaW1wb3J0YW50ID0gZmFsc2UpIDogKHRoaXMuaW1wb3J0YW50ID0gdHJ1ZSk7XG4gIH1cbn1cblxuY2xhc3MgVGhlbWVTZXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhcmtUaGVtZTtcbiAgICB0aGlzLmxpZ2h0SWNvbjtcbiAgICB0aGlzLmRhcmtJY29uO1xuICB9XG4gIHRvZ2dsZURhcmtUaGVtZSgpIHtcbiAgICBpZiAodGhpcy5kYXJrVGhlbWUgPT09IHRydWUpIHRoaXMuZGFya1RoZW1lID0gZmFsc2U7XG4gICAgZWxzZSB0aGlzLmRhcmtUaGVtZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGVtZSBMb2NhbFN0b3JhZ2VcbiAqL1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT0gbnVsbClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBKU09OLnN0cmluZ2lmeShuZXcgVGhlbWVTZXR0ZXIoKSkpO1xuXG5sZXQgdGhlbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpO1xuXG5mdW5jdGlvbiBzZXRUaGVUaGVtZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGVtZSkpO1xufVxuXG5leHBvcnQge1xuICBwcm9qZWN0QXJyYXksXG4gIFByb2plY3QsXG4gIFRvZG9UYXNrLFxuICBzZXRQcm9qZWN0QXJyYXksXG4gIFRoZW1lU2V0dGVyLFxuICBzZXRUaGVUaGVtZSxcbiAgdGhlbWUsXG59OyIsImltcG9ydCBMaXN0IGZyb20gXCIuL2ljb25zL2xpc3QucG5nXCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBjb25zdCBteUlucHV0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUlucHV0SWNvbi5zcmMgPSBMaXN0O1xuICBcbiAgaW5wdXREaXYuYXBwZW5kKG15SW5wdXRJY29uLCBwcm9qZWN0TmFtZUlucHV0KTtcbiAgYnV0dG9uRGl2LmFwcGVuZChjYW5jZWxCdXR0b24sIGFkZEJ1dHRvbik7XG4gIGlucHV0TGkuYXBwZW5kKGlucHV0RGl2LCBidXR0b25EaXYpO1xuICBhZGRQcm9qZWN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0TGksIGFkZFByb2plY3QpO1xuXG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuXG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWUtaW5wdXRcIik7XG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNsYXNzXCIpO1xuICBpbnB1dExpLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1MaVwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lLlwiKTtcbn1cblxuZXhwb3J0IHsgZ2V0UHJvamVjdElucHV0IH07IiwiY29uc3QgcmVtb3ZlRGVsZXRlQW5kRWRpdFBvcFVwID0gKGUpID0+IHtcbiAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC1kaXZcIikpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKVxuICAgICAgICAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LWRpdlwiKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC10YXNrXCIpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXQtdGFza1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1lZGl0LXRhc2tcIilcbiAgICAgICAgLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtZWRpdC10YXNrXCIpKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgeyByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgfTsiLCJpbXBvcnQgaXNXaXRoaW5JbnRlcnZhbCBmcm9tIFwiZGF0ZS1mbnMvaXNXaXRoaW5JbnRlcnZhbFwiO1xuaW1wb3J0IHsgc3R5bGVTZWxlY3RlZExpc3QgfSBmcm9tIFwiLi9hZGQtbmV3LXByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlBZGRlZFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheS10b2RvLWxpc3RcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IHRvZ2dsZUljb24gfSBmcm9tIFwiLi90b2dnbGUtdGhlbWVcIjtcblxuZnVuY3Rpb24gYWxsVGFza3NFdmVudCgpIHtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuY2hpbGROb2Rlc1syXS5maXJzdENoaWxkO1xuICBjb25zdCBpbXBvcnRhbnRUYXNrcyA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmNoaWxkTm9kZXNbMl0ubGFzdENoaWxkO1xuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKS5jaGlsZE5vZGVzWzJdLmNoaWxkcmVuWzJdO1xuICBjb25zdCB0aGlzRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmNoaWxkTm9kZXNbMl0uY2hpbGRyZW5bMV07XG5cbiAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBbGxUYXNrc0ZvckNsaWNrLmJpbmQoYWxsVGFza3MpKTtcbiAgdGhpc0RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9EYXkuYmluZCh0aGlzRGF5KSk7XG4gIHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXZlbkRheXMuYmluZCh0aGlzV2VlaykpO1xuICBpbXBvcnRhbnRUYXNrcy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBkaXNwbGF5QWxsSW1wb3J0YW50VGFza3MuYmluZChpbXBvcnRhbnRUYXNrcylcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9EYXkoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBuZXh0TnRoRGF5cyhub3csIHRvZGF5KTtcbiAgc2hvd0dyb3VwVGl0bGUoXCJUb2RheVwiKTtcbiAgdG9nZ2xlSWNvbigpO1xuICBzdHlsZVNlbGVjdGVkTGlzdC5jYWxsKHRoaXMpO1xuICBzaG93Tm9UYXNrTWVzc2FnZS5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBzZXZlbkRheXMoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBuZXh0TnRoRGF5cyhub3csIG5leHQ3RGF5cyk7XG4gIHNob3dHcm91cFRpdGxlKFwiTmV4dCA3IERheXNcIik7XG4gIHRvZ2dsZUljb24oKTtcbiAgc3R5bGVTZWxlY3RlZExpc3QuY2FsbCh0aGlzKTtcbiAgc2hvd05vVGFza01lc3NhZ2UuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzRm9yQ2xpY2soKSB7XG4gIGNsZWFyVGFzaygpO1xuICBkaXNwbGF5QWxsKCk7XG4gIHNob3dHcm91cFRpdGxlKFwiQWxsIHRhc2tzXCIpO1xuICB0b2dnbGVJY29uKCk7XG4gIHN0eWxlU2VsZWN0ZWRMaXN0LmNhbGwodGhpcyk7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcImFsbFwiKTtcbiAgc2hvd05vVGFza01lc3NhZ2UuY2FsbCh0aGlzKTtcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWxsXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBkaXNwbGF5QWxsKCk7XG4gIHNob3dHcm91cFRpdGxlKFwiQWxsIHRhc2tzXCIpO1xuICB0b2dnbGVJY29uKCk7XG4gIHNob3dOb1Rhc2tNZXNzYWdlLmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxJbXBvcnRhbnRUYXNrcygpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpO1xuICBzaG93R3JvdXBUaXRsZShcIkltcG9ydGFudCB0YXNrc1wiKTtcbiAgdG9nZ2xlSWNvbigpO1xuICBzdHlsZVNlbGVjdGVkTGlzdC5jYWxsKHRoaXMpO1xuICBzaG93Tm9UYXNrTWVzc2FnZS5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1zZWN0aW9uXCIpO1xuICBpZiAoISFhZGRUYXNrU2VjdGlvbilcbiAgICB3aGlsZSAoYWRkVGFza1NlY3Rpb24uY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgYWRkVGFza1NlY3Rpb24ucmVtb3ZlQ2hpbGQoYWRkVGFza1NlY3Rpb24uZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgIHByb2plY3QudGFza0FycmF5LmZvckVhY2goKHRhc2spID0+XG4gICAgICBkaXNwbGF5QWRkZWRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzaylcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpIHtcbiAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaW1wb3J0YW50KVxuICAgICAgICBkaXNwbGF5QWRkZWRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZGF0ZSwgdGFzayk7XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2hvd0dyb3VwVGl0bGUoZ3JvdXBUaXRsZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5IZWFkZXJcIikuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGdyb3VwVGl0bGU7XG59XG5cbi8vIERpc3BsYXlzIG1lc3NhZ2UgaWYgbm8gdGFzayBpcyBhdmFpbGFibGUgdG8gZGlzcGxheVxuZnVuY3Rpb24gc2hvd05vVGFza01lc3NhZ2UoKSB7XG4gIGNvbnN0IHRhc2tEaXNwbGF5QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stc2VjdGlvblwiKTtcbiAgY29uc3Qgbm9UYXNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpZiAodGFza0Rpc3BsYXlBcmVhLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKHRoaXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNsYXNzTGlzdFsxXSA9PT0gXCJhbGxcIikge1xuICAgICAgbm9UYXNrTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiT29wcyEgTm8gdGFza3MuXCI7XG4gICAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiQ3JlYXRlIGEgcHJvamVjdCBmaWxlIHRvIGFkZCB5b3VyIHRvZG8gbGlzdCBvciBhZGQgdG8gZXhpc3RpbmcgaWYgYW55LlwiO1xuICAgICAgdGFza0Rpc3BsYXlBcmVhLmFwcGVuZChub1Rhc2tNZXNzYWdlLCBpbnN0cnVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vVGFza01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk9vcHMhIE5vIHRhc2tzLlwiO1xuICAgICAgdGFza0Rpc3BsYXlBcmVhLmFwcGVuZChub1Rhc2tNZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgSWYgRGF0ZSBJcyBXaXRoaW4gSW50ZXJ2YWwgVXNpbmcgRGF0ZS1mbiBQYWNrYWdlXG4gKi9cblxuLy8gRnVuY3Rpb24gZm9yIGFkZGluZyBOdGggZGF5cyB0byBEYXRlIHByb3RvdHlwZVxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXlzKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xuICByZXR1cm4gZGF0ZTtcbn07XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3Qgbm93ID0gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcbmNvbnN0IHRvZGF5ID0gZm9ybWF0RGF0ZShkYXRlLmFkZERheXMoMSkpO1xuY29uc3QgbmV4dDdEYXlzID0gZm9ybWF0RGF0ZShkYXRlLmFkZERheXMoNykpO1xuZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuLy8gRm9ybWF0IGEgZGF0ZSB0byBZWVlZLE1NLEREXG5mdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICByZXR1cm4gW1xuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBwYWRUbzJEaWdpdHMoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgcGFkVG8yRGlnaXRzKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgXS5qb2luKFwiLFwiKTtcbn1cblxuLy8gQ2hlY2tzIGlmIGRhdGUgaXMgd2l0aGluIGludGVydmFsXG5mdW5jdGlvbiBuZXh0TnRoRGF5cyhzdGFydERheSwgZW5kRGF5KSB7XG4gIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgIHByb2plY3QudGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNXaXRoaW5JbnRlcnZhbChuZXcgRGF0ZSh0YXNrLmRhdGUpLCB7XG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHN0YXJ0RGF5KSxcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGVuZERheSksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAgIGRpc3BsYXlBZGRlZFRhc2tzKHRhc2sudGl0bGUsIHRhc2suZGVzYywgdGFzay5kYXRlLCB0YXNrKTtcbiAgICB9KVxuICApO1xufVxuXG5leHBvcnQgeyBhbGxUYXNrc0V2ZW50LCBkaXNwbGF5QWxsVGFza3MsIGNsZWFyVGFzaywgc2hvd0dyb3VwVGl0bGUgfTsiLCJjb25zdCB0b2dnbGVOYXZMaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwibWVudUljb25cIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1oaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1oaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1oaWRkZW5cIik7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5leHBvcnQgeyB0b2dnbGVOYXZMaXN0IH07IiwiaW1wb3J0IHtcbiAgZ2V0UHJvamVjdEluZGV4LFxuICBwb3BVcERlbGV0ZUFuZEVkaXQsXG4gIHByb2plY3RJbmRleCxcbn0gZnJvbSBcIi4vZGVsZXRlLWVkaXQtcG9wLXVwXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHNldFByb2plY3RBcnJheSwgVG9kb1Rhc2sgfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnN0cnVjdG9yXCI7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKFxuICB0YXNrLFxuICBteURvbmVUYXNrLFxuICB0YXNrVGl0bGUsXG4gIHRhc2tEZXNjLFxuICBkYXRlSW5wdXQsXG4gIG15Q2hlY2tlZFN0YXJcbikge1xuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICBteURvbmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGluZS10aHJvdWdoXCIpO1xuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJsaW5lLXRocm91Z2hcIik7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJsaW5lLXRocm91Z2hcIik7XG4gIH1cbiAgaWYgKHRhc2suaW1wb3J0YW50KSBteUNoZWNrZWRTdGFyLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRXZlbnRzKFxuICB0YXNrLFxuICBteVRhc2tEb3RzLFxuICBteURvbmVUYXNrLFxuICBteVVuZG9uZVRhc2ssXG4gIG15VGFza0RvdHNEYXJrLFxuICBteUNoZWNrZWRTdGFyLFxuICBteVVuZG9uZVRhc2tEYXJrLFxuICBteVVuY2hlY2tlZFN0YXIsXG4gIG15VW5jaGVja2VkU3RhckRhcmtcbikge1xuICBnZXRQcm9qZWN0SW5kZXgodGFzayk7XG4gIGFkZE1ldGhvZHMoKTtcbiAgbXlUYXNrRG90cy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBwb3BVcERlbGV0ZUFuZEVkaXQuYmluZChteVRhc2tEb3RzLCB0YXNrKVxuICApO1xuICBteVRhc2tEb3RzRGFyay5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBwb3BVcERlbGV0ZUFuZEVkaXQuYmluZChteVRhc2tEb3RzLCB0YXNrKVxuICApO1xuICBteURvbmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDb21wbGV0ZWQuYmluZChudWxsLCB0YXNrKSk7XG4gIG15VW5kb25lVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29tcGxldGVkLmJpbmQobnVsbCwgdGFzaykpO1xuICBteVVuZG9uZVRhc2tEYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDb21wbGV0ZWQuYmluZChudWxsLCB0YXNrKSk7XG4gIG15Q2hlY2tlZFN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVN0YXIuYmluZChudWxsLCB0YXNrKSk7XG4gIG15VW5jaGVja2VkU3Rhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU3Rhci5iaW5kKG51bGwsIHRhc2spKTtcbiAgbXlVbmNoZWNrZWRTdGFyRGFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU3Rhci5iaW5kKG51bGwsIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gYWRkTWV0aG9kcygpIHtcbiAgcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF0udGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgVG9kb1Rhc2sucHJvdG90eXBlKTtcbiAgICBzZXRQcm9qZWN0QXJyYXkoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZCh0YXNrLCBlKSB7XG4gIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0ID09PSBcInVuZG9uZS10YXNrXCIgfHxcbiAgZS50YXJnZXQuY2xhc3NMaXN0ID09PSBcInVuZG9uZS10YXNrLWRhcmtcIiB8fFxuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwiZG9uZS10YXNrXCJcbiAgICA/IHRvZ2dsZUxpbmVUaHJvdWdoKGUpXG4gICAgOiB0b2dnbGVMaW5lVGhyb3VnaChlKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU3Rhcih0YXNrLCBlKSB7XG4gIHRhc2sudG9nZ2xlSW1wb3J0YW5jZSgpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwibmV3LXRhc2tcIiB8fFxuICBlLnRhcmdldC5jbGFzc0xpc3QgPT09IFwidW5jaGVja2VkLXN0YXItZGFya1wiIHx8XG4gIGUudGFyZ2V0LmNsYXNzTGlzdCA9PT0gXCJjaGVja2VkLXN0YXJcIlxuICAgID8gdG9nZ2xlKGUpXG4gICAgOiB0b2dnbGUoZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxpbmVUaHJvdWdoKGUpIHtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwiZG9uZVwiXG4gICk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZShcbiAgICBcImxpbmUtdGhyb3VnaFwiXG4gICk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwibGluZS10aHJvdWdoXCJcbiAgKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwibGluZS10aHJvdWdoXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgIFwiY2hlY2tcIlxuICApO1xufVxuXG5leHBvcnQgeyBhZGRDbGFzcywgdG9nZ2xlRXZlbnRzLCBhZGRNZXRob2RzIH07IiwiaW1wb3J0IHsgc2V0VGhlVGhlbWUsIHRoZW1lLCBUaGVtZVNldHRlciB9IGZyb20gXCIuL3Byb2plY3QtY29uc3RydWN0b3JcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiB0b2dnbGVzIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgdGhlbWVzXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcbiAgY29uc3QgZGFya1RoZW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya1wiKTtcbiAgY29uc3QgbGlnaHRUaGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZ2h0XCIpO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBsZXQgbmV3VGhlbWU7XG5cbiAgLy8gQWRkIGJhY2sgVGhlbWVTZXR0ZXIgcHJvdG90eXBlIHRvIGVuYWJsZSB0b2dnbGUgbWV0aG9kXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGVtZSwgVGhlbWVTZXR0ZXIucHJvdG90eXBlKTtcbiAgdGhlbWUudG9nZ2xlRGFya1RoZW1lKCk7XG4gIHNldFRoZVRoZW1lKCk7XG4gIGlmICh0aGVtZS5kYXJrVGhlbWUpIG5ld1RoZW1lID0gXCJkYXJrVFwiO1xuICBlbHNlIG5ld1RoZW1lID0gXCJsaWdodFRcIjtcbiAgcm9vdC5jbGFzc05hbWUgPSBuZXdUaGVtZTtcblxuICBsaWdodFRoZW1lSWNvbi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwibGlnaHQtaGlkZGVuXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtaGlkZGVuXCIpO1xuICB9KTtcblxuICBkYXJrVGhlbWVJY29uLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpZiAodGhlbWUuZGFya1RoZW1lKSBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXJrLXZpc2libGVcIik7XG4gICAgZWxzZSBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLXZpc2libGVcIik7XG4gIH0pO1xufVxuXG4vLyBSZXRyaWV2ZXMgaWNvbiBzdGF0ZSBmcm9tIHN0b3JhZ2Ugb24gcGFnZSByZWxvYWRcbmZ1bmN0aW9uIHRvZ2dsZUljb24oKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGVtZSwgVGhlbWVTZXR0ZXIucHJvdG90eXBlKTtcbiAgc2V0VGhlVGhlbWUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWdodFwiKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwibGlnaHQtaGlkZGVuXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtaGlkZGVuXCIpO1xuICB9KTtcblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhlbWUsIFRoZW1lU2V0dGVyLnByb3RvdHlwZSk7XG4gIHNldFRoZVRoZW1lKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya1wiKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWYgKHRoZW1lLmRhcmtUaGVtZSkgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZGFyay12aXNpYmxlXCIpO1xuICAgIGVsc2UgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay12aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuLy8gUmV0cmlldmVzIHRoZW1lIHN0YXRlIGZyb20gc3RvcmFnZSBvbiBwYWdlIHJlbG9hZFxuZnVuY3Rpb24gZ2V0VGhlbWVDaG9pY2VGcm9tU3RvcmFnZSgpIHtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoZW1lLCBUaGVtZVNldHRlci5wcm90b3R5cGUpO1xuICBzZXRUaGVUaGVtZSgpO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lLmRhcmtUaGVtZSA/IFwiZGFya1RcIiA6IFwibGlnaHRUXCI7XG4gIHJvb3QuY2xhc3NOYW1lID0gbmV3VGhlbWU7XG59XG5cbmV4cG9ydCB7IHNldFRoZW1lLCBnZXRUaGVtZUNob2ljZUZyb21TdG9yYWdlLCB0b2dnbGVJY29uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUhlYWRlckNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlLWhlYWRlclwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlTWFpbixcbiAgY3JlYXRlTmF2Q29udGVudCxcbiAgY3JlYXRlVGFza0Rpc3BsYXlTZWN0aW9uLFxufSBmcm9tIFwiLi9wYWdlLW1haW5cIjtcbmltcG9ydCB7IGNyZWF0ZWZvb3RlciB9IGZyb20gXCIuL3BhZ2UtZm9vdGVyXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vYWRkLW5ldy1wcm9qZWN0XCI7XG5pbXBvcnQgeyBlZGl0Q3VyZW50UHJvamVjdCB9IGZyb20gXCIuL2VkaXQtY3VycmVudC1wcm9qZWN0XCI7XG5pbXBvcnQgeyByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW1vdmUtcHJvamVjdC1wb3B1cFwiO1xuaW1wb3J0IHsgYWRkQW5kQ2FuY2VsVGFzayB9IGZyb20gXCIuL2FkZC1vci1jYW5jZWwtdGFzay1ldmVudFwiO1xuaW1wb3J0IHsgdG9nZ2xlTmF2TGlzdCB9IGZyb20gXCIuL3RvZ2dsZS1uYXYtbGlzdFwiO1xuaW1wb3J0IHsgZWRpdEN1cmVudFRhc2sgfSBmcm9tIFwiLi9lZGl0LWN1cnJlbnQtdGFza1wiO1xuaW1wb3J0IHsgYWxsVGFza3NFdmVudCB9IGZyb20gXCIuL3Rhc2stZ3JvdXBpbmdcIjtcbmltcG9ydCB7IERpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQgfSBmcm9tIFwiLi9kaXNwbGF5LWF2YWlsYWJsZS10YXNrc1wiO1xuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tIFwiLi90b2dnbGUtdGhlbWVcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVIZWFkZXJDb250ZW50KCk7XG5DcmVhdGVNYWluKCk7XG5jcmVhdGVOYXZDb250ZW50KCk7XG5jcmVhdGVmb290ZXIoKTtcbmNyZWF0ZVRhc2tEaXNwbGF5U2VjdGlvbigpO1xudG9nZ2xlTmF2TGlzdDtcbmFsbFRhc2tzRXZlbnQoKTtcbkRpc3BsYXlBbGxUYXNrc09uUGFnZUxvYWQoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZWRpdEN1cmVudFByb2plY3QpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZW1vdmVEZWxldGVBbmRFZGl0UG9wVXApO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEFuZENhbmNlbFRhc2spO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhZGROZXdQcm9qZWN0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVkaXRDdXJlbnRUYXNrKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWVUb2dnbGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRUaGVtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9