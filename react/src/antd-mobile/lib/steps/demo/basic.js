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

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Step = _antdMobile.Steps.Step;

var BasicTimelineExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicTimelineExample, _React$Component);

    function BasicTimelineExample(props) {
        (0, _classCallCheck3["default"])(this, BasicTimelineExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            steps1: [{ title: '已完成', description: '这里是信息的描述' }, { title: '进行中', description: '这里是信息的描述' }, { title: '待运行', description: '这里是信息的描述' }],
            steps2: [{ title: '已完成', description: '这里是信息的描述', status: 'finish' }, { title: '进行中', description: '这里是信息的描述', status: 'process' }, { title: '待运行', description: '这里是信息的描述', status: 'error' }, { title: '再来一个待运行', description: '这里是信息的描述', status: 'wait' }]
        };
        return _this;
    }

    BasicTimelineExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.ScrollView, { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }, _react2["default"].createElement(_reactNative.View, { style: { marginTop: 60 } }, _react2["default"].createElement(_antdMobile.WingBlank, { size: "lg" }, _react2["default"].createElement(_antdMobile.Steps, { size: "small", current: 1 }, this.state.steps1.map(function (item, index) {
            return _react2["default"].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
        })))), _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.WingBlank, { size: "lg" }, _react2["default"].createElement(_antdMobile.Steps, { size: "small" }, this.state.steps2.map(function (item, index) {
            return _react2["default"].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
        })))), _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.WingBlank, { size: "lg" }, _react2["default"].createElement(_antdMobile.Steps, { current: 1 }, this.state.steps1.map(function (item, index) {
            return _react2["default"].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
        })))), _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.WingBlank, { size: "lg" }, _react2["default"].createElement(_antdMobile.Steps, null, this.state.steps2.map(function (item, index) {
            return _react2["default"].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
        })))));
    };

    return BasicTimelineExample;
}(_react2["default"].Component);

exports["default"] = BasicTimelineExample;
module.exports = exports['default'];