import { useState } from 'react'
import Header from './components/Header/Header'
import Saidbar from './components/Saidbar/Saidbar'
import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products/Products'
import './App.css'

function App() {

  return (
   <div className="grid-container">
      <Header />
     <Saidbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="products" element={<Products />} />
     </Routes>
   
 
   </div>
  )
}

export default App
