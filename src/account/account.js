import './account.css';
import {getToken, LoginForm, PrimaryInfo} from "../util/util";

function Account() {
    if (getToken() == null) {
        return (
            <div>
                <PrimaryInfo text="Log in to see account info..."/>
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