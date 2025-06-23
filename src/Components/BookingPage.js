import '../Components/styles/booking-page.css';
import BookingForm from './BookingForm';
function BookingPage({ dispatch, availableTimes }) {
    return (
        <>
            <div>
                <img src='assets/restaurant.jpg' alt='resturant' className='rest' />
            </div>
            <div>
                <h1 className="res-title">Book Your Table!</h1>
            </div>
            <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
        </>
    )
};

export default BookingPage;