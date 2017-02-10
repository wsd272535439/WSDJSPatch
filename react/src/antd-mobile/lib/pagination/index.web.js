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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pagination = function (_React$Component) {
    (0, _inherits3["default"])(Pagination, _React$Component);

    function Pagination(props) {
        (0, _classCallCheck3["default"])(this, Pagination);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            current: props.current
        };
        return _this;
    }

    Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            current: nextProps.current
        });
    };

    Pagination.prototype.onChange = function onChange(p) {
        this.setState({
            current: p
        });
        if (this.props.onChange) {
            this.props.onChange(p);
        }
    };

    Pagination.prototype.render = function render() {
        var _this2 = this,
            _classNames2;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            style = _props.style,
            mode = _props.mode,
            total = _props.total,
            simple = _props.simple,
            prevText = _props.prevText,
            nextText = _props.nextText;

        var current = this.state.current;
        var markup = _react2["default"].createElement(_flex2["default"], null, _react2["default"].createElement(_flex2["default"].Item, { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-prev' }, _react2["default"].createElement(_button2["default"], { inline: true, disabled: current <= 0, onClick: function onClick() {
                return _this2.onChange(current - 1);
            } }, prevText)), this.props.children ? _react2["default"].createElement(_flex2["default"].Item, null, this.props.children) : !simple && _react2["default"].createElement(_flex2["default"].Item, { className: prefixCls + '-wrap' }, _react2["default"].createElement("span", { className: "active" }, current + 1), "/", _react2["default"].createElement("span", null, total)), _react2["default"].createElement(_flex2["default"].Item, { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-next' }, _react2["default"].createElement(_button2["default"], { inline: true, disabled: current >= total - 1, onClick: function onClick() {
                return _this2.onChange(_this2.state.current + 1);
            } }, nextText)));
        if (mode === 'number') {
            markup = _react2["default"].createElement("div", { className: prefixCls + '-wrap' }, _react2["default"].createElement("span", { className: "active" }, current + 1), "/", _react2["default"].createElement("span", null, total));
        } else if (mode === 'pointer') {
            var arr = [];
            for (var i = 0; i < total; i++) {
                var _classNames;

                arr.push(_react2["default"].createElement("div", { key: 'dot-' + i, className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap-dot', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap-dot-active', i === current), _classNames)) }, _react2["default"].createElement("span", null)));
            }
            markup = _react2["default"].createElement("div", { className: prefixCls + '-wrap' }, arr);
        }
        return _react2["default"].createElement("div", { className: (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, className, className), (0, _defineProperty3["default"])(_classNames2, prefixCls, true), _classNames2)), style: style }, markup);
    };

    return Pagination;
}(_react2["default"].Component);

exports["default"] = Pagination;

Pagination.defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: function onChange() {}
};
module.exports = exports['default'];