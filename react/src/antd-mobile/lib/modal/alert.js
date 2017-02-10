'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    var title = arguments.length <= 0 ? undefined : arguments[0];
    var content = arguments.length <= 1 ? undefined : arguments[1];
    var actions = (arguments.length <= 2 ? undefined : arguments[2]) || [{ text: '确定' }];
    if (!title && !content) {
        // console.log('Must specify either an alert title, or message, or both');
        return;
    }
    var prefixCls = 'am-modal';
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        _reactDom2["default"].unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            orginPress();
            close();
        };
        return button;
    });
    _reactDom2["default"].render(_react2["default"].createElement(_Modal2["default"], { visible: true, transparent: true, prefixCls: prefixCls, title: title, transitionName: "am-zoom", closable: false, maskClosable: false, footer: footer, maskTransitionName: "am-fade" }, _react2["default"].createElement("div", { style: { zoom: 1, overflow: 'hidden' } }, content)), div);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = exports['default'];