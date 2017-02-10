'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
exports["default"] = _react2["default"].createClass({
    displayName: 'basic',
    getInitialState: function getInitialState() {
        return {
            clicked: 'none',
            text: ''
        };
    },
    render: function render() {
        return _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.View, { style: [{ padding: 8 }] }, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onClick: this.showActionSheet }, "默认状态操作列表")), _react2["default"].createElement(_reactNative.Text, { style: [{ padding: 8 }] }, "点击过的按钮: ", this.state.clicked), _react2["default"].createElement(_reactNative.View, { style: [{ padding: 8 }] }, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onClick: this.showShareActionSheet }, "带分享功能的操作列表")), _react2["default"].createElement(_reactNative.Text, { style: [{ padding: 8 }] }, this.state.text));
    },
    showActionSheet: function showActionSheet() {
        var _this = this;

        _antdMobile.ActionSheet.showActionSheetWithOptions({
            title: '标题',
            message: '我是描述我是描述',
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX
        }, function (buttonIndex) {
            _this.setState({ clicked: BUTTONS[buttonIndex] });
        });
    },
    showShareActionSheet: function showShareActionSheet() {
        var _this2 = this;

        var androidActionSheetName = 'acn';
        var opts = {
            url: 'https://www.alipay.com/',
            message: 'message to go with the shared url',
            excludedActivityTypes: [_react2["default"].createElement(_antdMobile.Button, { onClick: function onClick() {
                    return _antdMobile.ActionSheet.close(androidActionSheetName);
                } }, "close ActionSheet")],
            subject: null,
            androidActionSheetName: androidActionSheetName
        };
        if (_reactNative.Platform.OS === 'ios') {
            opts.subject = 'a subject to go in the email heading';
            opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];
        }
        _antdMobile.ActionSheet.showShareActionSheetWithOptions(opts, function (error) {
            return alert(error);
        }, function (success, method) {
            var text = void 0;
            if (success) {
                text = '\u901A\u8FC7 ' + method + ' \u5206\u4EAB';
            } else {
                text = '您没有分享';
            }
            _this2.setState({ text: text });
        });
    }
});
var title = exports.title = 'ActionSheet';
var description = exports.description = 'ActionSheet example';