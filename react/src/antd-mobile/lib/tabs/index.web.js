'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _SwipeableTabContent = require('rc-tabs/lib/SwipeableTabContent');

var _SwipeableTabContent2 = _interopRequireDefault(_SwipeableTabContent);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _InkTabBar = require('rc-tabs/lib/InkTabBar');

var _InkTabBar2 = _interopRequireDefault(_InkTabBar);

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

var Tabs = _react2["default"].createClass({
    displayName: 'Tabs',

    statics: {
        TabPane: _rcTabs.TabPane
    },
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'am-tabs',
            animated: true,
            swipeable: true,
            onChange: function onChange() {},

            tabBarPosition: 'top',
            onTabClick: function onTabClick() {}
        };
    },
    renderTabBar: function renderTabBar() {
        var props = this.props;

        return _react2["default"].createElement(_InkTabBar2["default"], { onTabClick: props.onTabClick, inkBarAnimated: props.animated });
    },
    renderTabContent: function renderTabContent() {
        var _props = this.props,
            animated = _props.animated,
            swipeable = _props.swipeable;

        return swipeable ? _react2["default"].createElement(_SwipeableTabContent2["default"], { animated: animated }) : _react2["default"].createElement(_TabContent2["default"], { animated: animated });
    },
    render: function render() {
        return _react2["default"].createElement(_rcTabs2["default"], __assign({ renderTabBar: this.renderTabBar, renderTabContent: this.renderTabContent }, this.props));
    }
});
exports["default"] = Tabs;
module.exports = exports['default'];