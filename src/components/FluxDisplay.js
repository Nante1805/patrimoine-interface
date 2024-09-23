// src/components/FluxDisplay.js
import React from 'react';



const FluxDisplay = ({ fluxJournalier, fluxImpossible }) => {
  return (
    <div>
      <h3>Flux Journaliers</h3>
      <ul>
        {fluxJournalier.map((flux, index) => (
          <li key={index}>{flux}</li>
        ))}
      </ul>
      <h3>Flux Impossibles</h3>
      <ul>
        {fluxImpossible.map((flux, index) => (
          <li key={index}>{flux}</li>
        ))}
      </ul>
    </div>
  );
};

export default FluxDisplay;
