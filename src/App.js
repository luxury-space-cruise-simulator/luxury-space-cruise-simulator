import Header from "./components/Header";
import TourSearch from "./components/TourSearch";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TourSearch />
      <DisplayData />
      <Footer />
    </div>
  );
}

export default App;
