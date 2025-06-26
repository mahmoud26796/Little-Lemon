import './../styles/booking-page.css';

//Hooks
import { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

/**
 *  FetchAPI code
 */

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function (formData) {
    return true;
};

/**
 *  FetchAPI code
 */

function BookingPage() {
    const updateTimes = (dateState, action) => { // should handle the select/choose date input
        if (action.type === "initialized") {
            let inputDate = action.payload;
            const result = fetchAPI(new Date(inputDate));
            console.log(result);
            return result;
        }
        return [];
    };

    useEffect(() => {




    }, []);

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