import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Habilidade from './components/Habilidades.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/habilidades" element = { <Habilidade />} />
          <Route exact path="/" element = { <Home /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
