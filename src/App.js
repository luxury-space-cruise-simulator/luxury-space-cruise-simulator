import {useState} from 'react';

import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DetailsComponent from './components/DetailsComponent';
import DisplayData from "./components/DisplayData";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';

function App() {

  const [tourDropdown, setTourDropdown] = useState('');
  const [tourLocation, setTourLocation] = useState ([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [dates, setDates] = useState([]);
  const [anyDatesAvailable, setAnyDatesAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="App">
      <Header />
      <main>
        <TourSearch 
        setTourLocation={setTourLocation}
        setDates={setDates}
        setButtonClick={setButtonClick}
        buttonClick={buttonClick}
        tourDropdown={tourDropdown}
        setTourDropdown={setTourDropdown}
        setAnyDatesAvailable={setAnyDatesAvailable}
        setIsLoading={setIsLoading}
        />
        <section>
          <div className="starBackground">
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
            {
              isLoading
                ? <LoadingSpinner />
                : null
            }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;