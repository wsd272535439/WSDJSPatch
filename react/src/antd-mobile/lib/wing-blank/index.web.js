'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WingBlank = function (_React$Component) {
    (0, _inherits3["default"])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3["default"])(this, WingBlank);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    WingBlank.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            size = _props.size,
            className = _props.className,
            children = _props.children,
            style = _props.style;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + size, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, children);
    };

    return WingBlank;
}(_react2["default"].Component);

exports["default"] = WingBlank;

WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg'
};
module.exports = exports['default'];