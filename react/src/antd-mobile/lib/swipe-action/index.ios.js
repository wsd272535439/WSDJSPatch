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

var _Swipeout = require('rc-swipeout/lib/Swipeout');

var _Swipeout2 = _interopRequireDefault(_Swipeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwipeAction = function (_React$Component) {
    (0, _inherits3["default"])(SwipeAction, _React$Component);

    function SwipeAction() {
        (0, _classCallCheck3["default"])(this, SwipeAction);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    SwipeAction.prototype.render = function render() {
        var _props = this.props,
            left = _props.left,
            right = _props.right,
            autoClose = _props.autoClose,
            disabled = _props.disabled,
            onOpen = _props.onOpen,
            onClose = _props.onClose,
            children = _props.children;

        return _react2["default"].createElement(_Swipeout2["default"], { left: left, right: right, autoClose: autoClose, disabled: disabled, onOpen: onOpen, onClose: onClose }, children);
    };

    return SwipeAction;
}(_react2["default"].Component);

SwipeAction.defaultProps = {
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
exports["default"] = SwipeAction;
module.exports = exports['default'];