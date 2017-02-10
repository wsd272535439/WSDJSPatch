'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rmcListView = require('rmc-list-view');

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_rmcListView2["default"].RefreshControl.defaultProps = (0, _objectAssign2["default"])({}, _rmcListView2["default"].RefreshControl.defaultProps, {
    prefixCls: 'am-refresh-control',
    icon: [_react2["default"].createElement("div", { key: "0", className: "am-refresh-control-pull" }, _react2["default"].createElement(_icon2["default"], { type: "arrow-down" }), _react2["default"].createElement("span", null, "下拉")), _react2["default"].createElement("div", { key: "1", className: "am-refresh-control-release" }, _react2["default"].createElement(_icon2["default"], { type: "arrow-up" }), _react2["default"].createElement("span", null, "释放"))],
    loading: _react2["default"].createElement(_icon2["default"], { type: "loading" }),
    refreshing: false,
    distanceToRefresh: 50 / 2 * (window.devicePixelRatio || 2)
});
exports["default"] = _rmcListView2["default"].RefreshControl;
module.exports = exports['default'];