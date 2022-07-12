import React, { useEffect,useState } from 'react'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact';
import  './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router'

import About from './Components/About/About';
const App = () => {
const navigator = useNavigate()
const [render, setrender] = useState(false)
let token =!!localStorage.getItem('login')

useEffect(()=> {
  token ? navigator('/about') : navigator('/')
}, [render])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />


        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
      

      </Routes>
    
    </div>
  )
}

export default App