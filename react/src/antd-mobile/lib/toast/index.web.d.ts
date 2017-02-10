declare var _default: {
    SHORT: number;
    LONG: number;
    show(content: string, duration?: number | undefined): void;
    info(content: string, duration?: number | undefined, onClose?: (() => void) | undefined): void;
    success(content: string, duration?: number | undefined, onClose?: (() => void) | undefined): void;
    fail(content: string, duration?: number | undefined, onClose?: (() => void) | undefined): void;
    offline(content: string, duration?: number | undefined, onClose?: (() => void) | undefined): void;
    loading(content: string, duration?: number | undefined, onClose?: (() => void) | undefined): void;
    hide(): void;
};
export default _default;
