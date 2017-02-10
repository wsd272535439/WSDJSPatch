/// <reference types="react" />
import React from 'react';
export interface RadioProps {
    style?: React.CSSProperties;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange?: Function;
    /** web only */
    prefixCls?: string;
    listPrefixCls?: string;
    className?: string;
    name?: string;
    wrapLabel?: boolean;
}
export interface RadioItemProps extends RadioProps {
    radioStyle?: any;
    radioProps?: Object;
}
