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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FlexItem = function (_React$Component) {
    (0, _inherits3["default"])(FlexItem, _React$Component);

    function FlexItem() {
        (0, _classCallCheck3["default"])(this, FlexItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FlexItem.prototype.render = function render() {
        var _props = this.props,
            style = _props.style,
            children = _props.children,
            flex = _props.flex,
            onPress = _props.onPress;

        var flexItemStyle = {
            flex: flex || 1
        };
        return _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: onPress }, _react2["default"].createElement(_reactNative.View, { style: [flexItemStyle, style] }, children));
    };

    return FlexItem;
}(_react2["default"].Component);

exports["default"] = FlexItem;

FlexItem.defaultProps = {
    flex: 1
};
module.exports = exports['default'];