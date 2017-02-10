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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BasicTabBarExample = function (_React$Component) {
    (0, _inherits3["default"])(BasicTabBarExample, _React$Component);

    function BasicTabBarExample(props) {
        (0, _classCallCheck3["default"])(this, BasicTabBarExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            selectedTab: 'redTab',
            notifCount: 0,
            presses: 0
        };
        return _this;
    }

    BasicTabBarExample.prototype.renderContent = function renderContent(pageText, num) {
        return _react2["default"].createElement(_reactNative.View, { style: { flex: 1, alignItems: 'center', backgroundColor: 'white' } }, _react2["default"].createElement(_reactNative.Text, { style: { margin: 50 } }, pageText), _react2["default"].createElement(_reactNative.Text, { style: { margin: 50 } }, num, " re-renders of the ", pageText));
    };

    BasicTabBarExample.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].createElement(_antdMobile.TabBar, { unselectedTintColor: "#949494", tintColor: "#33A3F4", barTintColor: "#ccc" }, _react2["default"].createElement(_antdMobile.TabBar.Item, { title: "生活", icon: require('./TabBar_HomeBar.png'), selectedIcon: require('./TabBar_HomeBar_Sel.png'), selected: this.state.selectedTab === 'blueTab', onPress: function onPress() {
                _this2.setState({
                    selectedTab: 'blueTab'
                });
            } }, this.renderContent('生活 Tab')), _react2["default"].createElement(_antdMobile.TabBar.Item, { icon: require('./TabBar_Businesses.png'), selectedIcon: require('./TabBar_Businesses_Sel.png'), title: "口碑", badge: this.state.notifCount > 0 ? this.state.notifCount : undefined, selected: this.state.selectedTab === 'redTab', onPress: function onPress() {
                _this2.setState({
                    selectedTab: 'redTab',
                    notifCount: _this2.state.notifCount + 1
                });
            } }, this.renderContent('口碑 Tab', this.state.notifCount)), _react2["default"].createElement(_antdMobile.TabBar.Item, { icon: require('./TabBar_Friends.png'), selectedIcon: require('./TabBar_Friends_Sel.png'), title: "朋友", selected: this.state.selectedTab === 'greenTab', onPress: function onPress() {
                _this2.setState({
                    selectedTab: 'greenTab',
                    presses: _this2.state.presses + 1
                });
            } }, this.renderContent('朋友 Tab', this.state.presses)), _react2["default"].createElement(_antdMobile.TabBar.Item, { icon: require('./TabBar_Assets.png'), selectedIcon: require('./TabBar_Assets_Sel.png'), title: "我的", selected: this.state.selectedTab === 'yellowTab', onPress: function onPress() {
                _this2.setState({
                    selectedTab: 'yellowTab',
                    presses: _this2.state.presses + 1
                });
            } }, this.renderContent('我的 Tab', this.state.presses)));
    };

    return BasicTabBarExample;
}(_react2["default"].Component);

exports["default"] = BasicTabBarExample;
module.exports = exports['default'];