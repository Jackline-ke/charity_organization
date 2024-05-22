import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Volunteer from './pages/Volunteer/Volunteer';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='event' element={<Events/>}/>
          <Route path='volunteer' element={<Volunteer/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
