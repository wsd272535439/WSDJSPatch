/// <reference types="react" />
import React from 'react';
import InputItemProps from './PropsType';
export default class InputItem extends React.Component<InputItemProps, any> {
    static defaultProps: {
        type: string;
        editable: boolean;
        value: string;
        placeholder: string;
        clear: boolean;
        onChange: any;
        onBlur: any;
        onFocus: any;
        extra: string;
        onExtraPress: any;
        error: boolean;
        onErrorPress: any;
        size: string;
        labelNumber: number;
        labelPosition: string;
        textAlign: string;
        last: boolean;
    };
    constructor(props: any);
    onChange: (text: any) => void;
    render(): JSX.Element;
}
