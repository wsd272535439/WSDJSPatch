/// <reference types="react" />
import React from 'react';
interface TextAreaItemProps {
    /** web only */
    prefixCls?: string;
    /** web only */
    prefixListCls?: string;
    /** web only */
    className?: string;
    style?: React.CSSProperties;
    title?: React.ReactNode;
    /** web only */
    name?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    clear?: boolean;
    rows?: number;
    count?: number;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    error?: boolean;
    onErrorClick?: () => void;
    autoHeight?: boolean;
    editable?: boolean;
    disabled?: boolean;
    labelNumber?: number;
    /** rn only */
    keyboardType?: string;
    last?: boolean;
}
export default TextAreaItemProps;
