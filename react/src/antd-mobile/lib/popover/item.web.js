'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

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

var Item = function (_React$Component) {
    (0, _inherits3["default"])(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3["default"])(this, Item);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _cls;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['children', 'className', 'prefixCls', 'iconName', 'disabled', 'touchFeedback', 'activeStyle', 'firstItem']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            children = _splitObject2$.children,
            className = _splitObject2$.className,
            prefixCls = _splitObject2$.prefixCls,
            iconName = _splitObject2$.iconName,
            disabled = _splitObject2$.disabled,
            touchFeedback = _splitObject2$.touchFeedback,
            activeStyle = _splitObject2$.activeStyle,
            firstItem = _splitObject2$.firstItem,
            restProps = _splitObject2[1];

        var style = (0, _objectAssign2["default"])({}, this.props.style);
        if (touchFeedback) {
            style = (0, _objectAssign2["default"])(style, activeStyle);
        }
        var cls = (_cls = {}, (0, _defineProperty3["default"])(_cls, className, !!className), (0, _defineProperty3["default"])(_cls, prefixCls + '-item', true), (0, _defineProperty3["default"])(_cls, prefixCls + '-item-disabled', disabled), (0, _defineProperty3["default"])(_cls, prefixCls + '-item-active', touchFeedback), (0, _defineProperty3["default"])(_cls, prefixCls + '-item-fix-active-arrow', firstItem && touchFeedback), _cls);
        return _react2["default"].createElement("div", __assign({ className: (0, _classnames2["default"])(cls) }, restProps, { style: style }), iconName ? _react2["default"].createElement("span", { className: prefixCls + '-item-icon' }, _react2["default"].createElement(_icon2["default"], { type: iconName })) : null, _react2["default"].createElement("span", { className: prefixCls + '-item-content' }, children));
    };

    return Item;
}(_react2["default"].Component);

Item.defaultProps = {
    prefixCls: 'am-popover',
    disabled: false
};
exports["default"] = (0, _touchableFeedback2["default"])(Item, {
    myName: 'PopoverItem'
});
module.exports = exports['default'];