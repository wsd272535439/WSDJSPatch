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

var SegmentItem = function (_React$Component) {
    (0, _inherits3["default"])(SegmentItem, _React$Component);

    function SegmentItem() {
        (0, _classCallCheck3["default"])(this, SegmentItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    SegmentItem.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            label = _props.label,
            prefixCls = _props.prefixCls,
            selected = _props.selected,
            tintColor = _props.tintColor,
            enabled = _props.enabled,
            touchFeedback = _props.touchFeedback;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['prefixCls', 'label', 'selected', 'tintColor', 'enabled', 'touchFeedback', 'activeStyle'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var itemCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-selected', selected), _classNames));
        var touchedCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-active', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-active-tintcolor', enabled && touchFeedback && !selected && !tintColor), _classNames2));
        var touchFeedbackStyle = enabled && touchFeedback && !selected && tintColor ? {
            backgroundColor: tintColor
        } : {};
        return _react2["default"].createElement("div", __assign({ className: itemCls, style: {
                color: selected ? '#fff' : tintColor,
                backgroundColor: selected ? tintColor : '#fff',
                borderColor: tintColor
            } }, restProps), _react2["default"].createElement("div", { className: touchedCls, style: touchFeedbackStyle }), label);
    };

    return SegmentItem;
}(_react2["default"].Component);

SegmentItem.defaultProps = {
    onClick: function onClick() {},

    selected: false
};
;
exports["default"] = (0, _touchableFeedback2["default"])(SegmentItem);
module.exports = exports['default'];