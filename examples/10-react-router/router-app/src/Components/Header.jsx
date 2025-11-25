import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
    const getClass = ({ isActive }) => (isActive ? 'nav-active' : null);

    return (
        <header className="container">
            <Link to="/">
                <img className="logo" src={logo} alt="school logo" title="School Logo | Home" />
            </Link>
            <nav>
                <NavLink to="/" className={getClass}>Home</NavLink>
                <NavLink to="/about" className={getClass}>About</NavLink>
                <NavLink to="/programs" className={getClass}>Programs</NavLink>
                <NavLink to="/register" className={getClass}>Register</NavLink>
            </nav>
        </header>
    );
}