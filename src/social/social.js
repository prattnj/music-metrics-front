import './social.css';
import {getToken, LoginForm, PrimaryInfo} from "../util/util";

export function Social() {
    if (getToken() == null) {
        return (
            <div>
                <PrimaryInfo text="Log in to share stats..."/>
                <LoginForm/>
            </div>
        )
    } else {
        return (
            <div>
                <PrimaryInfo text="🚧Share with Friends🚧"/>
            </div>
        )
    }

}