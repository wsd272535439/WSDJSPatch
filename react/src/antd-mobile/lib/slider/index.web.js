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

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

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

var Slider = function (_React$Component) {
    (0, _inherits3["default"])(Slider, _React$Component);

    function Slider() {
        (0, _classCallCheck3["default"])(this, Slider);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Slider.prototype.render = function render() {
        return _react2["default"].createElement("div", { className: this.props.prefixCls + '-wrapper' }, _react2["default"].createElement(_rcSlider2["default"], __assign({}, this.props)));
    };

    return Slider;
}(_react2["default"].Component);

exports["default"] = Slider;

Slider.defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down'
};
module.exports = exports['default'];