/// <reference types="react" />
import React from 'react';
import tsProps from './PropsType';
export default class Button extends React.Component<tsProps, any> {
    static defaultProps: {
        pressIn: boolean;
        disabled: boolean;
        inline: boolean;
        loading: boolean;
        activeStyle: {};
        onClick: (_x: any) => void;
        onPressIn: (_x: any) => void;
        onPressOut: (_x: any) => void;
        onShowUnderlay: (_x: any) => void;
        onHideUnderlay: (_x: any) => void;
    };
    constructor(props: any);
    onPressIn: (...arg: any[]) => void;
    onPressOut: (...arg: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
