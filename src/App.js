import logo from './logo.svg';
import './App.css';
import React from 'react';
import IncomeStatement from './Components/IncomeStatement';
import Ratios from './Components/Ratios';

function App() {
  return (
    <div className="App">
      <IncomeStatement />
      <Ratios />
      
    </div>
  );
}

export default App;
