import AppAPI from '../api'
import Session from '../session'

const list = function(callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
        'GET',
        'https://baas.kinvey.com/appdata/kid_HyAXFKzde/players',
        {Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
        callback
    )
}

const create = function(player, callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
		'POST',
		'https://baas.kinvey.com/appdata/kid_HyAXFKzde/players',
		{Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
		callback,
		player
	)
}

const update = function(player, callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
		'PUT',
		'https://baas.kinvey.com/appdata/kid_HyAXFKzde/players/' + player._id,
		{Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
		callback,
		player
	)
}

export default {
	list,
	create,
	update,
}