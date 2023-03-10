import './register.css';
import {PrimaryInfo} from "../util/util";

function Register() {
    return (
        <div>
            <PrimaryInfo text="Create a Music Metrics account"/>
            <div className='login-input-wrapper'>
                <input type="text" placeholder="First name" className="login-input"/>
                <input type="text" placeholder="Last name" className="login-input"/>
                <input type="text" placeholder="Username" className="login-input"/>
                <input type="password" placeholder="Password" className="login-input"/>
                <input type="password" placeholder="Confirm password" className="login-input"/>
                <input type="text" placeholder="Email" className="login-input"/>
            </div>
        </div>
    )
}

export {Register};