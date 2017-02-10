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

var _reactNativeMenu = require('react-native-menu');

var _reactNativeMenu2 = _interopRequireDefault(_reactNativeMenu);

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

var Popover = function (_React$Component) {
    (0, _inherits3["default"])(Popover, _React$Component);

    function Popover() {
        (0, _classCallCheck3["default"])(this, Popover);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Popover.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            onSelect = _props.onSelect,
            overlay = _props.overlay,
            disabled = _props.disabled,
            contextStyle = _props.contextStyle,
            name = _props.name,
            style = _props.style,
            triggerStyle = _props.triggerStyle,
            overlayStyle = _props.overlayStyle,
            renderOverlayComponent = _props.renderOverlayComponent;

        var menuOptionsProp = {
            optionsContainerStyle: overlayStyle,
            renderOptionsContainer: renderOverlayComponent
        };
        return _react2["default"].createElement(_reactNativeMenu.MenuContext, { ref: "menuContext", style: contextStyle }, _react2["default"].createElement(_reactNativeMenu2["default"], { name: name, onSelect: onSelect, style: style }, _react2["default"].createElement(_reactNativeMenu.MenuTrigger, { disabled: disabled, style: triggerStyle }, children), _react2["default"].createElement(_reactNativeMenu.MenuOptions, __assign({}, menuOptionsProp), overlay)));
    };

    return Popover;
}(_react2["default"].Component);

exports["default"] = Popover;

Popover.defaultProps = {
    onSelect: function onSelect() {}
};
Popover.Item = _reactNativeMenu.MenuOption;
module.exports = exports['default'];