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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardHeader = function (_React$Component) {
    (0, _inherits3["default"])(CardHeader, _React$Component);

    function CardHeader() {
        (0, _classCallCheck3["default"])(this, CardHeader);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    CardHeader.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            title = _props.title,
            thumb = _props.thumb,
            thumbStyle = _props.thumbStyle,
            extra = _props.extra;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-header', true), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls }, _react2["default"].createElement("div", { className: prefixCls + '-header-content' }, thumb ? _react2["default"].createElement("img", { style: thumbStyle, src: thumb }) : null, title), extra ? _react2["default"].createElement("div", { className: prefixCls + '-header-extra' }, extra) : null);
    };

    return CardHeader;
}(_react2["default"].Component);

exports["default"] = CardHeader;

CardHeader.defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {}
};
module.exports = exports['default'];