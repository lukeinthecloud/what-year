export const TOGGLE_AUTHENTICATION = 'TOGGLE_AUTHENTICATION';
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

export function setAuthenticated(state) {
	return {
		type: SET_AUTHENTICATION,
		state
	}
}

export function toggleAuthentication() {
	return {
		type: TOGGLE_AUTHENTICATION
	}
}
