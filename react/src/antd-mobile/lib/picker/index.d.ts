/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Picker extends React.Component<tsPropsType, any> {
    static defaultProps: {
        format: (values: any) => any;
        cols: number;
        value: never[];
        extra: string;
        okText: string;
        dismissText: string;
        title: string;
        styles: {};
    };
    getSel: () => void;
    render(): JSX.Element;
}
