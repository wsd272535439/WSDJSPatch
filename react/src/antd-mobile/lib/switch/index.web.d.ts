/// <reference types="react" />
import React from 'react';
import SwitchProps from './PropsType';
export default class Switch extends React.Component<SwitchProps, any> {
    static defaultProps: {
        prefixCls: string;
        name: string;
        checked: boolean;
        disabled: boolean;
        onChange(): void;
    };
    onChange: (e: any) => void;
    render(): JSX.Element;
}
