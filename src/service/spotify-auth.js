/*
import request from 'request';

export function authenticate() {
    console.log('start auth');

    var client_id = process.env.CLIENT_ID;
    var client_secret = process.env.CLIENT_SECRET;

    let tokenAuth = '';

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            tokenAuth = body.access_token;
        }
    });

    console.log(tokenAuth);
}
;
*/