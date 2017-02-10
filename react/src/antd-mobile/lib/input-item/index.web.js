'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var InputItem = function (_React$Component) {
    (0, _inherits3["default"])(InputItem, _React$Component);

    function InputItem(props) {
        (0, _classCallCheck3["default"])(this, InputItem);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onInputChange = function (e) {
            var value = e.target.value;
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                type = _this$props.type;

            switch (type) {
                case 'text':
                    break;
                case 'bankCard':
                    value = value.replace(/\D/g, '');
                    value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    value = value.replace(/\D/g, '').substring(0, 11);
                    var valueLen = value.length;
                    if (valueLen > 3 && valueLen < 8) {
                        value = value.substr(0, 3) + ' ' + value.substr(3);
                    } else if (valueLen >= 8) {
                        value = value.substr(0, 3) + ' ' + value.substr(3, 4) + ' ' + value.substr(7);
                    }
                    break;
                case 'number':
                    value = value.replace(/\D/g, '');
                    break;
                case 'password':
                    break;
                default:
                    break;
            }
            if (onChange) {
                onChange(value);
            }
        };
        _this.onInputBlur = function (e) {
            _this.debounceTimeout = setTimeout(function () {
                _this.setState({
                    focus: false
                });
            }, 300);
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (e) {
            _this.setState({
                focus: true
            });
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onExtraClick = function (e) {
            if (_this.props.onExtraClick) {
                _this.props.onExtraClick(e);
            }
        };
        _this.onErrorClick = function (e) {
            if (_this.props.onErrorClick) {
                _this.props.onErrorClick(e);
            }
        };
        _this.clearInput = function () {
            if (_this.props.type !== 'password' && _this.props.updatePlaceholder) {
                _this.setState({
                    placeholder: _this.props.value
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.state = {
            focus: false,
            placeholder: _this.props.placeholder
        };
        return _this;
    }

    InputItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('placeholder' in nextProps && this.state.placeholder !== nextProps.placeholder) {
            this.setState({
                placeholder: nextProps.placeholder
            });
        }
    };

    InputItem.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
    };

    InputItem.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            prefixListCls = _props.prefixListCls,
            type = _props.type,
            value = _props.value,
            defaultValue = _props.defaultValue,
            name = _props.name,
            editable = _props.editable,
            disabled = _props.disabled,
            style = _props.style,
            clear = _props.clear,
            children = _props.children,
            error = _props.error,
            className = _props.className,
            extra = _props.extra,
            labelNumber = _props.labelNumber,
            maxLength = _props.maxLength;

        var otherProps = (0, _omit2["default"])(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style', 'clear', 'children', 'error', 'className', 'extra', 'labelNumber', 'onExtraClick', 'onErrorClick', 'updatePlaceholder']);
        var _state = this.state,
            focus = _state.focus,
            placeholder = _state.placeholder;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixListCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, prefixCls + '-error', error), (0, _defineProperty3["default"])(_classNames, prefixCls + '-focus', focus), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var labelCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-label-7', labelNumber === 7), _classNames2));
        var inputType = 'text';
        if (type === 'bankCard' || type === 'phone') {
            inputType = 'tel';
        } else if (type === 'password') {
            inputType = 'password';
        }
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
        var patternProps = void 0;
        if (type === 'number') {
            patternProps = {
                pattern: '[0-9]*'
            };
        }
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, children ? _react2["default"].createElement("div", { className: labelCls }, children) : null, _react2["default"].createElement("div", { className: prefixCls + '-control' }, _react2["default"].createElement("input", __assign({ ref: "input" }, patternProps, otherProps, valueProps, { type: inputType, maxLength: maxLength, name: name, placeholder: placeholder, onChange: this.onInputChange, onBlur: this.onInputBlur, onFocus: this.onInputFocus, readOnly: !editable, disabled: disabled }))), clear && editable && !disabled && value && value.length > 0 ? _react2["default"].createElement("div", { className: prefixCls + '-clear', onClick: this.clearInput }) : null, error ? _react2["default"].createElement("div", { className: prefixCls + '-error-extra', onClick: this.onErrorClick }) : null, extra !== '' ? _react2["default"].createElement("div", { className: prefixCls + '-extra', onClick: this.onExtraClick }, extra) : null);
    };

    return InputItem;
}(_react2["default"].Component);

InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    updatePlaceholder: false
};
exports["default"] = InputItem;
module.exports = exports['default'];