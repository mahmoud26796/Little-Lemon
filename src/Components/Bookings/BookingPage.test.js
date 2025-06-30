import { updateTimes, initializeTimes } from './BookingPage';
import { fetchAPI } from './Helper';

test('check for availableTimes function', () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    const result = fetchAPI(mockTimes);
    const availableTimsResult = initializeTimes();
    expect(availableTimsResult).toُEqual(result);

});

test('check for the updatetimes function', () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    const mockDate = new Date().toDateString();

    const action = {
        type: 'initialized',
        payload: { selectedDate: mockDate }
    };
    const updateTimesResult = updateTimes([], action);
    expect(updateTimesResult).toُEqual(mockTimes);
});
