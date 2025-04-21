import React, { useState } from 'react';

function ApplicationSettings() {
  const [painReminder, setPainReminder] = useState(true);
  const [moodReminder, setMoodReminder] = useState(true);
  const [hydrationReminder, setHydrationReminder] = useState(true);
  const [hydrationGoal, setHydrationGoal] = useState(64);
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
  ]);
  const [verificationPin, setVerificationPin] = useState('');
  const [weatherNotification, setWeatherNotification] = useState(true);

  const handleAddContact = () => {
    const name = prompt('Enter contact name');
    const phone = prompt('Enter contact phone');
    if (name && phone) {
      setEmergencyContacts([...emergencyContacts, { id: Date.now(), name, phone }]);
    }
  };

  const handleDeleteContact = (id) => {
    setEmergencyContacts(emergencyContacts.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Application Settings</h2>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={painReminder}
            onChange={() => setPainReminder(!painReminder)}
            className="form-checkbox"
          />
          <span className="ml-2">Turn on Pain Log Reminder</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={moodReminder}
            onChange={() => setMoodReminder(!moodReminder)}
            className="form-checkbox"
          />
          <span className="ml-2">Turn on Mood Log Reminder</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={hydrationReminder}
            onChange={() => setHydrationReminder(!hydrationReminder)}
            className="form-checkbox"
          />
          <span className="ml-2">Turn on Hydration Log Reminder</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="hydrationGoal">Set Hydration Goal (oz)</label>
        <input
          id="hydrationGoal"
          type="number"
          min="0"
          value={hydrationGoal}
          onChange={(e) => setHydrationGoal(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Emergency Contacts</h3>
        <ul className="mb-2">
          {emergencyContacts.map((contact) => (
            <li key={contact.id} className="flex justify-between items-center border border-gray-300 rounded p-2 mb-1">
              <span>{contact.name} - {contact.phone}</span>
              <button
                onClick={() => handleDeleteContact(contact.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddContact}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add Contact
        </button>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="verificationPin">Set 4-digit Verification Pin</label>
        <input
          id="verificationPin"
          type="password"
          maxLength="4"
          value={verificationPin}
          onChange={(e) => setVerificationPin(e.target.value.replace(/[^0-9]/g, ''))}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter 4-digit pin"
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={weatherNotification}
            onChange={() => setWeatherNotification(!weatherNotification)}
            className="form-checkbox"
          />
          <span className="ml-2">Turn on Weather Notification</span>
        </label>
      </div>
    </div>
  );
}

export default ApplicationSettings;
