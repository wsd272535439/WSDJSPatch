'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSwipeout = require('rc-swipeout');

var _rcSwipeout2 = _interopRequireDefault(_rcSwipeout);

var _reactHammerjs = require('react-hammerjs');

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = require('../modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwipeAction = function (_React$Component) {
    (0, _inherits3["default"])(SwipeAction, _React$Component);

    function SwipeAction(props) {
        (0, _classCallCheck3["default"])(this, SwipeAction);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onLongTap = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onOpen = _this$props.onOpen;

            if (disabled) {
                return;
            }
            if (onOpen) {
                onOpen();
            }
            _this.setState({
                showModal: true
            });
        };
        _this.state = {
            showModal: false
        };
        return _this;
    }

    SwipeAction.prototype.onClose = function onClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
        this.setState({
            showModal: false
        });
    };

    SwipeAction.prototype.renderAndroid = function renderAndroid() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            title = _props.title,
            autoClose = _props.autoClose,
            _props$left = _props.left,
            left = _props$left === undefined ? [] : _props$left,
            _props$right = _props.right,
            right = _props$right === undefined ? [] : _props$right;

        var pressOption = {
            recognizers: {
                press: {
                    time: 500,
                    threshold: 50
                }
            }
        };
        var actions = [].concat((0, _toConsumableArray3["default"])(left), (0, _toConsumableArray3["default"])(right)).map(function (button) {
            var orginPress = button.onPress || function () {};
            return {
                text: button.text,
                style: button.style,
                onPress: function onPress() {
                    orginPress();
                    if (autoClose) {
                        _this2.onClose();
                    }
                }
            };
        });
        return _react2["default"].createElement("div", null, _react2["default"].createElement(_reactHammerjs2["default"], { onPress: this.onLongTap, options: pressOption }, children), this.state.showModal ? _react2["default"].createElement(_modal2["default"], { animated: false, title: title, transparent: true, closable: false, maskClosable: true, footer: actions, visible: true }) : null);
    };

    SwipeAction.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props,
            className = _props2.className,
            prefixCls = _props2.prefixCls,
            _props2$left = _props2.left,
            left = _props2$left === undefined ? [] : _props2$left,
            _props2$right = _props2.right,
            right = _props2$right === undefined ? [] : _props2$right,
            autoClose = _props2.autoClose,
            disabled = _props2.disabled,
            onOpen = _props2.onOpen,
            onClose = _props2.onClose,
            children = _props2.children;

        var isAndroid = !!navigator.userAgent.match(/Android/i);
        var wrapClass = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, 1), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return left.length || right.length ? _react2["default"].createElement("div", { className: wrapClass }, isAndroid ? this.renderAndroid() : _react2["default"].createElement(_rcSwipeout2["default"], { prefixCls: prefixCls, left: left, right: right, autoClose: autoClose, disabled: disabled, onOpen: onOpen, onClose: onClose }, children)) : _react2["default"].createElement("div", { className: wrapClass }, children);
    };

    return SwipeAction;
}(_react2["default"].Component);

SwipeAction.defaultProps = {
    prefixCls: 'am-swipe',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
exports["default"] = SwipeAction;
module.exports = exports['default'];