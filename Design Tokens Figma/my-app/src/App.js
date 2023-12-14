import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      {/* <Routes>
      <Route path="foundations" element={<Foundations />} />
      <Route path="icons" element={<Icons />} />
   </Routes> */}


   <Routes>
        <Route path="/foundations" element={<Foundations/>} />
        <Route path="/icons" element={<Icons/>} />
        </Routes>
  
    </div>
  </Router>
  );
}

export default App;
