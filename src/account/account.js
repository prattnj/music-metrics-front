import './account.css';
import {getToken, LoginForm, PrimaryInfo} from "../util/util";

function Account() {
    if (getToken() == null) {
        return <LoginForm />
    } else {
        return (
            <div>
                <PrimaryInfo text="🚧Account Information🚧"/>
            </div>
        )
    }

}

export {Account};