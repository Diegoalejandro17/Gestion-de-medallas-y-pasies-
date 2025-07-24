import React from 'react';
import PaisList from './components/PaisList';
import MedallaList from './components/MedallaList';
import './App.css'; // o el archivo donde pegaste el CSS


function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🌍 App de Países y Medallas</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-center mb-3">Países</h4>
            <PaisList />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-center mb-3">Medallas</h4>
            <MedallaList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
