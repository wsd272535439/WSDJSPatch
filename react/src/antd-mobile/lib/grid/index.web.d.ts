/// <reference types="react" />
import React from 'react';
import { GridProps } from './PropsType';
export default class Grid extends React.Component<GridProps, any> {
    static defaultProps: {
        data: never[];
        hasLine: boolean;
        isCarousel: boolean;
        columnNum: number;
        carouselMaxRow: number;
        prefixCls: string;
    };
    clientWidth: number;
    render(): JSX.Element;
}
