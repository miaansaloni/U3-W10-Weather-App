import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import MyNav from "./components/MyNav";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Mostra la schermata di caricamento mentre `isLoading` è true
    return (
      <div className="loading-image">
        <img
          src="https://cdn0.iconfinder.com/data/icons/pug/512/pug_dog_sticker_emoji_emoticon_rain_umbrella-512.png"
          alt="Loading"
        />
      </div>
    );
  }

  // Una volta completato il caricamento, mostra l'app
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
