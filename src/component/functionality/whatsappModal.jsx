import React, { useState } from 'react';
import './WhatsAppModal.css';

function WhatsAppModal({ onSave }) {
  const [whatsappNumber, setWhatsAppNumber] = useState('');

  const handleSave = () => {
  // Use parseInt() to convert the input to an integer
  const sanitizedNumber = parseInt(whatsappNumber);

  if (!isNaN(sanitizedNumber) && sanitizedNumber > 0) {
    // Check if it's a valid positive number
    onSave(sanitizedNumber);
  } else {
    // Show an error message or prevent saving
    alert('Please enter a valid WhatsApp number.');
  }
  };

  return (
    <div className="whatsapp-modal">
      <div className="modal-content">
        <h2>Enter Your WhatsApp Number</h2>
        <input
          type="number"
          placeholder="WhatsApp Number"
          value={whatsappNumber}
          onChange={(e) => setWhatsAppNumber(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default WhatsAppModal;
