/// <reference types="react" />
import React from 'react';
export default class PopupExample extends React.Component<any, any> {
    constructor(props: any);
    getPopupContent: (num: any) => JSX.Element;
    onClose(sel: any, num: any): void;
    onClick: () => void;
    onClick1: () => void;
    render(): JSX.Element;
}
