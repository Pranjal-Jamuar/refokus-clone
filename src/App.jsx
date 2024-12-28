// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/Navbar"
import Work from "./components/Work"

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 font-["satoshi"] text-white'>
      <Navbar />
      <Work />
    </div>
  )
}

export default App
