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

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var List = function (_React$Component) {
    (0, _inherits3["default"])(List, _React$Component);

    function List() {
        (0, _classCallCheck3["default"])(this, List);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    List.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            children = _props.children,
            className = _props.className,
            style = _props.style,
            renderHeader = _props.renderHeader,
            renderFooter = _props.renderFooter;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, renderHeader ? _react2["default"].createElement("div", { className: prefixCls + '-header' }, renderHeader()) : null, children ? _react2["default"].createElement("div", { className: prefixCls + '-body' }, children) : null, renderFooter ? _react2["default"].createElement("div", { className: prefixCls + '-footer' }, renderFooter()) : null);
    };

    return List;
}(_react2["default"].Component);

exports["default"] = List;

List.Item = _ListItem2["default"];
List.defaultProps = {
    prefixCls: 'am-list'
};
module.exports = exports['default'];