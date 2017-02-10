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

var _reactNative = require('react-native');

var _TabBarItem = require('./TabBarItem');

var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

var _style = require('./style/');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabBar = function (_React$Component) {
    (0, _inherits3["default"])(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3["default"])(this, TabBar);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    TabBar.prototype.getPanes = function getPanes(content) {
        var _props = this.props,
            tintColor = _props.tintColor,
            unselectedTintColor = _props.unselectedTintColor,
            children = _props.children;
        // ios 规则： selected 为多个则只选中最后一个， selected 为 0 个则选中第一个;

        var selectedIndex = 0;
        children.forEach(function (child, idx) {
            if (child.props.selected) {
                selectedIndex = idx;
            }
        });
        var newChildren = [];
        _react2["default"].Children.forEach(children, function (child, idx) {
            if (content) {
                newChildren.push(_react2["default"].createElement(_reactNative.View, { key: idx, style: [_style2["default"].contentItem, idx === selectedIndex ? _style2["default"].contentItemSelected : null] }, child.props.children));
            } else {
                newChildren.push(_react2["default"].cloneElement(child, {
                    key: idx,
                    tintColor: tintColor,
                    unselectedTintColor: unselectedTintColor
                }));
            }
        });
        return newChildren;
    };

    TabBar.prototype.render = function render() {
        return _react2["default"].createElement(_reactNative.View, { style: _style2["default"].tabbar }, _react2["default"].createElement(_reactNative.View, { style: _style2["default"].content }, this.getPanes(true)), _react2["default"].createElement(_reactNative.View, { style: [_style2["default"].tabs, { backgroundColor: this.props.barTintColor }] }, this.getPanes(false)));
    };

    return TabBar;
}(_react2["default"].Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = _TabBarItem2["default"];
exports["default"] = TabBar;
module.exports = exports['default'];