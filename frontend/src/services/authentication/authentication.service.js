import { post } from '../communication/communication.service';

function loginUser() {
	// Add user to redux state
}

function logoutUser() {
	// Remove user from redux state
}

async function registerUser(data) {
	return post({
		url: '/users/register',
		data
	})
}

export {
	loginUser,
	logoutUser,
	registerUser
}
