'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _default = require('../style/themes/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WingBlank = function (_React$Component) {
    (0, _inherits3["default"])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3["default"])(this, WingBlank);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    WingBlank.prototype.render = function render() {
        var _props = this.props,
            size = _props.size,
            style = _props.style,
            children = _props.children;

        return _react2["default"].createElement(_reactNative.View, { style: [{
                marginLeft: _default2["default"]['h_spacing_' + size],
                marginRight: _default2["default"]['h_spacing_' + size] }, style] }, children);
    };

    return WingBlank;
}(_react2["default"].Component);

WingBlank.defaultProps = {
    size: 'lg'
};
exports["default"] = WingBlank;
module.exports = exports['default'];