export type callbackInputType = (value: string, minimumLength: number) => boolean;

export type InputType = {
    type: string;
    label: string;
    required?: boolean;
    callback?: callbackInputType;
    minimumLength: number;
};
