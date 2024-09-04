import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Sports from "./pages/Sports";
import Live from "./pages/Live";
import LanguageContext from "./context/LanguageContext";

import "./App.css";

function App() {
  const [activeLanguage, setLanguage] = useState("EN"); // State for active language
  const changeLanguage = (activeLang) => {
    setLanguage(activeLang); // Function to update active language
  };

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        changeLanguage,
      }}
    >
      <Header /> {/* Render the header component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/movies" element={<Movies />} />{" "}
        {/* Route for Movies page */}
        <Route path="/tv-shows" element={<TvShows />} />{" "}
        {/* Route for TV Shows page */}
        <Route path="/sports" element={<Sports />} />{" "}
        {/* Route for Sports page */}
        <Route path="/live" element={<Live />} /> {/* Route for Live page */}
      </Routes>
    </LanguageContext.Provider>
  );
}

export default App;
