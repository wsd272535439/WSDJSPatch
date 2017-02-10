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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RNActivityIndicator = function (_React$Component) {
    (0, _inherits3["default"])(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        (0, _classCallCheck3["default"])(this, RNActivityIndicator);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    RNActivityIndicator.prototype._renderToast = function _renderToast() {
        return _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].container] }, _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].innerContainer, { height: 89 }] }, _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].wrapper] }, _react2["default"].createElement(_reactNative.ActivityIndicator, { color: "white", size: "large" }), this.props.text && _react2["default"].createElement(_reactNative.Text, { style: [_style2["default"].toast] }, this.props.text))));
    };

    RNActivityIndicator.prototype._renderSpinner = function _renderSpinner() {
        return _react2["default"].createElement(_reactNative.View, { style: [{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }] }, _react2["default"].createElement(_reactNative.ActivityIndicator, { color: this.props.color, size: this.props.size }), this.props.text && _react2["default"].createElement(_reactNative.Text, { style: [_style2["default"].tip] }, this.props.text));
    };

    RNActivityIndicator.prototype.render = function render() {
        if (this.props.animating) {
            return this.props.toast ? this._renderToast() : this._renderSpinner();
        }
        return null;
    };

    return RNActivityIndicator;
}(_react2["default"].Component);

exports["default"] = RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false
};
module.exports = exports['default'];