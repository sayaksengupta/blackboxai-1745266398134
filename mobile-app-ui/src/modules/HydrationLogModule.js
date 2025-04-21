import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function LogHydration() {
  const [amountType, setAmountType] = useState('');
  const [manualAmount, setManualAmount] = useState('');
  const [glasses, setGlasses] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just reset form
    setAmountType('');
    setManualAmount('');
    setGlasses(0);
    alert('Hydration logged!');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Log Hydration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Amount</label>
          <select
            value={amountType}
            onChange={(e) => setAmountType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="16.9oz">16.9oz Water Bottle</option>
            <option value="8oz">8oz Glass</option>
            <option value="manual">Enter Manually</option>
          </select>
        </div>
        {amountType === 'manual' && (
          <div>
            <label className="block font-medium mb-1" htmlFor="manualAmount">Enter Amount (oz)</label>
            <input
              id="manualAmount"
              type="number"
              min="0"
              value={manualAmount}
              onChange={(e) => setManualAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}
        <div>
          <label className="block font-medium mb-1" htmlFor="glasses">Number of Glasses Taken</label>
          <input
            id="glasses"
            type="number"
            min="0"
            value={glasses}
            onChange={(e) => setGlasses(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Log Hydration
        </button>
      </form>
    </div>
  );
}

function HydrationSummary() {
  // For demo, static summary data
  const summary = [
    { time: '8:00 AM', amount: '8oz' },
    { time: '12:00 PM', amount: '16.9oz' },
    { time: '3:00 PM', amount: '8oz' },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Daily Hydration Summary</h2>
      <ul className="space-y-2">
        {summary.map((entry, idx) => (
          <li key={idx} className="border border-gray-300 rounded p-3 flex justify-between">
            <span>{entry.time}</span>
            <span>{entry.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HydrationLogModule() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="log" className="text-blue-600 hover:underline">Log Hydration</Link>
        <Link to="summary" className="text-blue-600 hover:underline">Daily Summary</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="log" replace />} />
        <Route path="log" element={<LogHydration />} />
        <Route path="summary" element={<HydrationSummary />} />
      </Routes>
    </div>
  );
}

export default HydrationLogModule;
