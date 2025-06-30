import '../styles/testimonials.css';
function Testimonials() {
    return (
        <section className='testimonials'>
            <div className="container" style={{ marginTop: '200px' }}>
                <div className='container'>
                    <div className="row">
                        <h1 className="col">Testimonials</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center test-card">
                            <h4 className='staring'>Staring</h4>
                            <div className='d-flex align-items-center'>
                                <img src='assets/fe-user.png' alt='user' className='user-img' />
                                <h4>Samantha Delgado</h4>
                            </div>
                            <p className='review'>
                                Little Lemon has completely transformed how I think about Mediterranean dining. From the playful lemon-toned color palette to the intuitive menu layout, every part of the experience screams chef’s kiss. I especially loved how easy it was to make a reservation—sleek UX with zero friction. You can tell real thought went into every design choice.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center test-card">
                            <h4 className='staring'>Staring</h4>
                            <div className='d-flex align-items-center'>
                                <img src='assets/user.png' alt='user' className='user-img' />
                                <h4>Adeel Rahman</h4>
                            </div>
                            <p className='review'>
                                As someone who works in tech, I really appreciate the clean, responsive design of the Little Lemon website. It loads lightning-fast and adapts beautifully on mobile, which is surprisingly rare even today. But it’s not just functional—the quirky branding and thoughtful user flows make the entire site feel like a breath of fresh citrusy air.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column align-items-center test-card">
                            <h4 className='staring'>Staring</h4>
                            <div className='d-flex align-items-center'>
                                <img src='assets/user.png' alt='user' className='user-img' />
                                <h4>Chloe Van Doren</h4>
                            </div>
                            <p className='review'>
                                The website for Little Lemon is like stepping into the restaurant before you even arrive—warm, inviting, and full of flavor. I loved the storytelling element with the team bios and dish highlights. It gave me a sense of connection before I ever set foot inside. It’s rare to see a website that captures a brand’s soul so perfectly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials;