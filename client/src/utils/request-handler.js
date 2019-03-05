import axios from 'axios';

export default (options) => {

	options.data = options.data || {}
	options.url = process.env.REACT_APP_API_URL + options.url;

	let axiosOptions = {
		url: options.url,
		method: options.type,
		responseType: 'json', // default
  }

	switch (options.type.toLowerCase()) {

		case 'get':
      break;

		case 'put':
		case 'post':
      axiosOptions.data = options.data;
      break;

		case 'delete':
		case 'patch':
		default:
			axiosOptions.data = options.data
			break;
	}

	return axios(axiosOptions);
}
