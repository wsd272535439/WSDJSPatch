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

function noop() {}
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var TextareaItem = function (_React$Component) {
    (0, _inherits3["default"])(TextareaItem, _React$Component);

    function TextareaItem(props) {
        (0, _classCallCheck3["default"])(this, TextareaItem);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (e) {
            var value = e.target.value;
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value);
            }
            if (_this.props.autoHeight) {
                var textareaDom = _this.refs.textarea;
                textareaDom.style.height = ''; // 字数减少时能自动减小高度
                textareaDom.style.height = textareaDom.scrollHeight + 'px';
            }
        };
        _this.onBlur = function (e) {
            _this.debounceTimeout = setTimeout(function () {
                _this.setState({
                    focus: false
                });
            }, 500);
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onFocus = function (e) {
            _this.setState({
                focus: true
            });
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onErrorClick = function () {
            if (_this.props.onErrorClick) {
                _this.props.onErrorClick();
            }
        };
        _this.clearInput = function () {
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.state = {
            focus: false
        };
        return _this;
    }

    TextareaItem.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value || nextProps.defaultValue !== this.props.defaultValue || nextProps.error !== this.props.error || nextProps.disabled !== this.props.disabled || nextProps.editable !== this.props.editable || nextState.focus !== this.state.focus;
    };

    TextareaItem.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
    };

    TextareaItem.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            prefixListCls = _props.prefixListCls,
            style = _props.style,
            title = _props.title,
            name = _props.name,
            value = _props.value,
            defaultValue = _props.defaultValue,
            placeholder = _props.placeholder,
            clear = _props.clear,
            rows = _props.rows,
            count = _props.count,
            editable = _props.editable,
            disabled = _props.disabled,
            error = _props.error,
            className = _props.className,
            labelNumber = _props.labelNumber,
            autoHeight = _props.autoHeight;

        var otherProps = (0, _omit2["default"])(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style', 'clear', 'children', 'error', 'className', 'count', 'labelNumber', 'title', 'onErrorClick', 'autoHeight']);
        var valueProps = void 0;
        if ('value' in this.props) {
            valueProps = {
                value: fixControlledValue(value)
            };
        } else {
            valueProps = {
                defaultValue: defaultValue
            };
        }
        var focus = this.state.focus;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixListCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-single-line', rows === 1 && !autoHeight), (0, _defineProperty3["default"])(_classNames, prefixCls + '-error', error), (0, _defineProperty3["default"])(_classNames, prefixCls + '-focus', focus), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var labelCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-7', labelNumber === 7), _classNames2));
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, title ? _react2["default"].createElement("div", { className: labelCls }, title) : null, _react2["default"].createElement("div", { className: prefixCls + '-control' }, _react2["default"].createElement("textarea", __assign({}, otherProps, valueProps, { ref: "textarea", name: name, rows: rows, placeholder: placeholder, maxLength: count, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, readOnly: !editable, disabled: disabled }))), clear && editable && value && value.length > 0 ? _react2["default"].createElement("div", { className: prefixCls + '-clear', onClick: this.clearInput, onTouchStart: this.clearInput }) : null, error ? _react2["default"].createElement("div", { className: prefixCls + '-error-extra', onClick: this.onErrorClick }) : null, count > 0 && rows > 1 ? _react2["default"].createElement("span", { className: prefixCls + '-count' }, _react2["default"].createElement("span", null, value && value.length), "/", count) : null);
    };

    return TextareaItem;
}(_react2["default"].Component);

exports["default"] = TextareaItem;

TextareaItem.defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    title: '',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 4
};
module.exports = exports['default'];