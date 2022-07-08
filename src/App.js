import {useState} from 'react';

import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
import './App.css';

function App() {

const [tourLocation, setTourLocation] = useState ([]);

  return (
    <div className="App">
      <Header />
      <TourSearch 
      setTourLocation={setTourLocation}
      />
      <DisplayData
      tourLocation={tourLocation}
      />
      <Footer />
    </div>
  );
}

export default App;
