/// <reference types="react" />
import React from 'react';
import ProgressProps from './PropsType';
export default class Progress extends React.Component<ProgressProps, any> {
    static defaultProps: {
        percent: number;
        position: string;
        unfilled: string;
        appearTransition: boolean;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    onLayout: (e: any) => void;
    normalPercent: (percent: any) => any;
    getWidth: (percent?: number | undefined) => number;
    render(): JSX.Element;
}
