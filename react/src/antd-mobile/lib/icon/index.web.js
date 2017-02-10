'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

exports["default"] = function (props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    return _react2["default"].createElement("i", __assign({}, props, { className: (className + ' anticon anticon-' + type).trim() }));
};

module.exports = exports['default'];