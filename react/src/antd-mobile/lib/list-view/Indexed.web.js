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

var _rmcListView = require('rmc-list-view');

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _handleProps2 = require('./handleProps');

var _handleProps3 = _interopRequireDefault(_handleProps2);

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

var IndexedList = _rmcListView2["default"].IndexedList;

var MIndexedList = function (_React$Component) {
    (0, _inherits3["default"])(MIndexedList, _React$Component);

    function MIndexedList() {
        (0, _classCallCheck3["default"])(this, MIndexedList);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    MIndexedList.prototype.render = function render() {
        var _handleProps = (0, _handleProps3["default"])(this.props, true),
            restProps = _handleProps.restProps,
            extraProps = _handleProps.extraProps;

        return _react2["default"].createElement(IndexedList, __assign({ ref: "indexedList", sectionHeaderClassName: "am-indexed-list-section-header am-list-body", sectionBodyClassName: "am-indexed-list-section-body am-list-body" }, restProps, extraProps), this.props.children);
    };

    return MIndexedList;
}(_react2["default"].Component);

exports["default"] = MIndexedList;

MIndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view'
};
module.exports = exports['default'];