/// <reference types="react" />
import React from 'react';
import NoticeBarProps from './PropsType';
export default class NoticeBar extends React.Component<NoticeBarProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        onClick(): void;
    };
    constructor(props: any);
    onClick: () => void;
    render(): JSX.Element | null;
}
