webpackHotUpdate(0,{114:/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _store = __webpack_require__(/*! ./store */ 117);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 315);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 12);\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 99);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ 326);\n\nvar _history = __webpack_require__(/*! history */ 110);\n\nvar _Events = __webpack_require__(/*! ./components/Events/Events.jsx */ 342);\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: \'render\',\n        value: function render() {\n            return "Hello, World";\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nvar history = (0, _reactRouterRedux.syncHistoryWithStore)((0, _history.createBrowserHistory)(), _store2.default);\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: _store2.default },\n    _react2.default.createElement(\n        _reactRouter.Router,\n        { history: history },\n        _react2.default.createElement(\n            _reactRouter.Route,\n            { path: \'/\', component: App },\n            _react2.default.createElement(_reactRouter.IndexRoute, { component: App }),\n            _react2.default.createElement(_reactRouter.Route, { path: \'/events/\', component: _Events2.default })\n        )\n    )\n), document.getElementById(\'app\'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcz8xZmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vY29tcG9uZW50cy9FdmVudHMvRXZlbnRzLmpzeCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIFwiSGVsbG8sIFdvcmxkXCI7XG4gICAgfVxufVxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksIHN0b3JlKTtcblxuUmVhY3RET00ucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0gPlxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtBcHB9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZXZlbnRzLycgY29tcG9uZW50PXtFdmVudHN9Lz4gXG4gICAgICAgIDwvUm91dGU+IFxuICAgIDwvUm91dGVyPiBcbjwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///114\n')}});