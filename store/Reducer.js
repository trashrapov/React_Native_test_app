const initialState = {
	avatar: null
};

function MainReducer(state=initialState, action) {
    if (action.type === 'Avatar_Updated') {
	    return {
	    	avatar: action.uri
	    };
	}

	return state;
}

export default MainReducer;


