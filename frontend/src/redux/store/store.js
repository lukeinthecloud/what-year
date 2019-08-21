import { createStore, combineReducers } from 'redux';
import { authenticated }                from '../reducers/authenticated.reducer';

const reducers = combineReducers({
	authenticated
});

export const store = createStore(reducers);


