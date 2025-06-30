import '../styles/footer.css';
function Footer() {
    return (
        <footer id='footer' aria-description='website footer'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src="assets/Logo.svg" className='footer-logo' alt="Logo" />
                    </div>
                    <div className="col-3 d-flex flex-column align-items-start">
                        <h4>Document Navigation</h4>
                        <ul className="footer-ul">
                            <li className="footer-li"><a href="/">Home</a></li>
                            <li className="footer-li"><a href="#">About</a></li>
                            <li className="footer-li"><a href="#">Menu</a></li>
                            <li className="footer-li"><a href="/booking">Reservation</a></li>
                            <li className="footer-li"><a href="#">Order Online</a></li>
                            <li className="footer-li"><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-start">
                        <h4>Contact Info</h4>
                        <ul className="footer-ul">
                            <li className="footer-li"><a href="/">Address</a></li>
                            <li className="footer-li"><a href="#">Phone Number</a></li>
                            <li className="footer-li"><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-start">
                        <h4>Links To Social Media</h4>
                        <ul className="footer-ul">
                            <li className="footer-li"><a href="/">Facebook</a></li>
                            <li className="footer-li"><a href="#">Instagram</a></li>
                            <li className="footer-li"><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};


export default Footer;