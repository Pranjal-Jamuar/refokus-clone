import React from "react"
import Navbar from "./components/Navbar"
import Work from "./components/Work"
import Stripes from "./components/Stripes/Stripes"

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 font-["satoshi"] text-white'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App
