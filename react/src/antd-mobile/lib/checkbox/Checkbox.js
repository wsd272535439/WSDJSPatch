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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3["default"])(Checkbox, _React$Component);

    function Checkbox(props, context) {
        (0, _classCallCheck3["default"])(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props, context));

        _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            var checked = !_this.state.checked;
            if (!('checked' in _this.props)) {
                _this.setState({
                    checked: checked
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange({ target: { checked: checked } });
            }
        };
        _this.state = {
            checked: props.checked || props.defaultChecked || false
        };
        return _this;
    }

    Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    };

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            style = _props.style,
            disabled = _props.disabled;

        var checked = this.state.checked;
        var imgSrc = void 0;
        if (checked) {
            if (disabled) {
                imgSrc = require('./image/checked_disable.png');
            } else {
                imgSrc = require('./image/checked.png');
            }
        } else {
            if (disabled) {
                imgSrc = require('./image/normal_disable.png');
            } else {
                imgSrc = require('./image/normal.png');
            }
        }
        return _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: this.handleClick }, _react2["default"].createElement(_reactNative.Image, { source: imgSrc, style: [_index2["default"].icon, style] }));
    };

    return Checkbox;
}(_react2["default"].Component);

exports["default"] = Checkbox;
module.exports = exports['default'];