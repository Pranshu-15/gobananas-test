import React from 'react'
import Users from './Components/Users'
import './App.css';
import LandingPage from './Components/LandingPage';
import Posts from './Components/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/user" element={<Users />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </Router>
  </>
  )
}

export default App