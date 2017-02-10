/// <reference types="react" />
import React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
export interface CardProps {
    style?: {};
    full?: boolean;
}
export default class Card extends React.Component<CardProps, any> {
    static defaultProps: {
        style: {};
        full: boolean;
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
