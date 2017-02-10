/// <reference types="react" />
import React from 'react';
import { FlexProps } from './PropsType';
export default class Flex extends React.Component<FlexProps, any> {
    static Item: any;
    static defaultProps: {
        direction: string;
        wrap: string;
        justify: string;
        align: string;
        onPress: () => void;
    };
    render(): JSX.Element;
}
