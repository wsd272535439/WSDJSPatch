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

var _reactNative = require('react-native');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

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
        var _this2 = this;

        var _props = this.props,
            styles = _props.styles,
            style = _props.style,
            mode = _props.mode,
            total = _props.total,
            simple = _props.simple,
            prevText = _props.prevText,
            nextText = _props.nextText;

        var current = this.state.current;
        var markup = _react2["default"].createElement(_flex2["default"], null, _react2["default"].createElement(_flex2["default"].Item, null, _react2["default"].createElement(_button2["default"], { inline: true, disabled: current <= 0, onClick: function onClick() {
                return _this2.onChange(current - 1);
            } }, prevText)), !simple ? _react2["default"].createElement(_flex2["default"].Item, null, _react2["default"].createElement(_reactNative.View, { style: [styles.numberStyle] }, _react2["default"].createElement(_reactNative.Text, { style: [styles.activeTextStyle] }, current + 1), _react2["default"].createElement(_reactNative.Text, { style: [styles.totalStyle] }, "/", total))) : _react2["default"].createElement(_flex2["default"].Item, null), _react2["default"].createElement(_flex2["default"].Item, null, _react2["default"].createElement(_button2["default"], { inline: true, disabled: current >= total - 1, onClick: function onClick() {
                return _this2.onChange(_this2.state.current + 1);
            } }, nextText)));
        if (mode === 'number') {
            markup = _react2["default"].createElement(_reactNative.View, { style: [styles.numberStyle] }, _react2["default"].createElement(_reactNative.Text, { style: [styles.activeTextStyle] }, current + 1), _react2["default"].createElement(_reactNative.Text, { style: [styles.totalStyle] }, "/", total));
        } else if (mode === 'pointer') {
            var arr = [];
            for (var i = 0; i < total; i++) {
                arr.push(_react2["default"].createElement(_reactNative.View, { key: 'dot-' + i, style: [styles.pointStyle, styles.spaceStyle, i === current && styles.pointActiveStyle] }));
            }
            markup = _react2["default"].createElement(_reactNative.View, { style: [styles.indicatorStyle, this.props.indicatorStyle] }, arr);
        }
        return _react2["default"].createElement(_reactNative.View, { style: [styles.container, style] }, markup);
    };

    return Pagination;
}(_react2["default"].Component);

exports["default"] = Pagination;

Pagination.defaultProps = {
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: function onChange() {},
    indicatorStyle: null,
    styles: _index2["default"]
};
module.exports = exports['default'];