import { combineReducers } from 'redux';
import restaurants_list from './restaurants_list';
import categories_list from './categories_list';

export default combineReducers({
	restaurants_list,
	categories_list
});