import React from "react"
import Navbar from "./components/Navbar"
import Work from "./components/Work"
import Stripes from "./components/Stripes/Stripes"
import Products from "./components/Products/Products"
import Marquees from "./components/Marquees/Marquees"
import Cards from "./components/Cards/Cards"

const App = () => {
  return (
    <div className='w-full bg-zinc-900 font-["satoshi"] text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App
