import axios from 'axios';

let axiosInstance = null;

function initializeCommunicationInstance() {
	const baseUrl = process.env.REACT_APP_BASE_URL;

	if (!axiosInstance) {
		axiosInstance = axios.create({
			baseURL: baseUrl,
			timeout: 1000
		});
	}
}

async function get({url, params}) {
	const response = await axiosInstance.get(url);

	return response.data;
}

async function post({url, params, data}) {
	const response = await axiosInstance.post(url, {
		...data
	});

	return response.data;
}

export {
	initializeCommunicationInstance,
	get,
	post
}