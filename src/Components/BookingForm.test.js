import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { updateTimes, initializeTimes } from '../App';
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
});

test('check if the available items options renderd', () => {
    render(<BookingForm />);
    const availableTimsResult = initializeTimes();
    expect(availableTimsResult).toEqual([
        { id: 1, option: '17:00' },
        { id: 2, option: '18:00' },
        { id: 3, option: '19:00' },
        { id: 4, option: '20:00' },
        { id: 5, option: '21:00' },
        { id: 6, option: '22:00' },
    ]);

});
test('check update times function', () => {
    render(<BookingForm />);
    const updateTimesResult = updateTimes();
    expect(updateTimesResult).toContain("initialized");

});
