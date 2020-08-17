webpackHotUpdate_N_E("pages/annotated-layout",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(AnnotatedLayout, _React$Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log('submission', _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleChange\", function (field) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, field, value));\n      };\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleToggle\", function () {\n      _this.setState(function (enabled) {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          discount = _this$state.discount,\n          enabled = _this$state.enabled;\n      var contentStatus = enabled ? \"Disable\" : \"Enable\";\n      var textStatus = enabled ? 'enabled' : 'disabled';\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"].AnnotatedSection, {\n        title: \"Default Discount\",\n        description: \"Add a product to Sample App, it will automatically be discounted\"\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Card\"], {\n        sectioned: true\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n        onSubmit: this.handleSubmit\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        value: discount,\n        onChange: this.handleChange('discount'),\n        label: \"Discount Perecentage\",\n        type: \"discount\"\n      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Stack\"], {\n        distribution: \"trailing\"\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        primary: true,\n        submit: true\n      }, \"Save\")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"].AnnotatedSection, {\n        title: \"Price updates\",\n        description: \"Temporarliy disable all Sample App Price updates\"\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"SettingToggle\"], {\n        action: {\n          content: contentStatus,\n          onAction: this.handleToggle\n        },\n        enabled: enabled\n      }, \"This Setting is\", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"TextStyle\"], {\n        variation: \"strong\"\n      }, textStatus)))));\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcz8wMTc3Il0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFhTUEsZTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUMsS0FETDtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLOzt1TkF1RE8sWUFBTTtBQUNqQixZQUFLQyxRQUFMLENBQWM7QUFDVkYsZ0JBQVEsRUFBRSxNQUFLRyxLQUFMLENBQVdIO0FBRFgsT0FBZDs7QUFHQUksYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUFLRixLQUEvQjtBQUNILEs7O3VOQUVjLFVBQUNHLEtBQUQsRUFBVTtBQUNyQixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtMLFFBQUwsK0ZBQWlCSSxLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFDSCxLOzt1TkFFYyxZQUFNO0FBQ2pCLFlBQUtMLFFBQUwsQ0FBYyxVQUFDRCxPQUFELEVBQWE7QUFDdkIsZUFBTztBQUFFQSxpQkFBTyxFQUFFLENBQUNBO0FBQVosU0FBUDtBQUNILE9BRkQ7QUFHSCxLOzs7Ozs7OzZCQWpFUTtBQUFBLHdCQUN5QixLQUFLRSxLQUQ5QjtBQUFBLFVBQ0dILFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ2FDLE9BRGIsZUFDYUEsT0FEYjtBQUVMLFVBQU1PLGFBQWEsR0FBR1AsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1RLFVBQVUsR0FBR1IsT0FBTyxHQUFHLFNBQUgsR0FBYyxVQUF4QztBQUVBLGFBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsdURBQUQsUUFDSSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxhQUFLLEVBQUMsa0JBRFY7QUFFSSxtQkFBVyxFQUFDO0FBRmhCLFNBSUksTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDSSxNQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLUztBQUFyQixTQUNJLE1BQUMsMkRBQUQsUUFDSSxNQUFDLDBEQUFEO0FBQ0ksYUFBSyxFQUFFVixRQURYO0FBRUksZ0JBQVEsRUFBRSxLQUFLVyxZQUFMLENBQWtCLFVBQWxCLENBRmQ7QUFHSSxhQUFLLEVBQUMsc0JBSFY7QUFJSSxZQUFJLEVBQUM7QUFKVCxRQURKLEVBT0ksTUFBQyxzREFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDSSxNQUFDLHVEQUFEO0FBQVMsZUFBTyxNQUFoQjtBQUFpQixjQUFNO0FBQXZCLGdCQURKLENBUEosQ0FESixDQURKLENBSkosQ0FESixFQXVCSSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxhQUFLLEVBQUMsZUFEVjtBQUVJLG1CQUFXLEVBQUM7QUFGaEIsU0FJSSxNQUFDLDhEQUFEO0FBQ0ksY0FBTSxFQUFFO0FBQ0pDLGlCQUFPLEVBQUVKLGFBREw7QUFFSkssa0JBQVEsRUFBRSxLQUFLQztBQUZYLFNBRFo7QUFLSSxlQUFPLEVBQUViO0FBTGIsNEJBT29CLEdBUHBCLEVBUUksTUFBQywwREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FBK0JRLFVBQS9CLENBUkosQ0FKSixDQXZCSixDQURKLENBREo7QUEyQ0g7Ozs7RUF0RHlCTSw0Q0FBSyxDQUFDQyxTOztBQTJFckJqQiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIEZvcm0sXG4gICAgRm9ybUxheW91dCxcbiAgICBMYXlvdXQsXG4gICAgUGFnZSxcbiAgICBTZXR0aW5nVG9nZ2xlLFxuICAgIFN0YWNrLFxuICAgIFRleHRGaWVsZCxcbiAgICBUZXh0U3R5bGVcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIlxuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNjb3VudDonMTAlJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyBcIkRpc2FibGVcIiA6IFwiRW5hYmxlXCJcbiAgICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCc6ICdkaXNhYmxlZCdcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nRGVmYXVsdCBEaXNjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGlzY291bnQgUGVyZWNlbnRhZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGlzY291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdQcmljZSB1cGRhdGVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmxpeSBkaXNhYmxlIGFsbCBTYW1wbGUgQXBwIFByaWNlIHVwZGF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBTZXR0aW5nIGlzeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz57dGV4dFN0YXR1c308L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT57XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZX0pXG4gICAgfVxuXG4gICAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChlbmFibGVkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZH1cbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ })

})