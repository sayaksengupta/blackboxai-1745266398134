import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function MonthlyView() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Monthly View</h2>
      {/* Monthly calendar grid and events will be here */}
      <p>Monthly calendar view coming soon...</p>
      <Link to="create" className="text-blue-600 hover:underline">Create Event</Link>
    </div>
  );
}

function WeeklyView() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Weekly View</h2>
      {/* Weekly calendar grid and events will be here */}
      <p>Weekly calendar view coming soon...</p>
      <Link to="create" className="text-blue-600 hover:underline">Create Event</Link>
    </div>
  );
}

function DailyView() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Daily View</h2>
      {/* Daily calendar grid and events will be here */}
      <p>Daily calendar view coming soon...</p>
      <Link to="create" className="text-blue-600 hover:underline">Create Event</Link>
    </div>
  );
}

function CreateEvent() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Event</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">Event Title</label>
          <input id="title" type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="location">Event Location</label>
          <input id="location" type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="date">Select Date</label>
          <input id="date" type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="startTime">Start Time</label>
            <input id="startTime" type="time" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="endTime">End Time</label>
            <input id="endTime" type="time" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Repeat Weekly</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Repeat Monthly</span>
          </label>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="color">Event Color</label>
          <select id="color" className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="red" className="text-red-600">Red</option>
            <option value="green" className="text-green-600">Green</option>
            <option value="orange" className="text-orange-600">Orange</option>
            <option value="blue" className="text-blue-600">Blue</option>
            <option value="yellow" className="text-yellow-500">Yellow</option>
            <option value="violet" className="text-violet-600">Violet</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="reminder">Reminder</label>
          <select id="reminder" className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="2h">2 hours before</option>
            <option value="1h">1 hour before</option>
            <option value="30m">30 minutes before</option>
            <option value="15m">15 minutes before</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
          <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        </div>
      </form>
    </div>
  );
}

function CalendarModule() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="monthly" className="text-blue-600 hover:underline">Monthly</Link>
        <Link to="weekly" className="text-blue-600 hover:underline">Weekly</Link>
        <Link to="daily" className="text-blue-600 hover:underline">Daily</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="monthly" replace />} />
        <Route path="monthly" element={<MonthlyView />} />
        <Route path="weekly" element={<WeeklyView />} />
        <Route path="daily" element={<DailyView />} />
        <Route path="create" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default CalendarModule;
