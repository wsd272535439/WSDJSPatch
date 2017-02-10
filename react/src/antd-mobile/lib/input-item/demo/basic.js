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

var BasicInputItemExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicInputItemExample, _React$Component);

    function BasicInputItemExample(props) {
        (0, _classCallCheck3["default"])(this, BasicInputItemExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            labelnum1: '',
            labelnum2: '',
            labelnum3: '',
            labelnum4: '',
            labelnum5: '',
            labelnum6: '',
            text: '',
            bankCard: '',
            phone: '',
            password: '',
            number: ''
        };
        return _this;
    }

    BasicInputItemExample.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(_reactNative.ScrollView, { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }, _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                return '基本';
            } }, _react2["default"].createElement(_antdMobile.InputItem, { clear: true, error: true, onErrorPress: function onErrorPress() {
                alert('点击了错误icon');
            }, value: this.state.value, onChange: function onChange(value) {
                _this2.setState({
                    value: value
                });
            }, extra: "元", placeholder: "有标签" }, "输入框"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, onErrorPress: function onErrorPress() {
                alert(1);
            }, value: "不可编辑", onChange: function onChange(value) {
                _this2.setState({
                    value: value
                });
            }, extra: "元", placeholder: "不可编辑", editable: false }, "输入框"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.value1, onChange: function onChange(value) {
                _this2.setState({
                    value1: value
                });
            }, placeholder: "无标签" })), _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                return '固定标签字数';
            } }, _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum1, onChange: function onChange(value) {
                _this2.setState({
                    labelnum1: value
                });
            }, labelNumber: 2, placeholder: "两个字标签" }, "姓名"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum2, onChange: function onChange(value) {
                _this2.setState({
                    labelnum2: value
                });
            }, labelNumber: 3, placeholder: "三个字标签" }, "校验码"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum3, onChange: function onChange(value) {
                _this2.setState({
                    labelnum3: value
                });
            }, labelNumber: 4, placeholder: "四个字标签（默认）" }, "四字标签"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum4, onChange: function onChange(value) {
                _this2.setState({
                    labelnum4: value
                });
            }, labelNumber: 5, placeholder: "五个字标签" }, "五个字标签"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum5, onChange: function onChange(value) {
                _this2.setState({
                    labelnum5: value
                });
            }, labelNumber: 6, placeholder: "六个字标签" }, "六个字标签六"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, value: this.state.labelnum6, onChange: function onChange(value) {
                _this2.setState({
                    labelnum6: value
                });
            }, labelNumber: 7, placeholder: "七个字标签" }, "七个字标签七个")), _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                return '格式';
            } }, _react2["default"].createElement(_antdMobile.InputItem, { clear: true, error: true, value: this.state.text, onChange: function onChange(value) {
                _this2.setState({
                    text: value
                });
            }, placeholder: "text" }, "文本输入"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, type: "bankCard", value: this.state.bankcard, onChange: function onChange(value) {
                _this2.setState({
                    bankcard: value
                });
            }, placeholder: "bankCard" }, "银行卡"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, type: "phone", value: this.state.phone, onChange: function onChange(value) {
                _this2.setState({
                    phone: value
                });
            }, placeholder: "phone" }, "手机号"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, type: "password", value: this.state.password, onChange: function onChange(value) {
                _this2.setState({
                    password: value
                });
            }, placeholder: "password" }, "密码"), _react2["default"].createElement(_antdMobile.InputItem, { clear: true, type: "number", value: this.state.number, onChange: function onChange(value) {
                _this2.setState({
                    number: value
                });
            }, placeholder: "number" }, "数字")));
    };

    return BasicInputItemExample;
}(_react2["default"].Component);

exports["default"] = BasicInputItemExample;
module.exports = exports['default'];