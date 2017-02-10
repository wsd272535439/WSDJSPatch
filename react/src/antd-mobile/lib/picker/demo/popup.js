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

var _district = require('../../../site/data/district');

var _district2 = _interopRequireDefault(_district);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopupExample = function (_React$Component) {
    (0, _inherits3["default"])(PopupExample, _React$Component);

    function PopupExample(props) {
        (0, _classCallCheck3["default"])(this, PopupExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function () {
            // console.log('start loading data');
            setTimeout(function () {
                _this.setState({
                    data: _district2["default"]
                });
            }, 500);
        };
        _this.onChange = function (value) {
            // console.log(value);
            _this.setState({ value: value });
        };
        _this.state = {
            data: [],
            value: []
        };
        return _this;
    }

    PopupExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.List, null, _react2["default"].createElement(_antdMobile.Picker, { data: this.state.data, cols: 2, triggerType: "onClick", value: this.state.value, onChange: this.onChange }, _react2["default"].createElement(_antdMobile.List.Item, { arrow: "horizontal", last: true, onClick: this.onClick }, "省市选择(异步加载)"))));
    };

    return PopupExample;
}(_react2["default"].Component);

exports["default"] = PopupExample;
module.exports = exports['default'];