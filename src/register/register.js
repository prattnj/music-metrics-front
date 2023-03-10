import React from 'react';
import {PrimaryInfo} from "../util/util";

class RegisterForm extends React.Component {
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
                <div className='register-options'>
                    <div className='login-button' onClick={() => this.validate()}>REGISTER</div>
                    <div className='login-button'>Sign in with Google</div>
                </div>
            </div>
        </div>)
    }

    validate() {
        // todo
    }
}

export {RegisterForm};