import React from 'react';
import './register.css';
import {PrimaryInfo} from "../util/util";
import {GoogleLogin} from "react-google-login";

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
                    <GoogleLogin
                        clientId="186887527754-vjcubupfn2f9vsf46qrtiflak8vnqii0.apps.googleusercontent.com"
                        buttonText="Register with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </div>)
    }

    validate() {
        // todo
    }

    responseGoogle(response) {
        console.log(response)
    }
}

export {RegisterForm};