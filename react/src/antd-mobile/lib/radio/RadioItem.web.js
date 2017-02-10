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

var _index = require('../list/index.web');

var _index2 = _interopRequireDefault(_index);

var _Radio = require('./Radio.web');

var _Radio2 = _interopRequireDefault(_Radio);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

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

var ListItem = _index2["default"].Item;
function noop() {}

var RadioItem = function (_React$Component) {
    (0, _inherits3["default"])(RadioItem, _React$Component);

    function RadioItem() {
        (0, _classCallCheck3["default"])(this, RadioItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    RadioItem.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            listPrefixCls = _props.listPrefixCls,
            className = _props.className,
            children = _props.children,
            disabled = _props.disabled,
            _props$radioProps = _props.radioProps,
            radioProps = _props$radioProps === undefined ? {} : _props$radioProps;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-disabled', disabled === true), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var otherProps = (0, _omit2["default"])(this.props, ['listPrefixCls', 'disabled', 'radioProps']);
        if (disabled) {
            delete otherProps.onClick;
        } else {
            otherProps.onClick = otherProps.onClick || noop;
        }
        var extraProps = {};
        ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(function (i) {
            if (i in _this2.props) {
                extraProps[i] = _this2.props[i];
            }
        });
        return _react2["default"].createElement(ListItem, __assign({}, otherProps, { prefixCls: listPrefixCls, className: wrapCls, extra: _react2["default"].createElement(_Radio2["default"], __assign({}, radioProps, extraProps)) }), children);
    };

    return RadioItem;
}(_react2["default"].Component);

exports["default"] = RadioItem;

RadioItem.defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list'
};
module.exports = exports['default'];