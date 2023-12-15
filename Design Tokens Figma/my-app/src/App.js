import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Foundations from './pages/foundations';
import Icons from './pages/icons';
import MuiComponents from './pages/muicomponents';
import Buttons from './pages/buttons';
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
   <Route path="/" element={<Navigate replace to="/foundations" />} />
        <Route path="foundations" element={<Foundations/>} />
        <Route path="icons" element={<Icons/>} />
        <Route path="/buttons" element={<Buttons/>} />
        <Route path="muicomponents" element={<MuiComponents/>} />
        </Routes>
  
    </div>
  </Router>
  );
}

export default App;
