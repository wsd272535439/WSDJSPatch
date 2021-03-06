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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

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

var View = function (_React$Component) {
    (0, _inherits3["default"])(View, _React$Component);

    function View() {
        (0, _classCallCheck3["default"])(this, View);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    View.prototype.render = function render() {
        var props = (0, _objectAssign2["default"])({}, this.props);
        if (Array.isArray(props.style)) {
            (function () {
                var style = {};
                props.style.forEach(function (s) {
                    (0, _objectAssign2["default"])(style, s);
                });
                props.style = style;
            })();
        }
        var Component = props.Component;

        return _react2["default"].createElement(Component, __assign({}, props));
    };

    return View;
}(_react2["default"].Component);

exports["default"] = View;

View.defaultProps = {
    Component: 'div'
};
module.exports = exports['default'];