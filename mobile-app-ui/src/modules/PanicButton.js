import React, { useState } from 'react';

function PanicButton() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
  ]);
  const [code, setCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleAddContact = () => {
    const name = prompt('Enter contact name');
    const phone = prompt('Enter contact phone');
    if (name && phone) {
      setContacts([...contacts, { id: Date.now(), name, phone }]);
    }
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const handleSendEmergency = () => {
    if (!code) {
      alert('Please set your 4-digit verification code in settings first.');
      return;
    }
    setShowVerification(true);
  };

  const handleVerifyCode = () => {
    if (enteredCode === code) {
      setMessageSent(true);
      setShowVerification(false);
      alert('Emergency message sent to contacts!');
    } else {
      alert('Incorrect code. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Panic Button</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Emergency Contacts</h3>
        <ul className="mb-2">
          {contacts.map((contact) => (
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
        <label className="block font-medium mb-1" htmlFor="code">Set 4-digit Verification Code</label>
        <input
          id="code"
          type="password"
          maxLength="4"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter 4-digit code"
        />
      </div>

      <button
        onClick={handleSendEmergency}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Send Emergency Message
      </button>

      {showVerification && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100">
          <h3 className="font-semibold mb-2">Enter Verification Code</h3>
          <input
            type="password"
            maxLength="4"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            placeholder="4-digit code"
          />
          <button
            onClick={handleVerifyCode}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Verify & Send
          </button>
        </div>
      )}

      {messageSent && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Emergency message has been sent to your contacts.
        </div>
      )}
    </div>
  );
}

export default PanicButton;
