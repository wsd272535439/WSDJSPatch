'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = exports["default"] = undefined;

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

var Item = _antdMobile.List.Item;
var Brief = Item.Brief;

var BasicListExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicListExample, _React$Component);

    function BasicListExample() {
        (0, _classCallCheck3["default"])(this, BasicListExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicListExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.ScrollView, { style: { flex: 1, backgroundColor: '#f5f5f9' }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }, _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                return '左侧无icon';
            } }, _react2["default"].createElement(Item, { "data-seed": "logId" }, "标题文字点击无反馈，文字超长则隐藏"), _react2["default"].createElement(Item, { wrap: true }, "文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"), _react2["default"].createElement(Item, { onClick: function onClick() {} }, "内容内容"), _react2["default"].createElement(Item, { extra: "箭头向右", arrow: "horizontal" }, "标题文字"), _react2["default"].createElement(Item, { extra: "箭头向下", arrow: "down" }, "标题文字"), _react2["default"].createElement(Item, { extra: "箭头向上", arrow: "up" }, "标题文字"), _react2["default"].createElement(Item, { extra: "没有箭头", arrow: "empty" }, "标题文字"), _react2["default"].createElement(Item, { extra: _react2["default"].createElement(_reactNative.View, null, "内容内容", _react2["default"].createElement(Brief, { style: { textAlign: 'right' } }, "辅助文字内容")), multipleLine: true }, "垂直居中对齐"), _react2["default"].createElement(Item, { extra: _react2["default"].createElement(_reactNative.View, null, "内容内容", _react2["default"].createElement(Brief, { style: { textAlign: 'right' } }, "辅助文字内容")), multipleLine: true, align: "top" }, "顶部对齐"), _react2["default"].createElement(Item, { extra: "内容内容", multipleLine: true }, "垂直居中对齐", _react2["default"].createElement(Brief, null, "辅助文字内容")), _react2["default"].createElement(Item, { extra: "内容内容", multipleLine: true, align: "top", arrow: "horizontal" }, "顶部对齐", _react2["default"].createElement(Brief, null, "辅助文字内容"), _react2["default"].createElement(Brief, null, "辅助文字内容"))), _react2["default"].createElement(_antdMobile.List, { renderHeader: function renderHeader() {
                return '带缩略图';
            } }, _react2["default"].createElement(Item, { thumb: "https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" }, "thumb"), _react2["default"].createElement(Item, { thumb: "https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png", arrow: "horizontal" }, "thumb"), _react2["default"].createElement(Item, { extra: _react2["default"].createElement(_reactNative.Image, { source: { uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }, style: { width: 29, height: 29 } }), arrow: "horizontal" }, "extra为Image")));
    };

    return BasicListExample;
}(_react2["default"].Component);

exports["default"] = BasicListExample;
var title = exports.title = 'List';
var description = exports.description = 'List Example';