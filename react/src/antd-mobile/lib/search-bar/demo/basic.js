'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _react2["default"].createClass({
    displayName: 'basic',
    getInitialState: function getInitialState() {
        return {
            value: '美食'
        };
    },
    onChange: function onChange(value) {
        this.setState({ value: value });
    },
    clear: function clear() {
        this.setState({ value: '' });
    },
    render: function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_antdMobile.SearchBar, { defaultValue: "初始值", placeholder: "搜索" }), _react2["default"].createElement(_antdMobile.SearchBar, { value: this.state.value, placeholder: "搜索", onSubmit: function onSubmit(value) {
                return _reactNative.Alert.alert(value);
            }, onCancel: this.clear, onChange: this.onChange, showCancelButton: true }));
    }
});
module.exports = exports['default'];