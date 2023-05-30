const initialState = JSON.parse(localStorage.getItem('images')) || {
	isLoading: false,
	error: '',
	page: 1,
	data: [],
};

const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GETIMAGES': {
			return {
				...state,
				page: state.page + 1,
				data: [...state.data, ...action.payload],
			};
		}
		case 'CHANGECATEGORY': {
			return {
				...state,
				page: state.page + 1,
				data: [...action.payload],
			};
		}
		default: {
			return state;
		}
	}
};

export default imagesReducer;
