function Nav() {
    return (
        <nav>
            <dvi>
                <img className="main-logo" src="assets/Logo.svg" alt="Logo"  />
            </dvi>
            <ul className="nav-ul">
                <li className="nav-li"><a href="/">Home</a></li>
                <li className="nav-li"><a href="#">About</a></li>
                <li className="nav-li"><a href="#">Menu</a></li>
                <li className="nav-li"><a href="/booking">Reservation</a></li>
                <li className="nav-li"><a href="#">Order Online</a></li>
                <li className="nav-li"><a href="#">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;