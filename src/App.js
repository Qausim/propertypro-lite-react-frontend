import React from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
