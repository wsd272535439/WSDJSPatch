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

var Button = function (_React$Component) {
    (0, _inherits3["default"])(Button, _React$Component);

    function Button(props) {
        (0, _classCallCheck3["default"])(this, Button);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onPressIn = function () {
            for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
            }

            if (!_this.props.disabled) {
                _this.setState({ pressIn: true });
            }
            if (_this.props.onPressIn) {
                _this.props.onPressIn(arg);
            }
        };
        _this.onPressOut = function () {
            for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                arg[_key2] = arguments[_key2];
            }

            if (!_this.props.disabled) {
                _this.setState({ pressIn: false });
            }
            if (_this.props.onPressOut) {
                _this.props.onPressOut(arg);
            }
        };
        _this.onShowUnderlay = function () {
            for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                arg[_key3] = arguments[_key3];
            }

            if (!_this.props.disabled) {
                _this.setState({ touchIt: true });
            }
            if (_this.props.onShowUnderlay) {
                _this.props.onShowUnderlay(arg);
            }
        };
        _this.onHideUnderlay = function () {
            for (var _len4 = arguments.length, arg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                arg[_key4] = arguments[_key4];
            }

            if (!_this.props.disabled) {
                _this.setState({ touchIt: false });
            }
            if (_this.props.onHideUnderlay) {
                _this.props.onHideUnderlay(arg);
            }
        };
        _this.state = {
            pressIn: false,
            touchIt: false
        };
        return _this;
    }

    Button.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$size = _props.size,
            size = _props$size === undefined ? 'large' : _props$size,
            _props$type = _props.type,
            type = _props$type === undefined ? 'default' : _props$type,
            disabled = _props.disabled,
            activeStyle = _props.activeStyle,
            _props$styles = _props.styles,
            styles = _props$styles === undefined ? _index2["default"] : _props$styles;
        var _styles$rawStyles = styles.rawStyles,
            rawStyles = _styles$rawStyles === undefined ? _index.rawStyles : _styles$rawStyles,
            _styles$highlightStyl = styles.highlightStyles,
            highlightStyles = _styles$highlightStyl === undefined ? _index.highlightStyles : _styles$highlightStyl,
            _styles$textStyles = styles.textStyles,
            textStyles = _styles$textStyles === undefined ? _index.textStyles : _styles$textStyles,
            _styles$highlightText = styles.highlightTextStyles,
            highlightTextStyles = _styles$highlightText === undefined ? _index.highlightTextStyles : _styles$highlightText;

        var textStyle = [textStyles[size], textStyles[type], disabled && textStyles.disabled, this.state.pressIn && highlightTextStyles[type]];
        var wrapperStyle = [styles.wrapperStyle, styles[size], styles[type], disabled && styles.disabled, this.state.pressIn && highlightStyles[type]];
        if (activeStyle && this.state.touchIt) {
            wrapperStyle.push(activeStyle);
        }
        wrapperStyle.push(this.props.style);
        var newChild = _react2["default"].createElement(_reactNative.Text, { style: textStyle }, this.props.children);
        if (disabled) {
            return _react2["default"].createElement(_reactNative.View, __assign({}, this.props, { style: wrapperStyle }), newChild);
        }
        return _react2["default"].createElement(_reactNative.TouchableHighlight, __assign({ activeOpacity: 1, delayPressOut: 1 }, this.props, { underlayColor: activeStyle ? highlightStyles[type].backgroundColor : rawStyles[type].backgroundColor, style: wrapperStyle, onPress: function onPress(e) {
                return _this2.props.onClick && _this2.props.onClick(e);
            }, onPressIn: this.onPressIn, onPressOut: this.onPressOut, onShowUnderlay: this.onShowUnderlay, onHideUnderlay: this.onHideUnderlay }), newChild);
    };

    return Button;
}(_react2["default"].Component);

exports["default"] = Button;

Button.defaultProps = {
    pressIn: false,
    disabled: false,
    inline: false,
    loading: false,
    activeStyle: {},
    onClick: function onClick(_x) {},
    onPressIn: function onPressIn(_x) {},
    onPressOut: function onPressOut(_x) {},
    onShowUnderlay: function onShowUnderlay(_x) {},
    onHideUnderlay: function onHideUnderlay(_x) {}
};
module.exports = exports['default'];