import './util.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

import React, {useState} from "react";
import {GoogleLogin} from '@react-oauth/google';

// ELEMENTS COMMON TO EVERY PAGE ---------------------------------------------------------------------------------------

export function Header() {
    return (
        <header className="nav">
            <div>
                <Link to="/">
                    <img
                        className="logo-primary"
                        src = {logo}
                        alt = "Image not found."
                    />
                </Link>
            </div>
            <div className='nav-buttons default-text-color'>
                <NavButton url="/" text="HOME"/>
                <NavButton url="/stats" text="STATS"/>
                <NavButton url="/account" text="ACCOUNT"/>
            </div>
        </header>
    )
}

function NavButton(props) {
    return (
        <Link to={props.url} className='custom-link'>
            <div className="nav-button">
                {props.text}
            </div>
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="footer default-text-color">
            <p>
                <span onClick={() => localStorage.clear()}>&copy;</span> (pending) <span onClick={() => console.log(sessionStorage)}>2023</span> Noah Pratt <span className={'text-color-white'}>&#8226;</span>
                <Link to={"/privacy"} className='custom-link'> Privacy Policy</Link> <span className={'text-color-white'}>&#8226;</span>
                <Link to={"/terms"} className='custom-link'> Terms of Service</Link> <span className={'text-color-white'}>&#8226;</span>
                <Link to={"/about"} className='custom-link'> About</Link> <span className={'text-color-white'}>&#8226;</span>
                <Link to={"/contact"} className='custom-link'> Contact Us</Link> <span className={'text-color-white'}>&#8226;</span>
                <a href="https://github.com/prattnj/music-metrics-front" target='_blank' className='custom-link'> GitHub</a>
            </p>
        </footer>
    )
}

export function PrimaryInfo(props) {
    return (
        <div className="primary-info">
            <b>{props.text}</b>
        </div>
    )
}

// LOGIN ELEMENTS ------------------------------------------------------------------------------------------------------

export function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorText, setErrorText] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        console.log('username length: ' + username.length + ', password length: ' + password.length + ', username: ' + username + ', password: ' + password);
        if (username.length > 30 || username.length < 5 || password.length > 30 || password.length < 8) {
            setErrorVisible(true);
            setErrorText('Invalid username or password.');
        } else {
            setErrorVisible(false);
            setErrorText('');
            // todo: call login api
            // if login successful, remove error message, set token in local storage and reload
            // else, reset error message
            localStorage.token = 'temp_token';
            location.reload();

        }
    }

    return (
        <div className='login-input-wrapper'>
            <input type="text" placeholder="Username" className="login-input" onClick={handleUsernameChange}/>
            <input type="password" placeholder="Password" className="login-input" onClick={handlePasswordChange}/>
            <LoginError isVisible={errorVisible} text={errorText}/>
            <LoginButton text={'LOGIN'} click={() => handleLogin()}/>
            <p className={'default-text-color'}>Don't have an account? <Link to={'/register'} className={'custom-link'}><u>Create one</u></Link> or</p>
            <LoginWithGoogle/>
        </div>
    )
}

export function LoginButton(props) {
    return (
        <div className='login-button-wrapper'>
            <div className='login-button' onClick={props.click}>
                <b>{props.text}</b>
            </div>
        </div>
    )
}

export function LoginWithGoogle() {

    const responseMessage = (response) => {
        console.log('google success: ' + response);
    };
    const errorMessage = (error) => {
        console.log('google failure: ' + error);
    };

    return (
        <GoogleLogin onSuccess={() => responseMessage} onError={() => errorMessage} />
    )
}

function LoginError(props) {
    return (
        <div>
            {props.isVisible && <div className={'login-error'}>{props.text}</div>}
        </div>
    )
}

export function getToken() {
    return localStorage.getItem('token');
}

export function RegisterMessage() {
    return (
        <div className={'register-message default-text-color'}>By registering, you agree to our
            <Link className={'custom-link'} to={'/privacy'}> Privacy Policy</Link> and
            <Link className={'custom-link'} to={'/terms'}> Terms of Service</Link>.
        </div>
    )
}
