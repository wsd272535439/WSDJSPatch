'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

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

var NoticeBar = function (_React$Component) {
    (0, _inherits3["default"])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3["default"])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    NoticeBar.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['mode', 'type', 'onClick', 'children', 'className', 'prefixCls']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            mode = _splitObject2$.mode,
            type = _splitObject2$.type,
            onClick = _splitObject2$.onClick,
            children = _splitObject2$.children,
            className = _splitObject2$.className,
            prefixCls = _splitObject2$.prefixCls,
            restProps = _splitObject2[1];

        var extraProps = {};
        var operationDom = null;
        if (mode === 'closable') {
            operationDom = _react2["default"].createElement("div", { className: prefixCls + '-operation', onClick: this.onClick }, _react2["default"].createElement(_icon2["default"], { type: "cross" }));
        } else {
            if (mode === 'link') {
                operationDom = _react2["default"].createElement("div", { className: prefixCls + '-operation' }, _react2["default"].createElement(_icon2["default"], { type: "right" }));
            }
            extraProps.onClick = onClick;
        }
        var iconEnum = {
            success: 'check-circle',
            error: 'cross-circle',
            warn: 'exclamation-circle',
            question: 'question-circle'
        };
        var iconDom = type ? _react2["default"].createElement("div", { className: prefixCls + '-icon' }, _react2["default"].createElement(_icon2["default"], { type: iconEnum[type] || 'info-circle' })) : null;
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return this.state.show ? _react2["default"].createElement("div", __assign({ className: wrapCls }, restProps, extraProps), iconDom, _react2["default"].createElement("div", { className: prefixCls + '-content' }, children), operationDom) : null;
    };

    return NoticeBar;
}(_react2["default"].Component);

exports["default"] = NoticeBar;

NoticeBar.defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    onClick: function onClick() {}
};
module.exports = exports['default'];