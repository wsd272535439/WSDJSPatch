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

var _Popup = require('rmc-date-picker/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _index = require('../picker/style/index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('./utils');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DatePicker = require('rmc-date-picker/lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

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

var DatePicker = function (_React$Component) {
    (0, _inherits3["default"])(DatePicker, _React$Component);

    function DatePicker() {
        (0, _classCallCheck3["default"])(this, DatePicker);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    DatePicker.prototype.render = function render() {
        var props = this.props;
        var children = props.children,
            extra = props.extra,
            value = props.value,
            defaultDate = props.defaultDate;

        var extraProps = {
            extra: value ? (0, _utils.formatFn)(this, value) : extra
        };
        var dataPicker = _react2["default"].createElement(_DatePicker2["default"], { locale: props.locale, mode: props.mode, minDate: props.minDate, maxDate: props.maxDate, defaultDate: value || defaultDate });
        return _react2["default"].createElement(_Popup2["default"], __assign({ datePicker: dataPicker, styles: _index2["default"] }, props, { date: value || defaultDate }), _react2["default"].cloneElement(children, extraProps));
    };

    return DatePicker;
}(_react2["default"].Component);

exports["default"] = DatePicker;

DatePicker.defaultProps = (0, _objectAssign2["default"])({ triggerType: 'onClick' }, (0, _utils.getProps)());
module.exports = exports['default'];