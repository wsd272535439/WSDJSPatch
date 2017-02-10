'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brief = undefined;

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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

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

var Brief = exports.Brief = function (_React$Component) {
    (0, _inherits3["default"])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3["default"])(this, Brief);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Brief.prototype.render = function render() {
        return _react2["default"].createElement("div", { className: "am-list-brief", style: this.props.style }, this.props.children);
    };

    return Brief;
}(_react2["default"].Component);

var ListItem = function (_React$Component2) {
    (0, _inherits3["default"])(ListItem, _React$Component2);

    function ListItem() {
        (0, _classCallCheck3["default"])(this, ListItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));
    }

    ListItem.prototype.render = function render() {
        var _wrapCls, _classNames, _classNames2;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'className', 'touchFeedback', 'activeStyle', 'error', 'align', 'wrap', 'children', 'multipleLine', 'thumb', 'extra', 'arrow']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            prefixCls = _splitObject2$.prefixCls,
            className = _splitObject2$.className,
            touchFeedback = _splitObject2$.touchFeedback,
            activeStyle = _splitObject2$.activeStyle,
            error = _splitObject2$.error,
            align = _splitObject2$.align,
            wrap = _splitObject2$.wrap,
            children = _splitObject2$.children,
            multipleLine = _splitObject2$.multipleLine,
            thumb = _splitObject2$.thumb,
            extra = _splitObject2$.extra,
            arrow = _splitObject2$.arrow,
            restProps = _splitObject2[1];

        var wrapCls = (_wrapCls = {}, (0, _defineProperty3["default"])(_wrapCls, className, className), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item', true), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-error', error), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-top', align === 'top'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-middle', align === 'middle'), (0, _defineProperty3["default"])(_wrapCls, prefixCls + '-item-bottom', align === 'bottom'), _wrapCls);
        var style = (0, _objectAssign2["default"])({}, this.props.style);
        if (touchFeedback) {
            style = (0, _objectAssign2["default"])(style, activeStyle);
            wrapCls[prefixCls + '-item-active'] = true;
        }
        var lineCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-line', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-line-multiple', multipleLine), (0, _defineProperty3["default"])(_classNames, prefixCls + '-line-wrap', wrap), _classNames));
        var arrowCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classNames2));
        return _react2["default"].createElement("div", __assign({}, restProps, { className: (0, _classnames2["default"])(wrapCls), style: style }), thumb ? _react2["default"].createElement("div", { className: prefixCls + '-thumb' }, typeof thumb === 'string' ? _react2["default"].createElement("img", { src: thumb }) : thumb) : null, _react2["default"].createElement("div", { className: lineCls }, children ? _react2["default"].createElement("div", { className: prefixCls + '-content' }, children) : null, extra ? _react2["default"].createElement("div", { className: prefixCls + '-extra' }, extra) : null, arrow ? _react2["default"].createElement("div", { className: arrowCls }) : null));
    };

    return ListItem;
}(_react2["default"].Component);

ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false
};
var highOrderListItem = (0, _touchableFeedback2["default"])(ListItem, {
    Brief: Brief
});
exports["default"] = highOrderListItem;