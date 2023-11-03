/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/GlobalConfig.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/GlobalConfig.scss ***!
  \************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/water.svg */ "./images/water.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.id, ".tu-config-container {\n  padding: 20px;\n  display: flex;\n}\n.tu-config-container .tu-col {\n  padding-right: 30px;\n  padding-left: 30px;\n}\n.tu-config-container .tu-col:first-of-type {\n  border-right: 1px solid rgba(128, 128, 128, 0.1411764706);\n}\n.tu-config-container .tu-c:last-of-type {\n  border-top: 1px solid rgba(128, 128, 128, 0.1411764706);\n}\n.tu-config-container h3 {\n  display: inline-block;\n  padding: 5px 9px;\n  color: white;\n  border-radius: 10px;\n}\n.tu-config-container h3.energy {\n  background-color: rgb(245, 129, 129);\n}\n.tu-config-container h3.water {\n  background-color: #00a8ff;\n}\n.tu-config-container h3.tax {\n  color: #424242;\n}\n.tu-config-container h3.invoice {\n  color: #424242;\n}\n.tu-config-container .tu-icon {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  vertical-align: center;\n  transform: translateY(3px);\n  margin-right: 5px;\n  filter: invert(1);\n}\n.tu-config-container .tu-icon.energy {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==);\n}\n.tu-config-container .tu-icon.water {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.tu-config-container .tu-icon.tax {\n  display: none;\n}\n.tu-config-container .tu-icon.invoice {\n  display: none;\n}\n.tu-config-container .tu-energy, .tu-config-container .tu-water, .tu-config-container .tu-tax, .tu-config-container .tu-invoice {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.tu-config-container .tu-energy .tu-unit, .tu-config-container .tu-water .tu-unit, .tu-config-container .tu-tax .tu-unit, .tu-config-container .tu-invoice .tu-unit {\n  margin: 0px 10px;\n  opacity: 0.7;\n  font-size: 1.2em;\n}\n.tu-config-container .tu-energy label, .tu-config-container .tu-water label, .tu-config-container .tu-tax label, .tu-config-container .tu-invoice label {\n  width: 100px;\n  margin: 0px;\n}\n.tu-config-container .tu-energy input, .tu-config-container .tu-water input, .tu-config-container .tu-tax input, .tu-config-container .tu-invoice input {\n  width: 100px;\n}\n.tu-config-container .tu-tax label {\n  width: 50px;\n}\n.tu-config-container .tu-invoice {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.tu-config-container a.tu-upload {\n  text-decoration: underline;\n  display: block;\n  cursor: pointer;\n}\n.tu-config-container .tu-invoice-content {\n  font-weight: bold;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.tu-action {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/invoices.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/invoices.scss ***!
  \********************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".tu-invoice-details h1 {\n  margin-left: 10px;\n}\n.tu-invoice-details .tu-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.tu-invoice-details .tu-id-items {\n  display: inline-block;\n  background-color: #FAFAFA;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.tu-invoice-details .tu-id-items .tu-id-item {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.4);\n  display: flex;\n  margin: 10px;\n  align-items: center;\n  padding: 10px;\n}\n.tu-invoice-details .tu-id-items .tu-id-item .desc {\n  width: 200px;\n}\n.tu-invoice-details .tu-id-items .tu-id-item .consumption {\n  width: 200px;\n}\n.tu-invoice-details .tu-id-items .tu-id-item .cost {\n  width: 200px;\n}\n.tu-invoice-details .tu-id-items .tu-id-item > div {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.tu-invoice-details .tu-id-items .tu-id-item .cost {\n  text-align: right;\n}\n.tu-invoice-details .tu-id-items .tu-id-item.total .cost {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n.tu-invoice-details .tu-dates {\n  display: flex;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n.tu-invoice-details .tu-dates .tu-date {\n  display: flex;\n  margin: 0px 10px;\n  background: #EEE;\n  /* padding: 5px 10px; */\n  align-items: center;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.tu-invoice-details .tu-dates .tu-date span {\n  text-transform: uppercase;\n  padding: 5px 10px;\n  background-color: #DDD;\n}\n.tu-invoice-details .tu-dates .tu-date div {\n  padding: 5px 10px;\n}\n.tu-invoice-details .editable {\n  position: relative;\n}\n.tu-invoice-details .editable input.uxp-form-input {\n  width: 120px;\n  padding-right: 25px;\n  text-align: right;\n}\n.tu-invoice-details .editable span.discout-unit {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.tu-invoice-details .actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.tu-invoice-details .actions .uxp-button {\n  margin: auto;\n}\n\n.invoice-status {\n  padding: 5px 10px;\n  border-radius: 7px;\n  color: white;\n  background-color: #AAA;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 11px;\n}\n.invoice-status.invoiced {\n  background-color: rgb(234, 136, 136);\n}\n.invoice-status.paid {\n  background-color: rgb(75, 171, 46);\n}\n\n.invoice-actions .uxp-button {\n  margin-left: 10px;\n  font-size: 10px;\n}\n.invoice-actions .download-invoice {\n  background: #06F;\n  color: white;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/water.svg */ "./images/water.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.id, ".offboard-modal .actions {\n  margin-top: 15px;\n}\n.offboard-modal .uxp-button {\n  margin: 0;\n  float: right;\n}\n\n.tenants {\n  position: relative;\n  height: 85%;\n  width: 100%;\n  padding: 0px 0px 0 0px;\n}\n.tenants .data-list {\n  border: 1px solid #e3e3e3;\n}\n.tenants .data-list .data-table thead tr th {\n  padding-left: 15px;\n  text-align: left;\n  background: #e3e3e3;\n}\n.tenants .data-list .data-list-item {\n  height: 50px;\n}\n.tenants .data-list .data-list-item.active {\n  background-color: #FAFAFA !important;\n}\n.tenants .data-list-footer {\n  position: unset;\n}\n.tenants .data-table-item {\n  margin-left: 7.5px;\n}\n.tenants .actions {\n  margin: 5px 0;\n}\n.tenants .reject-btn {\n  margin-top: 5px;\n}\n\n.offboard-tenant .actions {\n  margin: 5px 0;\n  display: flex;\n  gap: 5px;\n}\n.offboard-tenant .actions .uxp-button {\n  margin: 0;\n  float: left;\n}\n\n.add-meter {\n  display: flex;\n}\n.add-meter .tenant-name {\n  display: flex;\n  margin-bottom: 15px;\n}\n.add-meter .tenant-name .label {\n  width: 60px;\n  font-weight: 700;\n}\n.add-meter .row {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.add-meter .row .col {\n  width: 48%;\n}\n.add-meter .row .col .uxp-form-label {\n  font-weight: 500;\n}\n.add-meter .delete-meter {\n  margin-top: 45px;\n}\n.add-meter .error {\n  color: red;\n  margin: 15px 0;\n  padding: 5px;\n}\n.add-meter .actions {\n  margin: 15px 0;\n}\n.add-meter .actions .uxp-button {\n  margin: 0;\n  float: right;\n}\n\n.tu-meters {\n  display: flex;\n  font-size: 10px;\n  color: white;\n  flex-wrap: wrap;\n}\n.tu-meters.energy .tu-meter-id {\n  background-color: rgb(245, 129, 129);\n}\n.tu-meters.energy .tu-logo {\n  filter: invert(1);\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==);\n}\n.tu-meters.water .tu-meter-id {\n  background-color: #00a8ff;\n}\n.tu-meters.water .tu-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.tu-meters .tu-meter-id {\n  padding: 5px 8px;\n  display: flex;\n  border-radius: 8px;\n  align-items: center;\n  color: white;\n  margin: 2px;\n}\n.tu-meters .tu-meter-id .tu-logo {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 20px;\n}\n.tu-meters .tu-meter-id .tu-txt {\n  margin-left: 5px;\n}\n\n.utility-pill {\n  padding: 5px 8px;\n  display: inline-flex;\n  border-radius: 8px;\n  align-items: center;\n  color: white;\n  margin: 2px;\n}\n.utility-pill .up-logo {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 20px;\n}\n.utility-pill .up-txt {\n  margin-left: 5px;\n}\n.utility-pill.energy {\n  background-color: rgb(245, 129, 129);\n}\n.utility-pill.energy .up-logo {\n  filter: invert(1);\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==);\n}\n.utility-pill.water {\n  background-color: #00a8ff;\n}\n.utility-pill.water .up-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.edit-tenant-details .main {\n  font-weight: 600;\n}\n.edit-tenant-details .multi {\n  padding: 0;\n  margin: 0;\n  margin-top: 20px;\n}\n.edit-tenant-details .row {\n  display: flex;\n  gap: 10px;\n}\n.edit-tenant-details .row .col {\n  width: 100%;\n}\n.edit-tenant-details .actions {\n  margin: 10px 0;\n}\n.edit-tenant-details .actions .uxp-button {\n  margin: 0;\n  float: right;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/GlobalConfig.scss":
/*!*******************************!*\
  !*** ./src/GlobalConfig.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./GlobalConfig.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/GlobalConfig.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/invoices.scss":
/*!***************************!*\
  !*** ./src/invoices.scss ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./invoices.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/invoices.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./images/water.svg":
/*!**************************!*\
  !*** ./images/water.svg ***!
  \**************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.718' height='22.426' viewBox='0 0 20.718 22.426'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23424242;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M13.973,11.739c-.573,4.614-3.5,5.435-3.5,8.643a3.632,3.632,0,0,0,7.263,0c0-3.208-2.927-4.029-3.5-8.643a.136.136,0,0,0-.264,0ZM7.246,1.647c-.573,4.614-3.5,5.434-3.5,8.643a3.631,3.631,0,0,0,7.262,0c0-3.208-2.927-4.029-3.5-8.643a.135.135,0,0,0-.262,0Zm13.456,0c-.573,4.614-3.5,5.435-3.5,8.643a3.631,3.631,0,0,0,7.262,0c0-3.208-2.927-4.029-3.5-8.643a.135.135,0,0,0-.262,0Z' transform='translate(-3.746 -1.544)'/%3E%3C/svg%3E"

/***/ }),

/***/ "./src/ApproveOffboardingTenants.tsx":
/*!*******************************************!*\
  !*** ./src/ApproveOffboardingTenants.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const ApproveOffboardingTenants = (props) => {
    const alerts = (0, components_1.useAlert)();
    const [tenants, setTenants] = (0, react_1.useState)([]);
    const [offboardTenants, setOffboardTenants] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        getTenants();
    }, []);
    (0, react_1.useEffect)(() => {
        getOffboardTenants();
        const interval = setInterval(getOffboardTenants, 10000);
        return () => clearInterval(interval);
    }, []);
    function getTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
            const jsonObj = JSON.parse(res);
            setTenants(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.tenants);
        });
    }
    ;
    function getOffboardTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetOffboardingItems', {});
            const jsonObj = JSON.parse(res);
            setOffboardTenants(jsonObj);
        });
    }
    ;
    function approveOffboardTenant(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield alerts.confirm("Are you sure want to aproove this tenant offboarding?");
            if (!res) {
                return;
            }
            try {
                yield props.uxpContext.executeAction('TenantUMS', 'ApproveTenantOffboarding', { tenant: item === null || item === void 0 ? void 0 : item.tenant });
            }
            catch (err) {
                console.log({ err });
            }
            getOffboardTenants();
        });
    }
    ;
    function rejetOffboardTenant(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield alerts.confirm("Are you sure want to reject this tenant offboarding?");
            if (!res) {
                return;
            }
            try {
                yield props.uxpContext.executeAction('TenantUMS', 'RejectOffboardingRequest', { id: item === null || item === void 0 ? void 0 : item._id });
            }
            catch (err) {
                console.log({ err });
            }
            getOffboardTenants();
        });
    }
    ;
    function getLabelForTenant(tenantId) {
        var _a;
        const record = tenants.filter(t => t.tenantID === tenantId);
        return (_a = record[0]) === null || _a === void 0 ? void 0 : _a.tenantName;
    }
    ;
    function getDate(date) {
        const dateString = `${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}`;
        return dateString;
    }
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'Offboarding Requests' }),
        react_1.default.createElement(components_1.DataTable, { className: 'tenants', data: offboardTenants, pageSize: 5, activeClass: "active", columns: [
                {
                    title: "Name",
                    width: "35%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getLabelForTenant(item === null || item === void 0 ? void 0 : item.tenant))
                },
                {
                    title: "Due",
                    width: "22.5%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, `S$${item === null || item === void 0 ? void 0 : item.pendingDues}`)
                },
                {
                    title: "Termination Date",
                    width: "22.5%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getDate(item === null || item === void 0 ? void 0 : item.TerminatedDate))
                },
                {
                    title: "",
                    width: "20%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'actions' },
                        react_1.default.createElement(components_1.AsyncButton, { title: "Approve", onClick: () => approveOffboardTenant(item) }),
                        react_1.default.createElement(components_1.AsyncButton, { title: "Reject", className: "reject-btn", onClick: () => rejetOffboardTenant(item) }))
                },
            ] })));
};
exports["default"] = ApproveOffboardingTenants;


/***/ }),

/***/ "./src/GlobalConfig.tsx":
/*!******************************!*\
  !*** ./src/GlobalConfig.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PriceConfig = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./GlobalConfig.scss */ "./src/GlobalConfig.scss");
const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
const Model = 'TenantUMS';
function normalizeValue(v) {
    return (Number(v) || 0).toFixed(2);
}
const PriceConfig = (props) => {
    const [energyRate, setEnergyRate] = react_1.default.useState('');
    const [waterRate, setWaterRate] = react_1.default.useState('');
    const [tax, setTax] = react_1.default.useState('');
    const [loading, setLoading] = react_1.default.useState(true);
    const [html, setHtml] = react_1.default.useState('');
    const toast = (0, components_1.useToast)();
    const fileRef = (0, react_1.useRef)();
    function uploadInvoiceTemplate() {
        var _a;
        let p = fileRef.current;
        if (!p) {
            return;
        }
        (_a = p === null || p === void 0 ? void 0 : p.click) === null || _a === void 0 ? void 0 : _a.call(p);
    }
    function readFile(e) {
        var file = e.target.files[0];
        console.log(file);
        if (!file)
            return;
        var reader = new FileReader();
        reader.onload = function (e) {
            setHtml(e.target.result);
            console.log(e.target.result);
        };
        reader.readAsText(file);
    }
    function downloadInvoice() {
        if (!html)
            return;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
        element.setAttribute('download', 'invoice-template.html');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    react_1.default.useEffect(() => {
        props.uxpContext.executeAction(Model, 'GetGlobalSettings', {}, { json: true }).then(settings => {
            let s = (settings === null || settings === void 0 ? void 0 : settings.settings) || {};
            setEnergyRate(normalizeValue(s.energyRate));
            setWaterRate(normalizeValue(s.waterRate));
            setTax(((Number(s.taxRate) || 0) * 100).toFixed(3));
            setHtml(s.invoiceHtml || '');
            setLoading(false);
        }).catch((e) => {
            toast.error(e || 'An error occurred while loading settings');
        });
    }, []);
    return react_1.default.createElement(components_1.WidgetWrapper, { className: "tu-price-config" },
        loading && react_1.default.createElement(components_1.DefaultLoader, null),
        !loading && react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(components_1.TitleBar, { title: "Global Tenant Utility Metering Configuration" }),
            react_1.default.createElement("div", { className: 'tu-config-container' },
                react_1.default.createElement("div", { className: 'tu-col' },
                    react_1.default.createElement("div", { className: 'tu-c' },
                        react_1.default.createElement("h3", { className: "energy" },
                            react_1.default.createElement("span", { className: 'tu-icon energy' }),
                            "Energy Rates"),
                        react_1.default.createElement("div", { className: 'tu-energy' },
                            react_1.default.createElement("label", null, "Per-Unit Rate"),
                            react_1.default.createElement("div", { className: 'tu-unit' }, "$"),
                            react_1.default.createElement(components_1.Input, { value: energyRate, onChange: setEnergyRate }),
                            react_1.default.createElement("div", { className: 'tu-unit' }, "/kwh"))),
                    react_1.default.createElement("div", { className: 'tu-c' },
                        react_1.default.createElement("h3", { className: "water" },
                            react_1.default.createElement("span", { className: 'tu-icon water' }),
                            "Water Rates"),
                        react_1.default.createElement("div", { className: 'tu-water' },
                            react_1.default.createElement("label", null, "Per-Unit Rate"),
                            react_1.default.createElement("div", { className: 'tu-unit' }, "$"),
                            react_1.default.createElement(components_1.Input, { value: waterRate, onChange: setWaterRate }),
                            react_1.default.createElement("div", { className: 'tu-unit' }, "/ltr")))),
                react_1.default.createElement("div", { className: 'tu-col' },
                    react_1.default.createElement("div", { className: 'tu-c' },
                        react_1.default.createElement("h3", { className: "tax" },
                            react_1.default.createElement("span", { className: 'tu-icon tax' }),
                            "Tax Rate"),
                        react_1.default.createElement("div", { className: 'tu-tax' },
                            react_1.default.createElement("label", null, "Rate"),
                            react_1.default.createElement("div", { className: 'tu-unit' }),
                            react_1.default.createElement(components_1.Input, { value: tax, onChange: setTax }),
                            react_1.default.createElement("div", { className: 'tu-unit' }, "%"))),
                    react_1.default.createElement("div", { className: 'tu-c' },
                        react_1.default.createElement("h3", { className: "invoice" },
                            react_1.default.createElement("span", { className: 'tu-icon invoice' }),
                            "Invoice Template"),
                        react_1.default.createElement("div", { className: 'tu-invoice' },
                            react_1.default.createElement("input", { accept: "text/html", onChange: readFile, style: { display: 'none' }, type: 'file', ref: fileRef }),
                            react_1.default.createElement("a", { className: 'tu-upload', onClick: uploadInvoiceTemplate }, "Select a template"),
                            react_1.default.createElement("div", { className: 'tu-invoice-content' }, html.length ?
                                react_1.default.createElement(react_1.default.Fragment, null,
                                    `${html.length} bytes`,
                                    react_1.default.createElement(components_1.IconButton, { type: "arrow-down", onClick: downloadInvoice }))
                                : ''))))),
            react_1.default.createElement("div", { className: 'tu-action' },
                react_1.default.createElement("div", { className: 'save' },
                    react_1.default.createElement(components_1.AsyncButton, { title: "Save", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                            try {
                                yield props.uxpContext.executeAction(Model, 'SaveGlobalSettings', {
                                    settings: {
                                        energyRate: Number(energyRate),
                                        waterRate: Number(waterRate),
                                        taxRate: Number(tax) / 100.0,
                                        invoiceHtml: html,
                                    },
                                });
                                toast.success('Configuration saved!');
                            }
                            catch (e) {
                                toast.error(e || 'An error ocurred while saving');
                            }
                        }) })))));
};
exports.PriceConfig = PriceConfig;


/***/ }),

/***/ "./src/Invoices.tsx":
/*!**************************!*\
  !*** ./src/Invoices.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyInvoices = exports.TenantInvoices = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./invoices.scss */ "./src/invoices.scss");
const ViewInvoice = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    let invoice = props.invoice;
    let energyItem = invoice.invoice.tags.find((x) => x.type == 'energy');
    let waterItem = invoice.invoice.tags.find((x) => x.type == 'water');
    let total = invoice.invoice.total;
    let initialTotal = invoice.invoice.onlyTotal;
    let tenant = invoice.tenant;
    let discount = Number((_a = invoice.invoice) === null || _a === void 0 ? void 0 : _a.discount) || 0;
    let tax = Number((_c = (_b = invoice.invoice) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.tax) || 0;
    let energyRate = Number((_f = (_e = (_d = invoice.invoice) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.rates) === null || _f === void 0 ? void 0 : _f.energy) || 0;
    let waterRate = Number((_j = (_h = (_g = invoice.invoice) === null || _g === void 0 ? void 0 : _g.metadata) === null || _h === void 0 ? void 0 : _h.rates) === null || _j === void 0 ? void 0 : _j.water) || 0;
    let energyAmount = Number(energyItem === null || energyItem === void 0 ? void 0 : energyItem.consumption) || 0;
    let energyCost = (energyAmount * energyRate);
    let waterAmount = Number(waterItem === null || waterItem === void 0 ? void 0 : waterItem.consumption) || 0;
    let waterCost = (waterAmount * waterRate);
    let [newDiscount, setNewDiscount] = (0, react_1.useState)((discount * 100).toFixed(2));
    let newDiscountValue = (Number(newDiscount) || 0) / 100.0;
    let newTotal = initialTotal * (1 - newDiscountValue) * (1 + tax);
    let alerts = (0, components_1.useAlert)();
    let toast = (0, components_1.useToast)();
    return react_1.default.createElement(components_1.Modal, { autoSize: true, className: "tu-invoice-details", title: `Invoice ${invoice.id}`, show: !!invoice, onClose: () => { var _a; return (_a = props === null || props === void 0 ? void 0 : props.onClose) === null || _a === void 0 ? void 0 : _a.call(props); } },
        react_1.default.createElement("div", { className: 'tu-header' },
            react_1.default.createElement("h1", { style: { textTransform: 'uppercase' } }, tenant),
            react_1.default.createElement("div", { className: 'tu-dates' },
                react_1.default.createElement("div", { className: 'tu-date' },
                    react_1.default.createElement("span", null, "From"),
                    react_1.default.createElement("div", null, new Date(invoice.start).toLocaleDateString())),
                react_1.default.createElement("div", { className: 'tu-date' },
                    react_1.default.createElement("span", null, "To"),
                    react_1.default.createElement("div", null, new Date(invoice.start).toLocaleDateString())))),
        react_1.default.createElement("div", { className: 'tu-id-items' },
            energyItem && react_1.default.createElement("div", { className: 'tu-id-item' },
                react_1.default.createElement("div", { className: 'desc energy' },
                    react_1.default.createElement("div", { className: 'utility-pill energy' },
                        react_1.default.createElement("div", { className: 'up-logo' }),
                        react_1.default.createElement("div", { className: 'up-txt' }, "Energy"))),
                react_1.default.createElement("div", { className: 'consumption' }, energyAmount.toFixed(2) + 'kwh'),
                react_1.default.createElement("div", { className: 'cost' }, '$' + energyCost.toFixed(2))),
            waterItem && react_1.default.createElement("div", { className: 'tu-id-item' },
                react_1.default.createElement("div", { className: 'desc water' },
                    react_1.default.createElement("div", { className: 'utility-pill water' },
                        react_1.default.createElement("div", { className: 'up-logo' }),
                        react_1.default.createElement("div", { className: 'up-txt' }, "Water"))),
                react_1.default.createElement("div", { className: 'consumption' }, waterAmount.toFixed(2) + 'kwh'),
                react_1.default.createElement("div", { className: 'cost' }, '$' + waterCost.toFixed(2))),
            (discount || props.editable) && react_1.default.createElement("div", { className: 'tu-id-item' },
                react_1.default.createElement("div", { className: 'desc discount' }),
                react_1.default.createElement("div", { className: 'consumption' }, 'Discount'),
                !props.editable && react_1.default.createElement("div", { className: 'cost' }, (discount * 100).toFixed(2) + '%'),
                props.editable && react_1.default.createElement("div", { className: 'cost editable' },
                    react_1.default.createElement(components_1.Input, { className: "tu-edit-discount", value: newDiscount, onChange: setNewDiscount }),
                    react_1.default.createElement("span", { className: 'discout-unit' }, "%"))),
            react_1.default.createElement("div", { className: 'tu-id-item' },
                react_1.default.createElement("div", { className: 'desc discount' }),
                react_1.default.createElement("div", { className: 'consumption' }, 'Tax'),
                react_1.default.createElement("div", { className: 'cost' }, (tax * 100).toFixed(2) + '%')),
            react_1.default.createElement("div", { className: 'tu-id-item total' },
                react_1.default.createElement("div", { className: 'desc total' }, "Total"),
                react_1.default.createElement("div", { className: 'consumption' }),
                !props.editable && react_1.default.createElement("div", { className: 'cost' }, '$' + (total).toFixed(2)),
                props.editable && react_1.default.createElement("div", { className: 'cost' }, '$' + (newTotal).toFixed(2)))),
        (props.editable && (discount != newDiscountValue)) && react_1.default.createElement("div", { className: 'actions' },
            react_1.default.createElement(components_1.AsyncButton, { title: "Apply Discount", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (newDiscountValue > 1.0) {
                            yield alerts.show("Um, your discount shouldn't be more than 100%.");
                            return;
                        }
                        yield props.uxpContext.executeAction('TenantUMS', 'EditInvoice', { invoice: invoice.id, discount: newDiscountValue }, { json: true });
                        toast.success('Discount applied');
                        props === null || props === void 0 ? void 0 : props.onSave();
                    }
                    catch (e) {
                        alerts.show(e);
                    }
                }) })));
};
const InvoiceList = (props) => {
    let [selectedInvoice, setSelectedInvoice] = react_1.default.useState(null);
    let toast = (0, components_1.useToast)();
    let alerts = (0, components_1.useAlert)();
    function downloadInvoice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let r = yield props.uxpContext.executeAction('TenantUMS', 'GetInvoice', { id }, { json: true });
                let url = r.url || '';
                if (!url)
                    throw 'No url found';
                window.open(url);
            }
            catch (e) {
                alerts.show('An error occurred while trying to download the invoice. Please try again later');
            }
        });
    }
    let _invoices = props.invoices.slice();
    _invoices.sort((a, b) => Number(new Date(a.start)) - Number(new Date(b.start)));
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.DataTable, { className: 'tenants', data: _invoices, pageSize: 5, activeClass: "active", columns: [
                {
                    title: "Tenant",
                    width: "20%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, item === null || item === void 0 ? void 0 : item.tenant)
                },
                {
                    title: "Start",
                    width: "15%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, new Date(item.start).toLocaleDateString())
                },
                {
                    title: "End",
                    width: "10%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, new Date(item.end).toLocaleDateString())
                },
                {
                    title: "Amount",
                    width: "10%",
                    renderColumn: item => {
                        var _a;
                        return react_1.default.createElement("div", { className: 'data-table-item' }, '$' + (Number((_a = item === null || item === void 0 ? void 0 : item.invoice) === null || _a === void 0 ? void 0 : _a.total) || 0).toFixed(2));
                    }
                },
                {
                    title: "Status",
                    width: "10%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item invoice-status ' + item.status }, item.status)
                },
                {
                    title: " ",
                    width: "10%",
                    renderColumn: item => react_1.default.createElement("a", { href: '#', onClick: () => setSelectedInvoice(item) }, "View Invoice")
                },
                {
                    title: " ",
                    width: "20%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'invoice-actions' },
                        (item.status != 'paid' && props.editable) && react_1.default.createElement(components_1.AsyncButton, { title: 'Mark as Paid', onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                                try {
                                    yield props.uxpContext.executeAction('TenantUMS', 'UpdateInvoiceStatus', { invoice: item === null || item === void 0 ? void 0 : item.id, status: 'paid' }, { json: true });
                                    toast.success('Marked as paid!💪');
                                    props === null || props === void 0 ? void 0 : props.onUpdate();
                                }
                                catch (e) {
                                    alerts.show(e);
                                }
                            }) }),
                        react_1.default.createElement(components_1.AsyncButton, { title: "Download", className: "download-invoice", onClick: () => __awaiter(void 0, void 0, void 0, function* () { return downloadInvoice(item === null || item === void 0 ? void 0 : item.id); }) }))
                },
            ] }),
        selectedInvoice && react_1.default.createElement(ViewInvoice, { onSave: () => props === null || props === void 0 ? void 0 : props.onUpdate(), editable: props.editable && !(selectedInvoice.status == 'paid'), invoice: selectedInvoice, uxpContext: props.uxpContext, onClose: () => setSelectedInvoice(null) }));
};
const TenantInvoices = (props) => {
    const toast = (0, components_1.useToast)();
    const [tenants, setTenants] = (0, react_1.useState)([]);
    const [invoices, setInvoices] = (0, react_1.useState)([]);
    const [tenant, setTenant] = (0, react_1.useState)('');
    const [tick, setTick] = react_1.default.useState(1);
    react_1.default.useEffect(() => {
        props.uxpContext.executeAction('TenantUMS', 'GetInvoices', { tenant }, { json: true })
            .then((data) => {
            setInvoices((data === null || data === void 0 ? void 0 : data.invoices) || []);
        })
            .catch((e) => {
            toast.error(e || 'An error occurred while loading invoices');
            return;
        });
    }, [tenant, tick]);
    (0, react_1.useEffect)(() => {
        props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {}, { json: true })
            .then((data) => setTenants((data === null || data === void 0 ? void 0 : data.tenants) || []));
    }, []);
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'Invoices' },
            react_1.default.createElement(components_1.FilterPanel, null,
                react_1.default.createElement(components_1.Select, { options: tenants, labelField: "tenantName", valueField: "tenantID", selected: tenant, onChange: setTenant }))),
        react_1.default.createElement(InvoiceList, { uxpContext: props.uxpContext, editable: true, invoices: invoices, onUpdate: () => setTick(tick => tick + 1) })));
};
exports.TenantInvoices = TenantInvoices;
const MyInvoices = (props) => {
    const toast = (0, components_1.useToast)();
    const [tenants, setTenants] = (0, react_1.useState)([]);
    const [invoices, setInvoices] = (0, react_1.useState)([]);
    const [tenant, setTenant] = (0, react_1.useState)('');
    react_1.default.useEffect(() => {
        props.uxpContext.executeAction('TenantUMS', 'GetMyInvoices', {}, { json: true })
            .then((data) => {
            setInvoices((data === null || data === void 0 ? void 0 : data.invoices) || []);
        })
            .catch((e) => {
            toast.error(e || 'An error occurred while loading invoices');
            return;
        });
    }, [tenant]);
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'My Invoices' }),
        react_1.default.createElement(InvoiceList, { editable: false, invoices: invoices })));
};
exports.MyInvoices = MyInvoices;


/***/ }),

/***/ "./src/TenantDetails.tsx":
/*!*******************************!*\
  !*** ./src/TenantDetails.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const TenantDetails = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const toast = (0, components_1.useToast)();
    const [details, setDetails] = (0, react_1.useState)([]);
    const [tenants, setTenants] = (0, react_1.useState)([]);
    const [date, setDate] = (0, react_1.useState)(new Date());
    const [remarks, setRemarks] = (0, react_1.useState)(null);
    const [seletedTenant, setSelectedTenant] = (0, react_1.useState)(null);
    const [offboardRequest, setOffboardRequest] = (0, react_1.useState)([]);
    const [edit, setEdit] = (0, react_1.useState)(false);
    const [terminate, setTerminate] = (0, react_1.useState)(false);
    const [selectedTenantDetails, setSelectedTenantDetails] = (0, react_1.useState)({
        department: '',
        wbsno: '',
        gfa: '',
        deposit: '',
        billingRecipientContact: {
            name: '',
            email: '',
            phone: '',
            address: ''
        },
        pointOfContact: {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    });
    (0, react_1.useEffect)(() => {
        getTenants();
        getTenantsDetails();
    }, []);
    (0, react_1.useEffect)(() => {
        getOffboardRequest();
        const fetchInterval = setInterval(getOffboardRequest, 10000);
        return () => clearInterval(fetchInterval);
    }, []);
    function getTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
            const jsonObj = JSON.parse(res);
            setTenants(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.tenants);
        });
    }
    ;
    function getTenantsDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetTenantDetails', {});
            const jsonObj = JSON.parse(res);
            setDetails(jsonObj);
        });
    }
    ;
    function getOffboardRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetOffboardingItems', {});
            const jsonObj = JSON.parse(res);
            setOffboardRequest(jsonObj);
        });
    }
    ;
    function isRequestAlreadyThere(tenantId) {
        const tenant = offboardRequest.find(request => request.tenant === tenantId);
        if ((tenant === null || tenant === void 0 ? void 0 : tenant.status) === 'pending') {
            return true;
        }
        return false;
    }
    ;
    function getUserKey() {
        const [_, v] = props.uxpContext.userKey.split('_');
        return parseInt(v);
    }
    function offboardTenant() {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                tenant: seletedTenant === null || seletedTenant === void 0 ? void 0 : seletedTenant.tenantID,
                initiatedUser: getUserKey(),
                intiatedDate: new Date().toISOString(),
                terminatedDate: new Date(date).toISOString(),
                remarks
            };
            try {
                yield props.uxpContext.executeAction('TenantUMS', 'OffboardTenant', params);
                toast.info("Termination request sent sucessfully!!!");
            }
            catch (err) {
                toast.error("something went wrong");
            }
            setTerminate(false);
            setSelectedTenant('');
        });
    }
    function handleEdit(item) {
        setEdit(true);
        setSelectedTenant(item);
        const record = details.filter(d => (d === null || d === void 0 ? void 0 : d.tenant) === item.tenantID);
        setSelectedTenantDetails(record[0]);
    }
    function getTenantField(tenantID, field) {
        var _a, _b, _c, _d;
        const tenant = details.filter(d => (d === null || d === void 0 ? void 0 : d.tenant) === tenantID);
        if (field === 'department') {
            return ((_a = tenant[0]) === null || _a === void 0 ? void 0 : _a.department) ? (_b = tenant[0]) === null || _b === void 0 ? void 0 : _b.department : "Not available";
        }
        if (field === 'deposit') {
            return ((_c = tenant[0]) === null || _c === void 0 ? void 0 : _c.deposit) ? `S$${((_d = tenant[0]) === null || _d === void 0 ? void 0 : _d.deposit)}` : "Not available";
        }
    }
    ;
    function handleDetailsChange(field, value, subField) {
        let updated;
        if (!subField) {
            updated = Object.assign(Object.assign({}, selectedTenantDetails), { [field]: value });
        }
        else {
            const { billingRecipientContact, pointOfContact } = selectedTenantDetails;
            let fieldValues;
            if (field === 'billingRecipientContact') {
                fieldValues = billingRecipientContact;
            }
            ;
            if (field === "pointOfContact") {
                fieldValues = pointOfContact;
            }
            updated = Object.assign(Object.assign({}, selectedTenantDetails), { [field]: Object.assign(Object.assign({}, fieldValues), { [subField]: value }) });
        }
        setSelectedTenantDetails(updated);
    }
    ;
    function handleSubmitDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const record = details.filter(d => (d === null || d === void 0 ? void 0 : d.tenant) === seletedTenant.tenantID);
            const { department, wbsno, gfa, deposit, billingRecipientContact, pointOfContact } = selectedTenantDetails;
            if (record.length === 0) {
                console.log("New User");
                const params = {
                    tenant: seletedTenant.tenantID,
                    department, wbsno, gfa, deposit,
                    billingRecipientContact: [billingRecipientContact],
                    pointOfContact: [pointOfContact]
                };
                try {
                    yield props.uxpContext.executeAction('TenantUMS', 'AddTenantDetails', params);
                    toast.info("Tenant details added sucessfulyy!!!!");
                }
                catch (err) {
                    toast.error(err);
                }
            }
            else {
                const params = {
                    tenant: seletedTenant.tenantID,
                    department, wbsno, gfa, deposit,
                    billingRecipientContact: [billingRecipientContact],
                    pointOfContact: [pointOfContact]
                };
                yield props.uxpContext.executeAction('TenantUMS', 'UpdateTenantDetails', params);
                toast.info("Tenant details updated sucessfulyy!!!!");
            }
            setEdit(false);
            getTenantsDetails();
        });
    }
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'Tenants Details' }),
        react_1.default.createElement(components_1.DataTable, { className: 'tenants offboard-tenant', data: tenants, pageSize: 5, activeClass: "active", columns: [
                {
                    title: "Name",
                    width: "30%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, item === null || item === void 0 ? void 0 : item.tenantName)
                },
                {
                    title: "Department",
                    width: "25%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getTenantField(item === null || item === void 0 ? void 0 : item.tenantID, "department"))
                },
                {
                    title: "Deposit",
                    width: "25%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getTenantField(item === null || item === void 0 ? void 0 : item.tenantID, "deposit"))
                },
                {
                    title: "",
                    width: "20%",
                    renderColumn: item => react_1.default.createElement("div", { className: "actions" },
                        react_1.default.createElement(components_1.Button, { title: "Edit", className: "edit-button", onClick: () => handleEdit(item) }),
                        !isRequestAlreadyThere(item === null || item === void 0 ? void 0 : item.tenantID) ?
                            react_1.default.createElement(components_1.Button, { title: "Terminate", className: "teminate-button", onClick: () => {
                                    setTerminate(true);
                                    setRemarks(null);
                                    setSelectedTenant(item);
                                } }) : null)
                },
            ] }),
        react_1.default.createElement(components_1.Modal, { className: "edit-tenant-details", title: "Edit Tenant Details", show: edit, onClose: () => setEdit(false) },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, { className: "main" }, "Department"),
                    react_1.default.createElement(components_1.Input, { value: selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.department, onChange: v => handleDetailsChange("department", v) })),
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, { className: "main" }, "WBS No"),
                    react_1.default.createElement(components_1.Input, { value: selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.wbsno, onChange: v => handleDetailsChange("wbsno", v) }))),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, { className: "main" }, "Gross Floor Area "),
                    react_1.default.createElement(components_1.Input, { value: selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.gfa, onChange: v => handleDetailsChange("gfa", v) })),
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, { className: "main" }, "Deposit"),
                    react_1.default.createElement(components_1.Input, { type: "number", value: selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.deposit, onChange: v => handleDetailsChange("deposit", v) }))),
            react_1.default.createElement(components_1.Label, { className: "main multi" }, "Point of Contact (POC)"),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Name "),
                    react_1.default.createElement(components_1.Input, { value: (_a = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.pointOfContact) === null || _a === void 0 ? void 0 : _a.name, onChange: v => handleDetailsChange("pointOfContact", v, "name") }),
                    react_1.default.createElement(components_1.Label, null, "Phone"),
                    react_1.default.createElement(components_1.Input, { value: (_b = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.pointOfContact) === null || _b === void 0 ? void 0 : _b.phone, onChange: v => handleDetailsChange("pointOfContact", v, "phone") })),
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Email"),
                    react_1.default.createElement(components_1.Input, { value: (_c = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.pointOfContact) === null || _c === void 0 ? void 0 : _c.email, onChange: v => handleDetailsChange("pointOfContact", v, "email") }),
                    react_1.default.createElement(components_1.Label, null, "Address"),
                    react_1.default.createElement(components_1.Input, { value: (_d = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.pointOfContact) === null || _d === void 0 ? void 0 : _d.address, onChange: v => handleDetailsChange("pointOfContact", v, "address") }))),
            react_1.default.createElement(components_1.Label, { className: "main multi" }, "Billing Recipient Contact(BRC)"),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Name "),
                    react_1.default.createElement(components_1.Input, { value: (_e = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.billingRecipientContact) === null || _e === void 0 ? void 0 : _e.name, onChange: v => handleDetailsChange("billingRecipientContact", v, "name") }),
                    react_1.default.createElement(components_1.Label, null, "Phone"),
                    react_1.default.createElement(components_1.Input, { value: (_f = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.billingRecipientContact) === null || _f === void 0 ? void 0 : _f.phone, onChange: v => handleDetailsChange("billingRecipientContact", v, "phone") })),
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Email"),
                    react_1.default.createElement(components_1.Input, { value: (_g = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.billingRecipientContact) === null || _g === void 0 ? void 0 : _g.email, onChange: v => handleDetailsChange("billingRecipientContact", v, "email") }),
                    react_1.default.createElement(components_1.Label, null, "Address"),
                    react_1.default.createElement(components_1.Input, { value: (_h = selectedTenantDetails === null || selectedTenantDetails === void 0 ? void 0 : selectedTenantDetails.billingRecipientContact) === null || _h === void 0 ? void 0 : _h.address, onChange: v => handleDetailsChange("billingRecipientContact", v, "address") }))),
            react_1.default.createElement("div", { className: "actions" },
                react_1.default.createElement(components_1.AsyncButton, { title: "Submit", onClick: () => handleSubmitDetails() }))),
        react_1.default.createElement(components_1.Modal, { className: "offboard-modal", title: "Offboard Tenant", show: terminate, onClose: () => { setSelectedTenant(null); setTerminate(false); } },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Select Date"),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date, onChange: (date) => setDate(date) }))),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Remarks"),
                    react_1.default.createElement(components_1.TextArea, { value: remarks, onChange: v => setRemarks(v) }))),
            react_1.default.createElement("div", { className: "actions" },
                react_1.default.createElement(components_1.AsyncButton, { title: "Submit", onClick: () => offboardTenant() })))));
};
exports["default"] = TenantDetails;


/***/ }),

/***/ "./src/UMSTenant.tsx":
/*!***************************!*\
  !*** ./src/UMSTenant.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const UMSTenant = (props) => {
    const toast = (0, components_1.useToast)();
    const [tenants, setTenants] = (0, react_1.useState)([]);
    const [meters, setMeters] = (0, react_1.useState)([]);
    const [budget, setBudget] = (0, react_1.useState)('');
    const [registeredMeters, setRegisteredMeters] = (0, react_1.useState)([]);
    const [selectedTenant, setSelectedTenant] = (0, react_1.useState)(null);
    const [selectedMeter, setSelectedMeter] = (0, react_1.useState)(null);
    const [addMeter, setAddMeter] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const [selectedTenantMeters, setSelectedTenantMeters] = (0, react_1.useState)([]);
    const [deleteMeter, setDeleteMeter] = (0, react_1.useState)(null);
    const [meterType, setMeterType] = react_1.default.useState('energy');
    (0, react_1.useEffect)(() => {
        getMeters();
    }, [meterType]);
    (0, react_1.useEffect)(() => {
        getAllRegisteredMeters();
        getTenants();
    }, []);
    function getTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
            const jsonObj = JSON.parse(res);
            setTenants(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.tenants);
        });
    }
    function getMeters() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllMeters', { type: meterType });
            const jsonObj = JSON.parse(res);
            setMeters(jsonObj);
        });
    }
    function getAllRegisteredMeters() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllRegisteredMeters', {});
            const jsonObj = JSON.parse(res);
            setRegisteredMeters(jsonObj);
        });
    }
    function addMeterForTenant() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!selectedMeter) {
                setError("Please select a meter from the list");
                return;
            }
            // if (!budget) {
            //     setError("Budget can not be empty")
            //     return;
            // }
            const params = {
                budget,
                meterId: selectedMeter,
                tenantId: selectedTenant === null || selectedTenant === void 0 ? void 0 : selectedTenant.tenantID,
                type: meterType,
            };
            const res = yield props.uxpContext.executeAction('TenantUMS', 'AddMeter', params);
            res === '{}' ?
                toast.error("This meter is already in use, please check for another meter") :
                toast.info("Meter added successfully!!!");
            setBudget('');
            setAddMeter(false);
            setSelectedMeter(null);
            getAllRegisteredMeters();
        });
    }
    function deleteMeterForTenant() {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                meterId: deleteMeter,
                tenantId: selectedTenant === null || selectedTenant === void 0 ? void 0 : selectedTenant.tenantID,
                type: meterType,
            };
            const res = yield props.uxpContext.executeAction('TenantUMS', 'DeleteMeterForTenant', params);
            setAddMeter(false);
            getAllRegisteredMeters();
        });
    }
    // function getLabelForMeter(meterId: string) {
    //     const meter = registeredMeters.filter(m => m.meter === meterId)
    //     return meter[0]?.name + meter[0]?.type;
    // }    
    function getMetersForTenant(tenantID) {
        const meters = registeredMeters.filter(m => m.tenant === tenantID);
        let waterMeters = meters.filter((x) => x.type == 'water');
        let energyMeters = meters.filter((x) => x.type == 'energy');
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: 'tu-meters water' }, waterMeters.map((m) => react_1.default.createElement("div", { className: 'tu-meter-id' },
                react_1.default.createElement("div", { className: 'tu-logo' }),
                react_1.default.createElement("div", { className: 'tu-txt' }, m.meter)))),
            react_1.default.createElement("div", { className: 'tu-meters energy' }, energyMeters.map((m) => react_1.default.createElement("div", { className: 'tu-meter-id' },
                react_1.default.createElement("div", { className: 'tu-logo' }),
                react_1.default.createElement("div", { className: 'tu-txt' }, m.meter)))));
        return meters.map((x) => `${x.type}/${x.meter}`);
    }
    function handleEdit(item) {
        setAddMeter(true);
        setSelectedTenant(item);
        const tenantMeters = registeredMeters.filter(r => r.tenant === item.tenantID);
        setSelectedTenantMeters(tenantMeters);
    }
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'Tenant Meter Configuration' }),
        react_1.default.createElement(components_1.DataTable, { className: 'tenants', data: tenants, pageSize: 5, activeClass: "active", columns: [
                {
                    title: "Name",
                    width: "40%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, item === null || item === void 0 ? void 0 : item.tenantName)
                },
                {
                    title: "Meters",
                    width: "40%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getMetersForTenant(item === null || item === void 0 ? void 0 : item.tenantID))
                },
                {
                    title: "",
                    width: "20%",
                    renderColumn: item => react_1.default.createElement(components_1.Button, { title: "Edit", onClick: () => handleEdit(item) })
                },
            ] }),
        react_1.default.createElement(components_1.Modal, { className: "add-meter", title: "Register Meter", show: addMeter, onClose: () => setAddMeter(false), headerContent: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.ToggleFilter, { options: [{ value: 'energy', label: 'Energy' }, { value: 'water', label: 'Water' }], value: meterType, onChange: setMeterType })) },
            react_1.default.createElement("div", { className: "register-meter" },
                react_1.default.createElement("div", { className: "row" },
                    react_1.default.createElement("div", { className: "col" },
                        react_1.default.createElement(components_1.Label, null, "Select Meter"),
                        react_1.default.createElement(components_1.Select, { options: meters, selected: selectedMeter, valueField: "id", labelField: "name", onChange: v => {
                                setError(null);
                                setSelectedMeter(v);
                            } })),
                    react_1.default.createElement("div", { className: "col" },
                        react_1.default.createElement(components_1.Label, null, "Budget"),
                        react_1.default.createElement(components_1.Input, { type: "number", value: budget, onChange: v => {
                                setError(null);
                                setBudget(v);
                            } }))),
                error && react_1.default.createElement("div", { className: "error" }, error),
                react_1.default.createElement("div", { className: "actions" },
                    react_1.default.createElement(components_1.AsyncButton, { title: "Add Meter", onClick: () => addMeterForTenant() }))),
            react_1.default.createElement("div", { className: "delete-meter" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement(components_1.Label, null, "Select Meter"),
                    react_1.default.createElement(components_1.Select, { options: selectedTenantMeters, selected: deleteMeter, valueField: "meter", labelField: "meter", onChange: v => {
                            setError(null);
                            setDeleteMeter(v);
                        } })),
                react_1.default.createElement("div", { className: "actions" },
                    react_1.default.createElement(components_1.AsyncButton, { title: "Delete Meter", onClick: () => deleteMeterForTenant() }))))));
};
exports["default"] = UMSTenant;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const UMSTenant_1 = __importDefault(__webpack_require__(/*! ./UMSTenant */ "./src/UMSTenant.tsx"));
const GlobalConfig_1 = __webpack_require__(/*! ./GlobalConfig */ "./src/GlobalConfig.tsx");
const Invoices_1 = __webpack_require__(/*! ./Invoices */ "./src/Invoices.tsx");
const ApproveOffboardingTenants_1 = __importDefault(__webpack_require__(/*! ./ApproveOffboardingTenants */ "./src/ApproveOffboardingTenants.tsx"));
const TenantDetails_1 = __importDefault(__webpack_require__(/*! ./TenantDetails */ "./src/TenantDetails.tsx"));
(0, uxp_1.registerWidget)({
    id: "ums_tenant",
    widget: UMSTenant_1.default,
    configs: {
        layout: {}
    }
});
(0, uxp_1.registerWidget)({
    id: "approve_offboarding_tenants",
    widget: ApproveOffboardingTenants_1.default,
    configs: {
        layout: {}
    }
});
(0, uxp_1.registerWidget)({
    id: "tenant_details",
    widget: TenantDetails_1.default,
    configs: {
        layout: {}
    }
});
(0, uxp_1.registerWidget)({
    id: "price-config",
    widget: GlobalConfig_1.PriceConfig,
    configs: {
        layout: {}
    }
});
(0, uxp_1.registerWidget)({
    id: "invoices",
    widget: Invoices_1.TenantInvoices,
    configs: {
        layout: {}
    }
});
(0, uxp_1.registerWidget)({
    id: "my-invoices",
    widget: Invoices_1.MyInvoices,
    configs: {
        layout: {}
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "uxp_tenant",
    label: "Uxp_tenant",
    // click: () => alert("Hello"),
    component: Uxp_tenantWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"uxp_tenant",
   component: Uxp_tenantWidget
});
*/ 


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerCustomWidgetTemplate = exports.getUrlFriendlyString = exports.enableLocalization = exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
const localization_json_1 = __importDefault(__webpack_require__(/*! ../localization.json */ "./localization.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;
function enableLocalization() {
    window.registerLocalization(localization_json_1.default);
}
exports.enableLocalization = enableLocalization;
const getUrlFriendlyString = (string, removeSlashes) => {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeeiiiiooooouuuunc------";
    const newText = string.split('').map((letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)));
    return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/'/g, '-e') // Replace single quates with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};
exports.getUrlFriendlyString = getUrlFriendlyString;
function registerCustomWidgetTemplate(template) {
    let id = (0, exports.getUrlFriendlyString)(template.id);
    if (!template.icon)
        template.icon = ['fad', 'align-justify'];
    window.registerCustomWidgetTemplate(template);
    registerWidget({
        id: id,
        widget: template.template,
        isTemplate: true,
        isDefaultTemplate: false,
        configs: {
            layout: template.layout || { w: 10, h: 10 },
            props: [
                {
                    name: "uiProps",
                    label: "UI",
                    type: "json"
                }
            ],
            preLoader: (template === null || template === void 0 ? void 0 : template.preLoader) || 'default'
        },
        defaultProps: {
            uiProps: {},
        }
    });
}
exports.registerCustomWidgetTemplate = registerCustomWidgetTemplate;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"dece8055-b3de-42ec-b596-8ffa8fd0a794","author":"eutech","widgets":[{"id":"ums_tenant","name":"Tenant Meter Configuration","description":"Assign meters to tenants","icon":"","tags":[]},{"id":"approve_offboarding_tenants","name":"Approve Offboarding Tenants","description":"Approve Offboard request for a tenant","icon":"","tags":[]},{"id":"tenant_details","name":"Tenant Details","description":"This widget will show tenant registration details","icon":"","tags":[]},{"id":"price-config","name":"Tenant Utility Metering Configuration","description":"This widget is for configuring various rates and parameters for tenant utility metering and billing","icon":"","tags":[]},{"id":"invoices","name":"Tenant Utility  Invoices","description":"A list of invoices that have been generated","icon":"","tags":[]},{"id":"my-invoices","name":"My Utility  Invoices","description":"A list of invoices for the tenant that I am a part of","icon":"","tags":[]}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map