import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing.jsx';
import Land from './components/landing/Land.jsx';
import Registeration from './components/Registeration/Registeration.jsx';
import About from './components/about/About.jsx';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route for Landing Page */}
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Land/>} />
        <Route path="/register" element={<Registeration/>} />
        <Route path="/about" element={<About/>} />
        
        {/* Catch-All Route for 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
