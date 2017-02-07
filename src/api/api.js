const BaseReq = function(method, url, headers, callback, data) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        console.debug("onreadystatechange");
        if (this.readyState === 4) {
            callback(this.responseText);
        }
    };
    req.open(method, url);
    for (let h in headers)
        if (headers.hasOwnProperty(h))
            req.setRequestHeader(h, headers[h]);
    if (data) 
        req.send(JSON.stringify(data));
    else   
        req.send();
};

const AppKey = "kid_HyAXFKzde";

const LogIn = function(username, password, callback) {
    const hash = btoa(username + ":" + password);
    const loginCallback = function(res) {
        const token = JSON.parse(res);
        localStorage.setItem("sspes-token", token._kmd.authtoken);
        callback(token)
    }
    BaseReq(
        "POST",
        "https://baas.kinvey.com/user/kid_HyAXFKzde/login",
        {Authorization: "Basic " + hash, "Content-Type": "application/json"},
        loginCallback,
        {username, password}
    );
};

const jsonCallback = function(callback) {
    return function(res) {
        const token = JSON.parse(res);
        callback(token)
    }
}

const ListPlayers = function(callback) {
    const token = localStorage.getItem("sspes-token");
    BaseReq(
        "GET",
        "https://baas.kinvey.com/appdata/kid_HyAXFKzde/players",
        {Authorization: "Kinvey " + token, "Content-Type": "application/json"},
        jsonCallback(callback));
};

export default {
    AppKey,
    LogIn,
    ListPlayers
};