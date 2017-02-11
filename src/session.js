const tokenKey = 'sspes-token'

const setToken = function(token) {
	return localStorage.setItem(tokenKey, token)
}

const getToken = function() {
	return localStorage.getItem(tokenKey)
}

export default {
	getToken,
	setToken,
}