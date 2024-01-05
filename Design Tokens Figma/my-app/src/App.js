import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Foundations from './pages/foundations';
import Icons from './pages/icons';
import Grid from './components/grid';
import Checkbox from './components/checkbox';
import MuiComponents from './pages/muicomponents';
import Buttons from './components/buttons';
import Form from './components/form';
import Popover from './components/popover';
import Toaster from './components/toaster';
import Badges from './components/badges';
import Breadcrumbs from './components/breadcrumbs';
import logo from './logo.svg';
import './App.scss';
import Header from './layout/header';
import Navigation from './layout/navigation';
import Content from './layout/content';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import UiComponents from './pages/uicomponents';
// import { Button } from '@material-ui/core';

function App() {
  return (

    <Router>
    <div>
  <Header></Header>

   <Routes>
   <Route path="/" element={<Navigate replace to="/foundations" />} />
        <Route path="foundations"  element={<Foundations/>} />
        <Route path="components" element={<UiComponents/>} />
        <Route path="icons" element={<Icons/>} />
        {/* <Route path="uRIMS-Library/grid" element={<Grid/>} />
        <Route path="checkbox" element={<Checkbox/>} />
        <Route path="buttons" element={<Buttons/>} />
        <Route path="popover" element={<Popover/>} />
        <Route path="toaster" element={<Toaster/>} />
        <Route path="form" element={<Form/>} />
        <Route path="badges" element={<Badges/>} />
        <Route path="breadcrumbs" element={<Breadcrumbs/>} />
        <Route path="muicomponents" element={<MuiComponents/>} /> */}
        </Routes>
  
    </div>
  </Router>
  );
}

export default App;
