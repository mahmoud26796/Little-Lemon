function BookingPage() {
    return (
        <>
            <div>
                <h1 className="res-title">Reserve Your Table!</h1>
            </div>
            <form>
                <label htmlFor="res-date">Choose Date: </label>
                <input type="text" name="res-data" />
                <label htmlFor="res-time">Choose Time: </label>
                <select name="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"></input>
            </form>
        </>
    )
};

export default BookingPage;