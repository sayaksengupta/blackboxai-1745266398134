import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CalendarModule from './modules/CalendarModule';
import PainLogModule from './modules/PainLogModule';
import MoodLogModule from './modules/MoodLogModule';
import HydrationLogModule from './modules/HydrationLogModule';
import EducationResearch from './modules/EducationResearch';
import PanicButton from './modules/PanicButton';
import WeatherNotification from './modules/WeatherNotification';
import ComparisonAnalysis from './modules/ComparisonAnalysis';
import ApplicationSettings from './modules/ApplicationSettings';
import Login from './modules/Login';
import Registration from './modules/Registration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/calendar/*" element={<CalendarModule />} />
          <Route path="/pain-log/*" element={<PainLogModule />} />
          <Route path="/mood-log/*" element={<MoodLogModule />} />
          <Route path="/hydration-log/*" element={<HydrationLogModule />} />
          <Route path="/education-research" element={<EducationResearch />} />
          <Route path="/panic-button" element={<PanicButton />} />
          <Route path="/weather-notification" element={<WeatherNotification />} />
          <Route path="/comparison-analysis" element={<ComparisonAnalysis />} />
          <Route path="/settings" element={<ApplicationSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
