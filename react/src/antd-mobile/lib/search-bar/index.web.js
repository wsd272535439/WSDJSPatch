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

var _PropsType = require('./PropsType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchBar = function (_React$Component) {
    (0, _inherits3["default"])(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3["default"])(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value);
            }
        };
        _this.onChange = function (e) {
            var value = e.target.value;
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            _this.firstFocus = true;
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        _this.onClear = function () {
            if (!('value' in _this.props)) {
                _this.setState({ value: '' });
            }
            _this.refs.searchInput.focus();
            if (_this.props.onClear) {
                _this.props.onClear('');
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value);
            } else {
                _this.onClear();
            }
            _this.refs.searchInput.blur();
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value || '';
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    SearchBar.prototype.componentDidMount = function componentDidMount() {
        var initBtn = window.getComputedStyle(this.refs.rightBtn);
        this.rightBtnInitMarginleft = initBtn['margin-left'];
        this.componentDidUpdate();
    };

    SearchBar.prototype.componentDidUpdate = function componentDidUpdate() {
        // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
        if (this.refs.searchInputContainer.className.indexOf(this.props.prefixCls + '-start') > -1) {
            this.refs.syntheticPh.style.width = this.refs.syntheticPhContainer.offsetWidth + 'px';
            if (!this.props.showCancelButton) {
                this.refs.rightBtn.style.marginRight = 0;
            }
        } else {
            this.refs.syntheticPh.style.width = '100%';
            if (!this.props.showCancelButton) {
                this.refs.rightBtn.style.marginRight = '-' + (this.refs.rightBtn.offsetWidth + parseInt(this.rightBtnInitMarginleft, 10)) + 'px';
            }
        }
    };

    SearchBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    SearchBar.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            showCancelButton = _props.showCancelButton,
            disabled = _props.disabled,
            placeholder = _props.placeholder,
            cancelText = _props.cancelText,
            className = _props.className;
        var _state = this.state,
            value = _state.value,
            focus = _state.focus;

        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-start', focus || value && value.length > 0), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var clearCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-clear', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-clear-show', focus && value && value.length > 0), _classNames2));
        var cancelCls = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls + '-cancel', true), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-cancel-show', showCancelButton || focus || value && value.length > 0), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-cancel-anim', this.firstFocus), _classNames3));
        return _react2["default"].createElement("form", { onSubmit: this.onSubmit, className: wrapCls, ref: "searchInputContainer" }, _react2["default"].createElement("div", { className: prefixCls + '-input' }, _react2["default"].createElement("div", { className: prefixCls + '-synthetic-ph', ref: "syntheticPh" }, _react2["default"].createElement("span", { className: prefixCls + '-synthetic-ph-container', ref: "syntheticPhContainer" }, _react2["default"].createElement("i", { className: prefixCls + '-synthetic-ph-icon' }), _react2["default"].createElement("span", { className: prefixCls + '-synthetic-ph-placeholder', style: {
                visibility: placeholder && !value ? 'visible' : 'hidden'
            } }, placeholder))), _react2["default"].createElement("input", { type: "search", className: prefixCls + '-value', value: value, disabled: disabled, placeholder: placeholder, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, ref: "searchInput" }), _react2["default"].createElement("a", { onClick: this.onClear, className: clearCls })), _react2["default"].createElement("div", { className: cancelCls, onClick: this.onCancel, ref: "rightBtn" }, cancelText));
    };

    return SearchBar;
}(_react2["default"].Component);

exports["default"] = SearchBar;

SearchBar.defaultProps = _PropsType.defaultProps;
module.exports = exports['default'];