/// <reference types="react" />
import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
export interface CardProps {
    prefixCls?: string;
    className?: string;
    full?: boolean;
}
export default class Card extends React.Component<CardProps, any> {
    static defaultProps: {
        prefixCls: string;
        full: boolean;
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
