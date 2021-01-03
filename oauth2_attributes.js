function introspectAccessToken(r) {
    var currentTime = new Date().toUTCString();
    r.subrequest("/_oauth_send_request",
        function(reply) {
            if (reply.status == 200) {
                var response = JSON.parse(reply.responseBody);
                r.headersOut['Token-username'] = response.token;
                r.status = 200;
                r.sendHeader();
                r.finish();
            } else {
                r.return(401);
            }
        }
    );
}

function fetch_token(r) {
    return process.env.TOKEN;
}