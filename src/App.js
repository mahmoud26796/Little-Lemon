import './App.css';
import BookingPage from './Components/Bookings/BookingPage';
import ConfirmedBooking from './Components/Bookings/ConfirmedBooking';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import HomePage from './Components/Layout/HomePage';
import { Routes, Route } from 'react-router-dom';
import Order from './Components/Layout/Order';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/booked' element={<ConfirmedBooking />}></Route>
          <Route path='/order' element={<Order />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
