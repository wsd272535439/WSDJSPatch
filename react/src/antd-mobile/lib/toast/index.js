'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var onClose = arguments[3];

    if (typeof duration === 'function') {
        onClose = duration;
        duration = 3;
    }
    _rnTopview2["default"].set(_react2["default"].createElement(_ToastContainer2["default"], { content: content, duration: duration, onClose: onClose, type: type, onAnimationEnd: function onAnimationEnd() {
            _rnTopview2["default"].remove();
        } }));
}
exports["default"] = {
    SHORT: 3,
    LONG: 8,
    show: function show(content, duration) {
        return notice(content, 'info', duration, function () {});
    },
    info: function info(content, duration, onClose) {
        return notice(content, 'info', duration, onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, 'success', duration, onClose);
    },
    fail: function fail(content, duration, onClose) {
        return notice(content, 'fail', duration, onClose);
    },
    offline: function offline(content, duration, onClose) {
        return notice(content, 'offline', duration, onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, 'loading', duration, onClose);
    },
    hide: function hide() {
        _rnTopview2["default"].remove();
    }
};
module.exports = exports['default'];