import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import User from './Pages/User/User'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
