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

var Modal = function (_React$Component) {
    (0, _inherits3["default"])(Modal, _React$Component);

    function Modal(props) {
        (0, _classCallCheck3["default"])(this, Modal);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.onPressIn = function () {
            _this.closeDom.setNativeProps({
                style: [_index2["default"].close, _reactNative.Platform.OS === 'ios' ? _index2["default"].closeIOS : _index2["default"].closeAndroid, {
                    backgroundColor: '#888'
                }]
            });
        };
        _this.onPressOut = function () {
            _this.closeDom.setNativeProps({
                style: [_index2["default"].close, _reactNative.Platform.OS === 'ios' ? _index2["default"].closeIOS : _index2["default"].closeAndroid]
            });
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected
            });
        }
    };

    Modal.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            disabled = _props.disabled,
            small = _props.small,
            closable = _props.closable,
            style = _props.style;

        var selected = this.state.selected;
        var wrapStyle = void 0;
        var textStyle = void 0;
        if (!selected && !disabled) {
            wrapStyle = _index2["default"].normalWrap;
            textStyle = _index2["default"].normalText;
        }
        if (selected && !disabled) {
            wrapStyle = _index2["default"].activeWrap;
            textStyle = _index2["default"].activeText;
        }
        if (disabled) {
            wrapStyle = _index2["default"].disabledWrap;
            textStyle = _index2["default"].disabledText;
        }
        var sizeWrapStyle = small ? _index2["default"].wrapSmall : {};
        var sizeTextStyle = small ? _index2["default"].textSmall : {};
        return !this.state.closed ? _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].tag, style] }, _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: this.onClick }, _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].wrap, sizeWrapStyle, wrapStyle] }, _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].text, sizeTextStyle, textStyle] }, children, " "))), closable && !small && !disabled && _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPressIn: this.onPressIn, onPressOut: this.onPressOut, onPress: this.onTagClose }, _react2["default"].createElement(_reactNative.View, { ref: function ref(component) {
                return _this2.closeDom = component;
            }, style: [_index2["default"].close, _reactNative.Platform.OS === 'ios' ? _index2["default"].closeIOS : _index2["default"].closeAndroid] }, _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].closeText, _reactNative.Platform.OS === 'android' ? _index2["default"].closeTransform : {}] }, "×")))) : null;
    };

    return Modal;
}(_react2["default"].Component);

exports["default"] = Modal;

Modal.defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose: function onClose() {},
    afterClose: function afterClose() {},
    onChange: function onChange() {}
};
module.exports = exports['default'];