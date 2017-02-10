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

var AgreeItem = _antdMobile.Checkbox.AgreeItem;
var CheckboxItem = _antdMobile.Checkbox.CheckboxItem;

var BasicCheckboxExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicCheckboxExample, _React$Component);

    function BasicCheckboxExample(props, context) {
        (0, _classCallCheck3["default"])(this, BasicCheckboxExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props, context));

        _this.state = {
            checkBox1: true,
            agreeItem1: true,
            checkboxItem1: true
        };
        return _this;
    }

    BasicCheckboxExample.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.View, { style: { padding: 10 } }, _react2["default"].createElement(_antdMobile.Checkbox, { checked: this.state.checkBox1, style: { tintColor: '#f00' }, onChange: function onChange(event) {
                _this2.setState({
                    checkBox1: event.target.checked
                });
            } }), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Checkbox, null), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Checkbox, { checked: true, disabled: true }), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Checkbox, { disabled: true })), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(AgreeItem, null, "同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(AgreeItem, { checked: this.state.agreeItem1, checkboxStyle: { tintColor: '#f00' }, onChange: function onChange(event) {
                _this2.setState({
                    agreeItem1: event.target.checked
                });
            } }, "同意 《信用支付服务合同》"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(AgreeItem, { disabled: true }, "未选中，不可编辑 《信用支付服务合同》"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(AgreeItem, { checked: true, disabled: true }, "强制选中,不可编辑 《信用支付服务合同信用支付服务合同信用支付服务合同》"), _react2["default"].createElement(_antdMobile.List, { style: { marginTop: 12 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginTop: 12 } }, "表单多选项，普通列表中多选项"), _react2["default"].createElement(CheckboxItem, { checked: this.state.checkboxItem1, onChange: function onChange(event) {
                _this2.setState({
                    checkboxItem1: event.target.checked
                });
            } }, "签约"), _react2["default"].createElement(CheckboxItem, null, "物料铺设"), _react2["default"].createElement(CheckboxItem, { disabled: true }, "机具维护（不能选）"), _react2["default"].createElement(CheckboxItem, { disabled: true, checked: true }, "产品问题解决（必选）")));
    };

    return BasicCheckboxExample;
}(_react2["default"].Component);

exports["default"] = BasicCheckboxExample;
module.exports = exports['default'];