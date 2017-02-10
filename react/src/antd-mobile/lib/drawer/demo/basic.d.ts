/// <reference types="react" />
import React from 'react';
export default class DrawerExample extends React.Component<any, any> {
    static drawer: any;
    drawer: any;
    onOpenChange: (isOpen: any) => void;
    render(): JSX.Element;
}
export declare class DrawerMain extends React.Component<any, any> {
    drawer: any;
    componentDidMount(): void;
    render(): JSX.Element;
}
