'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!args || !args[2]) {
        // console.log('Must specify callbackOrActions');
        return;
    }
    var prefixCls = 'am-modal';
    var title = args[0];
    var inputDom = void 0;
    var type = args[3] || 'default';
    var data = {};
    function onChange(e) {
        var target = e.target;
        var inputType = target.getAttribute('type');
        data[inputType] = target.value;
    }
    switch (type) {
        case 'login-password':
            inputDom = _react2["default"].createElement("div", null, _react2["default"].createElement("div", { className: prefixCls + '-input' }, _react2["default"].createElement("input", { type: "text", defaultValue: "", onChange: onChange })), _react2["default"].createElement("div", { className: prefixCls + '-input' }, _react2["default"].createElement("input", { type: "password", defaultValue: "", onChange: onChange })));
            break;
        case 'secure-text':
            inputDom = _react2["default"].createElement("div", null, _react2["default"].createElement("div", { className: prefixCls + '-input' }, _react2["default"].createElement("input", { type: "password", defaultValue: "", onChange: onChange })));
            break;
        case 'plain-text':
        case 'default':
        default:
            inputDom = _react2["default"].createElement("div", null, _react2["default"].createElement("div", { className: prefixCls + '-input' }, _react2["default"].createElement("input", { type: "text", defaultValue: "", onChange: onChange })));
            break;
    }
    var content = _react2["default"].createElement("div", null, args[1], inputDom);
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        _reactDom2["default"].unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }
    function getArgs(func) {
        var text = data.text || '';
        var password = data.password || '';
        if (type === 'login-password') {
            return func(text, password);
        } else if (type === 'secure-text') {
            return func(password);
        }
        return func(text);
    }
    var actions = void 0;
    if (typeof args[2] === 'function') {
        actions = [{ text: '取消' }, { text: '确定', onPress: function onPress() {
                getArgs(args[2]);
            } }];
    } else {
        actions = args[2].map(function (item) {
            return {
                text: item.text,
                onPress: function onPress() {
                    if (item.onPress) {
                        getArgs(item.onPress);
                    }
                }
            };
        });
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            orginPress();
            close();
        };
        return button;
    });
    _reactDom2["default"].render(_react2["default"].createElement(_Modal2["default"], { visible: true, transparent: true, prefixCls: prefixCls, title: title, closable: false, maskClosable: false, transitionName: "am-zoom", footer: footer, maskTransitionName: "am-fade" }, _react2["default"].createElement("div", { style: { zoom: 1, overflow: 'hidden' } }, content)), div);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = exports['default'];