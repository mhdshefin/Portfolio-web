import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Service from './Components/Service'
import LatesWork from './Components/LatesWork'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#1c1c1c] w-full min-h-[100vh]'>
      <NavBar/>
      <Header/>
      <About/>
      <Service/>
      <LatesWork/>
      <Contact/>
    </div>
  )
}

export default App