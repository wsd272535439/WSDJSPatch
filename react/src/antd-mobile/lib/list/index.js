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

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

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

var List = function (_React$Component) {
    (0, _inherits3["default"])(List, _React$Component);

    function List() {
        (0, _classCallCheck3["default"])(this, List);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    List.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            style = _props.style,
            renderHeader = _props.renderHeader,
            renderFooter = _props.renderFooter,
            _props$styles = _props.styles,
            styles = _props$styles === undefined ? _index2["default"] : _props$styles;

        var headerDom = null;
        var footerDom = null;
        if (renderHeader) {
            var content = renderHeader();
            if (typeof content === 'string') {
                content = _react2["default"].createElement(_reactNative.Text, { style: styles.Header }, content);
            }
            headerDom = _react2["default"].createElement(_reactNative.View, null, content);
        }
        if (renderFooter) {
            var _content = renderFooter();
            if (typeof _content === 'string') {
                _content = _react2["default"].createElement(_reactNative.Text, { style: styles.Footer }, _content);
            }
            footerDom = _react2["default"].createElement(_reactNative.View, null, _content);
        }
        return _react2["default"].createElement(_reactNative.View, __assign({}, this.props, { style: [style] }), headerDom, _react2["default"].createElement(_reactNative.View, { style: styles.Body }, children, _react2["default"].createElement(_reactNative.View, { style: [styles.BodyBottomLine] })), footerDom);
    };

    return List;
}(_react2["default"].Component);

exports["default"] = List;

List.Item = _ListItem2["default"];
module.exports = exports['default'];