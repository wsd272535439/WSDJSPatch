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

var TextAreaItem = function (_React$Component) {
    (0, _inherits3["default"])(TextAreaItem, _React$Component);

    function TextAreaItem(props) {
        (0, _classCallCheck3["default"])(this, TextAreaItem);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (event) {
            var text = event.nativeEvent.text;
            var height = void 0;
            var _this$props = _this.props,
                autoHeight = _this$props.autoHeight,
                rows = _this$props.rows;

            if (autoHeight) {
                height = event.nativeEvent.contentSize.height;
            } else if (rows > 1) {
                height = 6 * rows * 4;
            } else {
                height = _default2["default"].list_item_height;
            }
            _this.setState({
                value: text,
                inputCount: text.length,
                height: height
            });
            if (_this.props.onChange) {
                _this.props.onChange({ text: text });
            }
        };
        _this.state = {
            value: props.value,
            inputCount: 0,
            height: props.rows > 1 ? 6 * props.rows * 4 : _default2["default"].list_item_height
        };
        return _this;
    }

    TextAreaItem.prototype.render = function render() {
        var _this2 = this;

        var inputCount = this.state.inputCount;
        var _props = this.props,
            rows = _props.rows,
            error = _props.error,
            clear = _props.clear,
            count = _props.count,
            autoHeight = _props.autoHeight,
            last = _props.last,
            onErrorClick = _props.onErrorClick;

        var containerStyle = {
            borderBottomWidth: last ? 0 : _default2["default"].border_width_sm
        };
        var textareaStyle = {
            color: error ? '#f50' : _default2["default"].color_text_base,
            paddingRight: error ? 2 * _default2["default"].h_spacing_lg : 0
        };
        var maxLength = count > 0 ? count : undefined;
        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['rows', 'error', 'clear', 'count', 'autoHeight', 'last', 'onErrorClick', 'onChange', 'value', 'multiline', 'numberOfLines', 'maxLength'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        return _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].container, containerStyle, { position: 'relative' }] }, _react2["default"].createElement(_reactNative.TextInput, __assign({ style: [_index2["default"].input, textareaStyle, { height: Math.max(45, this.state.height) }], onChange: function onChange(event) {
                return _this2.onChange(event);
            }, value: this.state.value, multiline: rows > 1 || autoHeight, numberOfLines: rows, maxLength: maxLength, clearButtonMode: clear ? 'while-editing' : 'never', underlineColorAndroid: "transparent" }, restProps)), error ? _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: onErrorClick }, _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].errorIcon] }, _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/error.png'), style: { width: _default2["default"].icon_size_xs, height: _default2["default"].icon_size_xs } }))) : null, rows > 1 && count > 0 ? _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].count] }, _react2["default"].createElement(_reactNative.Text, null, inputCount, " / ", count)) : null);
    };

    return TextAreaItem;
}(_react2["default"].Component);

exports["default"] = TextAreaItem;

TextAreaItem.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onErrorClick: function onErrorClick() {},

    clear: true,
    error: false,
    editable: true,
    rows: 1,
    value: '',
    placeholder: '',
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false
};
module.exports = exports['default'];