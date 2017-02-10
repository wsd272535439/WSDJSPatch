'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = touchableFeedback;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var touchSupported = typeof window !== 'undefined' && 'ontouchstart' in window;
function touchableFeedback(ComposedComponent) {
    var statics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        myName: 'TouchableFeedbackComponent'
    };

    var TouchableFeedbackComponent = _react2["default"].createClass({
        displayName: 'TouchableFeedbackComponent',

        statics: statics,
        getDefaultProps: function getDefaultProps() {
            return {
                activeStyle: {}
            };
        },
        getInitialState: function getInitialState() {
            return {
                touchFeedback: false
            };
        },
        onTouchStart: function onTouchStart(e) {
            if (this.props.onTouchStart) {
                this.props.onTouchStart(e);
            }
            this.setTouchFeedbackState(true);
        },
        onTouchEnd: function onTouchEnd(e) {
            if (this.props.onTouchEnd) {
                this.props.onTouchEnd(e);
            }
            this.setTouchFeedbackState(false);
        },
        onTouchCancel: function onTouchCancel(e) {
            if (this.props.onTouchCancel) {
                this.props.onTouchCancel(e);
            }
            this.setTouchFeedbackState(false);
        },
        onMouseDown: function onMouseDown(e) {
            if (this.props.onTouchStart) {
                this.props.onTouchStart(e);
            }
            this.setTouchFeedbackState(true);
        },
        onMouseUp: function onMouseUp(e) {
            if (this.props.onTouchEnd) {
                this.props.onTouchEnd(e);
            }
            this.setTouchFeedbackState(false);
        },
        setTouchFeedbackState: function setTouchFeedbackState(touchFeedback) {
            this.setState({
                touchFeedback: touchFeedback
            });
        },
        render: function render() {
            var events = {};
            if (this.props.activeStyle) {
                events = touchSupported ? {
                    onTouchStart: this.onTouchStart,
                    onTouchEnd: this.onTouchEnd,
                    onTouchCancel: this.onTouchCancel
                } : {
                    onMouseDown: this.onMouseDown,
                    onMouseUp: this.state.touchFeedback ? this.onMouseUp : undefined,
                    onMouseLeave: this.state.touchFeedback ? this.onMouseUp : undefined
                };
            }
            return _react2["default"].createElement(ComposedComponent, __assign({}, this.props, { touchFeedback: this.state.touchFeedback }, events));
        }
    });
    return TouchableFeedbackComponent;
}
module.exports = exports['default'];