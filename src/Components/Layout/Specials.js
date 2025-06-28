import '.././styles/specials.css';
function Specials() {
    return (
        <section>
            <div className="container" style={{ marginTop: '200px' }}>
                <div className='container'>
                    <div className="row">
                        <h1 className="col-6">This Week's Specials!</h1>
                        <div className="col">
                            <button className="main-btn special"><a href="/menu">Online Menu</a></button>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img className='specials-img' src="/assets/greek salad.jpg" alt="food" />
                            <div className='card mb-5   '>
                                <div className='d-flex justify-content-around mt-2'>
                                    <h6 className='food-name'>Greek Salad</h6>
                                    <span className='price'>$12,99</span>
                                </div>
                                <p className='food-desc'>
                                    A refreshing medley of ripe tomatoes, crisp cucumbers, red onions, Kalamata olives, and creamy feta, tossed in extra virgin olive oil and red wine vinegar. A classic Mediterranean favorite that’s as vibrant as it is flavorful
                                </p>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <h6 className='food-deliv'>Order delivery</h6>
                                    <span className='delv-price mb-2'>$1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img className='specials-img' src="/assets/bruchetta.svg" alt="food" />
                            <div className='card mb-5   '>
                                <div className='d-flex justify-content-around mt-2'>
                                    <h6 className='food-name'>Bruchetta</h6>
                                    <span className='price'>$12,99</span>
                                </div>
                                <p className='food-desc'>
                                    Toasted baguette slices topped with a juicy blend of diced Roma tomatoes, garlic, basil, and a splash of balsamic vinegar. Simple, rustic, and bursting with Italian charm in every bite.
                                </p>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <h6 className='food-deliv'>Order delivery</h6>
                                    <span className='delv-price mb-2'>$1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img className='specials-img' src="/assets/lemon dessert.jpg" alt="food" />
                            <div className='card mb-5   '>
                                <div className='d-flex justify-content-around mt-2'>
                                    <h6 className='food-name'>Lemon Dessert</h6>
                                    <span className='price'>$12,99</span>
                                </div>
                                <p className='food-desc'>
                                    A zesty lemon treat that balances sweet and tart with a silky texture and bright citrus flavor. Whether it’s a pudding, tart, or cake — it’s sunshine on a plate.
                                </p>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <h6 className='food-deliv'>Order delivery</h6>
                                    <span className='delv-price mb-2'>$1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Specials;