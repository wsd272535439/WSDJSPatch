/// <reference types="react" />
import React from 'react';
import { ImageRollProps } from './PropsType';
export default class ImageRoll extends React.Component<ImageRollProps, any> {
    onSelected: (images: any) => void;
    render(): JSX.Element;
}
