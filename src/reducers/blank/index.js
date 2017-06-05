import { BLANK_CONVERT, BLANK_COPY, BLANK_CANCEL } from '../../actions/blank';
import { combineReducers } from 'redux';

const blankInitialState = {
    text: ''
};

const blankReducer = (state = blankInitialState, action) => {
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

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const BlankApp = combineReducers({
	blankReducer,
    extra
});

export default BlankApp;


//const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
//    switch(action.type) {
//        default:
//            return state;
//    }
//}
//
//const counterApp = combineReducers({
//    counter,
//    extra
//});
//
//export default counterApp;