
const initialState = {
	word: 'TEST word/index'
};

const word = (state = initialState, action) => {
	switch(action.type) {
	    case "":
	        return state;
	    default:
	        return state;
	}
}

export default word;