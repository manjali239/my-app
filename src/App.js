// src/App.js
import React from 'react';
import './App.css';
import SensorData from './components/SensorData';

const App = () => {
  return (
    <div className="App">
      <h1>Sensor Data App</h1>
      <SensorData />
    </div>
  );
};

export default App;
