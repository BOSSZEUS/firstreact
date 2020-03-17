import React from 'react'
// import Navbar from './components/Navbar'
// import Form from './components/Form'
import Header from './components/Header'
import './App.css'

let name = 'John Doe'

const App = () => {
  return (
    <>
      <Header person={name} />
    </>
  )
}

export default App
