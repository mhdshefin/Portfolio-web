import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Service from './Components/Service'
import LatesWork from './Components/LatesWork'
import Contact from './Components/Contact'

const App = () => {

  const [mode, setMode] = useState("dark")
  useEffect(() => {
    setMode(mode)
  }, [mode])

  return (
    <div className={`${mode === "dark" ? "bg-[#1c1c1c]" : "bg-white"} w-full min-h-[100vh] max-w-full`}>
      <NavBar mode={mode} setMode={setMode} />
      <Header mode={mode} setMode={setMode} />
      <About mode={mode} setMode={setMode} />
      <Service mode={mode} setMode={setMode} />
      <LatesWork mode={mode} setMode={setMode} />
      <Contact mode={mode} setMode={setMode} />
    </div>
  )
}

export default App