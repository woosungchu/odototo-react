export const BLANK_CONVERT = 'BLANK_CONVERT';
export const BLANK_COPY = 'BLANK_COPY';
export const BLANK_CANCEL = 'BLANK_CANCEL';

export function convert(text) {
    return {
        type: BLANK_CONVERT,
        text: text
    };
}

export function copy() {
    return {
        type: BLANK_COPY
    };
}

export function cancel() {
    return {
        type: BLANK_CANCEL
    };
}