import { useState } from "react"
function BookingForm() {
    const [date, setDate] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        { id: 1, option: '17:00' },
        { id: 2, option: '18:00' },
        { id: 3, option: '19:00' },
        { id: 4, option: '20:00' },
        { id: 5, option: '21:00' },
        { id: 6, option: '22:00' },
    ]);

    const handleDateInput = (e) => {
        console.log(e.target.value);
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
    return (
        <>
            <div className='form-container'>

                <form>
                    <div class="form-group">
                        <label htmlFor="date">Choose Date:</label>
                        <input type="date" className="form-control" id="date" placeholder="Enter Date" onChange={handleDateInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="res-time" className='form-control'>Choose Time</label>
                        <select id="res-time" className="form-select" aria-label="Default select example" onChange={handleSelection}>
                            {availableTimes.map(o => <option key={o.id}>{o.option}</option>)}
                        </select>
                    </div>
                    <div class="form-group">
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookingForm