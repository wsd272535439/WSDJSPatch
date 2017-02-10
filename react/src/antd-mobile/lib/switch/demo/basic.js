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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwitchExample = function (_React$Component) {
    (0, _inherits3["default"])(SwitchExample, _React$Component);

    function SwitchExample(props) {
        (0, _classCallCheck3["default"])(this, SwitchExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onSwitchChange = function (value) {
            _this.setState({
                checked: value
            });
        };
        _this.state = {
            checked: false
        };
        return _this;
    }

    SwitchExample.prototype.render = function render() {
        return _react2["default"].createElement(_antdMobile.List, { style: { marginTop: 20 } }, _react2["default"].createElement(_antdMobile.List.Item, { extra: _react2["default"].createElement(_antdMobile.Switch, { checked: true }) }, "默认开"), _react2["default"].createElement(_antdMobile.List.Item, { extra: _react2["default"].createElement(_antdMobile.Switch, null) }, "默认关"), _react2["default"].createElement(_antdMobile.List.Item, { extra: _react2["default"].createElement(_antdMobile.Switch, { onChange: this.onSwitchChange }) }, "onChange 事件，开关状态：", this.state.checked ? 'open' : 'close'), _react2["default"].createElement(_antdMobile.List.Item, { extra: _react2["default"].createElement(_antdMobile.Switch, { disabled: true }) }, "默认关不可修改"));
    };

    return SwitchExample;
}(_react2["default"].Component);

exports["default"] = SwitchExample;
module.exports = exports['default'];