import axios from 'axios';
import qs from 'qs';
var Buffer = require('buffer/').Buffer

let authToken = '';

// function getSpotifyAuth() gets Client Credentials flow Authentification token
export async function getSpotifyAuth() {

    const clientId = process.env.REACT_APP_CLIENT_ID; // Your client id
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET; // Your secret

    const authUrl = 'https://accounts.spotify.com/api/token';
    const authBasicToken = Buffer.from(clientId + ':' + clientSecret).toString('base64');
    const grant = qs.stringify({ 'grant_type': 'client_credentials' });

    console.log('Begin Auth');

    try {

        let response = await axios.post(authUrl, grant, {
            headers: {
                'Authorization': 'Basic ' + authBasicToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        //return access tokens
        //console.log(response.data.access_token);
        console.log('Auth Success !')
        authToken = response.data.access_token;
    } catch (error) {
        //on fail, log the error in console
        console.log(error);
    }
};

// function searchSpotifyArtist() search for input.value in Spotify artists db
export async function searchSpotifyArtist(data) {

    console.log();
    const searchUrl = 'https://api.spotify.com/v1/search';

    console.log('Begin Search');

    try {

        let response = await axios.get(searchUrl, {
            params: {
                'type': 'artist',
                'limit': '6',
                'market': 'FR',
                'query': data
            },

            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })

        //return access token
        console.log(response.data.artists.items);
        console.log('Search Success !');
        return response.data.artists.items;
    } catch (error) {
        //on fail, log the error in console
        console.log(error);
    }

};