// src/App.js
import React, { useState } from 'react';
import ChartComponent from './components/ChartComponent';
import Filters from './components/Filters';
import FluxDisplay from './components/FluxDisplay';
import { useEffect } from 'react';

const App = () => {
  const [filterData, setFilterData] = useState({
    dates: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04'],
    tresorerie: [2000, 48000, 50000, 25000],
    immobilisations: [70000, 68000, 67000, 66000],
    obligations: [-20000, -21000, -22000, -23000],
  });

  useEffect(() => {
    setFilterData(prevData => ({
      ...prevData,
      dates: [...prevData.dates, '2024-07-05'],
      tresorerie: [...prevData.tresorerie, 250000],
    }));
  }, []);
    

  const handleFilterChange = (filters) => {
    // Ici, vous pouvez implémenter la logique pour filtrer les données basées sur les filtres utilisateur.
    console.log('Nouveaux filtres:', filters);
  };

  const fluxJournalier = [
    '[2024-07-10] Nante Fr=78840',
    '[2024-07-14] Nante & Nante = -8970',
  ];

  const fluxImpossible = [
    '[2024-07-14] Impossible Flux (Nanté, Nante, Nante)',
  ];

  

  return (
    <div>
      <h1>Patrimoine Visualizer</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ChartComponent data={filterData} />
      <FluxDisplay fluxJournalier={fluxJournalier} fluxImpossible={fluxImpossible} />
    </div>

    
  );
  
  
};




export default App;
