'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Item = require('./Item.web');

var _Item2 = _interopRequireDefault(_Item);

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
        if (nextProps.selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: nextProps.selectedIndex
            });
        }
    };

    SegmentedControl.prototype.onClick = function onClick(e, index, value) {
        var _props = this.props,
            enabled = _props.enabled,
            onChange = _props.onChange,
            onValueChange = _props.onValueChange;

        if (enabled && this.state.selectedIndex !== index) {
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
        var _this2 = this,
            _classNames;

        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            style = _props2.style,
            enabled = _props2.enabled,
            _props2$values = _props2.values,
            values = _props2$values === undefined ? [] : _props2$values,
            className = _props2.className,
            tintColor = _props2.tintColor;

        var selectedIndex = this.state.selectedIndex;
        var items = values.map(function (value, idx) {
            return _react2["default"].createElement(_Item2["default"], { key: idx, prefixCls: prefixCls, label: value, enabled: enabled, tintColor: tintColor, selected: idx === selectedIndex, onClick: function onClick(e) {
                    return _this2.onClick(e, idx, value);
                } });
        });
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', !enabled), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, items);
    };

    return SegmentedControl;
}(_react2["default"].Component);

exports["default"] = SegmentedControl;

SegmentedControl.defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    enabled: true,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    style: {}
};
module.exports = exports['default'];