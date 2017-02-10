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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactNative = require('react-native');

var _default = require('../style/themes/default');

var _default2 = _interopRequireDefault(_default);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

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

var noop = function noop() {};

var InputItem = function (_React$Component) {
    (0, _inherits3["default"])(InputItem, _React$Component);

    function InputItem(props) {
        (0, _classCallCheck3["default"])(this, InputItem);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (text) {
            var _this$props = _this.props,
                maxLength = _this$props.maxLength,
                onChange = _this$props.onChange,
                type = _this$props.type;

            switch (type) {
                case 'text':
                    if (maxLength > 0) {
                        text = text.substring(0, maxLength);
                    }
                    break;
                case 'bankCard':
                    text = text.replace(/\D/g, '');
                    if (maxLength > 0) {
                        text = text.substring(0, maxLength);
                    }
                    text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    text = text.replace(/\D/g, '');
                    if (maxLength > 0) {
                        text = text.substring(0, 11);
                    }
                    var valueLen = text.length;
                    if (valueLen > 3 && valueLen < 8) {
                        text = text.substr(0, 3) + ' ' + text.substr(3);
                    } else if (valueLen >= 8) {
                        text = text.substr(0, 3) + ' ' + text.substr(3, 4) + ' ' + text.substr(7);
                    }
                    break;
                case 'number':
                    text = text.replace(/\D/g, '');
                    break;
                case 'password':
                    break;
                default:
                    break;
            }
            if (onChange) {
                onChange(text);
            }
        };
        return _this;
    }

    InputItem.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            type = _props.type,
            style = _props.style,
            clear = _props.clear,
            children = _props.children,
            error = _props.error,
            extra = _props.extra,
            labelNumber = _props.labelNumber,
            last = _props.last,
            _props$onExtraPress = _props.onExtraPress,
            onExtraPress = _props$onExtraPress === undefined ? noop : _props$onExtraPress,
            _props$onErrorPress = _props.onErrorPress,
            onErrorPress = _props$onErrorPress === undefined ? noop : _props$onErrorPress;

        var containerStyle = {
            borderBottomWidth: last ? 0 : _default2["default"].border_width_sm
        };
        var textStyle = {
            width: _default2["default"].font_size_heading * labelNumber
        };
        var inputStyle = {
            color: error ? '#f50' : _default2["default"].color_text_base
        };
        var extraStyle = {
            width: typeof extra === 'string' && extra.length > 0 ? extra.length * _default2["default"].font_size_heading : 0
        };
        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['type', 'style', 'clear', 'children', 'error', 'extra', 'labelNumber', 'last', 'onExtraPress', 'onErrorPress', 'keyboardType', 'onChange', 'secureTextEntry'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        return _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].container, containerStyle, style] }, children ? _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].text, textStyle] }, children) : null, _react2["default"].createElement(_reactNative.TextInput, __assign({ style: [_index2["default"].input, inputStyle], keyboardType: type === 'number' || type === 'bankCard' ? 'numeric' : 'default', onChange: function onChange(event) {
                return _this2.onChange(event.nativeEvent.text);
            }, secureTextEntry: type === 'password', clearButtonMode: clear ? 'while-editing' : 'never', underlineColorAndroid: "transparent" }, restProps)), extra ? _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: onExtraPress }, _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].extra, extraStyle] }, extra))) : null, error && _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: onErrorPress }, _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].errorIcon] }, _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/error.png'), style: { width: _default2["default"].icon_size_xs, height: _default2["default"].icon_size_xs } }))));
    };

    return InputItem;
}(_react2["default"].Component);

exports["default"] = InputItem;

InputItem.defaultProps = {
    type: 'text',
    editable: true,
    value: '',
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraPress: noop,
    error: false,
    onErrorPress: noop,
    size: 'large',
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false
};
module.exports = exports['default'];