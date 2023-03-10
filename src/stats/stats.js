import './stats.css';
import {PrimaryInfo} from "../util/util";

function Stats() {
    onload()
    return (
        <div>
            <PrimaryInfo text="Stats central."/>
            <div className='login-button-wrapper'>
                <div className='login-button' onClick={() => authenticate()}>
                    <b>LOGIN TO SPOTIFY</b>
                </div>
            </div>
        </div>
    )
}

function onload() {
    console.log('onload')
    let landing_url = window.location.href
    if (landing_url.length > 35) {
        if (!validateState(landing_url)) {
            // ERROR: INVALID STATE
            window.location = 'https://dev.musicmetrics.app/stats'
        }
        storeAuthInfo(landing_url)
        if (sessionStorage.getItem('error') != null) {
            // FAILURE (user did not log in)
            window.location = 'https://dev.musicmetrics.app/stats'
        } else {
            // SUCCESS (user logged in)
            window.location = 'https://dev.musicmetrics.app/stats'
            showStats()
        }
    }
}

function authenticate() {
    let client_id = '8b99139c99794d4b9e89b8367b0ac3f4'
    let redirect_uri = 'https://dev.musicmetrics.app/stats'
    let state = Math.floor(Math.random() * 100000000) // random 8 digit number
    sessionStorage.setItem('state', state.toString())
    let scope = 'user-read-playback-state ' +
        'playlist-read-private ' +
        'playlist-read-collaborative ' +
        'user-follow-read ' +
        'user-read-currently-playing ' +
        'user-read-playback-position ' +
        'user-read-email ' +
        'user-top-read ' +
        'user-read-recently-played ' +
        'user-read-private ' +
        'user-library-read'

    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=code'
    url += '&client_id=' + encodeURIComponent(client_id)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
    url += '&state=' + encodeURIComponent(state)

    window.location = url;
}

function storeAuthInfo(url) {
    url = url.replace('#', '?')

    const urlParams = new URLSearchParams(new URL(url).search)

    if (!urlParams.has('state')) return;
    if (!urlParams.has('error')) {
        const access_token = urlParams.get('access_token')
        const token_type = urlParams.get('token_type')
        const expires_in = urlParams.get('expires_in')
        sessionStorage.setItem('access_token', access_token)
        sessionStorage.setItem('token_type', token_type)
        sessionStorage.setItem('expires_in', expires_in)
    } else {
        const error = urlParams.get('error')
        sessionStorage.setItem('error', error)
    }

}

function validateState(url) {
    const urlParams = new URLSearchParams(url)
    const stored_state = sessionStorage.getItem('state')
    if (!urlParams.has('state') || stored_state == null) return false;
    return stored_state === urlParams.get('state')
}

function showStats() {}

export {Stats};