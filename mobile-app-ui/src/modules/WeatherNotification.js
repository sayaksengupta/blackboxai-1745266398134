import React, { useState, useEffect } from 'react';

function WeatherNotification() {
  const [showPopup, setShowPopup] = useState(false);
  const [temperature, setTemperature] = useState(70);

  useEffect(() => {
    // Simulate temperature change
    const interval = setInterval(() => {
      const newTemp = temperature + (Math.random() > 0.5 ? 6 : -6);
      if (Math.abs(newTemp - temperature) >= 5) {
        setShowPopup(true);
      }
      setTemperature(newTemp);
    }, 10000);

    return () => clearInterval(interval);
  }, [temperature]);

  return (
    <>
      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded shadow-lg z-50">
          <p>Temperature changed significantly: {temperature.toFixed(1)}°F</p>
          <button
            onClick={() => setShowPopup(false)}
            className="ml-4 bg-white text-blue-600 px-2 py-1 rounded"
          >
            Dismiss
          </button>
        </div>
      )}
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Weather Notification</h2>
        <p>Temperature: {temperature.toFixed(1)}°F</p>
        <p>Notification will appear as a popup on significant temperature changes.</p>
      </div>
    </>
  );
}

export default WeatherNotification;
