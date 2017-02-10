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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Progress = function (_React$Component) {
    (0, _inherits3["default"])(Progress, _React$Component);

    function Progress() {
        (0, _classCallCheck3["default"])(this, Progress);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Progress.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.noAppearTransition = true;
    };

    Progress.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        if (this.props.appearTransition) {
            setTimeout(function () {
                _this2.refs.bar.style.width = _this2.props.percent + '%';
            }, 10);
        }
    };

    Progress.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            position = _props.position,
            unfilled = _props.unfilled,
            _props$style = _props.style,
            style = _props$style === undefined ? {} : _props$style;

        var percentStyle = {
            width: this.noAppearTransition || !this.props.appearTransition ? this.props.percent + '%' : 0,
            height: 0
        };
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-outer', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-fixed-outer', position === 'fixed'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-hide-outer', unfilled === 'hide'), _classNames));
        return _react2["default"].createElement("div", { className: wrapCls }, _react2["default"].createElement("div", { ref: "bar", className: prefixCls + '-bar', style: (0, _objectAssign2["default"])({}, style, percentStyle) }));
    };

    return Progress;
}(_react2["default"].Component);

exports["default"] = Progress;

Progress.defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: 'show',
    appearTransition: false
};
module.exports = exports['default'];