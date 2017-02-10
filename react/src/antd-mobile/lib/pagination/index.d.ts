/// <reference types="react" />
import React from 'react';
import PaginationProps from './PropsType';
export default class Pagination extends React.Component<PaginationProps, any> {
    static defaultProps: {
        mode: string;
        current: number;
        simple: boolean;
        prevText: string;
        nextText: string;
        onChange: () => void;
        indicatorStyle: null;
        styles: {
            container: {
                alignItems: string;
                justifyContent: string;
            };
            numberStyle: {
                flexDirection: string;
                justifyContent: string;
            };
            totalStyle: {
                fontSize: number;
                color: string;
            };
            activeTextStyle: {
                fontSize: number;
                color: string;
            };
            indicatorStyle: {
                flexDirection: string;
            };
            pointStyle: {
                width: number;
                height: number;
                borderRadius: number;
                backgroundColor: string;
            };
            pointActiveStyle: {
                backgroundColor: string;
            };
            spaceStyle: {
                marginHorizontal: number;
            };
        };
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange(p: any): void;
    render(): JSX.Element;
}
