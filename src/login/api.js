import AppAPI from '../api'
import Session from '../session'

const login = function(username, password, callback) {
	const hash = btoa(username + ':' + password)
	const loginCallback = function(token) {
		Session.setToken(token._kmd.authtoken)
		callback(token)
	}
	AppAPI.baseReq(
        'POST',
        'https://baas.kinvey.com/user/kid_HyAXFKzde/login',
        {Authorization: 'Basic ' + hash, 'Content-Type': 'application/json'},
        loginCallback,
        {username, password}
    )
}

export default {
	login,
}