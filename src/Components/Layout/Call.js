import '.././styles/call-style.css'
function Call() {
    return (
        <section className="hero-section">
            <div className='container main'>
                <div className='row'>
                    <div className="col-6 disc-container">
                        <h1 className="main-title">Little Lemon</h1>
                        <span className="secondary-title">Chicago</span>
                        <p className="disc">
                            We are family owned Mediterranean resturant,
                            focused on traditional recipes served with
                            a modern twist.
                        </p>
                        <button className="main-btn"><a href="/booking">Reserve A Table</a></button>
                    </div>
                    <div className='col-6 img-container'>
                        <img src="/assets/restauranfood.jpg" alt="none" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Call;