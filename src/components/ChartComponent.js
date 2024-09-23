// src/components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale, // Ajoute cette ligne pour enregistrer l'échelle "category"
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


// Enregistrement explicite des éléments utilisés par Chart.js
ChartJS.register(
  CategoryScale, // Enregistre l'échelle "category"
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.dates, // Les dates sur l'axe X
    datasets: [
      {
        label: 'Trésorerie',
        data: data.tresorerie,
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Immobilisations',
        data: data.immobilisations,
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Obligations',
        data: data.obligations,
        borderColor: 'yellow',
        fill: false,
      },
      // Ajoutez d'autres datasets si nécessaire
    ],
  };

  return <Line data={chartData} />;
};

export default ChartComponent;
