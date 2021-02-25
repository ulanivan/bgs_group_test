const buildParamsString = (params) => {
	return Object.entries(params).map(([key, val]) => [`${key}=${val}`]).join('&');
}

export default {
	getList: (params) => `https://reqres.in/api/users?${buildParamsString(params)}`
}