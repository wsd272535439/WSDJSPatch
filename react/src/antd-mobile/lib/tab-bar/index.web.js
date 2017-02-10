'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _Tab = require('./Tab.web');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabBar = require('rc-tabs/lib/TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _getDataAttr = require('../_util/getDataAttr');

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AntTabBar = _react2["default"].createClass({
    displayName: 'AntTabBar',

    statics: {
        Item: function Item() {}
    },
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'am-tab-bar',
            barTintColor: 'white',
            tintColor: '#108ee9',
            unselectedTintColor: '#888'
        };
    },
    onChange: function onChange(key) {
        _react2["default"].Children.forEach(this.props.children, function (c) {
            if (c.key === key && c.props.onPress) {
                c.props.onPress();
            }
        });
    },
    renderTabBar: function renderTabBar() {
        var _props = this.props,
            onTabClick = _props.onTabClick,
            barTintColor = _props.barTintColor,
            hidden = _props.hidden,
            prefixCls = _props.prefixCls;

        var barCls = hidden ? prefixCls + '-bar-hidden' : '';
        return _react2["default"].createElement(_TabBar2["default"], { className: barCls, onTabClick: onTabClick, style: { backgroundColor: barTintColor } });
    },
    renderTabContent: function renderTabContent() {
        return _react2["default"].createElement(_TabContent2["default"], { animated: false });
    },
    render: function render() {
        var _this = this;

        var activeKey = void 0;
        var children = [];
        _react2["default"].Children.forEach(this.props.children, function (c) {
            if (c.props.selected) {
                activeKey = c.key;
            }
            children.push(c);
        });
        var _props2 = this.props,
            tintColor = _props2.tintColor,
            unselectedTintColor = _props2.unselectedTintColor;

        var panels = children.map(function (c) {
            var cProps = c.props;
            var tab = _react2["default"].createElement(_Tab2["default"], { prefixCls: _this.props.prefixCls + '-tab', badge: cProps.badge, selected: cProps.selected, icon: cProps.icon, selectedIcon: cProps.selectedIcon, title: cProps.title, tintColor: tintColor, unselectedTintColor: unselectedTintColor, dataAttrs: (0, _getDataAttr2["default"])(cProps) });
            return _react2["default"].createElement(_rcTabs.TabPane, { placeholder: "正在加载", tab: tab, key: c.key }, cProps.children);
        });
        return _react2["default"].createElement(_rcTabs2["default"], { renderTabBar: this.renderTabBar, renderTabContent: this.renderTabContent, tabBarPosition: "bottom", prefixCls: this.props.prefixCls, activeKey: activeKey, onChange: this.onChange }, panels);
    }
});
exports["default"] = AntTabBar;
module.exports = exports['default'];