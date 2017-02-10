'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawerMain = exports["default"] = undefined;

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

var _reactNativeRouterFlux = require('react-native-router-flux');

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

var styles = _reactNative.StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1
    }
});

var DrawerExample = function (_React$Component) {
    (0, _inherits3["default"])(DrawerExample, _React$Component);

    function DrawerExample() {
        (0, _classCallCheck3["default"])(this, DrawerExample);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onOpenChange = function (isOpen) {
            /* tslint:disable: no-console */
            console.log('是否打开了 Drawer', isOpen.toString());
            _reactNativeRouterFlux.Actions.refresh({ key: _this.props.navigationState.key, open: isOpen });
        };
        return _this;
    }

    DrawerExample.prototype.render = function render() {
        var _this2 = this;

        var sidebar = _react2["default"].createElement(_reactNative.ScrollView, { style: [styles.container, { backgroundColor: '#fff' }] }, _react2["default"].createElement(_antdMobile.List, null, Array.apply(null, Array(20)).map(function (_, i) {
            return i;
        }).map(function (_i, index) {
            if (index === 0) {
                return _react2["default"].createElement(_antdMobile.List.Item, { key: index, thumb: "https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png", multipleLine: true }, _react2["default"].createElement(_reactNative.View, { style: {
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                    } }, _react2["default"].createElement(_reactNative.Text, null, "分类 - ", index), _react2["default"].createElement(_antdMobile.Button, { type: "primary", size: "small", onPress: function onPress() {
                        return _this2.drawer.drawer.closeDrawer();
                    } }, "关闭 drawer")));
            }
            return _react2["default"].createElement(_antdMobile.List.Item, { key: index, thumb: "https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" }, _react2["default"].createElement(_reactNative.Text, null, "分类 - ", index));
        })));
        var drawerProps = {
            position: 'left',
            onOpenChange: this.onOpenChange
        };
        return _react2["default"].createElement(_antdMobile.Drawer, __assign({ sidebar: sidebar }, drawerProps, { ref: function ref(d) {
                _this2.drawer = d;
                DrawerExample.drawer = d;
            } }), _react2["default"].createElement(_reactNativeRouterFlux.DefaultRenderer, { navigationState: this.props.navigationState.children[0], onNavigate: this.props.onNavigate }));
    };

    return DrawerExample;
}(_react2["default"].Component);

exports["default"] = DrawerExample;

var DrawerMain = exports.DrawerMain = function (_React$Component2) {
    (0, _inherits3["default"])(DrawerMain, _React$Component2);

    function DrawerMain() {
        (0, _classCallCheck3["default"])(this, DrawerMain);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));
    }

    DrawerMain.prototype.componentDidMount = function componentDidMount() {
        var _this4 = this;

        setTimeout(function () {
            _this4.drawer = _this4.props.drawerComponent.drawer.drawer;
        }, 20);
    };

    DrawerMain.prototype.render = function render() {
        var _this5 = this;

        return _react2["default"].createElement(_reactNative.View, { style: { flex: 1, marginTop: 114, padding: 8 } }, _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: function onPress() {
                return _this5.drawer && _this5.drawer.openDrawer();
            } }, "打开 drawer"), _react2["default"].createElement(_antdMobile.WhiteSpace, null), _react2["default"].createElement(_antdMobile.Button, { type: "ghost", onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.pop();
            } }, "返回 demo list"));
    };

    return DrawerMain;
}(_react2["default"].Component);

;