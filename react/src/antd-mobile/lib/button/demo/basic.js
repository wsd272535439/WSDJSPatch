'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = function () {
    return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { onClick: function onClick(e) {
            return console.log(e);
        } }, "default button"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { type: "primary" }, "primary button"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { type: "warning" }, "warning button"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { disabled: true }, "disable button"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { activeStyle: false }, "无点击反馈"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { activeStyle: { backgroundColor: 'red' } }, "自定义点击反馈 style")), _react2["default"].createElement(_antdMobile.WingBlank, { style: {
            marginTop: 20,
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        } }, _react2["default"].createElement(_reactNative.Text, null, "小按钮"), _react2["default"].createElement(_antdMobile.Button, { type: "ghost", size: "small" }, "ghost small button")));
};

module.exports = exports['default'];