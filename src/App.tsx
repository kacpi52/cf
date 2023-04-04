import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import User from './Pages/User/User'
import SpecificPost from './Pages/SpecificPost/SpecificPost'
import Register from './Pages/Register/Register'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single/:id" element={<SpecificPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
