import { combineReducers } from 'redux';
import categoriesReducer from './categories/categoriesSlice';
import imagesReducer from './images/imagesSlice';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	images: imagesReducer,
});

export default rootReducer;
