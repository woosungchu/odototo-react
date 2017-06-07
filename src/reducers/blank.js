import { BLANK_CONVERT, BLANK_COPY, BLANK_CANCEL } from 'actions/blank';

const blankInitialState = {
    text: ''
};

const blank = (state = blankInitialState, action) => {
    switch(action.type) {
        case BLANK_CONVERT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case BLANK_COPY:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case BLANK_CANCEL:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

export default blank;