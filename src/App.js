import {useState} from 'react';

import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
import './App.css';

function App() {

  const [tourLocation, setTourLocation] = useState ([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [dates, setDates] = useState([]);

  return (
    <div className="App">
      <Header />
      <TourSearch 
      setTourLocation={setTourLocation}
      setDates={setDates}
      setButtonClick={setButtonClick}
      />
      <DisplayData
      tourLocation={tourLocation}
      safeDates={dates}
      buttonClick={buttonClick}
      />
      <Footer />
    </div>
  );
}

export default App;