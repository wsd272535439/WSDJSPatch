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

var BasicWingBlankExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicWingBlankExample, _React$Component);

    function BasicWingBlankExample() {
        (0, _classCallCheck3["default"])(this, BasicWingBlankExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicWingBlankExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "primary" }, "两翼留白lg(默认)")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_reactNative.View, { style: {
                borderBottomColor: '#108ee9',
                borderBottomWidth: 0.5
            } }), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, { size: "md" }, _react2["default"].createElement(_antdMobile.Button, { type: "primary" }, "两翼留白md")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_reactNative.View, { style: {
                borderBottomColor: '#108ee9',
                borderBottomWidth: 0.5
            } }), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, { size: "sm" }, _react2["default"].createElement(_antdMobile.Button, { type: "primary" }, "两翼留sm")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_reactNative.View, { style: {
                borderBottomColor: '#108ee9',
                borderBottomWidth: 0.5
            } }));
    };

    return BasicWingBlankExample;
}(_react2["default"].Component);

exports["default"] = BasicWingBlankExample;
module.exports = exports['default'];