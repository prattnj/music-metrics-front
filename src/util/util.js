import './util.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import {LoginButton} from "../stats/stats";

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
                &copy; (pending) <span onClick={() => console.log(sessionStorage)}>2023</span> Noah Pratt <span className={'text-color-white'}>&#8226;</span>
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

export function LoginForm() {
    return (
        <div className='login-input-wrapper'>
            <input type="text" placeholder="Username" className="login-input"/>
            <input type="password" placeholder="Password" className="login-input"/>
            <LoginButton text={'LOGIN'} onclick={performLogin}/>
            <p className={'default-text-color'}>Don't have an account? <Link to={'/register'} className={'custom-link'}><u>Create one</u></Link> or</p>
            <LoginWithGoogle/>
        </div>
    )
}

export function LoginWithGoogle() {

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <GoogleLogin onSuccess={() => responseMessage} onError={() => errorMessage} />
    )
}

export function getToken() {
    return localStorage.getItem('token');
}

function performLogin() {
    console.log("logging in...")
    // TODO
}