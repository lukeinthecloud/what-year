import {
	TOGGLE_AUTHENTICATION,
	SET_AUTHENTICATION
} from '../actions/authenticated.action';

const initialState = false;

export const authenticated = (state, action) => {
	if (typeof state === 'undefined') {
		return initialState
	}

	switch (action.type) {
		case TOGGLE_AUTHENTICATION: {
			return !state;
		}
		case SET_AUTHENTICATION: {
			return action.state;
		}
		default: {
			return state;
		}
	}
};
