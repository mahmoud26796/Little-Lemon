import './App.css';
import BookingPage from './Components/Bookings/BookingPage';
import ConfirmedBooking from './Components/Bookings/ConfirmedBooking';
import Header from './Components/Layout/Header';
import HomePage from './Components/Layout/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/confirm-booking' element={<ConfirmedBooking />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
