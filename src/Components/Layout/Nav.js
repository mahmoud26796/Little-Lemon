import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <dvi>
                <Link to={'/'}>
                    <img className="main-logo" src="assets/Logo.svg" alt="Logo" style={{ cursor: 'pointer' }} />
                </Link>
            </dvi>
            <ul className="nav-ul">
                <li className="nav-li"><a href="/">Home</a></li>
                <li className="nav-li"><a href="#footer">About</a></li>
                <li className="nav-li"><a href="#footer">Menu</a></li>
                <li className="nav-li"><a href="/booking">Reservation</a></li>
                <li className="nav-li"><a href="/order">Order Online</a></li>
                <li className="nav-li"><a href="#">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;