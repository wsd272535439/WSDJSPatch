/// <reference types="react" />
import React from 'react';
import ProgressProps from './PropsType';
export default class Progress extends React.Component<ProgressProps, any> {
    static defaultProps: {
        prefixCls: string;
        percent: number;
        position: string;
        unfilled: string;
        appearTransition: boolean;
    };
    noAppearTransition: any;
    refs: any;
    componentWillReceiveProps(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
