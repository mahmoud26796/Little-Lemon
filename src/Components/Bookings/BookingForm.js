import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ dispatch, availableTimes, submitForm }) {

    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const handleDateInput = (e) => {
        setDate(e.target.value);
        dispatch({ type: "initialized", payload: e.target.value });
    };

    const [time, setTime] = useState("");
    const handleTimeInput = (e) => {
        setTime(e.target.value);
    };
    const [numGustes, setNumGustes] = useState(1);
    const handleGustesInput = (e) => {
        setNumGustes(e.target.value);
    };
    const [occasion, setOccasion] = useState("");
    const handleOcassionInput = (e) => {
        setOccasion(e.target.value)
    };
    const isFormCompleded = date && time && numGustes && occasion;
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        if (submitForm(data)) {
            navigate('/booked');
        }

    };
    return (
        <>
            <div>
                <h1 className="res-title">Book Now!</h1>
            </div>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">Choose Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            placeholder="Enter Date"
                            onChange={handleDateInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="res-time" className="form-control">Choose Time</label>
                        <select
                            id="res-time"
                            className="form-select"
                            name="time"
                            aria-label="Default select example"
                            required
                            onChange={handleTimeInput}
                        >
                            {availableTimes.map((o, i) => (
                                <option data-test-id="ops" key={i} value={o}>
                                    {o}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gustes">Number of guests:</label>
                        <input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            className="form-control"
                            id="gustes"
                            name="guests"
                            onChange={handleGustesInput}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="occasion-time" className="form-control">Occasion</label>
                        <select
                            id="occasion-time"
                            className="form-select"
                            name="occasion"
                            aria-label="Default select example"
                            required
                            onChange={handleOcassionInput}
                        >
                            <option></option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>

                    <button type="submit" disabled={!isFormCompleded}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookingForm