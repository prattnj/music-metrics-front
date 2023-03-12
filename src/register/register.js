import React from 'react';
import './register.css';
import {LoginWithGoogle, PrimaryInfo, RegisterMessage} from "../util/util";

export class RegisterForm extends React.Component {
    render() {
        return (<div>
            <PrimaryInfo text="Create a Music Metrics account"/>
            <div className='login-input-wrapper'>
                <input type="text" placeholder="First name" className="login-input"/>
                <input type="text" placeholder="Last name" className="login-input"/>
                <input type="text" placeholder="Username" className="login-input"/>
                <input type="password" placeholder="Password" className="login-input"/>
                <input type="password" placeholder="Confirm password" className="login-input"/>
                <input type="text" placeholder="Email" className="login-input"/>
                <div className='login-button bottom-margin' onClick={() => this.validate()}>Create your free account</div>
                <LoginWithGoogle />
                <RegisterMessage />
            </div>
        </div>)
    }

    validate() {
        // todo
    }

}
