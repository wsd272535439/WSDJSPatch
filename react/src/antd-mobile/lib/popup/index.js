'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _Modal = require('rc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Popup = function (_React$Component) {
    (0, _inherits3["default"])(Popup, _React$Component);

    function Popup(props) {
        (0, _classCallCheck3["default"])(this, Popup);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            visible: _this.props.visible || false
        };
        return _this;
    }

    Popup.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        _reactNative.DeviceEventEmitter.addListener('PopupHide', function () {
            _this2.hide();
        });
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        _reactNative.DeviceEventEmitter.removeAllListeners('PopupHide');
    };

    Popup.prototype.hide = function hide() {
        this.setState({
            visible: false
        });
    };

    Popup.prototype.onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2["default"].remove();
        }
    };

    Popup.prototype.render = function render() {
        return _react2["default"].createElement(_Modal2["default"], { animateAppear: true, onAnimationEnd: this.onAnimationEnd, animationType: this.props.animationType, wrapStyle: this.props.animationType === 'slide-up' ? _index2["default"].wrap : _index2["default"].wrapTop, visible: this.state.visible, onClose: this.props.maskClosable ? this.hide : undefined }, this.props.children);
    };

    return Popup;
}(_react2["default"].Component);

Popup.defaultProps = {
    animationType: 'slide-down'
};
exports["default"] = {
    show: function show(content, options) {
        _rnTopview2["default"].set(_react2["default"].createElement(Popup, { animationType: options.animationType, visible: true }, content));
    },
    hide: function hide() {
        _reactNative.DeviceEventEmitter.emit('PopupHide');
    }
};
module.exports = exports['default'];