import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
