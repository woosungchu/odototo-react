import { BLANK_CONVERT, BLANK_COPY, BLANK_CANCEL, BLANK_TEXTAREA_CHANGE } from 'actions/blank';

const blankInitialState = {
    source: '',
    text: '',
    converted: false
};

const blank = (state = blankInitialState, action) => {

    switch(action.type) {
        case BLANK_CONVERT:
        	let initText = '';
        	
        	initText = state.source
        					.replace(/([^\u0000-\u007F]|\w|\.|-)+[^\s\.,!?'")]/g, function(word){
				                return '<span>'+word+'</span>'
				            })
				            .replace(/\r?\n/, "<br/>");
        	
            return Object.assign({}, state, {
                text : initText,
                converted : true
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
            return Object.assign({}, state, {
                source: action.source
            });
        default:
            return state;
    }
};

export default blank;
