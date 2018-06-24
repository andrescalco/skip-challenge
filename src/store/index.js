import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'reducers';
import restaurants_list from 'data/restaurants_list.json'
import categories_list from 'data/categories_list.json'

// default state
const defaultState = {
	restaurants_list,
	categories_list
};

const store = createStore(reducers, defaultState, applyMiddleware(ReduxThunk));

export { store };