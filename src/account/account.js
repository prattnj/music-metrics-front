import './account.css';
import {getToken, LoginForm, PrimaryInfo} from "../util/util";

function Account() {
    if (getToken() == null) {
        return (
            <div>
                <PrimaryInfo text="Log in to continue to account..."/>
                <LoginForm/>
            </div>
        )
    } else {
        return (
            <div>
                <PrimaryInfo text="🚧Account Information🚧"/>
            </div>
        )
    }

}

export {Account};