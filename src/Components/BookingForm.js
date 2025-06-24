import { useState } from "react"
function BookingForm({ dispatch, availableTimes }) {
    const [date, setDate] = useState("");

    const handleDateInput = (e) => {
        dispatch({ type: "initialized", payload: e.target.value });
    };

    const handleSelection = (e) => {
        console.log(e.target.value);
    };

    const handleNumGuests = (e) => {
        console.log(e.target.value);
    };

    const handleOcassion = (e) => {
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
    };
    let availableTimesInit = availableTimes();
    return (
        <>
            <div>
                <h1 className="res-title">Book Now!</h1>
            </div>
            <div className='form-container'>
                <form>
                    <div className="form-group">
                        <label htmlFor="date">Choose Date:</label>
                        <input type="date" className="form-control" id="date" placeholder="Enter Date" onChange={handleDateInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="res-time" className='form-control'>Choose Time</label>
                        <select id="res-time" className="form-select" aria-label="Default select example" onChange={handleSelection}>
                            {availableTimesInit.map(o => <option data-test-id="ops" key={o.id}>{o.option}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gustes">Number of gustes:</label>
                        <input type="number" placeholder="1" min="1" max="10" className="form-control" id="gustes" onChange={handleNumGuests} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion" className='form-control'>Occasion</label>
                        <select id="occasion-time" className="form-select" aria-label="Default select example" onChange={handleOcassion}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookingForm