import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx' 
import categoryContext from './context/context.js'
import Home from './components/Home.jsx'


const App = () => {
  const[category,setCategory] = useState("jewelery");
  return (
    <>
    <categoryContext.Provider value = {{category,setCategory}}>
     <Navbar/>
     <Home/>
     </categoryContext.Provider>
    </>
  )
}

export default App
