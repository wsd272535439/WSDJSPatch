/// <reference types="react" />
import React from 'react';
import SliderProps from './PropsType';
export default class Slider extends React.Component<SliderProps, any> {
    static defaultProps: {
        prefixCls: string;
        tipTransitionName: string;
    };
    render(): JSX.Element;
}
