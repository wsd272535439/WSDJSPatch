/// <reference types="react" />
import React from 'react';
import { MenuProps } from './PropsType';
export default class Menu extends React.Component<MenuProps, any> {
    static defaultProps: {
        prefixCls: string;
        subMenuPrefixCls: string;
        radioPrefixCls: string;
        data: never[];
        level: number;
        onChange: () => void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    getNewFsv(props: any): any;
    onClickFirstLevelItem: (dataItem: any) => void;
    onClickSubMenuItem: (dataItem: any) => void;
    render(): JSX.Element;
}
