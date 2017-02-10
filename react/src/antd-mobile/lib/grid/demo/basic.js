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

var data = Array.from(new Array(9)).map(function (_val, i) {
    return {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: '\u540D\u5B57' + i
    };
});

var BasicGridExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicGridExample, _React$Component);

    function BasicGridExample() {
        (0, _classCallCheck3["default"])(this, BasicGridExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BasicGridExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.View, { style: [{ margin: 10 }] }, _react2["default"].createElement(_reactNative.Text, null, "简单示例")), _react2["default"].createElement(_reactNative.View, { style: [{ padding: 10 }] }, _react2["default"].createElement(_antdMobile.Grid, { data: data, hasLine: false })), _react2["default"].createElement(_reactNative.View, { style: [{ margin: 10 }] }, _react2["default"].createElement(_reactNative.Text, null, "走马灯")), _react2["default"].createElement(_antdMobile.Grid, { data: data, columnNum: 3, isCarousel: true, onClick: function onClick(_el, index) {
                return alert(index);
            } }));
    };

    return BasicGridExample;
}(_react2["default"].Component);

exports["default"] = BasicGridExample;
module.exports = exports['default'];