/// <reference types="react" />
import React from 'react';
import AccordionProps from './PropsType';
export default class Accordion extends React.Component<AccordionProps, any> {
    static Panel: any;
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
