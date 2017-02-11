const baseReq = function(method, url, headers, callback, data) {
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

export default {
	baseReq,
}