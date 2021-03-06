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

var BasicCardExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicCardExample, _React$Component);

    function BasicCardExample() {
        (0, _classCallCheck3["default"])(this, BasicCardExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicCardExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: { paddingTop: 80 } }, _react2["default"].createElement(_antdMobile.WingBlank, { size: "lg" }, _react2["default"].createElement(_antdMobile.Card, null, _react2["default"].createElement(_antdMobile.Card.Header, { title: "这是 title", thumbStyle: { width: 30, height: 30 }, thumb: "http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32", extra: "this is extra" }), _react2["default"].createElement(_antdMobile.Card.Body, null, _react2["default"].createElement(_reactNative.View, { style: { height: 42 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginLeft: 16 } }, "这是卡片内容"))), _react2["default"].createElement(_antdMobile.Card.Footer, { content: "这是卡尾", extra: "这是尾部介绍" }))), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_antdMobile.Card, { full: true }, _react2["default"].createElement(_antdMobile.Card.Header, { title: "这是 title", thumbStyle: { width: 30, height: 30 }, thumb: "http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32", extra: "this is extra" }), _react2["default"].createElement(_antdMobile.Card.Body, null, _react2["default"].createElement(_reactNative.View, { style: { height: 42 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginLeft: 16 } }, "这是卡片内容"))), _react2["default"].createElement(_antdMobile.Card.Footer, { content: "这是卡尾", extra: "这是尾部介绍" })));
    };

    return BasicCardExample;
}(_react2["default"].Component);

exports["default"] = BasicCardExample;
module.exports = exports['default'];