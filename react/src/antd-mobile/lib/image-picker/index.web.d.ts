/// <reference types="react" />
import React from 'react';
import { ImagePickerPropTypes } from './PropsType';
export default class ImagePicker extends React.Component<ImagePickerPropTypes, any> {
    static defaultProps: {
        prefixCls: string;
        files: never[];
        onChange: () => void;
        onImageClick: () => void;
        selectable: boolean;
    };
    getOrientation: (file: any, callback: any) => void;
    removeImage: (index: any) => void;
    addImage: (imgItem: any) => void;
    onImageClick: (index: any) => void;
    onFileChange: () => void;
    render(): JSX.Element;
}
