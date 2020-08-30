(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./title/title.component */
      "./src/app/title/title.component.ts");
      /* harmony import */


      var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./summary/summary.component */
      "./src/app/summary/summary.component.ts");
      /* harmony import */


      var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./work/work.component */
      "./src/app/work/work.component.ts");
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skill/skill.component */
      "./src/app/skill/skill.component.ts");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./education/education.component */
      "./src/app/education/education.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _signature_signature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./signature/signature.component */
      "./src/app/signature/signature.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app-to-run-inside-docker';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__["SkillComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _signature_signature_component__WEBPACK_IMPORTED_MODULE_8__["SignatureComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0tBQ2dLO0FBQ2hLLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLHlDQUF5QztBQUN6Qyx3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU07QUFDTixNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07QUFDTixNQUFNO0FBQ04sT0FBTztBQUNQLG1CQUFtQjtBQUNuQixJQUFJO0FBRUosTUFBTTtBQUNOLGVBQWU7QUFDZixJQUFJO0FBRUosWUFBWTtBQUNaLGFBQWE7QUFDYixJQUFJO0FBRUosYUFBYTtBQUNiLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1osYUFBYTtBQUNiLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixJQUFJO0FBRUosaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixJQUFJO0FBRUosMkJBQTJCO0FBQzNCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEIsSUFBSTtBQUVKLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QixJQUFJO0FBRUosdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsSUFBSTtBQUVKLHdDQUF3QztBQUN4Qyx1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLGtDQUFrQztBQUNsQyxnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLFVBQVU7QUFDVix3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHNDQUFzQztBQUN0Qyx1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxxQkFBcUI7QUFDckIsSUFBSTtBQUVKLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLElBQUk7QUFFSiwrQ0FBK0M7QUFDL0MscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixxREFBcUQ7QUFDckQsaUNBQWlDO0FBQ2pDLGdEQUFnRDtBQUNoRCxJQUFJO0FBRUosMEVBQTBFO0FBQzFFLDhCQUE4QjtBQUM5QixJQUFJO0FBRUoseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUosbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosZUFBZTtBQUNmLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixJQUFJO0FBRUoscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsSUFBSTtBQUVKLEtBQUs7QUFDTCxhQUFhO0FBQ2IsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQiwyQkFBMkI7QUFDM0IsSUFBSTtBQUVKLFlBQVk7QUFDWixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLGNBQWM7QUFDZCx3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsdUNBQXVDO0FBQ3ZDLElBQUk7QUFFSixzQkFBc0I7QUFDdEIsa0NBQWtDO0FBQ2xDLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1osYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLGtCQUFrQjtBQUNsQiwwRUFBMEU7QUFDMUUsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixlQUFlO0FBQ2YsSUFBSTtBQUVKLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsOEVBQThFO0FBQzlFLDZCQUE2QjtBQUM3QixJQUFJO0FBRUosdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQyxpREFBaUQ7QUFDakQsSUFBSTtBQUVKLFdBQVc7QUFDWCxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLElBQUk7QUFFSix1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qix5Q0FBeUM7QUFDekMsd0JBQXdCO0FBQ3hCLG9FQUFvRTtBQUNwRSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHdJQUF3STtBQUN4SSxJQUFJO0FBRUosNkJBQTZCO0FBQzdCLG9FQUFvRTtBQUNwRSxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSix1Q0FBdUM7QUFDdkMsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLElBQUk7QUFHSiwwQkFBMEI7QUFDMUIseUNBQXlDO0FBRXpDLDRDQUE0QztBQUM1QyxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLE1BQU07QUFFTixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixNQUFNO0FBRU4sZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6QixNQUFNO0FBRU4sdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsTUFBTTtBQUNOLElBQUk7QUFFSix5Q0FBeUM7QUFDekMsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLElBQUk7QUFDSDs7Ozs7O0VBTUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qOmhvc3Qge1xuLyogIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjsqL1xuLyogIGZvbnQtc2l6ZTogMTRweDsqL1xuLyogIGNvbG9yOiAjMzMzOyovXG4vKiAgYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xuLyogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyovXG4vKiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsqL1xuLyp9Ki9cblxuLypoMSwqL1xuLypoMiwqL1xuLypoMywqL1xuLypoNCwqL1xuLypoNSwqL1xuLypoNiB7Ki9cbi8qICBtYXJnaW46IDhweCAwOyovXG4vKn0qL1xuXG4vKnAgeyovXG4vKiAgbWFyZ2luOiAwOyovXG4vKn0qL1xuXG4vKi5zcGFjZXIgeyovXG4vKiAgZmxleDogMTsqL1xuLyp9Ki9cblxuLyoudG9vbGJhciB7Ki9cbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qICB0b3A6IDA7Ki9cbi8qICBsZWZ0OiAwOyovXG4vKiAgcmlnaHQ6IDA7Ki9cbi8qICBoZWlnaHQ6IDYwcHg7Ki9cbi8qICBkaXNwbGF5OiBmbGV4OyovXG4vKiAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7Ki9cbi8qICBjb2xvcjogd2hpdGU7Ki9cbi8qICBmb250LXdlaWdodDogNjAwOyovXG4vKn0qL1xuXG4vKi50b29sYmFyIGltZyB7Ki9cbi8qICBtYXJnaW46IDAgMTZweDsqL1xuLyp9Ki9cblxuLyoudG9vbGJhciAjdHdpdHRlci1sb2dvIHsqL1xuLyogIGhlaWdodDogNDBweDsqL1xuLyogIG1hcmdpbjogMCAxNnB4OyovXG4vKn0qL1xuXG4vKi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIgeyovXG4vKiAgb3BhY2l0eTogMC44OyovXG4vKn0qL1xuXG4vKi5jb250ZW50IHsqL1xuLyogIGRpc3BsYXk6IGZsZXg7Ki9cbi8qICBtYXJnaW46IDgycHggYXV0byAzMnB4OyovXG4vKiAgcGFkZGluZzogMCAxNnB4OyovXG4vKiAgbWF4LXdpZHRoOiA5NjBweDsqL1xuLyogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4vKn0qL1xuXG4vKnN2Zy5tYXRlcmlhbC1pY29ucyB7Ki9cbi8qICBoZWlnaHQ6IDI0cHg7Ki9cbi8qICB3aWR0aDogYXV0bzsqL1xuLyp9Ki9cblxuLypzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7Ki9cbi8qICBtYXJnaW4tcmlnaHQ6IDhweDsqL1xuLyp9Ki9cblxuLyouY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7Ki9cbi8qICBmaWxsOiAjODg4OyovXG4vKn0qL1xuXG4vKi5jYXJkLWNvbnRhaW5lciB7Ki9cbi8qICBkaXNwbGF5OiBmbGV4OyovXG4vKiAgZmxleC13cmFwOiB3cmFwOyovXG4vKiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cbi8qICBtYXJnaW4tdG9wOiAxNnB4OyovXG4vKn0qL1xuXG4vKi5jYXJkIHsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDRweDsqL1xuLyogIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7Ki9cbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyovXG4vKiAgaGVpZ2h0OiA0MHB4OyovXG4vKiAgd2lkdGg6IDIwMHB4OyovXG4vKiAgbWFyZ2luOiAwIDhweCAxNnB4OyovXG4vKiAgcGFkZGluZzogMTZweDsqL1xuLyogIGRpc3BsYXk6IGZsZXg7Ki9cbi8qICBmbGV4LWRpcmVjdGlvbjogcm93OyovXG4vKiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4vKiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7Ki9cbi8qICBsaW5lLWhlaWdodDogMjRweDsqL1xuLyp9Ki9cblxuLyouY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7Ki9cbi8qICBtYXJnaW4tcmlnaHQ6IDA7Ki9cbi8qfSovXG5cbi8qLmNhcmQuY2FyZC1zbWFsbCB7Ki9cbi8qICBoZWlnaHQ6IDE2cHg7Ki9cbi8qICB3aWR0aDogMTY4cHg7Ki9cbi8qfSovXG5cbi8qLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHsqL1xuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cblxuLyouY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgeyovXG4vKiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyovXG4vKiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpOyovXG4vKn0qL1xuXG4vKi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7Ki9cbi8qICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7Ki9cbi8qfSovXG5cbi8qLmNhcmQuaGlnaGxpZ2h0LWNhcmQgeyovXG4vKiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsqL1xuLyogIGNvbG9yOiB3aGl0ZTsqL1xuLyogIGZvbnQtd2VpZ2h0OiA2MDA7Ki9cbi8qICBib3JkZXI6IG5vbmU7Ki9cbi8qICB3aWR0aDogYXV0bzsqL1xuLyogIG1pbi13aWR0aDogMzAlOyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKn0qL1xuXG4vKi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7Ki9cbi8qICBtYXJnaW4tbGVmdDogNjBweDsqL1xuLyp9Ki9cblxuLypzdmcjcm9ja2V0IHsqL1xuLyogIHdpZHRoOiA4MHB4OyovXG4vKiAgcG9zaXRpb246IGFic29sdXRlOyovXG4vKiAgbGVmdDogLTEwcHg7Ki9cbi8qICB0b3A6IC0yNHB4OyovXG4vKn0qL1xuXG4vKnN2ZyNyb2NrZXQtc21va2UgeyovXG4vKiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7Ki9cbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qICB0b3A6IDEwcHg7Ki9cbi8qICByaWdodDogMTgwcHg7Ki9cbi8qICB6LWluZGV4OiAtMTA7Ki9cbi8qfSovXG5cbi8qYSwqL1xuLyphOnZpc2l0ZWQsKi9cbi8qYTpob3ZlciB7Ki9cbi8qICBjb2xvcjogIzE5NzZkMjsqL1xuLyogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xuLyp9Ki9cblxuLyphOmhvdmVyIHsqL1xuLyogIGNvbG9yOiAjMTI1Njk5OyovXG4vKn0qL1xuXG4vKi50ZXJtaW5hbCB7Ki9cbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qICB3aWR0aDogODAlOyovXG4vKiAgbWF4LXdpZHRoOiA2MDBweDsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDZweDsqL1xuLyogIHBhZGRpbmctdG9wOiA0NXB4OyovXG4vKiAgbWFyZ2luLXRvcDogOHB4OyovXG4vKiAgb3ZlcmZsb3c6IGhpZGRlbjsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTsqL1xuLyp9Ki9cblxuLyoudGVybWluYWw6OmJlZm9yZSB7Ki9cbi8qICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7Ki9cbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qICB0b3A6IDA7Ki9cbi8qICBsZWZ0OiAwOyovXG4vKiAgaGVpZ2h0OiA0cHg7Ki9cbi8qICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7Ki9cbi8qICBjb2xvcjogI2MyYzNjNDsqL1xuLyogIHdpZHRoOiAxMDAlOyovXG4vKiAgZm9udC1zaXplOiAycmVtOyovXG4vKiAgbGluZS1oZWlnaHQ6IDA7Ki9cbi8qICBwYWRkaW5nOiAxNHB4IDA7Ki9cbi8qICB0ZXh0LWluZGVudDogNHB4OyovXG4vKn0qL1xuXG4vKi50ZXJtaW5hbCBwcmUgeyovXG4vKiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7Ki9cbi8qICBjb2xvcjogd2hpdGU7Ki9cbi8qICBwYWRkaW5nOiAwIDFyZW0gMXJlbTsqL1xuLyogIG1hcmdpbjogMDsqL1xuLyp9Ki9cblxuLyouY2lyY2xlLWxpbmsgeyovXG4vKiAgaGVpZ2h0OiA0MHB4OyovXG4vKiAgd2lkdGg6IDQwcHg7Ki9cbi8qICBib3JkZXItcmFkaXVzOiA0MHB4OyovXG4vKiAgbWFyZ2luOiA4cHg7Ki9cbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsqL1xuLyogIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7Ki9cbi8qICBkaXNwbGF5OiBmbGV4OyovXG4vKiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4vKiAgY3Vyc29yOiBwb2ludGVyOyovXG4vKiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpOyovXG4vKiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7Ki9cbi8qfSovXG5cbi8qLmNpcmNsZS1saW5rOmhvdmVyIHsqL1xuLyogIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7Ki9cbi8qICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXG4vKn0qL1xuXG4vKmZvb3RlciB7Ki9cbi8qICBtYXJnaW4tdG9wOiA4cHg7Ki9cbi8qICBkaXNwbGF5OiBmbGV4OyovXG4vKiAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xuLyogIGxpbmUtaGVpZ2h0OiAyMHB4OyovXG4vKn0qL1xuXG4vKmZvb3RlciBhIHsqL1xuLyogIGRpc3BsYXk6IGZsZXg7Ki9cbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4vKn0qL1xuXG4vKi5naXRodWItc3Rhci1iYWRnZSB7Ki9cbi8qICBjb2xvcjogIzI0MjkyZTsqL1xuLyogIGRpc3BsYXk6IGZsZXg7Ki9cbi8qICBhbGlnbi1pdGVtczogY2VudGVyOyovXG4vKiAgZm9udC1zaXplOiAxMnB4OyovXG4vKiAgcGFkZGluZzogM3B4IDEwcHg7Ki9cbi8qICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDNweDsqL1xuLyogIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpOyovXG4vKiAgbWFyZ2luLWxlZnQ6IDRweDsqL1xuLyogIGZvbnQtd2VpZ2h0OiA2MDA7Ki9cbi8qICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sOyovXG4vKn0qL1xuXG4vKi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7Ki9cbi8qICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTsqL1xuLyogIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpOyovXG4vKiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07Ki9cbi8qfSovXG5cbi8qLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7Ki9cbi8qICBoZWlnaHQ6IDE2cHg7Ki9cbi8qICB3aWR0aDogMTZweDsqL1xuLyogIG1hcmdpbi1yaWdodDogNHB4OyovXG4vKn0qL1xuXG4vKnN2ZyNjbG91ZHMgeyovXG4vKiAgcG9zaXRpb246IGZpeGVkOyovXG4vKiAgYm90dG9tOiAtMTYwcHg7Ki9cbi8qICBsZWZ0OiAtMjMwcHg7Ki9cbi8qICB6LWluZGV4OiAtMTA7Ki9cbi8qICB3aWR0aDogMTkyMHB4OyovXG4vKn0qL1xuXG5cbi8qISogUmVzcG9uc2l2ZSBTdHlsZXMgKiEqL1xuLypAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgeyovXG5cbi8qICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICwqL1xuLyogIC50ZXJtaW5hbCB7Ki9cbi8qICAgIHdpZHRoOiAxMDAlOyovXG4vKiAgfSovXG5cbi8qICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7Ki9cbi8qICAgIGhlaWdodDogMTZweDsqL1xuLyogICAgbWFyZ2luOiA4cHggMDsqL1xuLyogIH0qL1xuXG4vKiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7Ki9cbi8qICAgIG1hcmdpbi1sZWZ0OiA3MnB4OyovXG4vKiAgfSovXG5cbi8qICBzdmcjcm9ja2V0LXNtb2tlIHsqL1xuLyogICAgcmlnaHQ6IDEyMHB4OyovXG4vKiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7Ki9cbi8qICB9Ki9cbi8qfSovXG5cbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHsqL1xuLyogIHN2ZyNyb2NrZXQtc21va2UgeyovXG4vKiAgICBkaXNwbGF5OiBub25lOyovXG4vKiAgICB2aXNpYmlsaXR5OiBoaWRkZW47Ki9cbi8qICB9Ki9cbi8qfSovXG4gLyogQXV0aG9yOiBDYXJsb3MgQWx2YXJlelxuICogVVJMOiBodHRwOi8vYWx2YXJlei5pc1xuICpcbiAqIFByb2plY3QgTmFtZTogS2VsdmluIC0gRnJlZSBCb290c3RyYXAgMyBSZXN1bWUgVGhlbWVcbiAqIFZlcnNpb246IDEuMFxuICogVVJMOiBodHRwOi8vYmxhY2t0aWUuY29cbiAqL1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./title/title.component */
      "./src/app/title/title.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./education/education.component */
      "./src/app/education/education.component.ts");
      /* harmony import */


      var _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./summary/summary.component */
      "./src/app/summary/summary.component.ts");
      /* harmony import */


      var _work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./work/work.component */
      "./src/app/work/work.component.ts");
      /* harmony import */


      var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/accordion */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./skill/skill.component */
      "./src/app/skill/skill.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _signature_signature_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./signature/signature.component */
      "./src/app/signature/signature.component.ts");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_12__["SkillComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _signature_signature_component__WEBPACK_IMPORTED_MODULE_14__["SignatureComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_12__["SkillComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _signature_signature_component__WEBPACK_IMPORTED_MODULE_14__["SignatureComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/education/education.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/education/education.component.ts ***!
      \**************************************************/

    /*! exports provided: EducationComponent */

    /***/
    function srcAppEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./education.service */
      "./src/app/education/education.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent(educationService) {
          _classCallCheck(this, EducationComponent);

          this.educationService = educationService;
          this.educations = new Array();
        }
        /**
         * Retrieves the educations data
         */


        _createClass(EducationComponent, [{
          key: "getEducations",
          value: function getEducations() {
            var _this = this;

            this.educationService.getEducations().subscribe(function (educations) {
              _this.educations = educations;
              console.log(educations[0]);
            }, function (error) {
              _this.errorMessage = error;
              console.log(_this.errorMessage);
            });
          }
          /**
           *
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEducations();
          }
        }]);

        return EducationComponent;
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]));
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]])],
        decls: 22,
        vars: 10,
        consts: [["id", "education", "name", "education"], [1, "container", "desc"], [1, "row"], [1, "col-lg-2", "col-lg-offset-1"], [1, "fa", "fa-book"], [1, "col-lg-6"], [1, "col-lg-3"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " EDUCATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educations[0] == null ? null : ctx.educations[0].degree);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.educations[0] == null ? null : ctx.educations[0].school, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 4, ctx.educations[0] == null ? null : ctx.educations[0].yearStart, "MMM-yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 7, ctx.educations[0] == null ? null : ctx.educations[0].yearEnd, "MMM-yyyy"), "");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education',
            templateUrl: './education.component.html',
            providers: [_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]]
          }]
        }], function () {
          return [{
            type: _education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/education/education.service.ts":
    /*!************************************************!*\
      !*** ./src/app/education/education.service.ts ***!
      \************************************************/

    /*! exports provided: EducationService */

    /***/
    function srcAppEducationEducationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationService", function () {
        return EducationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./education */
      "./src/app/education/education.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var EducationService = /*#__PURE__*/function () {
        function EducationService(http) {
          _classCallCheck(this, EducationService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'educations';
        }
        /**
         *
         */


        _createClass(EducationService, [{
          key: "getEducations",
          value: function getEducations() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var educations = new Array();

            var _iterator = _createForOfIteratorHelper(payload),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                var education = _education__WEBPACK_IMPORTED_MODULE_1__["Education"].create(item);

                educations.push(education);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return educations;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return EducationService;
      }();

      EducationService.ɵfac = function EducationService_Factory(t) {
        return new (t || EducationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EducationService,
        factory: EducationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/education/education.ts":
    /*!****************************************!*\
      !*** ./src/app/education/education.ts ***!
      \****************************************/

    /*! exports provided: Education */

    /***/
    function srcAppEducationEducationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Education", function () {
        return Education;
      });
      /**
       * Education Model
       */


      var Education = /*#__PURE__*/function () {
        function Education(school, degree, yearStart, yearEnd) {
          _classCallCheck(this, Education);

          this.school = school;
          this.degree = degree;
          this.yearStart = yearStart;
          this.yearEnd = yearEnd;
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(Education, null, [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var education = Object.create(Education.prototype); // copy all the fields from the json object

            return Object.assign(education, json, {});
          }
        }]);

        return Education;
      }();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 34,
        vars: 0,
        consts: [["id", "contact", "name", "contact"], ["id", "footwrap"], [1, "container"], [1, "row"], [1, "col-lg-2", "col-lg-offset-1"], [1, "fa", "fa-envelope"], [1, "col-lg-6"], ["href", "mailto:vincent.megia@gmail.com"], ["href", "/documents/vincent-megia.zip", "download", "vincent-megia.zip"], [1, "col-lg-3"], ["href", "#"], [1, "fa", "fa-twitter"], [1, "fa", "fa-facebook"], [1, "fa", "fa-linkedin"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " CONTACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "vincent.megia@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SOCIAL LINKS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.service */
      "./src/app/header/header.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HeaderComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_6_Template_i_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var menuItem_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggle(menuItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", menuItem_r1.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r1.text, " ");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(headerService) {
          _classCallCheck(this, HeaderComponent);

          this.headerService = headerService;
          this.menuItems = new Array();
        }
        /**
         *
         */


        _createClass(HeaderComponent, [{
          key: "getMenuItems",
          value: function getMenuItems() {
            var _this2 = this;

            this.headerService.getMenuItems().subscribe(function (menuItems) {
              _this2.menuItems = menuItems;
              console.log(menuItems);
            }, function (error) {
              _this2.errorMessage = error;
              console.log(_this2.errorMessage);
            });
          }
          /**
           *
           * @param menuItem
           */

        }, {
          key: "toggle",
          value: function toggle(selectedMenuItem) {
            selectedMenuItem.toggle();

            var _iterator2 = _createForOfIteratorHelper(this.menuItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var menuItem = _step2.value;
                if (menuItem.id === selectedMenuItem.id) continue;
                menuItem.toggleInactive();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           *
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMenuItems();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]])],
        decls: 9,
        vars: 1,
        consts: [["id", "section-topbar"], ["id", "topbar-inner"], [1, "container"], [1, "row"], [1, "dropdown"], ["id", "nav", 1, "nav"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "clear"], [1, "menu-item"], [1, "smoothScroll", 3, "href"], ["menuState", "menuItem.state", 3, "ngClass", "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 4, 3, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.3)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            providers: [_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'scale(1)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'scale(1.3)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))])]
          }]
        }], function () {
          return [{
            type: _header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.service.ts":
    /*!******************************************!*\
      !*** ./src/app/header/header.service.ts ***!
      \******************************************/

    /*! exports provided: HeaderService */

    /***/
    function srcAppHeaderHeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderService", function () {
        return HeaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-item */
      "./src/app/header/menu-item.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var HeaderService = /*#__PURE__*/function () {
        function HeaderService(http) {
          _classCallCheck(this, HeaderService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'menu-items';
        }
        /**
         *
         */


        _createClass(HeaderService, [{
          key: "getMenuItems",
          value: function getMenuItems() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var menuItems = new Array();

            var _iterator3 = _createForOfIteratorHelper(payload),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;

                var menuItem = _menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"].create(item);

                menuItems.push(menuItem);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return menuItems;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return HeaderService;
      }();

      HeaderService.ɵfac = function HeaderService_Factory(t) {
        return new (t || HeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HeaderService,
        factory: HeaderService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/menu-item.ts":
    /*!*************************************!*\
      !*** ./src/app/header/menu-item.ts ***!
      \*************************************/

    /*! exports provided: MenuItem */

    /***/
    function srcAppHeaderMenuItemTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
        return MenuItem;
      });
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./state */
      "./src/app/header/state.ts");
      /**
       * Header model class
       */


      var MenuItem = /*#__PURE__*/function () {
        function MenuItem(text, id, icon) {
          _classCallCheck(this, MenuItem);

          this.state = _state__WEBPACK_IMPORTED_MODULE_0__["State"]["in"];
          this.id = id;
          this.icon = icon;
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(MenuItem, [{
          key: "toggle",

          /**
           *
           */
          value: function toggle() {
            this.state = _state__WEBPACK_IMPORTED_MODULE_0__["State"].active;
          }
          /**
           *
           */

        }, {
          key: "toggleInactive",
          value: function toggleInactive() {
            this.state = _state__WEBPACK_IMPORTED_MODULE_0__["State"].inactive;
          }
        }], [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var menuItem = Object.create(MenuItem.prototype); // copy all the fields from the json object

            return Object.assign(menuItem, json, {});
          }
        }]);

        return MenuItem;
      }();
      /***/

    },

    /***/
    "./src/app/header/state.ts":
    /*!*********************************!*\
      !*** ./src/app/header/state.ts ***!
      \*********************************/

    /*! exports provided: State */

    /***/
    function srcAppHeaderStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "State", function () {
        return State;
      });
      /**
       * Enum for States inactive/active
       */


      var State = function State() {
        _classCallCheck(this, State);
      };

      State.active = 'active';
      State.inactive = 'inactive';
      State["in"] = 'in';
      /***/
    },

    /***/
    "./src/app/signature/signature.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/signature/signature.component.ts ***!
      \**************************************************/

    /*! exports provided: SignatureComponent */

    /***/
    function srcAppSignatureSignatureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureComponent", function () {
        return SignatureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();

      var SignatureComponent = function SignatureComponent() {
        _classCallCheck(this, SignatureComponent);
      };

      SignatureComponent.ɵfac = function SignatureComponent_Factory(t) {
        return new (t || SignatureComponent)();
      };

      SignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignatureComponent,
        selectors: [["app-signature"]],
        decls: 4,
        vars: 0,
        consts: [["id", "c"], [1, "container"]],
        template: function SignatureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Created by Vince Megia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signature',
            templateUrl: './signature.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/skill/chart.ts":
    /*!********************************!*\
      !*** ./src/app/skill/chart.ts ***!
      \********************************/

    /*! exports provided: Chart */

    /***/
    function srcAppSkillChartTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Chart", function () {
        return Chart;
      });
      /**
       * Chart model class
       */


      var Chart = function Chart(labels, data, type, options, colors) {
        _classCallCheck(this, Chart);

        this.labels = labels;
        this.data = data;
        this.type = type;
        this.options = options;
        this.colors = colors;
      };
      /***/

    },

    /***/
    "./src/app/skill/skill.component.ts":
    /*!******************************************!*\
      !*** ./src/app/skill/skill.component.ts ***!
      \******************************************/

    /*! exports provided: SkillComponent */

    /***/
    function srcAppSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
        return SkillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart */
      "./src/app/skill/chart.ts");
      /* harmony import */


      var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill.service */
      "./src/app/skill/skill.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

      function SkillComponent_div_11_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r4.charts[i_r2].data)("labels", ctx_r4.charts[i_r2].labels)("chartType", ctx_r4.charts[i_r2].type)("options", ctx_r4.charts[i_r2].options)("colors", ctx_r4.charts[i_r2].colors);
        }
      }

      function SkillComponent_div_11_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.charts[i_r2 + 1].data)("labels", ctx_r5.charts[i_r2 + 1].labels)("chartType", ctx_r5.charts[i_r2 + 1].type)("options", ctx_r5.charts[i_r2 + 1].options)("colors", ctx_r5.charts[i_r2 + 1].colors);
        }
      }

      function SkillComponent_div_11_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r6.charts[i_r2 + 2].data)("labels", ctx_r6.charts[i_r2 + 2].labels)("chartType", ctx_r6.charts[i_r2 + 2].type)("options", ctx_r6.charts[i_r2 + 2].options)("colors", ctx_r6.charts[i_r2 + 2].colors);
        }
      }

      function SkillComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_11_div_1_div_1_Template, 4, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillComponent_div_11_div_1_div_2_Template, 4, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillComponent_div_11_div_1_div_3_Template, 4, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.charts.length - 1 >= i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.charts.length - 1 >= i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.charts.length - 1 >= i_r2 + 2);
        }
      }

      function SkillComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_11_div_1_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 3 == 0);
        }
      }

      var SkillComponent = /*#__PURE__*/function () {
        function SkillComponent(skillService) {
          _classCallCheck(this, SkillComponent);

          this.skillService = skillService;
          this.charts = Array();
          console.log("skill component constructor");
        }
        /**
         * Skills arrays
         * @param skills
         */


        _createClass(SkillComponent, [{
          key: "generateCharts",
          value: function generateCharts(skills) {
            var charts = new Array();

            var _iterator4 = _createForOfIteratorHelper(skills),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var skill = _step4.value;
                charts.push(new _chart__WEBPACK_IMPORTED_MODULE_1__["Chart"](['Expertise', 'Unknown'], [skill.expertise, skill.unknown], 'doughnut', {
                  responsive: true,
                  cutoutPercentage: 70,
                  title: {
                    display: true,
                    text: skill.name,
                    fontSize: 18,
                    fontColor: 'black'
                  },
                  legend: {
                    display: true,
                    labels: {
                      fontColor: 'black'
                    }
                  }
                }, [// { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                {
                  backgroundColor: ["grey", "#ecf0f1"]
                }]));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return charts;
          }
          /**
           *
           */

        }, {
          key: "getSkills",
          value: function getSkills() {
            var _this3 = this;

            var skills;
            this.skillService.getSkills().subscribe(function (items) {
              skills = items;
              console.log(skills);
              _this3.charts = _this3.generateCharts(skills);
              console.log(_this3.charts);
            }, function (error) {
              _this3.errorMessage = error;
              console.log(_this3.errorMessage);
            });
          }
          /**
           *
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSkills();
          }
        }]);

        return SkillComponent;
      }();

      SkillComponent.ɵfac = function SkillComponent_Factory(t) {
        return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]));
      };

      SkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillComponent,
        selectors: [["app-skill"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]])],
        decls: 14,
        vars: 1,
        consts: [["id", "skills", "name", "skills"], ["id", "skillswrap"], [1, "container"], [1, "row"], [1, "col-lg-2", "col-lg-offset-1"], [1, "fa", "fa-code"], [1, "col-lg-9"], ["class", "row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-lg-4", 4, "ngIf"], [1, "col-lg-4"], [1, "chart"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "colors"]],
        template: function SkillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " SKILLS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10 - 100 (Highest)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillComponent_div_11_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.charts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skill',
            templateUrl: './skill.component.html',
            providers: [_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]]
          }]
        }], function () {
          return [{
            type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/skill/skill.service.ts":
    /*!****************************************!*\
      !*** ./src/app/skill/skill.service.ts ***!
      \****************************************/

    /*! exports provided: SkillService */

    /***/
    function srcAppSkillSkillServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillService", function () {
        return SkillService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./skill */
      "./src/app/skill/skill.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var SkillService = /*#__PURE__*/function () {
        function SkillService(http) {
          _classCallCheck(this, SkillService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'skills';
        }
        /**
         *
         */


        _createClass(SkillService, [{
          key: "getSkills",
          value: function getSkills() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var skills = new Array();

            var _iterator5 = _createForOfIteratorHelper(payload),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var item = _step5.value;

                var skill = _skill__WEBPACK_IMPORTED_MODULE_1__["Skill"].create(item);

                skills.push(skill);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return skills;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return SkillService;
      }();

      SkillService.ɵfac = function SkillService_Factory(t) {
        return new (t || SkillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      SkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SkillService,
        factory: SkillService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/skill/skill.ts":
    /*!********************************!*\
      !*** ./src/app/skill/skill.ts ***!
      \********************************/

    /*! exports provided: Skill */

    /***/
    function srcAppSkillSkillTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Skill", function () {
        return Skill;
      });
      /**
       * Skill model class
       */


      var Skill = /*#__PURE__*/function () {
        function Skill(name, expertise, unknown) {
          _classCallCheck(this, Skill);

          this.name = name;
          this.expertise = expertise;
          this.unknown = unknown;
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(Skill, null, [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var skill = Object.create(Skill.prototype); // copy all the fields from the json object

            return Object.assign(skill, json, {});
          }
        }]);

        return Skill;
      }();
      /***/

    },

    /***/
    "./src/app/summary/summary.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/summary/summary.component.ts ***!
      \**********************************************/

    /*! exports provided: SummaryComponent */

    /***/
    function srcAppSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return SummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _summary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summary.service */
      "./src/app/summary/summary.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SummaryComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var summary_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", summary_r1.text, " ");
        }
      }

      var SummaryComponent = /*#__PURE__*/function () {
        function SummaryComponent(summaryService) {
          _classCallCheck(this, SummaryComponent);

          this.summaryService = summaryService;
        }
        /**
         *
         */


        _createClass(SummaryComponent, [{
          key: "getSummaries",
          value: function getSummaries() {
            var _this4 = this;

            this.summaryService.getSummaries().subscribe(function (summaries) {
              _this4.summaries = summaries;
              console.log(summaries);
            }, function (error) {
              _this4.errorMessage = error;
              console.log(_this4.errorMessage);
            });
          }
          /**
           *
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSummaries();
          }
        }]);

        return SummaryComponent;
      }();

      SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
        return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_summary_service__WEBPACK_IMPORTED_MODULE_1__["SummaryService"]));
      };

      SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SummaryComponent,
        selectors: [["app-summary"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_summary_service__WEBPACK_IMPORTED_MODULE_1__["SummaryService"]])],
        decls: 12,
        vars: 1,
        consts: [["id", "summary-experience", "name", "summary-experience"], ["id", "intro"], [1, "container"], [1, "row"], [1, "col-lg-2", "col-lg-offset-1"], [1, "fa", "fa-user"], [1, "col-lg-6"], [4, "ngFor", "ngForOf"]],
        template: function SummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SUMMARY EXPERIENCE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SummaryComponent_li_10_Template, 2, 1, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaries);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-summary',
            templateUrl: './summary.component.html',
            providers: [_summary_service__WEBPACK_IMPORTED_MODULE_1__["SummaryService"]]
          }]
        }], function () {
          return [{
            type: _summary_service__WEBPACK_IMPORTED_MODULE_1__["SummaryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/summary/summary.service.ts":
    /*!********************************************!*\
      !*** ./src/app/summary/summary.service.ts ***!
      \********************************************/

    /*! exports provided: SummaryService */

    /***/
    function srcAppSummarySummaryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryService", function () {
        return SummaryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summary */
      "./src/app/summary/summary.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var SummaryService = /*#__PURE__*/function () {
        function SummaryService(http) {
          _classCallCheck(this, SummaryService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'summaries';
        }
        /**
         *
         */


        _createClass(SummaryService, [{
          key: "getSummaries",
          value: function getSummaries() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var summaries = new Array();

            var _iterator6 = _createForOfIteratorHelper(payload),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                var summary = _summary__WEBPACK_IMPORTED_MODULE_1__["Summary"].create(item);

                summaries.push(summary);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return summaries;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return SummaryService;
      }();

      SummaryService.ɵfac = function SummaryService_Factory(t) {
        return new (t || SummaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      SummaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SummaryService,
        factory: SummaryService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/summary/summary.ts":
    /*!************************************!*\
      !*** ./src/app/summary/summary.ts ***!
      \************************************/

    /*! exports provided: Summary */

    /***/
    function srcAppSummarySummaryTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Summary", function () {
        return Summary;
      });
      /**
       * Summary model class
       */


      var Summary = /*#__PURE__*/function () {
        function Summary(text) {
          _classCallCheck(this, Summary);

          this.text = text;
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(Summary, null, [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var summary = Object.create(Summary.prototype); // copy all the fields from the json object

            return Object.assign(summary, json, {});
          }
        }]);

        return Summary;
      }();
      /***/

    },

    /***/
    "./src/app/title/title.component.ts":
    /*!******************************************!*\
      !*** ./src/app/title/title.component.ts ***!
      \******************************************/

    /*! exports provided: TitleComponent */

    /***/
    function srcAppTitleTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
        return TitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./title.service */
      "./src/app/title/title.service.ts");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

      var TitleComponent = /*#__PURE__*/function () {
        function TitleComponent(titleService) {
          _classCallCheck(this, TitleComponent);

          this.titleService = titleService;
          this.titles = new Array();
        }
        /**
         *
         */


        _createClass(TitleComponent, [{
          key: "getTitles",
          value: function getTitles() {
            var _this5 = this;

            this.titleService.getTitles().subscribe(function (titles) {
              _this5.titles = titles;
              console.log(titles);
            }, function (error) {
              _this5.errorMessage = error;
              console.log(_this5.errorMessage);
            });
          }
          /**
           *
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTitles();
          }
        }]);

        return TitleComponent;
      }();

      TitleComponent.ɵfac = function TitleComponent_Factory(t) {
        return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]));
      };

      TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TitleComponent,
        selectors: [["app-title"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]])],
        decls: 36,
        vars: 2,
        consts: [[3, "noPause", "isAnimated"], ["src", "../../assets/images/family1.jpg", 2, "display", "block", "height", "70rem", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], [2, "color", "white", "font-size", "larger", "font-weight", "500"], [1, "text-center", "bg-dark", "text-white", 2, "height", "70rem", "justify-content", "center", "background-image", "url(../../assets/images/icons/angular-logo.png)", "background-repeat", "no-repeat", "background-position", "center"], [1, "d=flex", 2, "height", "25%"], [1, "lead"], [1, "text-center", "bg-dark", "text-white", 2, "height", "70rem", "justify-content", "center", "background-image", "url(../../assets/images/icons/reactjs-logo.png)", "background-repeat", "no-repeat", "background-position", "center"], ["href", "http://puzzlesolver.vincentmegia.com"]],
        template: function TitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "carousel", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loving Dad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Family comes first, I love my family!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Resume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This online resume is written in Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ngx Bootstrap and ChartJS as well");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sample React Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Puzzle Solver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Demonstrates knowledge of graph thoery ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Try me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noPause", false)("isAnimated", true);
          }
        },
        directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]],
        styles: [".reactjs-logo[_ngcontent-%COMP%] {\n    height: 40vmin;\n    pointer-events: none;\n  }\n  \n  @media (prefers-reduced-motion: no-preference) {\n    .reactjs-logo[_ngcontent-%COMP%] {\n      -webkit-animation: reactjs-logo-spin infinite 20s linear;\n              animation: reactjs-logo-spin infinite 20s linear;\n    }\n  }\n  \n  @-webkit-keyframes reactjs-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes reactjs-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRTtNQUNFLHdEQUFnRDtjQUFoRCxnREFBZ0Q7SUFDbEQ7RUFDRjs7RUFFQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7RUFQQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhY3Rqcy1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwdm1pbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XG4gICAgLnJlYWN0anMtbG9nbyB7XG4gICAgICBhbmltYXRpb246IHJlYWN0anMtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyByZWFjdGpzLWxvZ28tc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-title',
            templateUrl: './title.component.html',
            styleUrls: ["./title.component.css"],
            providers: [_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]]
          }]
        }], function () {
          return [{
            type: _title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/title/title.service.ts":
    /*!****************************************!*\
      !*** ./src/app/title/title.service.ts ***!
      \****************************************/

    /*! exports provided: TitleService */

    /***/
    function srcAppTitleTitleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleService", function () {
        return TitleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./title */
      "./src/app/title/title.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var TitleService = /*#__PURE__*/function () {
        function TitleService(http) {
          _classCallCheck(this, TitleService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'titles';
        }
        /**
         *
         */


        _createClass(TitleService, [{
          key: "getTitles",
          value: function getTitles() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var titles = new Array();

            var _iterator7 = _createForOfIteratorHelper(payload),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var item = _step7.value;

                var title = _title__WEBPACK_IMPORTED_MODULE_1__["Title"].create(item);

                titles.push(title);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return titles;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return TitleService;
      }();

      TitleService.ɵfac = function TitleService_Factory(t) {
        return new (t || TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TitleService,
        factory: TitleService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/title/title.ts":
    /*!********************************!*\
      !*** ./src/app/title/title.ts ***!
      \********************************/

    /*! exports provided: Title */

    /***/
    function srcAppTitleTitleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Title", function () {
        return Title;
      });
      /**
       * Title model class
       */


      var Title = /*#__PURE__*/function () {
        function Title(name, description, email) {
          _classCallCheck(this, Title);

          this.name = name;
          this.description = description;
          this.email = email;
          this.state = "*";
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(Title, null, [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var title = Object.create(Title.prototype); // copy all the fields from the json object

            return Object.assign(title, json, {});
          }
        }]);

        return Title;
      }();
      /***/

    },

    /***/
    "./src/app/work/work.component.ts":
    /*!****************************************!*\
      !*** ./src/app/work/work.component.ts ***!
      \****************************************/

    /*! exports provided: WorkComponent */

    /***/
    function srcAppWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
        return WorkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work.service */
      "./src/app/work/work.service.ts");
      /* harmony import */


      var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/accordion */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function WorkComponent_accordion_group_9_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.company + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, work_r1.yearStart, "MMM-yyyy") + "-" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, work_r1.yearEnd, "MMM-yyyy") + ")");
        }
      }

      function WorkComponent_accordion_group_9_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.company + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, work_r1.yearStart, "MMM-yyyy") + "- Present)");
        }
      }

      function WorkComponent_accordion_group_9_accordion_group_8_div_7_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var responsibility_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", responsibility_r11, " ");
        }
      }

      function WorkComponent_accordion_group_9_accordion_group_8_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Responsibilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkComponent_accordion_group_9_accordion_group_8_div_7_li_10_Template, 2, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", role_r9.responsibilities);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "glyphicon-chevron-down": a0,
          "glyphicon-chevron-right": a1
        };
      };

      function WorkComponent_accordion_group_9_accordion_group_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_accordion_group_9_accordion_group_8_Template_div_click_1_listener() {
            var project_r7 = ctx.$implicit;
            return project_r7.isOpen = !project_r7.isOpen;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkComponent_accordion_group_9_accordion_group_8_div_7_Template, 11, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r7.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, project_r7 == null ? null : project_r7.isOpen, !(project_r7 == null ? null : project_r7.isOpen)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r7.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.technologies);
        }
      }

      function WorkComponent_accordion_group_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_accordion_group_9_Template_div_click_1_listener() {
            var work_r1 = ctx.$implicit;
            return work_r1.isOpen = !work_r1.isOpen;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_accordion_group_9_span_2_Template, 4, 7, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_accordion_group_9_span_3_Template, 3, 4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PROJECT(S)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkComponent_accordion_group_9_accordion_group_8_Template, 14, 8, "accordion-group", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var work_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.yearEnd !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.yearEnd === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, work_r1 == null ? null : work_r1.isOpen, !(work_r1 == null ? null : work_r1.isOpen)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", work_r1.projects);
        }
      }

      var WorkComponent = /*#__PURE__*/function () {
        function WorkComponent(workService) {
          _classCallCheck(this, WorkComponent);

          this.workService = workService;
          this.works = new Array();
        }
        /**
         *
         */


        _createClass(WorkComponent, [{
          key: "getWorks",
          value: function getWorks() {
            var _this6 = this;

            this.workService.getWorks().subscribe(function (works) {
              _this6.works = works;
              console.log(works);
            }, function (error) {
              _this6.errorMessage = error;
              console.log(_this6.errorMessage);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getWorks();
          }
        }]);

        return WorkComponent;
      }();

      WorkComponent.ɵfac = function WorkComponent_Factory(t) {
        return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]));
      };

      WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WorkComponent,
        selectors: [["app-work"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]])],
        decls: 12,
        vars: 2,
        consts: [["id", "work", "name", "work"], [1, "container", "desc"], [1, "row"], [1, "col-lg-2", "col-lg-offset-1"], [1, "fa", "fa-briefcase"], [1, "col-lg-8"], [3, "isAnimated"], [4, "ngFor", "ngForOf"], ["accordion-heading", "", 3, "click"], [4, "ngIf"], [1, "pull-right", "glyphicon", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-folder-open"]],
        template: function WorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " WORK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "accordion", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkComponent_accordion_group_9_Template, 9, 7, "accordion-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
          }
        },
        directives: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-work',
            templateUrl: './work.component.html',
            providers: [_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]]
          }]
        }], function () {
          return [{
            type: _work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/work/work.service.ts":
    /*!**************************************!*\
      !*** ./src/app/work/work.service.ts ***!
      \**************************************/

    /*! exports provided: WorkService */

    /***/
    function srcAppWorkWorkServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkService", function () {
        return WorkService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work */
      "./src/app/work/work.ts");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Observable */
      "./node_modules/rxjs/Observable.js");
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

      var WorkService = /*#__PURE__*/function () {
        function WorkService(http) {
          _classCallCheck(this, WorkService);

          this.http = http;
          this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + 'works';
        }
        /**
         *
         */


        _createClass(WorkService, [{
          key: "getWorks",
          value: function getWorks() {
            return this.http.get(this.endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.deserialize));
          }
          /**
           *
           * @param res
           */

        }, {
          key: "deserialize",
          value: function deserialize(response) {
            var payload = response.json();
            var works = new Array();

            var _iterator8 = _createForOfIteratorHelper(payload),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var item = _step8.value;

                var work = _work__WEBPACK_IMPORTED_MODULE_1__["Work"].create(item);

                works.push(work);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            return works;
          }
          /**
           *
           * @param error
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            var errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
            console.error(errMsg); // log to console instead

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errMsg);
          }
        }]);

        return WorkService;
      }();

      WorkService.ɵfac = function WorkService_Factory(t) {
        return new (t || WorkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]));
      };

      WorkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WorkService,
        factory: WorkService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/work/work.ts":
    /*!******************************!*\
      !*** ./src/app/work/work.ts ***!
      \******************************/

    /*! exports provided: Work */

    /***/
    function srcAppWorkWorkTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Work", function () {
        return Work;
      });
      /**
       * Work model
       */


      var Work = /*#__PURE__*/function () {
        function Work(company, yearStart, yearEnd, projects) {
          _classCallCheck(this, Work);

          this.company = company;
          this.yearStart = yearStart;
          this.yearEnd = yearEnd;
          this.projects = projects;
          this.isOpen = false;
        }
        /**
         * fromJSON is used to convert an serialized version
         * of the User to an instance of the class
         * @param json
         */


        _createClass(Work, null, [{
          key: "create",
          value: function create(json) {
            // create an instance of the User class
            var work = Object.create(Work.prototype); // copy all the fields from the json object

            return Object.assign(work, json, {});
          }
        }]);

        return Work;
      }();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiEndpoint: 'http://localhost:5000/resume/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/talia/Repository/angular-doodles/iamstupendous.resume/iamstupendous-resume-web/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map