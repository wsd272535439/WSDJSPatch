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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

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

var TabBar = function (_React$Component) {
    (0, _inherits3["default"])(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3["default"])(this, TabBar);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    TabBar.prototype.render = function render() {
        var _props = this.props,
            barTintColor = _props.barTintColor,
            tintColor = _props.tintColor,
            unselectedTintColor = _props.unselectedTintColor;

        var resetProps = (0, _objectAssign2["default"])({}, this.props);
        ['barTintColor', 'tintColor', 'unselectedTintColor'].forEach(function (item) {
            delete resetProps[item];
        });
        return _react2["default"].createElement(_reactNative.TabBarIOS, __assign({ barTintColor: barTintColor, tintColor: tintColor, unselectedTintColor: unselectedTintColor }, resetProps));
    };

    return TabBar;
}(_react2["default"].Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = _reactNative.TabBarIOS.Item;
exports["default"] = TabBar;
module.exports = exports['default'];