const initialState = [];

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GETALLCATEGORIES': {
			return action.payload;
		}

		default: {
			return state;
		}
	}
};

export default categoriesReducer;
