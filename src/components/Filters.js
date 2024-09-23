// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [startDate, setStartDate] = useState('2024-07-01');
  const [endDate, setEndDate] = useState('2024-07-16');
  const [showTresorerie, setShowTresorerie] = useState(true);
  const [showImmobilisations, setShowImmobilisations] = useState(true);
  const [showObligations, setShowObligations] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ startDate, endDate, showTresorerie, showImmobilisations, showObligations });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date de début:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        Date de fin:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <label>
        Trésorerie
        <input
          type="checkbox"
          checked={showTresorerie}
          onChange={(e) => setShowTresorerie(e.target.checked)}
        />
      </label>
      <label>
        Immobilisations
        <input
          type="checkbox"
          checked={showImmobilisations}
          onChange={(e) => setShowImmobilisations(e.target.checked)}
        />
      </label>
      <label>
        Obligations
        <input
          type="checkbox"
          checked={showObligations}
          onChange={(e) => setShowObligations(e.target.checked)}
        />
      </label>
      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default Filters;
