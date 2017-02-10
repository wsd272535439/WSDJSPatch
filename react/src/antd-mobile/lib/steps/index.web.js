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

var _rcSteps = require('rc-steps');

var _rcSteps2 = _interopRequireDefault(_rcSteps);

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

var Steps = function (_React$Component) {
    (0, _inherits3["default"])(Steps, _React$Component);

    function Steps() {
        (0, _classCallCheck3["default"])(this, Steps);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Steps.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate();
    };

    Steps.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.props.direction !== 'horizontal') {
            return;
        }
        // set tail's left position based on main's width for each step dynamically.
        this.stepRefs.forEach(function (s) {
            if (s.refs.tail) {
                s.refs.tail.style.left = s.refs.main.offsetWidth / 2 + 'px';
            }
        });
    };

    Steps.prototype.render = function render() {
        var _this2 = this;

        this.stepRefs = [];
        var _props = this.props,
            children = _props.children,
            current = _props.current,
            status = _props.status;

        var newChildren = _react2["default"].Children.map(children, function (item, index) {
            var className = item.props.className;
            if (index < children.length - 1 && children[index + 1].props.status === 'error') {
                className = className ? className + ' error-tail' : 'error-tail';
            }
            var icon = item.props.icon;
            if (!icon) {
                if (index < current) {
                    // 对应 state: finish
                    icon = 'check-circle-o';
                } else if (index > current) {
                    // 对应 state: wait
                    icon = 'ellipsis';
                    className = className ? className + ' ellipsis-item' : 'ellipsis-item';
                }
                if (status === 'error' && index === current || item.props.status === 'error') {
                    icon = 'cross-circle-o';
                }
            }
            return _react2["default"].cloneElement(item, { icon: icon, className: className, ref: function ref(c) {
                    return _this2.stepRefs[index] = c;
                } });
        });
        return _react2["default"].createElement(_rcSteps2["default"], __assign({ ref: "rcSteps" }, this.props), newChildren);
    };

    return Steps;
}(_react2["default"].Component);

exports["default"] = Steps;

Steps.Step = _rcSteps2["default"].Step;
Steps.defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0
};
module.exports = exports['default'];