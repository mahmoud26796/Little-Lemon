import '../Components/styles/booking-page.css';
import BookingForm from './BookingForm';

//Hooks
import { useReducer, useState, useEffect } from 'react';

function BookingPage() {
    const availableTimesInit = [
        { id: 1, option: '17:00' },
        { id: 2, option: '18:00' },
        { id: 3, option: '19:00' },
        { id: 4, option: '20:00' },
        { id: 5, option: '21:00' },
        { id: 6, option: '22:00' },
    ];

    const updateTimes = (dateState, action) => {
        if (action.type === "initialized") {
            let date = action.payload;
            console.log(action.payload);
            return date;
        }
    };

    const [times, setTimes] = useState([]);
    const date = updateTimes(times, "initialized");
    useEffect(() => {
        if (window.fetchAPI) {
            const data = window.fetchAPI(date);
            console.log(data);

            setTimes(data);
        }
    }, []);
    const initializeTimes = () => {

        return availableTimesInit;
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
        <>
            <div>
                <img src='assets/restaurant.jpg' alt='resturant' className='rest' />
            </div>
            <BookingForm dispatch={dispatch} initializeTimes={initializeTimes} />
        </>
    )
};

export default BookingPage;