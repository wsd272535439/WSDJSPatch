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

var Flex = function (_React$Component) {
    (0, _inherits3["default"])(Flex, _React$Component);

    function Flex() {
        (0, _classCallCheck3["default"])(this, Flex);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Flex.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            direction = _props.direction,
            wrap = _props.wrap,
            justify = _props.justify,
            align = _props.align,
            alignContent = _props.alignContent,
            className = _props.className,
            children = _props.children,
            prefixCls = _props.prefixCls,
            style = _props.style,
            onClick = _props.onClick;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dir-row', direction === 'row'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dir-column', direction === 'column'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-nowrap', wrap === 'nowrap'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap', wrap === 'wrap'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-justify-start', justify === 'start'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-justify-end', justify === 'end'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-justify-center', justify === 'center'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-justify-between', justify === 'between'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-justify-around', justify === 'around'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-top', align === 'top' || align === 'start'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-middle', align === 'middle' || align === 'center'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-bottom', align === 'bottom' || align === 'end'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-baseline', align === 'baseline'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-stretch', align === 'stretch'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-start', alignContent === 'start'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-end', alignContent === 'end'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-center', alignContent === 'center'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-between', alignContent === 'between'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-around', alignContent === 'around'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls, style: style, onClick: onClick }, children);
    };

    return Flex;
}(_react2["default"].Component);

exports["default"] = Flex;

Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
    onClick: function onClick() {}
};
module.exports = exports['default'];