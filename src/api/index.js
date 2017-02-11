const BaseReq = function(method, url, headers, callback, data) {
	const req = new XMLHttpRequest()
	req.onreadystatechange = function() {
		if (this.readyState === 4) {
			callback(JSON.parse(this.responseText))
		}
	}
	req.open(method, url)
	for (let h in headers)
		if (headers.hasOwnProperty(h))
			req.setRequestHeader(h, headers[h])
	if (data) 
		req.send(JSON.stringify(data))
	else   
        req.send()
}

const LogIn = function(username, password, callback) {
	const hash = btoa(username + ':' + password)
	const loginCallback = function(token) {
		localStorage.setItem('sspes-token', token._kmd.authtoken)
		callback(token)
	}
	BaseReq(
        'POST',
        'https://baas.kinvey.com/user/kid_HyAXFKzde/login',
        {Authorization: 'Basic ' + hash, 'Content-Type': 'application/json'},
        loginCallback,
        {username, password}
    )
}

const ListPlayers = function(callback) {
	const token = localStorage.getItem('sspes-token')
	BaseReq(
        'GET',
        'https://baas.kinvey.com/appdata/kid_HyAXFKzde/players',
        {Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
        callback
    )
}

const ListMatches = function(callback) {
	const token = localStorage.getItem('sspes-token')
	BaseReq(
        'GET',
        'https://baas.kinvey.com/appdata/kid_HyAXFKzde/matches',
        {Authorization: 'Kinvey ' + token, 'Content-Type': 'application/json'},
        callback
    )
}

export default {
	LogIn,
	ListPlayers,
	ListMatches,
}