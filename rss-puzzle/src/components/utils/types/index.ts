export type CallbackType = (event: MouseEvent) => void;

export interface IElementParams {
    tag: string;
    classNames?: string[];
    textContent?: string;
    callback: CallbackType | null;
}
