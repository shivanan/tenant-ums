/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".tenants {\n  position: relative;\n  height: 85%;\n  width: 100%;\n  padding: 25px 15px 0 15px;\n}\n.tenants .data-list .data-table thead tr th {\n  padding-left: 15px;\n  text-align: left;\n  background: #e3e3e3;\n}\n.tenants .data-list .data-list-item {\n  height: 50px;\n}\n.tenants .data-list-footer {\n  position: unset;\n}\n.tenants .data-table-item {\n  margin-left: 7.5px;\n}\n\n.add-meter {\n  display: flex;\n}\n.add-meter .tenant-name {\n  display: flex;\n  margin-bottom: 15px;\n}\n.add-meter .tenant-name .label {\n  width: 60px;\n  font-weight: 700;\n}\n.add-meter .row {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.add-meter .row .col {\n  width: 48%;\n}\n.add-meter .row .col .uxp-form-label {\n  font-weight: 500;\n}\n.add-meter .delete-meter {\n  margin-top: 45px;\n}\n.add-meter .error {\n  color: red;\n  margin: 15px 0;\n  padding: 5px;\n}\n.add-meter .actions {\n  margin: 15px 0;\n}\n.add-meter .actions .uxp-button {\n  margin: 0;\n  float: right;\n}", ""]);
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
    (0, react_1.useEffect)(() => {
        getTenants();
        getMeters();
        getAllRegisteredMeters();
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
            const res = yield props.uxpContext.executeAction('TenantUMS', 'GetAllMeters', {});
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
            if (!budget) {
                setError("Budget can not be empty");
                return;
            }
            const params = {
                budget,
                meterId: selectedMeter,
                tenantId: selectedTenant === null || selectedTenant === void 0 ? void 0 : selectedTenant.tenantID
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
                tenantId: selectedTenant === null || selectedTenant === void 0 ? void 0 : selectedTenant.tenantID
            };
            const res = yield props.uxpContext.executeAction('TenantUMS', 'DeleteMeterForTenant', params);
            setAddMeter(false);
            getAllRegisteredMeters();
        });
    }
    function getLabelForMeter(meterId) {
        var _a;
        const meter = meters.filter(m => m.id === meterId);
        return (_a = meter[0]) === null || _a === void 0 ? void 0 : _a.name;
    }
    function getMetersForTenant(tenantID) {
        const meters = registeredMeters.filter(m => m.tenant === tenantID);
        const meterIds = meters.map(m => m.meter);
        const meterName = meterIds.map(m => getLabelForMeter(m));
        return meterName.join(', ') || "No Meters Found";
    }
    function handleEdit(item) {
        setAddMeter(true);
        setSelectedTenant(item);
        const tenantMeters = registeredMeters.filter(r => r.tenant === item.tenantID);
        setSelectedTenantMeters(tenantMeters);
    }
    return (react_1.default.createElement(components_1.WidgetWrapper, null,
        react_1.default.createElement(components_1.TitleBar, { title: 'UMS Tenants' }),
        react_1.default.createElement(components_1.DataTable, { className: 'tenants', data: tenants, pageSize: 5, activeClass: "active", columns: [
                {
                    title: "Name",
                    width: "40%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, item === null || item === void 0 ? void 0 : item.tenantName)
                },
                {
                    title: "Meters",
                    width: "30%",
                    renderColumn: item => react_1.default.createElement("div", { className: 'data-table-item' }, getMetersForTenant(item === null || item === void 0 ? void 0 : item.tenantID))
                },
                {
                    title: "Actions",
                    width: "30%",
                    renderColumn: item => react_1.default.createElement(components_1.Button, { title: "Edit", onClick: () => handleEdit(item) })
                },
            ] }),
        react_1.default.createElement(components_1.Modal, { className: "add-meter", title: "Register Meter", show: addMeter, onClose: () => setAddMeter(false) },
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
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "ums_tenant",
    widget: UMSTenant_1.default,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
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
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
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
module.exports = JSON.parse('{"id":"dece8055-b3de-42ec-b596-8ffa8fd0a794","author":"eutech","widgets":[{"id":"ums_tenant","name":"UMS Tenant","description":"UMS Tenant","icon":"","tags":[]}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

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