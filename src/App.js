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


  return (
    <div className="App">
      <Header />
      <TourSearch 
      setTourLocation={setTourLocation}
      setDates={setDates}
      setButtonClick={setButtonClick}
      tourDropdown={tourDropdown}
      setTourDropdown={setTourDropdown}
      />
      <DetailsComponent
      tourDropdown={tourDropdown}
      setTourDropdown={setTourDropdown}
      buttonClick={buttonClick}
      />
      <CarouselComponent
      tourLocation={tourLocation}
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
