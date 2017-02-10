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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

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

var Table = function (_React$Component) {
    (0, _inherits3["default"])(Table, _React$Component);

    function Table() {
        (0, _classCallCheck3["default"])(this, Table);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Table.prototype.render = function render() {
        var _props = this.props,
            columns = _props.columns,
            dataSource = _props.dataSource,
            direction = _props.direction,
            scrollX = _props.scrollX,
            titleFixed = _props.titleFixed;
        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['style', 'className'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var table = void 0;
        // 默认纵向
        if (!direction || direction === 'vertical') {
            if (titleFixed) {
                table = _react2["default"].createElement(_rcTable2["default"], __assign({}, restProps, { columns: columns, data: dataSource, className: "am-table", scroll: { x: true }, showHeader: false }));
            } else {
                table = _react2["default"].createElement(_rcTable2["default"], __assign({}, restProps, { columns: columns, data: dataSource, className: "am-table", scroll: { x: scrollX } }));
            }
        } else if (direction === 'horizon') {
            columns[0].className = 'am-table-horizonTitle';
            table = _react2["default"].createElement(_rcTable2["default"], __assign({}, restProps, { columns: columns, data: dataSource, className: "am-table", showHeader: false, scroll: { x: scrollX } }));
        } else if (direction === 'mix') {
            columns[0].className = 'am-table-horizonTitle';
            table = _react2["default"].createElement(_rcTable2["default"], __assign({}, restProps, { columns: columns, data: dataSource, className: "am-table", scroll: { x: scrollX } }));
        }
        return _react2["default"].createElement("div", { className: className, style: style }, table);
    };

    return Table;
}(_react2["default"].Component);

exports["default"] = Table;

Table.defaultProps = {
    dataSource: [],
    prefixCls: 'am-table'
};
module.exports = exports['default'];