import './App.css';
import BookingPage from './Components/BookingPage';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
