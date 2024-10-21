import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cart from './components/Cart'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <Cart></Cart>
   </>
  )
}

export default App
