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

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _default = require('../style/themes/default');

var _default2 = _interopRequireDefault(_default);

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

function noop() {}

var Brief = function (_React$Component) {
    (0, _inherits3["default"])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3["default"])(this, Brief);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Brief.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            style = _props.style,
            _props$styles = _props.styles,
            styles = _props$styles === undefined ? _index2["default"] : _props$styles;

        return _react2["default"].createElement(_reactNative.View, { style: [styles.Brief] }, _react2["default"].createElement(_reactNative.Text, { style: [styles.BriefText, style], numberOfLines: 1 }, children));
    };

    return Brief;
}(_react2["default"].Component);

var Item = function (_React$Component2) {
    (0, _inherits3["default"])(Item, _React$Component2);

    function Item() {
        (0, _classCallCheck3["default"])(this, Item);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _props2 = this.props,
            _props2$styles = _props2.styles,
            styles = _props2$styles === undefined ? _index2["default"] : _props2$styles,
            children = _props2.children,
            multipleLine = _props2.multipleLine,
            thumb = _props2.thumb,
            extra = _props2.extra,
            _props2$arrow = _props2.arrow,
            arrow = _props2$arrow === undefined ? '' : _props2$arrow,
            style = _props2.style,
            _props2$onClick = _props2.onClick,
            onClick = _props2$onClick === undefined ? noop : _props2$onClick,
            _props2$onPressIn = _props2.onPressIn,
            onPressIn = _props2$onPressIn === undefined ? noop : _props2$onPressIn,
            _props2$onPressOut = _props2.onPressOut,
            onPressOut = _props2$onPressOut === undefined ? noop : _props2$onPressOut;

        var line = 1;
        var contentDom = void 0;
        if (Array.isArray(children)) {
            (function () {
                var tempContentDom = [];
                children.forEach(function (el, index) {
                    if (_react2["default"].isValidElement(el)) {
                        tempContentDom.push(el);
                    } else {
                        tempContentDom.push(_react2["default"].createElement(_reactNative.Text, { style: [styles.Content], numberOfLines: 1, key: index + '-children' }, el));
                    }
                });
                line = children.length;
                contentDom = _react2["default"].createElement(_reactNative.View, { style: [styles.column] }, tempContentDom);
            })();
        } else {
            if (_react2["default"].isValidElement(children)) {
                contentDom = _react2["default"].createElement(_reactNative.View, { style: [styles.column] }, children);
            } else {
                contentDom = _react2["default"].createElement(_reactNative.View, { style: [styles.column] }, _react2["default"].createElement(_reactNative.Text, { style: [styles.Content], numberOfLines: 1 }, children));
            }
        }
        var extraDom = void 0;
        if (extra) {
            extraDom = _react2["default"].createElement(_reactNative.View, { style: [styles.column] }, _react2["default"].createElement(_reactNative.Text, { style: [styles.Extra], numberOfLines: 1 }, extra));
            if (_react2["default"].isValidElement(extra)) {
                var extraChildren = extra.props.children;
                if (Array.isArray(extraChildren)) {
                    (function () {
                        var tempExtraDom = [];
                        extraChildren.forEach(function (el, index) {
                            if (typeof el === 'string') {
                                tempExtraDom.push(_react2["default"].createElement(_reactNative.Text, { numberOfLines: 1, style: [styles.Extra], key: index + '-children' }, el));
                            } else {
                                tempExtraDom.push(el);
                            }
                        });
                        line = extraChildren.length > line ? extraChildren.length : line;
                        extraDom = _react2["default"].createElement(_reactNative.View, { style: [styles.column] }, tempExtraDom);
                    })();
                } else {
                    extraDom = extra;
                }
            }
        }
        var itemHeight = void 0;
        if (line === 2) {
            if (_reactNative.Platform.OS === 'android') {
                itemHeight = 60 + 2 * _default2["default"].v_spacing_sm;
            } else {
                itemHeight = 60 + _default2["default"].v_spacing_sm;
            }
        } else if (line > 2) {
            if (_reactNative.Platform.OS === 'android') {
                itemHeight = _default2["default"].list_item_height + (_default2["default"].font_size_subhead + _default2["default"].v_spacing_sm) * (line - 1) + 2 * _default2["default"].v_spacing_sm - 3;
            } else {
                itemHeight = _default2["default"].list_item_height + (_default2["default"].font_size_subhead + _default2["default"].v_spacing_sm) * (line - 1) + _default2["default"].v_spacing_sm - 3;
            }
        }
        var arrEnum = {
            horizontal: _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/arrow.png'), style: styles.Arrow }),
            down: _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/arrow-down.png'), style: styles.ArrowV }),
            up: _react2["default"].createElement(_reactNative.Image, { source: require('../style/images/arrow-up.png'), style: styles.ArrowV })
        };
        var itemView = _react2["default"].createElement(_reactNative.View, __assign({}, this.props, { style: [styles.Item, line > 1 && { height: itemHeight }, style] }), typeof thumb === 'string' ? _react2["default"].createElement(_reactNative.Image, { source: { uri: thumb }, style: [styles.Thumb, multipleLine && styles.multipleLine.Thumb] }) : thumb, _react2["default"].createElement(_reactNative.View, { style: [styles.Line, multipleLine && styles.multipleLine.Line] }, contentDom, extraDom, arrEnum[arrow] || _react2["default"].createElement(_reactNative.View, { style: styles.Arrow })));
        return _react2["default"].createElement(_reactNative.TouchableHighlight, { activeOpacity: 1, underlayColor: styles.underlayColor, onPress: onClick, onPressIn: onPressIn, onPressOut: onPressOut }, itemView);
    };

    return Item;
}(_react2["default"].Component);

exports["default"] = Item;

Item.defaultProps = {
    error: false,
    multipleLine: false,
    wrap: false
};
Item.Brief = Brief;
module.exports = exports['default'];