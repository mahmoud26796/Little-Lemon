import '../Components/styles/booking-page.css';
import BookingForm from './BookingForm';
function BookingPage() {
    return (
        <>
            <div>
                <img src='assets/restaurant.jpg' alt='resturant' className='rest' />
            </div>
            <div>
                <h1 className="res-title">Book Your Table!</h1>
            </div>
            <BookingForm />
        </>
    )
};

export default BookingPage;