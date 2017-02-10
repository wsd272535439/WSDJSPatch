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

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _FooterButton = require('./FooterButton.web');

var _FooterButton2 = _interopRequireDefault(_FooterButton);

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

var Modal = function (_React$Component) {
    (0, _inherits3["default"])(Modal, _React$Component);

    function Modal() {
        (0, _classCallCheck3["default"])(this, Modal);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Modal.prototype.isInModal = function isInModal(e) {
        // fix touch to scroll background page on iOS
        var prefixCls = this.props.prefixCls;
        var pNode = function (node) {
            while (node.parentNode && node.parentNode !== document.body) {
                if (node.classList.contains(prefixCls)) {
                    return node;
                }
                node = node.parentNode;
            }
        }(e.target);
        if (!pNode) {
            e.preventDefault();
        }
        return true;
    };

    Modal.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            transparent = _props.transparent,
            animated = _props.animated,
            transitionName = _props.transitionName,
            maskTransitionName = _props.maskTransitionName,
            style = _props.style,
            _props$footer = _props.footer,
            footer = _props$footer === undefined ? [] : _props$footer;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-transparent', transparent), _classNames));
        var anim = transitionName || (animated ? transparent ? 'am-fade' : 'am-slide-up' : null);
        var maskAnim = maskTransitionName || (animated ? transparent ? 'am-fade' : 'am-slide-up' : null);
        var btnGroupClass = prefixCls + '-button-group-' + (footer.length === 2 ? 'h' : 'v');
        var footerDom = footer.length ? [_react2["default"].createElement("div", { key: "footer", className: btnGroupClass }, footer.map(function (button, i) {
            return _react2["default"].createElement(_FooterButton2["default"], { prefixCls: prefixCls, button: button, key: i });
        }))] : null;
        // transparent 模式下, 内容默认居中
        var rootStyle = transparent ? (0, _objectAssign2["default"])({
            width: '5.4rem',
            height: 'auto'
        }, style) : (0, _objectAssign2["default"])({
            width: '100%',
            height: '100%'
        }, style);
        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['prefixCls', 'className', 'transparent', 'animated', 'transitionName', 'maskTransitionName', 'style', 'footer', 'touchFeedback', 'wrapProps'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
        var wrapProps = isIPhone ? { onTouchStart: function onTouchStart(e) {
                return _this2.isInModal(e);
            } } : {};
        return _react2["default"].createElement(_rcDialog2["default"], __assign({ prefixCls: prefixCls, className: wrapCls, transitionName: anim, maskTransitionName: maskAnim, style: rootStyle, footer: footerDom, wrapProps: wrapProps }, restProps));
    };

    return Modal;
}(_react2["default"].Component);

exports["default"] = Modal;

Modal.defaultProps = {
    prefixCls: 'am-modal',
    // transparent change to transparent by yiminghe
    transparent: false,
    animated: true,
    style: {},
    onShow: function onShow() {},

    footer: []
};
module.exports = exports['default'];