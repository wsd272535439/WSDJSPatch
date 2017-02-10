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

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

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

var Card = function (_React$Component) {
    (0, _inherits3["default"])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Card.prototype.render = function render() {
        var cardStyle = this.props.full ? _index2["default"].full : {};
        return _react2["default"].createElement(_reactNative.View, __assign({}, this.props, { style: [_index2["default"].card, cardStyle, this.props.style] }), this.props.children);
    };

    return Card;
}(_react2["default"].Component);

exports["default"] = Card;

Card.defaultProps = {
    style: {},
    full: false
};
Card.Header = _CardHeader2["default"];
Card.Body = _CardBody2["default"];
Card.Footer = _CardFooter2["default"];
module.exports = exports['default'];