import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Logon'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Details from './pages/Details'
import Charts from './pages/Charts'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;