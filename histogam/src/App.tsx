import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Register from './auth/Register'
import Login from './auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default App;
