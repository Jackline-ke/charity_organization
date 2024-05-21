import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar/TopNavbar';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

const App = () => {
  return (
    <div className='app'>
      <TopNavbar />
      <BottomNavbar/>
    </div>
  );
};

export default App;
