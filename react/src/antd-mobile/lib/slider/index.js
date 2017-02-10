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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SliderAntm = function (_React$Component) {
    (0, _inherits3["default"])(SliderAntm, _React$Component);

    function SliderAntm() {
        (0, _classCallCheck3["default"])(this, SliderAntm);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    SliderAntm.prototype.render = function render() {
        var _props = this.props,
            defaultValue = _props.defaultValue,
            value = _props.value,
            min = _props.min,
            max = _props.max,
            step = _props.step,
            disabled = _props.disabled,
            onChange = _props.onChange,
            onAfterChange = _props.onAfterChange;

        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.Slider, { value: defaultValue || value, minimumValue: min, maximumValue: max, step: step, minimumTrackTintColor: '#2db7f5', maximumTrackTintColor: '#ccc', disabled: disabled, onValueChange: onChange, onSlidingComplete: onAfterChange }));
    };

    return SliderAntm;
}(_react2["default"].Component);

exports["default"] = SliderAntm;

SliderAntm.defaultProps = {
    onChange: function onChange() {},
    onAfterChange: function onAfterChange() {},

    defaultValue: 0,
    disabled: false
};
module.exports = exports['default'];