/// <reference types="react" />
import React from 'react';
import InputItemProps from './PropsType';
export interface InputItemState {
    focus?: boolean;
    placeholder?: string;
}
declare class InputItem extends React.Component<InputItemProps, InputItemState> {
    static defaultProps: {
        prefixCls: string;
        prefixListCls: string;
        type: string;
        editable: boolean;
        disabled: boolean;
        placeholder: string;
        clear: boolean;
        onChange: () => void;
        onBlur: () => void;
        onFocus: () => void;
        extra: string;
        onExtraClick: () => void;
        error: boolean;
        onErrorClick: () => void;
        labelNumber: number;
        updatePlaceholder: boolean;
    };
    debounceTimeout: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    onInputChange: (e: any) => void;
    onInputBlur: (e: any) => void;
    onInputFocus: (e: any) => void;
    onExtraClick: (e: any) => void;
    onErrorClick: (e: any) => void;
    clearInput: () => void;
    render(): JSX.Element;
}
export default InputItem;
