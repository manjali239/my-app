// /src/components/SensorData.js
import React, { useEffect, useState } from 'react';
import { database } from '../firebase';

const SensorData = () => {
  const [temperature, setTemperature] = useState(null);
  const [current, setCurrent] = useState(null);
  const [voltage, setVoltage] = useState(null);

  useEffect(() => {
    const sensorDataRef = database.ref('sensorData'); // Adjust as per your Firebase structure

    sensorDataRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCurrent(data.current);
        setVoltage(data.voltage);
      }
    });

    return () => {
      sensorDataRef.off(); // Clean up listener
    };
  }, []);

  return (
    <div>
      <h2>Sensor Data:</h2>
      <p>Temperature: {temperature} °C</p>
      <p>Current: {current} A</p>
      <p>Voltage: {voltage} V</p>
    </div>
  );
};

export default SensorData;
