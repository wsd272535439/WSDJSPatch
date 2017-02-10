'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.textStyles = exports.rawTextStyles = exports.highlightTextStyles = exports.rawStyles = exports.highlightStyles = undefined;

var _default = require('../../style/themes/default');

var _default2 = _interopRequireDefault(_default);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var highlightStyles = exports.highlightStyles = {
    "default": {
        backgroundColor: _default2["default"].fill_tap,
        borderColor: _default2["default"].border_color_base
    },
    primary: {
        backgroundColor: _default2["default"].primary_button_fill_tap,
        borderColor: _default2["default"].primary_button_fill
    },
    ghost: {
        backgroundColor: _default2["default"].ghost_button_fill_tap,
        borderColor: _default2["default"].ghost_button_color
    },
    warning: {
        backgroundColor: _default2["default"].brand_warning,
        borderColor: _default2["default"].brand_warning
    }
};
var rawStyles = exports.rawStyles = {
    wrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _default2["default"].radius_md,
        borderWidth: 1
    },
    large: {
        height: _default2["default"].button_height,
        paddingLeft: _default2["default"].h_spacing_lg,
        paddingRight: _default2["default"].h_spacing_lg
    },
    small: {
        height: _default2["default"].button_height_sm,
        paddingLeft: _default2["default"].h_spacing_sm,
        paddingRight: _default2["default"].h_spacing_sm
    },
    "default": {
        backgroundColor: _default2["default"].fill_base,
        borderColor: _default2["default"].border_color_base
    },
    primary: {
        backgroundColor: _default2["default"].primary_button_fill,
        borderColor: _default2["default"].primary_button_fill
    },
    ghost: {
        backgroundColor: 'transparent',
        borderColor: _default2["default"].ghost_button_color
    },
    warning: {
        backgroundColor: _default2["default"].fill_base,
        borderColor: _default2["default"].brand_warning
    },
    disabled: {
        backgroundColor: _default2["default"].fill_disabled,
        borderColor: _default2["default"].fill_disabled
    }
};
var highlightTextStyles = exports.highlightTextStyles = {
    "default": {
        color: _default2["default"].color_text_base
    },
    primary: {
        color: _default2["default"].color_text_base_inverse
    },
    ghost: {
        color: _default2["default"].color_text_base_inverse
    },
    warning: {
        color: _default2["default"].color_text_base_inverse
    }
};
var rawTextStyles = exports.rawTextStyles = {
    large: {
        fontSize: _default2["default"].button_font_size
    },
    small: {
        fontSize: _default2["default"].button_font_size_sm
    },
    "default": {
        color: _default2["default"].color_text_base
    },
    primary: {
        color: _default2["default"].color_text_base_inverse
    },
    ghost: {
        color: _default2["default"].ghost_button_color
    },
    warning: {
        color: _default2["default"].brand_warning
    },
    disabled: {
        color: _default2["default"].color_text_disabled
    }
};
var textStyles = exports.textStyles = _reactNative.StyleSheet.create(rawTextStyles);
exports["default"] = _reactNative.StyleSheet.create(rawStyles);