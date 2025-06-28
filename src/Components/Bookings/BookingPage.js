import './../styles/booking-page.css';

//Hooks
import { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from "./Helper.js";

function BookingPage() {
    const updateTimes = (dateState, action) => { // should handle the select/choose date input
        if (action.type === "initialized") {
            let inputDate = action.payload;
            const result = fetchAPI(new Date(inputDate));
            return result;
        }
        return [];
    };



    const initializeTimes = () => { // should return the availableTimes
        return [];
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
    return (
        <>
            <div>
                <img src='assets/restaurant.jpg' alt='resturant' className='rest' />
            </div>
            <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
        </>
    )
};

export default BookingPage;