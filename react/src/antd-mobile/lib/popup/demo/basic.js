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

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopupExample = function (_React$Component) {
    (0, _inherits3["default"])(PopupExample, _React$Component);

    function PopupExample(props) {
        (0, _classCallCheck3["default"])(this, PopupExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.getPopupContent = function (num) {
            return _react2["default"].createElement(_reactNative.View, { style: { flex: 1 } }, _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                    return '委托买入';
                } }, _react2["default"].createElement(_antdMobile.List.Item, null, "股票名称"), _react2["default"].createElement(_antdMobile.List.Item, null, "股票代码"), _react2["default"].createElement(_antdMobile.List.Item, null, "买入价格"), _react2["default"].createElement(_antdMobile.List.Item, null, "买入数量")), _react2["default"].createElement(_reactNative.View, { style: { padding: 10 } }, _react2["default"].createElement(_reactNative.Text, { style: { color: 'gray' } }, "投资说明投资说明..."), _react2["default"].createElement(_reactNative.Text, { style: { color: 'gray' } }, "交易金额以实际成交为准")), _react2["default"].createElement(_reactNative.View, { style: { padding: 6 } }, _react2["default"].createElement(_antdMobile.Button, { type: "primary", onClick: _this.onClose.bind(_this, 'cancel', num) }, "买入")));
        };
        _this.onClick = function () {
            _antdMobile.Popup.show(_this.getPopupContent(0), { maskClosable: true });
        };
        _this.onClick1 = function () {
            _antdMobile.Popup.show(_this.getPopupContent(1), { maskClosable: true, animationType: 'slide-up' });
        };
        _this.state = {
            sel0: '',
            sel1: ''
        };
        return _this;
    }

    PopupExample.prototype.onClose = function onClose(sel, num) {
        this.setState((0, _defineProperty3["default"])({}, 'sel' + num, sel));
        _antdMobile.Popup.hide();
    };

    PopupExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: { margin: 8 } }, _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onClick: this.onClick }, "Dropdown 效果"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onClick: this.onClick1 }, "向上弹出效果"));
    };

    return PopupExample;
}(_react2["default"].Component);

exports["default"] = PopupExample;
module.exports = exports['default'];