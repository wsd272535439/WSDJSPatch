/// <reference types="react" />
import React from 'react';
import TagProps from './PropsType';
export default class Modal extends React.Component<TagProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
    };
    closeDom: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick: () => void;
    onTagClose: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
    render(): JSX.Element | null;
}
