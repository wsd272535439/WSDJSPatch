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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _style = require('./style/');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SegmentedControl = function (_React$Component) {
    (0, _inherits3["default"])(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        (0, _classCallCheck3["default"])(this, SegmentedControl);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    SegmentedControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex !== this.props.selectedIndex) {
            this.setState({
                selectedIndex: nextProps.selectedIndex
            });
        }
    };

    SegmentedControl.prototype.onPress = function onPress(e, index, value) {
        var _props = this.props,
            enabled = _props.enabled,
            onChange = _props.onChange,
            onValueChange = _props.onValueChange;

        if (enabled) {
            e.nativeEvent.selectedSegmentIndex = index;
            e.nativeEvent.value = value;
            if (onChange) {
                onChange(e);
            }
            if (onValueChange) {
                onValueChange(value);
            }
            this.setState({
                selectedIndex: index
            });
        }
    };

    SegmentedControl.prototype.render = function render() {
        var _this2 = this;

        var _props2 = this.props,
            style = _props2.style,
            enabled = _props2.enabled,
            _props2$values = _props2.values,
            values = _props2$values === undefined ? [] : _props2$values,
            tintColor = _props2.tintColor;

        var selectedIndex = this.state.selectedIndex;
        var items = values.map(function (value, idx) {
            var itemRadius = null;
            if (idx === 0) {
                itemRadius = _style2["default"].itemLeftRadius;
            } else if (idx === values.length - 1) {
                itemRadius = _style2["default"].itemRightRadius;
            }
            return _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { key: idx, onPress: function onPress(e) {
                    return _this2.onPress(e, idx, value);
                } }, _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].item, itemRadius, {
                    backgroundColor: idx === selectedIndex ? tintColor : '#fff',
                    borderColor: tintColor
                }] }, _react2["default"].createElement(_reactNative.Text, { style: [_style2["default"].itemText, {
                    color: idx === selectedIndex ? '#fff' : tintColor
                }] }, value)));
        });
        var enabledOpacity = enabled ? 1 : 0.5;
        var segmentedStyle = (0, _objectAssign2["default"])({}, style, {
            opacity: enabledOpacity,
            borderColor: tintColor
        });
        return _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].segment, segmentedStyle, style] }, items);
    };

    return SegmentedControl;
}(_react2["default"].Component);

exports["default"] = SegmentedControl;

SegmentedControl.defaultProps = {
    selectedIndex: 0,
    enabled: true,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    tintColor: '#108ee9',
    style: {}
};
module.exports = exports['default'];