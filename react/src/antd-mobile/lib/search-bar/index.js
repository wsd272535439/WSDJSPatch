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

var _reactNative = require('react-native');

var _PropsType = require('./PropsType');

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

var SearchBar = function (_React$Component) {
    (0, _inherits3["default"])(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3["default"])(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value);
            }
        };
        _this.onChangeText = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = { value: value };
        return _this;
    }

    SearchBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    SearchBar.prototype.render = function render() {
        var _props = this.props,
            showCancelButton = _props.showCancelButton,
            cancelText = _props.cancelText,
            disabled = _props.disabled,
            styles = _props.styles;

        var restProps = (0, _objectAssign2["default"])({}, this.props);
        ['showCancelButton', 'cancelText', 'styles', 'value', 'onChangeText', 'onSubmitEditing', 'disabled'].forEach(function (prop) {
            if (restProps.hasOwnProperty(prop)) {
                delete restProps[prop];
            }
        });
        var value = this.state.value;

        return _react2["default"].createElement(_reactNative.View, { style: styles.wrapper }, _react2["default"].createElement(_reactNative.TextInput, __assign({ value: value, onChangeText: this.onChangeText, style: styles.input, editable: !disabled, ref: "searchInput", onSubmitEditing: this.onSubmit, clearButtonMode: "always", underlineColorAndroid: "transparent" }, restProps)), _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/search.png'), style: styles.search, resizeMode: "stretch" }), showCancelButton ? _react2["default"].createElement(_reactNative.View, { style: styles.cancelTextContainer }, _react2["default"].createElement(_reactNative.Text, { style: styles.cancelText, onPress: this.onCancel }, cancelText)) : null);
    };

    return SearchBar;
}(_react2["default"].Component);

exports["default"] = SearchBar;

SearchBar.defaultProps = (0, _objectAssign2["default"])(_PropsType.defaultProps, { styles: _index2["default"] });
module.exports = exports['default'];