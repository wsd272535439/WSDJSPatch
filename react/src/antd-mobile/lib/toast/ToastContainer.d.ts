/// <reference types="react" />
import React from 'react';
export interface ToastProps {
    content: string;
    duration?: number;
    onClose?: () => void;
    type?: string;
    onAnimationEnd?: () => void;
}
export default class ToastContainer extends React.Component<ToastProps, any> {
    static defaultProps: {
        duration: number;
        onClose(): void;
    };
    anim: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
