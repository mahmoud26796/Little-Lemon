import './App.css';
import BookingPage from './Components/BookingPage';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';

// Hooks
import { useReducer } from 'react';

function App() {


  const availableTimesInit = [
    { id: 1, option: '17:00' },
    { id: 2, option: '18:00' },
    { id: 3, option: '19:00' },
    { id: 4, option: '20:00' },
    { id: 5, option: '21:00' },
    { id: 6, option: '22:00' },
  ];

  const updateTimes = (dateState, action) => {
    if (action.type === "initialized") {
      console.log(action.payload);
      return dateState;
    }
  };

  const initializeTimes = () => {
    return availableTimesInit;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage dispatch={dispatch} availableTimes={availableTimes} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
