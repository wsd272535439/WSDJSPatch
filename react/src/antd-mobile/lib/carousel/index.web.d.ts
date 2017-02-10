/// <reference types="react" />
import React from 'react';
import CarouselProps from './PropsType';
export default class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps: {
        prefixCls: string;
        dots: boolean;
        arrows: boolean;
        autoplay: boolean;
        infinite: boolean;
        edgeEasing: string;
        cellAlign: string;
        selectedIndex: number;
    };
    constructor(props: any);
    onChange: (index: any) => void;
    render(): JSX.Element;
}
