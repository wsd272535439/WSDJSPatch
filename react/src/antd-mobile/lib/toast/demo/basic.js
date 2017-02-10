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

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function showToast() {
    _antdMobile.Toast.info('这是一个 toast 提示!!!');
}
function successToast() {
    _antdMobile.Toast.success('加载成功!!!', 2);
}
function failToast() {
    _antdMobile.Toast.fail('加载失败!!!');
}
function offline() {
    _antdMobile.Toast.offline('网络连接失败!!!');
}
function loadingToast() {
    _antdMobile.Toast.loading('加载中...', function () {
        console.log('加载完成!!!');
    });
}

var ToastExample = function (_React$Component) {
    (0, _inherits3["default"])(ToastExample, _React$Component);

    function ToastExample() {
        (0, _classCallCheck3["default"])(this, ToastExample);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    ToastExample.prototype.componentDidMount = function componentDidMount() {
        _reactNative.DeviceEventEmitter.addListener('navigatorBack', function () {
            _antdMobile.Toast.hide();
        });
    };

    ToastExample.prototype.componentWillUnmount = function componentWillUnmount() {
        _reactNative.DeviceEventEmitter.removeAllListeners('navigatorBack');
    };

    ToastExample.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: { marginTop: 30 } }, _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: showToast }, "纯文字 toast")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: successToast }, "成功 toast")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: failToast }, "失败 toast")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: offline }, "网络 toast")), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.WingBlank, null, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: loadingToast }, "加载中 toast")), _react2["default"].createElement(_antdMobile.WhiteSpace, null));
    };

    return ToastExample;
}(_react2["default"].Component);

exports["default"] = ToastExample;
module.exports = exports['default'];