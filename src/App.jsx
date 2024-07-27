import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <div className="bg-slate-900 ">
        <NavBar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
    </div>
  )
}

export default App