export const BLANK_CONVERT = 'BLANK_CONVERT';
export const BLANK_COPY = 'BLANK_COPY';
export const BLANK_PRINT = 'BLANK_PRINT';
export const BLANK_CANCEL = 'BLANK_CANCEL';
export const BLANK_TEXTAREA_CHANGE = 'BLANK_TEXTAREA_CHANGE';

export function convert() {
    return {
        type: BLANK_CONVERT
    };
}

export function copy() {
    return {
        type: BLANK_COPY
    };
}

export function print() {
    return {
        type: BLANK_PRINT
    };
}

export function cancel() {
    return {
        type: BLANK_CANCEL
    };
}

export function onTextareaChange(source) {
    return {
        type: BLANK_TEXTAREA_CHANGE,
        source: source
    };
}
