/// <reference types="react" />
import React from 'react';
import PaginationProps from './PropsType';
export default class Pagination extends React.Component<PaginationProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        current: number;
        simple: boolean;
        prevText: string;
        nextText: string;
        onChange: () => void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange(p: any): void;
    render(): JSX.Element;
}
