import './playlist.css';
import {getToken, LoginForm, PrimaryInfo} from "../util/util";

export function Playlist() {
    if (getToken() == null) {
        return (
            <div>
                <PrimaryInfo text="Log in to use playlist builder..."/>
                <LoginForm/>
            </div>
        )
    } else {
        return (
            <div>
                <PrimaryInfo text="🚧Playlist Builder🚧"/>
            </div>
        )
    }
}