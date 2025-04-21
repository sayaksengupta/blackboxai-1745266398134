import React, { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

const painLocations = ['Head', 'Neck', 'Back', 'Arm', 'Leg', 'Other'];
const painMoods = [
  { emoji: '😞', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😢', label: 'Crying' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '🙂', label: 'Okay' },
  { emoji: '😊', label: 'Happy' },
];

function LogPain() {
  const [location, setLocation] = useState('');
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just navigate to history
    navigate('/pain-log/history');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Log Pain</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Location of the Pain</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select location</option>
            {painLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Pain Mood (Emoji)</label>
          <div className="flex space-x-2">
            {painMoods.map(({ emoji, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => setMood(label)}
                className={`text-2xl p-2 rounded ${mood === label ? 'bg-blue-200' : ''}`}
                aria-label={label}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Log Pain
        </button>
      </form>
    </div>
  );
}

function PainHistory() {
  // For demo, static pain entries
  const painEntries = [
    { id: 1, date: '2024-06-01', location: 'Back', mood: '😞', notes: 'Lower back pain' },
    { id: 2, date: '2024-06-03', location: 'Head', mood: '😠', notes: 'Headache' },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Pain History</h2>
      <ul className="space-y-2">
        {painEntries.map((entry) => (
          <li key={entry.id} className="border border-gray-300 rounded p-3">
            <div className="flex justify-between">
              <span className="font-semibold">{entry.date}</span>
              <span>{entry.mood}</span>
            </div>
            <div>Location: {entry.location}</div>
            <div>Notes: {entry.notes}</div>
            <Link
              to={`relieve/${entry.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Add Pain Relieve Info
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PainRelieve({ id }) {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, navigate back to history
    navigate('/pain-log/history');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Relieving Pain - Entry #{id}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="description">Description of Pain Relieve</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

function PainRelieveWrapper({ params }) {
  return <PainRelieve id={params.id} />;
}

function PainLogModule() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="log" className="text-blue-600 hover:underline">Log Pain</Link>
        <Link to="history" className="text-blue-600 hover:underline">Pain History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="log" replace />} />
        <Route path="log" element={<LogPain />} />
        <Route path="history" element={<PainHistory />} />
        <Route path="relieve/:id" element={<PainRelieveWrapper />} />
      </Routes>
    </div>
  );
}

export default PainLogModule;
