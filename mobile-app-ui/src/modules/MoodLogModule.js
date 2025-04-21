import React, { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

const emotions = [
  { emoji: '😞', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😢', label: 'Crying' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '🙂', label: 'Okay' },
  { emoji: '😊', label: 'Happy' },
];

function MoodTips({ mood }) {
  const tips = {
    Sad: ['Take a walk outside', 'Talk to a friend', 'Listen to uplifting music'],
    Angry: ['Try deep breathing', 'Take a break', 'Write down your feelings'],
    Crying: ['Allow yourself to feel', 'Reach out for support', 'Practice self-care'],
    Neutral: ['Keep a journal', 'Stay active', 'Maintain a routine'],
    Okay: ['Keep up the good work', 'Stay positive', 'Connect with others'],
    Happy: ['Share your joy', 'Practice gratitude', 'Help someone else'],
  };

  if (!mood || !tips[mood]) return null;

  return (
    <div className="bg-yellow-100 p-3 rounded mt-4">
      <h3 className="font-semibold mb-2">Mood Tips</h3>
      <ul className="list-disc list-inside">
        {tips[mood].map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

function LogMood() {
  const [emotion, setEmotion] = useState('');
  const [level, setLevel] = useState(3);
  const [description, setDescription] = useState('');
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTips(true);
    // For demo, after showing tips, navigate to history after delay
    setTimeout(() => {
      navigate('/mood-log/history');
    }, 3000);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Log Mood</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Choose an Emotion</label>
          <div className="flex space-x-2">
            {emotions.map(({ emoji, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => setEmotion(label)}
                className={`text-2xl p-2 rounded ${emotion === label ? 'bg-blue-200' : ''}`}
                aria-label={label}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="level">Choose a Level</label>
          <input
            id="level"
            type="range"
            min="1"
            max="5"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full"
          />
          <div className="text-center text-sm">Level: {level}</div>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Log Mood
        </button>
      </form>
      {showTips && <MoodTips mood={emotion} />}
    </div>
  );
}

function MoodHistory() {
  // For demo, static mood entries
  const moodEntries = [
    { id: 1, date: '2024-06-01', emotion: '😞', level: 2, description: 'Feeling down' },
    { id: 2, date: '2024-06-03', emotion: '😊', level: 5, description: 'Great day!' },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Mood History</h2>
      <ul className="space-y-2">
        {moodEntries.map((entry) => (
          <li key={entry.id} className="border border-gray-300 rounded p-3">
            <div className="flex justify-between">
              <span className="font-semibold">{entry.date}</span>
              <span>{entry.emotion}</span>
            </div>
            <div>Level: {entry.level}</div>
            <div>Description: {entry.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MoodLogModule() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="log" className="text-blue-600 hover:underline">Log Mood</Link>
        <Link to="history" className="text-blue-600 hover:underline">Mood History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="log" replace />} />
        <Route path="log" element={<LogMood />} />
        <Route path="history" element={<MoodHistory />} />
      </Routes>
    </div>
  );
}

export default MoodLogModule;
