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

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDate = (0, _moment2["default"])().locale('zh-cn').utcOffset(8);

var PopupExample = function (_React$Component) {
    (0, _inherits3["default"])(PopupExample, _React$Component);

    function PopupExample(props) {
        (0, _classCallCheck3["default"])(this, PopupExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (value) {
            _this.setState({ value: value });
        };
        _this.state = {
            value: undefined
        };
        return _this;
    }

    PopupExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.List, null, _react2["default"].createElement(_antdMobile.DatePicker, { defaultDate: defaultDate, value: this.state.value, mode: "date", minDate: this.date1MinDate || (this.date1MinDate = (0, _moment2["default"])('2015-08-06', 'YYYY-MM-DD')), maxDate: this.date1MaxDate || (this.date1MaxDate = (0, _moment2["default"])('2016-12-06', 'YYYY-MM-DD')), onChange: this.onChange, format: function format(val) {
                return val.fromNow();
            } }, _react2["default"].createElement(_antdMobile.List.Item, { arrow: "horizontal", last: true }, "选择时间"))));
    };

    return PopupExample;
}(_react2["default"].Component);

exports["default"] = PopupExample;
module.exports = exports['default'];