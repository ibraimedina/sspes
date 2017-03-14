import AppAPI from '../api'
import Session from '../session'

const listMatches = function(callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
        'GET',
        'https://baas.kinvey.com/appdata/kid_HyAXFKzde/matches',
        {Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
        callback
    )
}

const create = function(match, callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
		'POST',
		'https://baas.kinvey.com/appdata/kid_HyAXFKzde/matches',
		{Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
		callback,
		match
	)
}

export default {
	listMatches,
	create,
}