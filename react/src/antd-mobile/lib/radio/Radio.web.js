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

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var Radio = function (_React$Component) {
    (0, _inherits3["default"])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3["default"])(this, Radio);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Radio.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            style = _props.style,
            children = _props.children;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper', true), _classNames));
        var mark = _react2["default"].createElement("label", { className: wrapCls, style: style }, _react2["default"].createElement(_rcCheckbox2["default"], __assign({}, (0, _omit2["default"])(this.props, ['className', 'style']), { type: "radio" })), children);
        if (this.props.wrapLabel) {
            return mark;
        }
        return _react2["default"].createElement(_rcCheckbox2["default"], __assign({}, this.props, { type: "radio" }));
    };

    return Radio;
}(_react2["default"].Component);

exports["default"] = Radio;

Radio.defaultProps = {
    prefixCls: 'am-radio',
    wrapLabel: true
};
module.exports = exports['default'];