function Nav() {
    return (
        <nav>
            <dvi>
                <img className="main-logo" src="assets/Logo.svg" alt="Logo"  />
            </dvi>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="/booking">Reservation</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;