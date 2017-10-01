webpackHotUpdate(0,{113:/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _store = __webpack_require__(/*! ./store */ 116);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 314);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 12);\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 99);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ 325);\n\nvar _history = __webpack_require__(/*! history */ 332);\n\nvar _Events = __webpack_require__(/*! ./components/Events/Events.jsx */ 342);\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        undefined.props.children,\n        _react2.default.createElement(\n            'h1',\n            null,\n            'Hello, World!!!'\n        ),\n        _react2.default.createElement(\n            'h2',\n            null,\n            'This is React Fibre'\n        ),\n        _react2.default.createElement(_Events2.default, null)\n    );\n};\n\nvar history = (0, _reactRouterRedux.syncHistoryWithStore)(browserHistory(), _store2.default);\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: _store2.default },\n    _react2.default.createElement(\n        _reactRouter.Router,\n        { history: history },\n        _react2.default.createElement(\n            _reactRouter.Route,\n            { path: '/', component: App },\n            _react2.default.createElement(_reactRouter.IndexRoute, { component: App }),\n            _react2.default.createElement(_reactRouter.Route, { path: '/events/', component: _Events2.default })\n        )\n    )\n), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcz8xZmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vY29tcG9uZW50cy9FdmVudHMvRXZlbnRzLmpzeCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDxoMT5IZWxsbywgV29ybGQhISE8L2gxPlxuICAgICAgICA8aDI+VGhpcyBpcyBSZWFjdCBGaWJyZTwvaDI+XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnkoKSwgc3RvcmUpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfSA+XG4gICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0FwcH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9ldmVudHMvJyBjb21wb25lbnQ9e0V2ZW50c30vPiBcbiAgICAgICAgPC9Sb3V0ZT4gXG4gICAgPC9Sb3V0ZXI+IFxuPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///113\n")}});