/// <reference types="react" />
import React from 'react';
import ModalProps from './PropsType';
export default class Modal extends React.Component<ModalProps, any> {
    static defaultProps: {
        prefixCls: string;
        transparent: boolean;
        animated: boolean;
        style: {};
        onShow(): void;
        footer: never[];
    };
    isInModal(e: any): boolean;
    render(): JSX.Element;
}
