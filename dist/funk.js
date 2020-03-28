/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_debug.js":
/*!***********************!*\
  !*** ./src/_debug.js ***!
  \***********************/
/*! exports provided: jf_dbgCheck, jf_dbgDump, jf_dbgReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_dbgCheck\", function() { return jf_dbgCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_dbgDump\", function() { return jf_dbgDump; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_dbgReset\", function() { return jf_dbgReset; });\nlet __dmoment__ = [];\nlet __dtag__ = [];\nlet __didx__ = -1;\nfunction jf_dbgCheck(tag, mute = false) {\n    let n = new Date();\n    __dmoment__.push(n);\n    __dtag__.push(tag);\n    __didx__++;\n    if(mute === false) {\n        let s = __dmoment__[__didx__].Format('hh:mm:ss.SSS => ') + '[' + __dtag__[__didx__] + '] checked. ';\n        if (__didx__ > 0)\n            s += (__dmoment__[__didx__] - __dmoment__[__didx__-1]) + ' ms passed from [' + __dtag__[__didx__-1] + '].';\n        console.log(s);\n    }\n}\nfunction jf_dbgDump() {\n    let i = 0;\n    while (i <= __didx__) {\n        let s = __dmoment__[i].Format('hh:mm:ss.SSS => ') + '[' + __dtag__[i] + '] checked. ';\n        if (i > 0)\n            s += (__dmoment__[i] - __dmoment__[i-1]) + ' ms passed from [' + __dtag__[i-1] + '].';\n        console.log(s);\n        i++\n    }\n}\nfunction jf_dbgReset() {\n    __dmoment__ = [];\n    __dtag__ = [];\n    __didx__ = -1;\n}\n\n\n//# sourceURL=webpack:///./src/_debug.js?");

/***/ }),

/***/ "./src/_extensions.js":
/*!****************************!*\
  !*** ./src/_extensions.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Date.prototype.Format = function (fmt) {\n    let ret = '';\n    const w = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n    const lm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n    const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n    const ap = ['am', 'pm'];\n    const AP = ['AM', 'PM'];\n    let a = fmt.split('');\n    if (a.length > 0) {\n        a.push('\\n');\n        let x = {\n            \"y\": this.getFullYear(),\n            \"M\": this.getMonth(),\n            \"d\": this.getDate(),\n            \"w\": this.getDay(),\n            \"H\": this.getHours(),\n            \"m\": this.getMinutes(),\n            \"s\": this.getSeconds(),\n            \"q\": Math.floor(this.getMonth()/3) + 1,\n            \"S\": this.getMilliseconds()\n        };\n        let cnt = 0;\n        let esc = false;\n        let l = a.length - 2;\n        let i = 0;\n        for (let c of a) {\n            cnt++;\n            if (esc === true) {\n                ret += a[i];\n                esc = false;\n                cnt = 0;\n            } else {\n                if (a[i] === '\\\\')\n                    esc = true;\n                else {\n                    if ((a[i] !== a[i + 1]) || (i === l)) {\n                        //console.log(a[i], a[i+1], cnt);\n                        switch (a[i]) {\n                            case 'y':\n                                while (cnt >= 4) {\n                                    ret += x.y;\n                                    cnt -= 4;\n                                }\n                                while (cnt >= 2) {\n                                    ret += x.y % 1000;\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += 'y'.repeat(cnt);\n                                break;\n                            case 'M':\n                                while (cnt >= 4) {\n                                    ret += lm[x.M];\n                                    cnt -= 4;\n                                }\n                                while (cnt >= 3) {\n                                    ret += sm[x.M];\n                                    cnt -= 3;\n                                }\n                                while (cnt >= 2) {\n                                    ret += (x.M > 8) ? (x.M + 1) : ('0' + (x.M + 1));\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += (x.M + 1);\n                                break;\n                            case 'd':\n                                while (cnt >= 2) {\n                                    ret += (x.d > 9) ? (x.d) : ('0' + x.d);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += x.d;\n                                break;\n                            case 'w':\n                                ret += w[x.w].repeat(cnt);\n                                break;\n                            case 'a':\n                                ret += ap[Math.floor(x.H / 12)].repeat(cnt);\n                                break;\n                            case 'A':\n                                ret += AP[Math.floor(x.H / 12)].repeat(cnt);\n                                break;\n                            case 'h':\n                                let h = (x.H > 11) ? (x.H - 12) : x.H;\n                                while (cnt >= 2) {\n                                    ret += (h > 9) ? (h) : ('0' + h);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += h;\n                                break;\n                            case 'H':\n                                while (cnt >= 2) {\n                                    ret += (x.H > 9) ? (x.H) : ('0' + x.H);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += x.H;\n                                break;\n                            case 'm':\n                                while (cnt >= 2) {\n                                    ret += (x.m > 9) ? (x.m) : ('0' + x.m);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += x.m;\n                                break;\n                            case 's':\n                                while (cnt >= 2) {\n                                    ret += (x.s > 9) ? (x.m) : ('0' + x.s);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += x.s;\n                                break;\n                            case 'q':\n                                ret += ('Q' + Math.ceil(x.M / 3)).repeat(cnt);\n                                break;\n                            case 'S':\n                                let s = x.S + '';\n                                s = s + '0'.repeat(3 - s.length);\n                                while (cnt >= 3) {\n                                    ret += s;\n                                    cnt -= 3;\n                                }\n                                while (cnt >= 2) {\n                                    ret += s.substr(0, 2);\n                                    cnt -= 2;\n                                }\n                                if (cnt > 0)\n                                    ret += s.substr(0, 1);\n                                break;\n                            default:\n                                ret += a[i].repeat(cnt);\n                                break;\n                        }\n                        cnt = 0;\n                    }\n                }\n            }\n            i++;\n        }\n    }\n    return ret;\n};\n\n\n//# sourceURL=webpack:///./src/_extensions.js?");

/***/ }),

/***/ "./src/_string.js":
/*!************************!*\
  !*** ./src/_string.js ***!
  \************************/
/*! exports provided: jf_intFill, jf_floatFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_intFill\", function() { return jf_intFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_floatFill\", function() { return jf_floatFill; });\nfunction jf_intFill(num, len, stuff = ' ', dir = true) {\n    let x = parseInt(num).toString();\n    let l = x.length;\n    if (len > l) {\n        if (dir === true)\n            return stuff.repeat(len - l) + x;\n        else\n            return x + stuff.repeat(len - l);\n    } else\n        return x;\n}\n\nfunction jf_floatFill(num, len, decimal = 0, stuff = ' ', dir = true) {\n    let x = parseFloat(num).toString();\n    let i = x;\n    let d = '0'.repeat(decimal);\n    if (len <= 0)\n        return x;\n    decimal = decimal < 0?0:decimal;\n\n    let y = x.indexOf('.');\n    if (y >= 0){\n        i = x.substr(0, y);\n        d = x.substr(y+1, decimal);\n        if (d.length < decimal)\n            d = d + '0'.repeat(decimal - d.length);\n    }\n    if (i.length > len)\n        return x;\n    else if ((i.length  === len)||(i.length === (len - 1)))\n        return i;\n\n    if (d !== '')\n        d = '.' + d;\n    let ret = i + d;\n    if (ret.length < len) {\n        if (dir === true)\n            return (stuff.repeat(len - ret.length) + ret);\n        else\n            return (ret + stuff.repeat(len - ret.length));\n    } else\n        return ret.substr(0, len);\n}\n\n\n//# sourceURL=webpack:///./src/_string.js?");

/***/ }),

/***/ "./src/_system.js":
/*!************************!*\
  !*** ./src/_system.js ***!
  \************************/
/*! exports provided: jf_client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jf_client\", function() { return jf_client; });\nfunction jf_client(ua, addTag = false) {\n    let ret = {\n        device: 'desktop',\n        os: 'others',\n        browser: 'others'\n    };\n    ua = ua.toLowerCase();\n\n    //device detection\n    if (ua.indexOf('iphone') !== -1)\n        ret.device = 'mobile-phone';\n    else if (ua.match(/(ipod|ipad)/))\n        ret.device = 'mobile-tablet';\n    else if (ua.indexOf('android') !== -1) {\n        if (ua.indexOf('mobile') !== -1)\n            ret.device = 'mobile-phone';\n        else\n            ret.device = 'mobile-tablet';\n    }  else if (ua.match(/(weboS|blackberry|iemobile|opera mini)/)) {\n        if (ua.indexOf('tablet') !== -1)\n            ret.device = 'mobile-tablet';\n        else\n            ret.device = 'mobile-phone';\n    }\n\n    //os detection\n    if (ua.indexOf('win') !== -1)\n        ret.os = 'windows';\n    else if (ua.indexOf('mac') !== -1)\n        ret.os = 'macos';\n    else if (ua.indexOf('ios') !== -1)\n        ret.os = 'ios';\n    else if (ua.indexOf('android') !== -1)\n        ret.os = 'android';\n    else if (ua.indexOf('linux') !== -1)\n        ret.os = 'linux';\n\n    //browser detection\n    if (ua.indexOf('chrome') !== -1)\n        ret.browser = 'chrome';\n    else if (ua.indexOf('firefox') !== -1)\n        ret.browser = 'firefox';\n    else if (ua.indexOf('msie') !== -1)\n        ret.browser = 'ie';\n    else if (ua.indexOf('edge') !== -1)\n        ret.browser = 'edge';\n    else if (ua.indexOf('safari') !== -1)\n        ret.browser = 'safari';\n    else if (ua.indexOf('opera') !== -1)\n        ret.browser = 'opera';\n\n    if ((addTag === true)&&(window.jQuery !== undefined))\n        $('body').addClass('c-os-' + ret.os + ' c-dv-' + ret.device + ' c-br-' + ret.browser);\n\n    return ret;\n}\n\n\n//# sourceURL=webpack:///./src/_system.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_string */ \"./src/_string.js\");\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_system */ \"./src/_system.js\");\n/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_debug */ \"./src/_debug.js\");\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_extensions */ \"./src/_extensions.js\");\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_extensions__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nwindow.j$ = {\n    jf_intFill: _string__WEBPACK_IMPORTED_MODULE_0__[\"jf_intFill\"],\n    jf_floatFill: _string__WEBPACK_IMPORTED_MODULE_0__[\"jf_floatFill\"],\n    jf_client: _system__WEBPACK_IMPORTED_MODULE_1__[\"jf_client\"],\n    jf_dbgCheck: _debug__WEBPACK_IMPORTED_MODULE_2__[\"jf_dbgCheck\"],\n    jf_dbgDump: _debug__WEBPACK_IMPORTED_MODULE_2__[\"jf_dbgDump\"],\n    jf_dbgReset: _debug__WEBPACK_IMPORTED_MODULE_2__[\"jf_dbgReset\"]\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });