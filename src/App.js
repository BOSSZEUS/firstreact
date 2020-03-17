import React from 'react'
import Navbar from './components/Navbar.js'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="something">Hello World!</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  )
}

export default App
