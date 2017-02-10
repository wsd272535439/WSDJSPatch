/// <reference types="react" />
import React from 'react';
import PropTypes from './PropsType';
export default class RNActivityIndicator extends React.Component<PropTypes, any> {
    static defaultProps: {
        animating: boolean;
        color: string;
        size: string;
        panelColor: string;
        toast: boolean;
    };
    _renderToast(): JSX.Element;
    _renderSpinner(): JSX.Element;
    render(): JSX.Element | null;
}
