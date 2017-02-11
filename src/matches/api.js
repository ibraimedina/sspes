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

export default {
	listMatches,
}