import { BLANK_CONVERT, BLANK_COPY, BLANK_CANCEL, BLANK_TEXTAREA_CHANGE } from 'actions/blank';

const blankInitialState = {
    source: '',
    text: ''
};

const blank = (state = blankInitialState, action) => {

    switch(action.type) {
        case BLANK_CONVERT:
            return Object.assign({}, state, {
                text : state.source
            });
        case BLANK_COPY:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case BLANK_CANCEL:
            return Object.assign({}, state, {
                diff: action.diff
            });
        case BLANK_TEXTAREA_CHANGE:
            console.log(action.source)
            return Object.assign({}, state, {
                source: action.source
            });
        default:
            return state;
    }
};

export default blank;
