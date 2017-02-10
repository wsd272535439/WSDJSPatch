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

var _lib = require('rc-input-number/lib');

var _lib2 = _interopRequireDefault(_lib);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = require('rc-input-number/lib/styles');

var _styles2 = _interopRequireDefault(_styles);

var _reactNative = require('react-native');

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

var Stepper = function (_React$Component) {
    (0, _inherits3["default"])(Stepper, _React$Component);

    function Stepper() {
        (0, _classCallCheck3["default"])(this, Stepper);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Stepper.prototype.render = function render() {
        var restProps = (0, _objectAssign2["default"])({}, this.props);
        var inputAndroidStyle = _reactNative.Platform.OS === 'android' ? {
            top: 6,
            paddingTop: 0
        } : {};
        var inputStyle = (0, _objectAssign2["default"])({}, inputAndroidStyle, this.props.inputStyle);
        delete restProps.inputStyle;
        return _react2["default"].createElement(_lib2["default"], __assign({}, restProps, { inputStyle: inputStyle }));
    };

    return Stepper;
}(_react2["default"].Component);

exports["default"] = Stepper;

Stepper.defaultProps = {
    step: 1,
    readOnly: true,
    disabled: false,
    styles: _styles2["default"]
};
module.exports = exports['default'];