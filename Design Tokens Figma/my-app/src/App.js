import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Foundations from './pages/foundations';
import Icons from './pages/icons';

import logo from './logo.svg';
import './App.scss';
import Header from './layout/header';
import Navigation from './layout/navigation';
import Content from './layout/content';

function App() {
  return (

    <Router>
    <div>
  <Header></Header>

   <Routes>
        <Route path="uRIMS-Library/foundations" element={<Foundations/>} />
        <Route path="uRIMS-Library/icons" element={<Icons/>} />
        </Routes>
  
    </div>
  </Router>
  );
}

export default App;
