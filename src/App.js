import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home.js';
import Cardapio from './Pages/Cardapio/Cardapio.js';
import FinalizarPedido from './Pages/FinalizarPedido/FinalizarPedido';
import Contato from './Pages/Contato/Contato';



function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Cardapio" element={<Cardapio />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/FinalizarPedido" element={<FinalizarPedido />} />
            </Routes>
        </Router>
    );
}

export default App;
