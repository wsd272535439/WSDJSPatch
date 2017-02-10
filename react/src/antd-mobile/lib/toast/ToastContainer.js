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

var _style = require('./style/');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ToastContainer = function (_React$Component) {
    (0, _inherits3["default"])(ToastContainer, _React$Component);

    function ToastContainer(props) {
        (0, _classCallCheck3["default"])(this, ToastContainer);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            fadeAnim: new _reactNative.Animated.Value(0)
        };
        return _this;
    }

    ToastContainer.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var _props = this.props,
            onClose = _props.onClose,
            duration = _props.duration,
            onAnimationEnd = _props.onAnimationEnd;

        var timing = _reactNative.Animated.timing;
        if (this.anim) {
            this.anim = null;
        }
        var animArr = [timing(this.state.fadeAnim, { toValue: 1, duration: 200 }), _reactNative.Animated.delay(duration * 1000)];
        if (duration > 0) {
            animArr.push(timing(this.state.fadeAnim, { toValue: 0, duration: 200 }));
        }
        this.anim = _reactNative.Animated.sequence(animArr);
        this.anim.start(function () {
            if (duration > 0) {
                _this2.anim = null;
                if (onClose) {
                    onClose();
                }
                if (onAnimationEnd) {
                    onAnimationEnd();
                }
            }
        });
    };

    ToastContainer.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.anim) {
            this.anim.stop();
            this.anim = null;
        }
    };

    ToastContainer.prototype.render = function render() {
        var _props2 = this.props,
            _props2$type = _props2.type,
            type = _props2$type === undefined ? '' : _props2$type,
            content = _props2.content;

        var iconType = {
            success: require('./images/success.png'),
            fail: require('./images/fail.png'),
            offline: require('./images/offline.png')
        };
        var iconDom = null;
        if (type === 'loading') {
            iconDom = _react2["default"].createElement(_reactNative.ActivityIndicator, { animating: true, style: [_style2["default"].centering], color: "white", size: "large" });
        } else if (type === 'info') {
            iconDom = null;
        } else {
            iconDom = _react2["default"].createElement(_reactNative.Image, { source: iconType[type], style: _style2["default"].image });
        }
        return _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].container] }, _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].innerContainer] }, _react2["default"].createElement(_reactNative.Animated.View, { style: { opacity: this.state.fadeAnim } }, _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].innnerWrap, iconDom ? _style2["default"].iconToast : _style2["default"].textToast] }, iconDom, _react2["default"].createElement(_reactNative.Text, { style: _style2["default"].content }, content)))));
    };

    return ToastContainer;
}(_react2["default"].Component);

exports["default"] = ToastContainer;

ToastContainer.defaultProps = {
    duration: 3,
    onClose: function onClose() {}
};
module.exports = exports['default'];