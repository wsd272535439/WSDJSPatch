/// <reference types="react" />
import React from 'react';
export interface StepsProps {
    direction?: 'vertical' | 'horizon';
    current?: number;
    width?: number;
    size?: string;
    finishIcon?: string;
}
export default class Steps extends React.Component<StepsProps, any> {
    static Step: any;
    static defaultProps: {
        direction: string;
    };
    constructor(props: any);
    onLayout: (e: any) => void;
    render(): JSX.Element;
}
