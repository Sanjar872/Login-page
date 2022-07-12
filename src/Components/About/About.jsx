import React from 'react'
import { useNavigate } from 'react-router'


const About = (setrender,render) => {
  let navigation = useNavigate()
  function ishla() {
    localStorage.removeItem('about')
    navigation('/')
    setrender(!render)
    
  }


  return (
    <div>Aboutsdfffffffffffffffffffffffffffffffffffffffffffffffff
      <button onClick={ishla}>Register</button>
    </div>

    
  )
}

export default About