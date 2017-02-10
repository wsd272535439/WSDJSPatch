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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabPane = function (_React$Component) {
    (0, _inherits3["default"])(TabPane, _React$Component);

    function TabPane() {
        (0, _classCallCheck3["default"])(this, TabPane);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    TabPane.prototype.render = function render() {
        var children = this.props.children;

        return _react2["default"].createElement(_reactNative.View, null, children);
    };

    return TabPane;
}(_react2["default"].Component);

exports["default"] = TabPane;
module.exports = exports['default'];