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

var Circle = _react2["default"].createClass({
    displayName: 'Circle',
    render: function render() {
        var size = this.props.size || 20;
        return _react2["default"].createElement(_reactNative.View, { style: {
                borderRadius: size / 2,
                backgroundColor: '#527fe4',
                width: size,
                height: size,
                margin: 1
            } });
    }
});

var FlexExample = function (_React$Component) {
    (0, _inherits3["default"])(FlexExample, _React$Component);

    function FlexExample() {
        (0, _classCallCheck3["default"])(this, FlexExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FlexExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.ScrollView, { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }, _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 20, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginBottom: 10 } }, "项目的排列方向"), _react2["default"].createElement(_reactNative.Text, null, "direction=\"row\":主轴为水平方向，起点在左端")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, null, _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingLeft: 4, paddingRight: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮1")), _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingLeft: 4, paddingRight: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮2")), _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingLeft: 4, paddingRight: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮3")))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "direction=\"column\":主轴为垂直方向，起点在上沿")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { direction: "column" }, _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingBottom: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮1")), _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingBottom: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮2")), _react2["default"].createElement(_antdMobile.Flex.Item, { style: { paddingBottom: 4 } }, _react2["default"].createElement(_antdMobile.Button, { size: "small" }, "按钮3")))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginTop: 20, marginBottom: 20 } }, "项目在主轴上的对齐方式"), _react2["default"].createElement(_reactNative.Text, null, "justify=\"start\":左对齐")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { justify: "start" }, _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "justify=\"center\":居中")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { justify: "center" }, _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "justify=\"end\":右对齐")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { justify: "end" }, _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "justify=\"between\":两端对齐，项目之间的间隔都相等")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { justify: "between" }, _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "justify=\"around\":每个项目两侧的间隔相等")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { justify: "around" }, _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null), _react2["default"].createElement(Circle, null))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginTop: 20, marginBottom: 20 } }, "项目在交叉轴上的对齐方式"), _react2["default"].createElement(_reactNative.Text, null, "align=\"start\":交叉轴的起点对齐")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { align: "start", style: { height: 30 } }, _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "align=\"center\":交叉轴的中点对齐")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { align: "center", style: { height: 30 } }, _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "align=\"end\":交叉轴的终点对齐")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { align: "end", style: { height: 30 } }, _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "align=\"stretch\":如果项目未设置高度或设为auto，将占满整个容器的高度")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Flex, { align: "stretch", style: { height: 70 } }, _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜"), _react2["default"].createElement(_reactNative.Text, { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } }, "兜兜")))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, { style: { marginBottom: 10 } }, "是否折行"), _react2["default"].createElement(_reactNative.Text, null, "wrap=\"wrap\":换行")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { wrap: "wrap" }, 'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
            return _react2["default"].createElement(Circle, { key: i + '-' + char });
        }))), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginTop: 5, marginBottom: 5 } }, _react2["default"].createElement(_reactNative.Text, null, "wrap=\"nowrap\":不换行")), _react2["default"].createElement(_antdMobile.WingBlank, { style: { marginBottom: 5 } }, _react2["default"].createElement(_antdMobile.Flex, { wrap: "nowrap" }, 'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
            return _react2["default"].createElement(Circle, { key: i + '-' + char });
        }))), _react2["default"].createElement(_antdMobile.WhiteSpace, null));
    };

    return FlexExample;
}(_react2["default"].Component);

exports["default"] = FlexExample;
module.exports = exports['default'];