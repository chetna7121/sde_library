import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Interview from './components/Interview/Interview';
import Coding from './components/Coding/Coding';
import Algorithms from './components/Algorithms/Algorithms';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/coding" element={<Coding />} />
  <Route path="/interview" element={<Interview />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
