'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NoticeBarExample = function (_React$Component) {
    (0, _inherits3["default"])(NoticeBarExample, _React$Component);

    function NoticeBarExample() {
        (0, _classCallCheck3["default"])(this, NoticeBarExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    NoticeBarExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: { marginTop: 10 } }, _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { onClick: function onClick() {
                return alert('click');
            } }, "国庆期间余额宝收益和转出到账时间"), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { mode: "closable", onClick: function onClick() {
                return alert('will close');
            } }, "国庆期间余额宝收益和转出到账时间1"), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { type: "error", mode: "closable" }, "国庆期间余额宝收益和转出到账时间"), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { mode: "link", type: "info", onClick: function onClick() {
                return alert('link');
            } }, "国庆期间余额宝收益和转出到账时间"), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { mode: "link", type: "question" }, "国庆期间余额宝收益和转出到账时间"), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.NoticeBar, { mode: "closable", type: "success" }, "国庆期间余额宝收益和转出到账时间"));
    };

    return NoticeBarExample;
}(_react2["default"].Component);

exports["default"] = NoticeBarExample;
module.exports = exports['default'];