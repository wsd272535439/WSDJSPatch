/// <reference types="react" />
import React from 'react';
import ResultProps from './PropsType';
export default class Result extends React.Component<ResultProps, any> {
    static defaultProps: {
        prefixCls: string;
        buttonType: string;
        buttonClick: () => void;
    };
    render(): JSX.Element;
}
