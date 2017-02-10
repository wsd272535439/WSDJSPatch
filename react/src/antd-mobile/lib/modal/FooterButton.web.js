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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _touchableFeedback = require('../_util/touchableFeedback');

var _touchableFeedback2 = _interopRequireDefault(_touchableFeedback);

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

var FooterButton = function (_React$Component) {
    (0, _inherits3["default"])(FooterButton, _React$Component);

    function FooterButton() {
        (0, _classCallCheck3["default"])(this, FooterButton);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FooterButton.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            button = _props.button,
            prefixCls = _props.prefixCls,
            touchFeedback = _props.touchFeedback;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['button', 'prefixCls', 'touchFeedback', 'activeStyle'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-button', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-button-active', touchFeedback), _classNames));
        return _react2["default"].createElement("a", __assign({ className: wrapCls, href: "#", onClick: function onClick(e) {
                e.preventDefault();
                if (button.onPress) {
                    button.onPress();
                }
            } }, restProps), button.text || 'Button');
    };

    return FooterButton;
}(_react2["default"].Component);

;
exports["default"] = (0, _touchableFeedback2["default"])(FooterButton);
module.exports = exports['default'];