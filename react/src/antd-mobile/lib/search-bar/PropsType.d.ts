/// <reference types="react" />
import React from 'react';
export interface SearchBarProps {
    value?: string;
    placeholder?: string;
    onSubmit?: Function;
    onChange?: Function;
    onFocus?: () => void;
    onBlur?: () => void;
    onCancel?: Function;
    showCancelButton?: boolean;
    cancelText?: string;
    disabled?: boolean;
    styles?: any;
    /** web only */
    prefixCls?: string;
    style?: React.CSSProperties;
    className?: string;
    onClear?: Function;
}
export interface SearchBarState {
    value?: string;
    focus?: boolean;
}
export declare const defaultProps: {
    prefixCls: string;
    placeholder: string;
    onSubmit: () => void;
    onChange: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onClear: () => void;
    showCancelButton: boolean;
    cancelText: string;
    disabled: boolean;
};
