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

var _Popup = require('rmc-cascader/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _Cascader = require('rmc-cascader/lib/Cascader');

var _Cascader2 = _interopRequireDefault(_Cascader);

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

function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        return values.join(',');
    };
    return {
        format: defaultFormat,
        cols: 3,
        value: [],
        extra: '请选择',
        okText: '确定',
        dismissText: '取消',
        title: '',
        styles: {}
    };
}

var Picker = function (_React$Component) {
    (0, _inherits3["default"])(Picker, _React$Component);

    function Picker() {
        (0, _classCallCheck3["default"])(this, Picker);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = (0, _arrayTreeFilter2["default"])(_this.props.data, function (c, level) {
                return c.value === value[level];
            });
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        return _this;
    }

    Picker.prototype.render = function render() {
        var props = this.props;
        var children = props.children,
            value = props.value,
            okText = props.okText,
            dismissText = props.dismissText,
            title = props.title,
            extra = props.extra;

        var extraProps = {
            extra: this.getSel() || extra
        };
        var childEl = _react2["default"].cloneElement(children, extraProps);
        var cascader = _react2["default"].createElement(_Cascader2["default"], { data: props.data, cols: props.cols });
        return _react2["default"].createElement(_Popup2["default"], __assign({ cascader: cascader }, this.props, { styles: _index2["default"], value: value, dismissText: dismissText, title: title, okText: okText }), childEl);
    };

    return Picker;
}(_react2["default"].Component);

exports["default"] = Picker;

Picker.defaultProps = getDefaultProps();
module.exports = exports['default'];