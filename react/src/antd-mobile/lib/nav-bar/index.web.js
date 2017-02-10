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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

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

var NavBar = function (_React$Component) {
    (0, _inherits3["default"])(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3["default"])(this, NavBar);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    NavBar.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'children', 'mode', 'className', 'iconName', 'leftContent', 'rightContent', 'onLeftClick']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            prefixCls = _splitObject2$.prefixCls,
            children = _splitObject2$.children,
            mode = _splitObject2$.mode,
            className = _splitObject2$.className,
            iconName = _splitObject2$.iconName,
            leftContent = _splitObject2$.leftContent,
            rightContent = _splitObject2$.rightContent,
            onLeftClick = _splitObject2$.onLeftClick,
            restProps = _splitObject2[1];

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, className), (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + mode, true), _classNames));
        return _react2["default"].createElement("div", __assign({}, restProps, { className: wrapCls }), _react2["default"].createElement("div", { className: prefixCls + '-left', onClick: onLeftClick }, iconName ? _react2["default"].createElement("span", { className: prefixCls + '-left-icon' }, _react2["default"].createElement(_icon2["default"], { type: iconName })) : null, _react2["default"].createElement("span", { className: prefixCls + '-left-content' }, leftContent)), _react2["default"].createElement("div", { className: prefixCls + '-title' }, children), _react2["default"].createElement("div", { className: prefixCls + '-right' }, rightContent));
    };

    return NavBar;
}(_react2["default"].Component);

exports["default"] = NavBar;

NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick: function onLeftClick() {}
};
module.exports = exports['default'];