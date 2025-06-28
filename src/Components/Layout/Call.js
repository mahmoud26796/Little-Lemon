import '.././styles/call-style.css'
function Call() {
    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="main-title">Little Lemon</h1>
                <spn className="secondary-title">Chicago</spn>
                <p className="disc">
                    We are family owned Mediterranean resturant,
                    focused on traditional recipes served with
                    a modern twist.
                </p>
                <button className="reserve"><a href="/booking">Reserve A Table</a></button>
            </div>
            <img src="/assets/restauranfood.jpg" alt="none" className="hero-img"/>
        </section>
    )
};

export default Call;