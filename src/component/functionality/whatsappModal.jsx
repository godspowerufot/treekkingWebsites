import React, { useState } from 'react';
import './WhatsAppModal.css';

function WhatsAppModal({ onSave }) {
  const [whatsappNumber, setWhatsAppNumber] = useState('');

  const handleSave = () => {
    onSave(whatsappNumber);
  };

  return (
    <div className="whatsapp-modal">
      <div className="modal-content">
        <h2>Enter Your WhatsApp Number</h2>
        <input
          type="text"
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
