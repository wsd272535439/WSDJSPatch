'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

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

var Carousel = function (_React$Component) {
    (0, _inherits3["default"])(Carousel, _React$Component);

    function Carousel(props) {
        (0, _classCallCheck3["default"])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onChange = function (index) {
            _this.setState({ selectedIndex: index });
        };
        _this.state = {
            selectedIndex: _this.props.selectedIndex
        };
        return _this;
    }

    Carousel.prototype.render = function render() {
        var _classNames2;

        var _props = this.props,
            className = _props.className,
            prefixCls = _props.prefixCls;

        var props = (0, _objectAssign2["default"])({}, this.props);
        props = (0, _objectAssign2["default"])(props, {
            wrapAround: props.infinite,
            slideIndex: props.selectedIndex,
            beforeSlide: props.beforeChange,
            afterSlide: props.afterChange
        });
        var Decorators = [];
        var current = this.state.selectedIndex;
        if (props.dots) {
            Decorators = [{
                component: _react2["default"].createClass({
                    displayName: 'component',
                    render: function render() {
                        var _props2 = this.props,
                            slideCount = _props2.slideCount,
                            slidesToScroll = _props2.slidesToScroll;

                        var arr = [];
                        for (var i = 0; i < slideCount; i += slidesToScroll) {
                            arr.push(i);
                        }
                        return _react2["default"].createElement("div", { className: prefixCls + '-wrap' }, arr.map(function (index) {
                            var _classNames;

                            var dotCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap-dot', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrap-dot-active', index === current), _classNames));
                            return _react2["default"].createElement("div", { className: dotCls, key: index }, _react2["default"].createElement("span", null));
                        }));
                    }
                }),
                position: 'BottomCenter'
            }];
        }
        ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots'].forEach(function (prop) {
            if (props.hasOwnProperty(prop)) {
                delete props[prop];
            }
        });
        return _react2["default"].createElement("div", { className: (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, className, className), (0, _defineProperty3["default"])(_classNames2, prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-vertical', props.vertical), _classNames2)) }, _react2["default"].createElement(_nukaCarousel2["default"], __assign({}, props, { decorators: Decorators, afterSlide: this.onChange })));
    };

    return Carousel;
}(_react2["default"].Component);

exports["default"] = Carousel;

Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    edgeEasing: 'linear',
    cellAlign: 'center',
    selectedIndex: 0
};
module.exports = exports['default'];