'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeScrollableTabView = require('react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = _interopRequireDefault(_reactNativeScrollableTabView);

var _style = require('./style/');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3["default"])(Tabs, _React$Component);

    function Tabs(props) {
        (0, _classCallCheck3["default"])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onTabClick = function (_ref) {
            var i = _ref.i;

            var key = _this.getKey(i);
            var _this$props = _this.props,
                onTabClick = _this$props.onTabClick,
                onChange = _this$props.onChange;

            if (onTabClick) {
                onTabClick(key);
            }
            if (_this.activeIndex !== i) {
                if (onChange) {
                    onChange(key);
                }
                _this.activeIndex = i;
            }
        };
        _this.renderTabBar = function () {
            var _this$props2 = _this.props,
                tabBarPosition = _this$props2.tabBarPosition,
                underlineColor = _this$props2.underlineColor,
                activeUnderlineColor = _this$props2.activeUnderlineColor,
                textColor = _this$props2.textColor,
                activeTextColor = _this$props2.activeTextColor,
                styles = _this$props2.styles;

            var barStyle = tabBarPosition === 'top' ? styles.barTop : styles.barBottom;
            return _react2["default"].createElement(_reactNativeScrollableTabView.DefaultTabBar, { activeTextColor: activeTextColor, inactiveTextColor: textColor, style: [barStyle, { borderColor: underlineColor }], textStyle: [styles.text], tabStyle: [styles.tab], underlineStyle: [styles.underline, {
                    bottom: tabBarPosition === 'top' ? 0 : null,
                    backgroundColor: activeUnderlineColor
                }] });
        };
        _this.activeIndex = 0;
        return _this;
    }

    Tabs.prototype.getContents = function getContents() {
        var children = this.props.children;

        var newChildren = [];
        _react2["default"].Children.forEach(children, function (child, idx) {
            newChildren.push(_react2["default"].cloneElement(child, {
                key: idx,
                tabLabel: child.props.tab,
                children: child.props.children
            }));
        });
        return newChildren;
    };

    Tabs.prototype.getKey = function getKey(index) {
        var children = this.props.children;
        var key = void 0;
        _react2["default"].Children.forEach(children, function (child, idx) {
            if (index === idx) {
                key = child.key;
            }
        });
        return key;
    };

    Tabs.prototype.render = function render() {
        var _props = this.props,
            tabBarPosition = _props.tabBarPosition,
            defaultActiveKey = _props.defaultActiveKey,
            activeKey = _props.activeKey,
            animated = _props.animated,
            children = _props.children,
            swipeable = _props.swipeable;

        var defaultActiveIndex = 0;
        var activeIndex = 0;
        _react2["default"].Children.forEach(children, function (child, idx) {
            if (defaultActiveKey === child.key) {
                defaultActiveIndex = idx;
            }
            if (activeKey === child.key) {
                activeIndex = idx;
            }
        });
        this.activeIndex = activeIndex;
        return _react2["default"].createElement(_reactNativeScrollableTabView2["default"], { tabBarPosition: tabBarPosition, scrollWithoutAnimation: !animated, initialPage: defaultActiveIndex, page: activeIndex, locked: swipeable, renderTabBar: this.renderTabBar, onChangeTab: this.onTabClick }, this.getContents());
    };

    return Tabs;
}(_react2["default"].Component);

Tabs.defaultProps = {
    tabBarPosition: 'top',
    animated: true,
    swipeable: true,
    onChange: function onChange() {},
    onTabClick: function onTabClick() {},

    underlineColor: '#ddd',
    activeUnderlineColor: '#108ee9',
    textColor: '#000',
    activeTextColor: '#108ee9',
    styles: _style2["default"]
};
exports["default"] = Tabs;
module.exports = exports['default'];