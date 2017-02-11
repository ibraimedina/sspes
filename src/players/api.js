import AppAPI from '../api'
import Session from '../session'

const listPlayers = function(callback) {
	const token = Session.getToken()
	AppAPI.baseReq(
        'GET',
        'https://baas.kinvey.com/appdata/kid_HyAXFKzde/players',
        {Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
        callback
    )
}

export default {
	listPlayers,
}