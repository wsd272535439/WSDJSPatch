'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Modal = require('rc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AntmModal = function (_React$Component) {
    (0, _inherits3["default"])(AntmModal, _React$Component);

    function AntmModal() {
        (0, _classCallCheck3["default"])(this, AntmModal);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onMaskClose = function () {
            if (_this.props.maskClosable && _this.props.onClose) {
                _this.props.onClose();
            }
        };
        return _this;
    }

    AntmModal.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            closable = _props.closable,
            footer = _props.footer,
            children = _props.children,
            style = _props.style,
            transparent = _props.transparent,
            visible = _props.visible,
            onClose = _props.onClose;

        var btnGroupStyle = footer && footer.length === 2 ? _index2["default"].buttnGroupH : _index2["default"].buttnGroupV;
        var buttonWrapStyle = footer && footer.length === 2 ? _index2["default"].buttnWrapH : _index2["default"].buttnWrapV;
        var footerDom = footer && footer.length ? _react2["default"].createElement(_reactNative.View, { style: [btnGroupStyle, _index2["default"].footerRadius] }, footer.map(function (button, i) {
            return _react2["default"].createElement(_reactNative.TouchableHighlight, { key: i, style: { flex: 1 }, underlayColor: "#ddd", onPress: function onPress() {
                    if (button.onPress) {
                        button.onPress();
                    }
                    if (onClose) {
                        onClose();
                    }
                } }, _react2["default"].createElement(_reactNative.View, { style: [buttonWrapStyle] }, _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].buttonText] }, button.text || '\u6309\u94AE' + i)));
        })) : null;
        if (transparent) {
            return _react2["default"].createElement(_Modal2["default"], { onClose: this.onMaskClose, animationType: "fade", wrapStyle: transparent ? _index2["default"].container : undefined, style: [_index2["default"].innerContainer, style], visible: visible }, _react2["default"].createElement(_reactNative.View, { style: { flex: 1 } }, title ? _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].header] }, title) : null, _react2["default"].createElement(_reactNative.View, { style: _index2["default"].body }, children), footer ? _react2["default"].createElement(_reactNative.View, null, footerDom) : null, closable ? _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].closeWrap] }, _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: onClose }, _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.Text, { style: [_index2["default"].close] }, "×")))) : null));
        }
        return _react2["default"].createElement(_reactNative.Modal, { visible: visible, animationType: "slide", onRequestClose: this.onMaskClose }, _react2["default"].createElement(_reactNative.View, { style: style }, children));
    };

    return AntmModal;
}(_react2["default"].Component);

AntmModal.defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    onClose: function onClose() {},

    footer: [],
    transparent: false
};
exports["default"] = AntmModal;
module.exports = exports['default'];