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

var _Indexed = require('./Indexed.web');

var _Indexed2 = _interopRequireDefault(_Indexed);

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

var ListView = function (_React$Component) {
    (0, _inherits3["default"])(ListView, _React$Component);

    function ListView() {
        (0, _classCallCheck3["default"])(this, ListView);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    ListView.prototype.render = function render() {
        var _handleProps = (0, _handleProps3["default"])(this.props, false),
            restProps = _handleProps.restProps,
            extraProps = _handleProps.extraProps;

        var _props = this.props,
            useZscroller = _props.useZscroller,
            refreshControl = _props.refreshControl;

        if (refreshControl) {
            useZscroller = true;
        }
        return _react2["default"].createElement(_rmcListView2["default"], __assign({ ref: "listview" }, restProps, extraProps, { useZscroller: useZscroller }));
    };

    return ListView;
}(_react2["default"].Component);

exports["default"] = ListView;

ListView.defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list'
};
ListView.DataSource = _rmcListView2["default"].DataSource;
ListView.IndexedList = _Indexed2["default"];
module.exports = exports['default'];