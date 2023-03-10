import './util.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

function Header() {
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

function Footer() {
    return (
        <footer className="footer default-text-color">
            <p>
                Copyright &copy; (pending) <span onClick={() => console.log(sessionStorage)}>2023</span> Noah Pratt &#8226;
                <Link to={"/privacy"} className='custom-link'> Privacy Policy</Link> &#8226;
                <Link to={"/terms"} className='custom-link'> Terms of Service</Link> &#8226;
                <Link to={"/about"} className='custom-link'> About</Link> &#8226;
                <Link to={"/contact"} className='custom-link'> Contact Us</Link> &#8226;
                <a href="https://github.com/prattnj/music-metrics-front" target='_blank' className='custom-link'> GitHub</a>
            </p>
        </footer>
    )
}

function PrimaryInfo(props) {
    return (
        <div className="primary-info">
            <b>{props.text}</b>
        </div>
    )
}

function LoginForm() {
    return (
        <div className='login-input-wrapper'>
            <input type="text" placeholder="Username" className="login-input"/>
            <input type="password" placeholder="Password" className="login-input"/>
            <p>Don't have an account? <Link to={'/register'}>Create one</Link></p>
        </div>
    )
}

function getToken() {
    return localStorage.getItem('token');
}

export {Header};
export {Footer};
export {PrimaryInfo};
export {LoginForm};
export {getToken};