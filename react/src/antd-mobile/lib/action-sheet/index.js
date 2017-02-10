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

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _Modal = require('rc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionSheet = void 0;

var ActionSheetAndroid = function (_React$Component) {
    (0, _inherits3["default"])(ActionSheetAndroid, _React$Component);

    function ActionSheetAndroid(props) {
        (0, _classCallCheck3["default"])(this, ActionSheetAndroid);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true
        };
        ActionSheet.instances[props.name] = _this;
        return _this;
    }

    ActionSheetAndroid.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        _reactNative.DeviceEventEmitter.addListener('antActionSheetHide', function () {
            _this2.setState({
                visible: false
            });
        });
    };

    ActionSheetAndroid.prototype.componentWillUnmount = function componentWillUnmount() {
        _reactNative.DeviceEventEmitter.removeAllListeners('antActionSheetHide');
    };

    ActionSheetAndroid.prototype.onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2["default"].remove();
        }
    };

    ActionSheetAndroid.prototype.render = function render() {
        return _react2["default"].createElement(_Modal2["default"], { animationDuration: 200, animateAppear: true, onClose: this.onClose, visible: this.state.visible, onAnimationEnd: this.onAnimationEnd, style: _index2["default"].content, animationType: "slide-up" }, this.props.children);
    };

    return ActionSheetAndroid;
}(_react2["default"].Component);

ActionSheetAndroid.defaultProps = {
    maskClosable: true
};
if (_reactNative.Platform.OS === 'ios') {
    ActionSheet = _reactNative.ActionSheetIOS;
} else {
    ActionSheet = {
        instances: {},
        showActionSheetWithOptions: function showActionSheetWithOptions(config, callback) {
            var title = config.title,
                message = config.message,
                options = config.options,
                destructiveButtonIndex = config.destructiveButtonIndex,
                cancelButtonIndex = config.cancelButtonIndex;

            var titleMsg = [title ? _react2["default"].createElement(_reactNative.View, { style: _index2["default"].title, key: "0" }, _react2["default"].createElement(_reactNative.Text, { style: _index2["default"].titleText }, title)) : null, message ? _react2["default"].createElement(_reactNative.View, { style: _index2["default"].message, key: "1" }, _react2["default"].createElement(_reactNative.Text, null, message)) : null];
            var cb = function cb(index) {
                _reactNative.DeviceEventEmitter.emit('antActionSheetHide');
                if (callback) {
                    callback(index);
                }
            };
            var children = _react2["default"].createElement(_reactNative.View, null, titleMsg, _react2["default"].createElement(_reactNative.View, null, options.map(function (item, index) {
                return _react2["default"].createElement(_reactNative.View, { key: index, style: [cancelButtonIndex === index ? _index2["default"].cancelBtn : null] }, _react2["default"].createElement(_reactNative.TouchableHighlight, { style: [_index2["default"].btn], underlayColor: _index.vars.fill_tap, onPress: function onPress() {
                        return cb(index);
                    } }, _react2["default"].createElement(_reactNative.Text, { style: [destructiveButtonIndex === index ? _index2["default"].destructiveBtn : null] }, item)), cancelButtonIndex === index ? _react2["default"].createElement(_reactNative.View, { style: _index2["default"].cancelBtnMask }) : null);
            })));
            _rnTopview2["default"].set(_react2["default"].createElement(ActionSheetAndroid, { name: config.androidActionSheetName || 'defaultActionSheet' }, children));
        },
        showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config) {
            var url = config.url,
                message = config.message,
                excludedActivityTypes = config.excludedActivityTypes;

            var titleMsg = [url ? _react2["default"].createElement(_reactNative.View, { style: _index2["default"].title, key: "0" }, _react2["default"].createElement(_reactNative.Text, null, url)) : null, message ? _react2["default"].createElement(_reactNative.View, { style: _index2["default"].message, key: "1" }, _react2["default"].createElement(_reactNative.Text, null, message)) : null];
            var children = _react2["default"].createElement(_reactNative.View, null, titleMsg, _react2["default"].createElement(_reactNative.View, null, excludedActivityTypes.map(function (item, index) {
                return _react2["default"].createElement(_reactNative.View, { key: index }, item);
            })));
            _rnTopview2["default"].set(_react2["default"].createElement(ActionSheetAndroid, { name: config.androidActionSheetName || 'defaultShareActionSheet' }, children));
        },
        close: function close(androidActionSheetName) {
            // ActionSheet.instances will cause memory leak?
            ActionSheet.instances[androidActionSheetName].animatedHide();
        }
    };
}
exports["default"] = ActionSheet;
module.exports = exports['default'];