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

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Progress = function (_React$Component) {
    (0, _inherits3["default"])(Progress, _React$Component);

    function Progress(props) {
        (0, _classCallCheck3["default"])(this, Progress);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onLayout = function (e) {
            _this.setState({
                wrapWidth: e.nativeEvent.layout.width
            });
        };
        _this.normalPercent = function (percent) {
            var widthPercent = 0;
            if (percent > 0) {
                widthPercent = percent > 100 ? 100 : percent;
            }
            return widthPercent;
        };
        _this.getWidth = function () {
            var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.percent;

            return _this.state.wrapWidth * (_this.normalPercent(percent) / 100);
        };
        _this.state = {
            wrapWidth: props.wrapWidth || _reactNative.Dimensions.get('window').width,
            percentage: new _reactNative.Animated.Value(0)
        };
        return _this;
    }

    Progress.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.wrapWidth !== this.props.wrapWidth) {
            this.setState({ wrapWidth: nextProps.wrapWidth });
        }
        if (this.props.appearTransition && nextProps.percent !== this.props.percent) {
            this.setState({ percentage: new _reactNative.Animated.Value(this.getWidth(nextProps.percent)) });
        }
    };

    Progress.prototype.componentDidMount = function componentDidMount() {
        if (this.props.appearTransition) {
            this.state.percentage.setValue(0);
            _reactNative.Animated.timing(this.state.percentage, {
                toValue: this.getWidth(),
                duration: 1000
            }).start();
        }
    };

    Progress.prototype.render = function render() {
        var _props = this.props,
            position = _props.position,
            unfilled = _props.unfilled,
            style = _props.style;

        var percentStyle = {
            width: this.getWidth(),
            height: 0
        };
        var child = _react2["default"].createElement(_reactNative.View, { style: [_index2["default"].progressBar, style, percentStyle] });
        if (this.props.appearTransition) {
            percentStyle.width = this.state.percentage;
            child = _react2["default"].createElement(_reactNative.Animated.View, { style: [_index2["default"].progressBar, style, percentStyle] });
        }
        return _react2["default"].createElement(_reactNative.View, { onLayout: this.onLayout, style: [_index2["default"].progressOuter, position === 'fixed' ? { position: 'absolute', top: 0 } : null, unfilled === 'hide' ? { backgroundColor: 'transparent' } : null] }, child);
    };

    return Progress;
}(_react2["default"].Component);

exports["default"] = Progress;

Progress.defaultProps = {
    percent: 0,
    position: 'normal',
    unfilled: 'show',
    appearTransition: false
};
module.exports = exports['default'];