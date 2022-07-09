import {useState} from 'react';

import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
// import TestCount from "./components/TestCount"
import './App.css';

function App() {

const [tourLocation, setTourLocation] = useState ([]);
// const [buttonCount, setButtonCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <TourSearch 
      setTourLocation={setTourLocation}
      />
      <DisplayData
      tourLocation={tourLocation}
      />
      {/* <TestCount/> */}
      <Footer />
    </div>
  );
}

export default App;
