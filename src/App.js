import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Habilidade from './components/Habilidades.jsx';
import Contato from './components/Contato.jsx';
import Obrigado from './components/Obrigado.jsx';
import Projetos from './components/Projetos.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/projetos" element = { <Projetos />} />
          <Route path="/habilidades" element = { <Habilidade />} />
          <Route path="/contato" element = { <Contato />} />
          <Route path="/obrigado" element = { <Obrigado />} />
          <Route exact path="/" element = { <Home /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
