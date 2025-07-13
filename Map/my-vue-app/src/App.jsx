import React, { useState } from 'react';
import MapView from './components/MapView';
import SearchBox from './Components/SearchBox';
import './App.css';

function App() {
  const [coordinates, setCoordinates] = useState([28.6139, 77.2090]); // Delhi default

  return (
    <div className="App">
      <h2>🌍 Optimized Map App</h2>
      <SearchBox setCoordinates={setCoordinates} />
      <MapView coordinates={coordinates} />
    </div>
  );
}

export default App;