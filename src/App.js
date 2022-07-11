import {useState} from 'react';

import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DetailsComponent from './components/DetailsComponent';
import DisplayData from "./components/DisplayData";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";
import './App.css';

function App() {

  const [tourDropdown, setTourDropdown] = useState('');
  const [tourLocation, setTourLocation] = useState ([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [dates, setDates] = useState([]);
  const [anyDatesAvailable, setAnyDatesAvailable] = useState(true);


  return (
    <div className="App">
      <Header />
      <TourSearch 
      setTourLocation={setTourLocation}
      setDates={setDates}
      setButtonClick={setButtonClick}
      buttonClick={buttonClick}
      tourDropdown={tourDropdown}
      setTourDropdown={setTourDropdown}
      setAnyDatesAvailable={setAnyDatesAvailable}
      />
      <DetailsComponent
      tourDropdown={tourDropdown}
      setTourDropdown={setTourDropdown}
      buttonClick={buttonClick}
      />
      
      {buttonClick 
        ?
        <CarouselComponent
        tourLocation={tourLocation}
        />
        : 
        null
      }
      <DisplayData
      tourLocation={tourLocation}
      safeDates={dates}
      buttonClick={buttonClick}
      anyDatesAvailable={anyDatesAvailable}
      tourDropdown={tourDropdown}
      setButtonClick={setButtonClick}
      />
      <Footer />
    </div>
  );
}

export default App;