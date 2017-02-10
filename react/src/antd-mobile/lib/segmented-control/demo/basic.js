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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BasicTagExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicTagExample, _React$Component);

    function BasicTagExample() {
        (0, _classCallCheck3["default"])(this, BasicTagExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onChange = function (e) {
            console.log('selectedIndex:' + e.nativeEvent.selectedSegmentIndex);
        };
        _this.onValueChange = function (value) {
            console.log(value);
        };
        return _this;
    }

    BasicTagExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: { paddingTop: 60, paddingHorizontal: 20 } }, _react2["default"].createElement(_reactNative.Text, null, "禁用/enabled=false"), _react2["default"].createElement(_antdMobile.SegmentedControl, { values: ['切换一', '切换二'], enabled: false }), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_reactNative.Text, null, "设置 tintColor, style "), _react2["default"].createElement(_antdMobile.SegmentedControl, { values: ['切换一', '切换二', '切换三'], tintColor: '#ff0000', style: { height: 40, width: 280 } }), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_reactNative.Text, null, "设置默认选中 selectedIndex "), _react2["default"].createElement(_antdMobile.SegmentedControl, { selectedIndex: 1, values: ['切换一', '切换二', '切换三'] }), _react2["default"].createElement(_antdMobile.WhiteSpace, { size: "lg" }), _react2["default"].createElement(_reactNative.Text, null, "事件 onChange/onValueChange "), _react2["default"].createElement(_antdMobile.SegmentedControl, { values: ['切换一', '切换二', '切换三'], onChange: this.onChange, onValueChange: this.onValueChange }));
    };

    return BasicTagExample;
}(_react2["default"].Component);

exports["default"] = BasicTagExample;
module.exports = exports['default'];