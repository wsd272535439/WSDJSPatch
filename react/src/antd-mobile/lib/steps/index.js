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

var _StepsItem = require('./StepsItem');

var _StepsItem2 = _interopRequireDefault(_StepsItem);

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Steps = function (_React$Component) {
    (0, _inherits3["default"])(Steps, _React$Component);

    function Steps(props) {
        (0, _classCallCheck3["default"])(this, Steps);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onLayout = function (e) {
            _this.setState({
                wrapWidth: e.nativeEvent.layout.width
            });
        };
        _this.state = {
            wrapWidth: 0
        };
        return _this;
    }

    Steps.prototype.render = function render() {
        var _this2 = this;

        var children = this.props.children;
        var wrapView = this.props.direction === 'vertical' ? '' : 'warp_row';
        return _react2["default"].createElement(_reactNative.View, { style: _style2["default"][wrapView], onLayout: function onLayout(e) {
                _this2.onLayout(e);
            } }, _react2["default"].Children.map(children, function (ele, idx) {
            var errorTail = -1;
            if (idx < children.length - 1) {
                var status = children[idx + 1].props.status;
                if (status === 'error') {
                    errorTail = idx;
                }
            }
            return _react2["default"].cloneElement(ele, {
                index: idx,
                last: idx === children.length - 1,
                direction: _this2.props.direction,
                current: _this2.props.current,
                width: 1 / (children.length - 1) * _this2.state.wrapWidth,
                size: _this2.props.size,
                finishIcon: _this2.props.finishIcon,
                errorTail: errorTail
            });
        }));
    };

    return Steps;
}(_react2["default"].Component);

exports["default"] = Steps;

Steps.defaultProps = {
    direction: ''
};
Steps.Step = _StepsItem2["default"];
module.exports = exports['default'];